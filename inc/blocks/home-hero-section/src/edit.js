/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, Button, TextControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
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
  const { attributes, setAttributes } = props;
  const { Heading, content, buttonText, buttonURL } = attributes;

  const onChangeHeading = (newHeading) => {
    setAttributes({ Heading: newHeading });
  };

  const onChangeContent = (newContent) => {
    setAttributes({ content: newContent });
  };

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

      <section id="home-hero" {...useBlockProps()}>
        <div className="home-hero">
          <div className="container p-0">
            <div className="home-hero__inner">
              <div className="row">
                <div className="col">
                  <div className="home-hero__inner_heading">
                    <RichText
                      tagName="h1"
                      value={Heading}
                      onChange={onChangeHeading}
                      placeholder={__(
                        "Enter home-hero heading text...",
                        "qrolic"
                      )}
                    />
                  </div>
                  <div className="home-hero__inner_text">
                    <RichText
                      tagName="p"
                      value={content}
                      onChange={onChangeContent}
                      placeholder={__("Enter home-hero text...", "qrolic")}
                    />
                  </div>
                  <div className="home-hero__inner_button">
                    <RichText
                      tagName="a"
                      className="button-text"
                      placeholder={__("Button Text")}
                      value={buttonText}
                      onChange={(newText) =>
                        setAttributes({ buttonText: newText })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
