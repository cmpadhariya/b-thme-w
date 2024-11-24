import { __ } from "@wordpress/i18n";
import { PanelBody, Button, TextControl } from "@wordpress/components";
import { useBlockProps, RichText, InspectorControls } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import "./editor.scss";

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

      <section id="call-to-action" {...useBlockProps()}>
        <div className="call-to-action section-padding">
          <div className="container p-0">
            <div className="call-to-action__inner">
              <div className="row">
                <div className="col">
                  <div className="call-to-action__inner_heading">
                    <RichText
                      tagName="h2"
                      value={Heading}
                      onChange={onChangeHeading}
                      placeholder={__("Enter call-to-action heading text...", "qrolic")}
                    />
                  </div>
                  <div className="call-to-action__inner_text">
                    <RichText
                      tagName="p"
                      value={content}
                      className="description-primary"
                      onChange={onChangeContent}
                      placeholder={__("Enter call-to-action text...", "qrolic")}
                    />
                  </div>
                  <div className="call-to-action__inner_button">
                    <div>
                        <RichText
                          tagName="a"
                          target="_self" 
                          rel="noopener noreferrer"
                          className="button-general"
                          placeholder={__("Button Text")}
                          value={buttonText}
                          onChange={(newText) => setAttributes({ buttonText: newText })}
                        />
                    </div>
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