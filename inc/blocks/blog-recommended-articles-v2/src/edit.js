import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  PanelBody,
  PanelRow,
  TextControl,
  SelectControl,
  ToggleControl,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { dateI18n, format, __experimentalGetSettings } from "@wordpress/date";

export default function Edit({ attributes, setAttributes }) {
  const {
    numberOfItems,
    displayExcerpt,
    displayDate,
    displayThumbnail,
    showBio,
    Title,
    SectionPadding,
  } = attributes;

  const onChangeTitle = (newTitle) => {
    setAttributes({ Title: newTitle });
  };

  const onChangeNumberOfItems = (newNumberOfItems) => {
    setAttributes({ numberOfItems: parseInt(newNumberOfItems, 10) });
  };

  const onChangeDisplayExcerpt = (newValue) => {
    setAttributes({ displayExcerpt: newValue });
  };

  const onChangeDisplayDate = (newValue) => {
    setAttributes({ displayDate: newValue });
  };

  const onChangeDisplayThumbnail = (newValue) => {
    setAttributes({ displayThumbnail: newValue });
  };

  const onChangeShowBio = (newValue) => {
    setAttributes({ showBio: newValue });
  };

  const { posts } = useSelect(
    (select) => {
      const currentPostId = select("core/editor").getCurrentPostId();
      const categories =
        select("core/editor").getEditedPostAttribute("categories");

      const queryArgs = {
        categories: categories,
        per_page: numberOfItems,
        _embed: true,
      };

      const posts = select("core").getEntityRecords(
        "postType",
        "post",
        queryArgs
      );

      return {
        posts: posts,
      };
    },
    [numberOfItems]
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "qrolic")}>
          <PanelRow>
            <TextControl
              label={__(
                "Section Padding Class",
                "career-testimonials-section-v2"
              )}
              value={SectionPadding}
              onChange={(value) => setAttributes({ SectionPadding: value })}
            />
          </PanelRow>
          <SelectControl
            label={__("Number of Posts", "qrolic")}
            value={numberOfItems}
            options={[
              { label: "0", value: 0 },
              { label: "1", value: 1 },
              { label: "2", value: 2 },
              { label: "3", value: 3 },
              { label: "4", value: 4 },
              { label: "5", value: 5 },
              { label: "6", value: 6 },
              { label: "7", value: 7 },
              { label: "8", value: 8 },
              { label: "9", value: 9 },
              { label: "10", value: 10 },
            ]}
            onChange={onChangeNumberOfItems}
          />
          <ToggleControl
            label={__("Display Excerpt", "qrolic")}
            checked={displayExcerpt}
            onChange={onChangeDisplayExcerpt}
          />
          <ToggleControl
            label={__("Display Date", "qrolic")}
            checked={displayDate}
            onChange={onChangeDisplayDate}
          />
          <ToggleControl
            label={__("Display Thumbnail", "qrolic")}
            checked={displayThumbnail}
            onChange={onChangeDisplayThumbnail}
          />
          <ToggleControl
            label={__("Show Author Bio", "qrolic")}
            checked={showBio}
            onChange={onChangeShowBio}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps()}>
        <div className={`blog-recommended-articles ${SectionPadding}`}>
          <div className="blog-recommended-articles__inner">
            <div className="container p-0">
              <RichText
                tagName="h2"
                value={Title}
                onChange={onChangeTitle}
                placeholder={__("Enter title...", "qrolic")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
