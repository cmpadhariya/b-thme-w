/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { PanelBody, Button, TextControl } from "@wordpress/components";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { RichText } from "@wordpress/block-editor";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
  const { content1, content2, buttonURL } = attributes;

  const onChangeContent1 = (newContent1) => {
    setAttributes({ content1: newContent1 });
  };

  const onChangeContent2 = (newContent2) => {
    setAttributes({ content2: newContent2 });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Settings", "qrolic")}>
          <TextControl
            label={__("Please add URL below")}
            value={buttonURL}
            onChange={(newURL) => setAttributes({ buttonURL: newURL })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        <div className="top-bar-section">
          <div className="container">
            <div className="top-bar-section__inner">
              <div className=" top-bar-section__inner_heading">
                <a className="text-back-end">
                  <p className="top-bar-section__heading">
                    <RichText
                      value={content1}
                      onChange={onChangeContent1}
                      placeholder={__("Enter heading...", "qrolic")}
                    />
                  </p>
                </a>
              </div>
              <div className=" top-bar-section__inner_content">
                <a className="text-back-end">
                  <p className="top-bar-section__content">
                    <RichText
                      value={content2}
                      onChange={onChangeContent2}
                      placeholder={__(
                        "Enter content for paragraph 2...",
                        "qrolic"
                      )}
                    />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
