/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls, RichText } from "@wordpress/block-editor";
import { SelectControl, PanelBody, PanelRow, RadioControl,ToggleControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
  const {
    attributes: { selectedPost, Linktext, textAlign,showCustomExcerpt,customExcerpt }, // Added textAlign attribute
    setAttributes,
  } = props;

  const onChangeLinktext = (newLinktext) => {
    setAttributes({ Linktext: newLinktext });
  };

  const post = useSelect((select) => {
    const query = select("core").getEntityRecords("postType", "case-studies");

    return query
      ? query.map((casestudy) => ({
          value: casestudy.id.toString(),
          label: casestudy.title.rendered,
        }))
      : [];
  });

  const CasestudyPost = useSelect(
    (select) => {
      return selectedPost
        ? select("core").getEntityRecord(
            "postType",
            "case-studies",
            selectedPost
          )
        : null;
    },
    [selectedPost]
  );

  const postPermalink = CasestudyPost?.link || "";

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Case Study Post Settings", "qrolic")}>
          <PanelRow>
            <SelectControl
              label={__("Select Post", "qrolic")}
              value={selectedPost}
              options={[
                { value: "", label: __("Select post", "qrolic") },
                ...post,
              ]}
              onChange={(value) => setAttributes({ selectedPost: value })}
            />
          </PanelRow>
          <PanelRow>
            <RadioControl
              label={__("Text Alignment", "qrolic")}
              selected={textAlign}
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
              ]}
              onChange={(value) => setAttributes({ textAlign: value })}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__('Show Custom Excerpt', 'qrolic')}
              checked={showCustomExcerpt}
              onChange={() => setAttributes({ showCustomExcerpt: !showCustomExcerpt })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      {CasestudyPost && (
        <div className={`casestudy-single__inner_block ${textAlign === "center" ? "text-center" : ""}`}>
          <h3>
            <a href={postPermalink}>{CasestudyPost.title.rendered}</a>
          </h3>
          {showCustomExcerpt ? (
                <RichText
                    tagName="p"
                    placeholder={__('Enter custom excerpt...', 'qrolic')}
                    value={customExcerpt}
                    onChange={(value) => setAttributes({ customExcerpt: value })}
                />
            ) : (
                // Render your default post excerpt here
                <RawHTML>{CasestudyPost.excerpt.rendered}</RawHTML>
          )}
          <a href={postPermalink}>
            <RichText
              value={Linktext}
              onChange={onChangeLinktext}
              placeholder={__("Enter link text...", "qrolic")}
            />
          </a>
        </div>
      )}
    </>
  );
}
