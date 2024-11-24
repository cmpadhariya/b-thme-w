import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { title, subtitle, description, buttonText, buttonURL, numberOfItems } =
    attributes;

  const onChangeSubtitle = (newSubtitle) => {
    setAttributes({ subtitle: newSubtitle });
  };

  const onChangeTitle = (newTitle) => {
    setAttributes({ title: newTitle });
  };

  const onChangeDescription = (newDescription) => {
    setAttributes({ description: newDescription });
  };

  const { posts } = useSelect(
    (select) => {
      const posts = select("core").getEntityRecords("postType", "teams", {
        per_page: numberOfItems,
        _embed: true,
      });

      return {
        posts: posts,
      };
    },
    [numberOfItems]
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Settings", "qrolic")}>
          <TextControl
            label={__("Button URL")}
            value={buttonURL}
            onChange={(newURL) => setAttributes({ buttonURL: newURL })}
          />
        </PanelBody>
      </InspectorControls>
      <section {...useBlockProps()} className="section-padding section-bg">
        <div className="our-team">
          <div className="our-team__heading">
            <div className="container p-0">
              <div className="our-team__heading_inner">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="our-team__heading_inner--text">
                      <div className="our-team__heading_inner--text-subheading">
                        <RichText
                          tagName="p"
                          className="description-secondary qt-subtitle-gray"
                          value={subtitle}
                          multiline="br"
                          onChange={onChangeSubtitle}
                          placeholder={__("Enter subtitle...", "qrolic")}
                        />
                      </div>
                      <div className="our-team__heading_inner--text-title">
                        <RichText
                          tagName="h2"
                          value={title}
                          multiline="br"
                          onChange={onChangeTitle}
                          placeholder={__("Enter section title...", "qrolic")}
                        />
                      </div>
                      <div className="our-team__heading_inner--text-description">
                        <RichText
                          tagName="p"
                          value={description}
                          multiline="br"
                          className="description-primary"
                          onChange={onChangeDescription}
                          placeholder={__("Enter description...", "qrolic")}
                        />
                      </div>
                      <div className="our-team__heading_inner--text-btn">
                        <RichText
                          tagName="a"
                          target="_self"
                          rel="noopener noreferrer"
                          className="btn1"
                          placeholder={__("Button Text", "qrolic")}
                          value={buttonText}
                          onChange={(newText) =>
                            setAttributes({
                              buttonText: newText,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="our-team__post">
            <div className="container p-0">
              <div className="our-team__post_inner">
                <div className="row">
                  {posts &&
                    posts
                      .filter((post) => post.meta?.team_position)
                      .sort((a, b) => {
                        const orderA = a.meta.team_order
                          ? parseInt(a.meta.team_order, 10)
                          : Number.MAX_SAFE_INTEGER;
                        const orderB = b.meta.team_order
                          ? parseInt(b.meta.team_order, 10)
                          : Number.MAX_SAFE_INTEGER;

                        return orderA - orderB;
                      })
                      .map((post) => {
                        const teamPosition = post.meta?.team_position;
                        return (
                          <div
                            key={post.id}
                            className="col-lg-3 col-md-4 col-sm-6 col-6 our-team__custom-col"
                          >
                            <div className="our-team__post_inner--content">
                              <div className="our-team__post_inner--content-img">
                                {post._embedded &&
                                  post._embedded["wp:featuredmedia"] &&
                                  post._embedded["wp:featuredmedia"][0] && (
                                    <img
                                      className="team-post-image"
                                      src={
                                        post._embedded["wp:featuredmedia"][0]
                                          .source_url
                                      }
                                      alt={
                                        post._embedded["wp:featuredmedia"][0]
                                          .alt_text
                                      }
                                      height="242"
                                      width="343" 
                                      loading="lazy"
                                    />
                                  )}
                                <div className="our-team__post_inner--content-img-text">
                                  <h3>
                                    {post.title.rendered ? (
                                      <RawHTML>{post.title.rendered}</RawHTML>
                                    ) : (
                                      __("Default title", "team-post")
                                    )}
                                  </h3>
                                  <p>{teamPosition}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
