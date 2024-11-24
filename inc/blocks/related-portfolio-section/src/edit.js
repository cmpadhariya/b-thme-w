import { __ } from "@wordpress/i18n";
import "./editor.scss";
import {
  useBlockProps,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import {
  PanelBody,
  PanelRow,
  SelectControl,
  ToggleControl,
  TextControl,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";
import { __experimentalGetSettings } from "@wordpress/date";

export default function Edit({ attributes, setAttributes }) {
  const {
    numberOfItems,
    Heading,
    displayThumbnail,
    displayAuthorInfo,
    showAvatar,
    avatarSize,
    showBio,
    selectedCategory,
    ButtonText,
    buttonURL,
  } = attributes;

  const onChangeHeading = (newHeading) => {
    setAttributes({ Heading: newHeading });
  };
  const onChangeButtonText = (newButtonText) => {
    setAttributes({ ButtonText: newButtonText });
  };

  const data = useSelect((select) => {
    return select("core").getEntityRecords("taxonomy", "portfolio_category");
  });

  const { authorDetails, posts, categories } = useSelect(
    (select) => {
      const _authorId = select("core/editor").getCurrentPostAttribute("author");
      const authorDetails = _authorId ? select("core").getUser(_authorId) : "";

      const perPage = numberOfItems || 10;

      const posts = select("core").getEntityRecords("postType", "portfolio", {
        author: _authorId,
        per_page: perPage,
        _embed: true,
        ...(selectedCategory && {
          portfolio_category: selectedCategory,
        }),
      });

      const categories = select("core").getEntityRecords(
        "taxonomy",
        "portfolio_category",
        {
          per_page: -1,
        }
      );

      return {
        authorDetails: authorDetails,
        posts: posts,
        categories: categories || [],
      };
    },
    [numberOfItems, selectedCategory]
  );

  const avatarSizes = [];
  if (authorDetails) {
    Object.keys(authorDetails.avatar_urls).forEach((size) => {
      avatarSizes.push({
        value: size,
        label: `${size} x ${size}`,
      });
    });
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Author Info", "author-plugin")}>
          <PanelRow>
            <ToggleControl
              label={__("Display Author Info", "author-plugin")}
              checked={displayAuthorInfo}
              onChange={() =>
                setAttributes({ displayAuthorInfo: !displayAuthorInfo })
              }
            />
          </PanelRow>
          {displayAuthorInfo && (
            <>
              <PanelRow>
                <ToggleControl
                  label={__("Show avatar")}
                  checked={showAvatar}
                  onChange={() => setAttributes({ showAvatar: !showAvatar })}
                />
                {showAvatar && (
                  <SelectControl
                    label={__("Avatar size")}
                    value={avatarSize}
                    options={avatarSizes}
                    onChange={(size) => {
                      setAttributes({
                        avatarSize: Number(size),
                      });
                    }}
                  />
                )}
              </PanelRow>
              <PanelRow>
                <ToggleControl
                  label={__("Show Bio", "author-plugin")}
                  checked={showBio}
                  onChange={() => setAttributes({ showBio: !showBio })}
                />
              </PanelRow>
            </>
          )}
        </PanelBody>
        <PanelBody title={__("Content Settings", "author-plugin")}>
          <PanelRow>
            {categories && (
              <SelectControl
                label={__("Select Category", "author-plugin")}
                value={selectedCategory}
                options={categories.map((category) => ({
                  value: category.id.toString(),
                  label: category.name,
                }))}
                onChange={(value) => setAttributes({ selectedCategory: value })}
              />
            )}
          </PanelRow>
          <PanelRow>
            <TextControl
              label={__("Number of Posts", "author-plugin")}
              value={numberOfItems}
              onChange={(value) => setAttributes({ numberOfItems: value })}
              type="number"
            />
          </PanelRow>
        </PanelBody>
        <PanelBody title={__("Button Settings", "author-plugin")}>
          <PanelRow>
            <TextControl
              label={__("Button URL", "author-plugin")}
              value={buttonURL}
              onChange={(url) => setAttributes({ buttonURL: url })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps()} className="related-portfolio section-padding">
        <div className="container p-0">
          <div className="related-portfolio__heading">
            <RichText
              tagName="h2"
              value={Heading}
              onChange={onChangeHeading}
              placeholder={__("Enter about heading text...", "qrolic")}
            />
          </div>
          <hr></hr>
          <div className="related-portfolio__inner">
            <div className={`row`}>
              {posts &&
                posts.map((post) => (
                  <div
                    key={post.id}
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                  >
                    <div className="related-portfolio__inner_box">
                      <div className="related-portfolio__inner_box--image">
                        {displayThumbnail &&
                          post._embedded &&
                          post._embedded["wp:featuredmedia"] &&
                          post._embedded["wp:featuredmedia"][0] && (
                            <img
                              className="related-portfolio__inner_image--post"
                              src={
                                post._embedded["wp:featuredmedia"][0].source_url
                              }
                              alt={
                                post._embedded["wp:featuredmedia"][0].alt_text
                              }
                            />
                          )}
                      </div>
                      <div className="related-portfolio__inner_box--post-name">
                        <h3 className="related-portfolio__inner_post-name-title">
                          <a href={post.link}>
                            {post.title.rendered ? (
                              <RawHTML>{post.title.rendered}</RawHTML>
                            ) : (
                              __("Default title", "author-plugin")
                            )}
                          </a>
                        </h3>
                      </div>
                      <div className="related-portfolio__inner_box--catagary-name-back-end">
                        {selectedCategory && (
                          <p className="selected-category description-secondary">
                            {
                              categories.find(
                                (category) =>
                                  category.id.toString() === selectedCategory
                              )?.name
                            }
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="related-portfolio__button">
            <a className="button-general">
              <RichText
                value={ButtonText}
                onChange={onChangeButtonText}
                placeholder={__("Enter about button text...", "qrolic")}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
