import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { Button, PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit( props ) {
  const { attributes, setAttributes } = props;
  const { items, subtitle, h2heading, description, icontop } = attributes;
  const blockProps = useBlockProps();

  const onChangeSubtitle = ( newContent ) => {
    setAttributes({ subtitle: newContent });
  };

  const onChangeH2Heading = ( newContent ) => {
    setAttributes({ h2heading: newContent });
  };

  const onChangeDescription = ( newContent ) => {
    setAttributes({ description: newContent });
  };

  const onChangeIcontop = ( newContent ) => {
    setAttributes({ icontop: newContent });
  };

  const addItem = () => {
    const newItems = [...items, { icon: "", heading: "", description: "" }];
    setAttributes({ items: newItems });
  };

  const removeItem = ( index ) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setAttributes({ items: newItems });
  };

  const updateItem = ( index, field, value ) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setAttributes({ items: newItems });
  };

  return (
    <section {...blockProps}>
      <div className="single-service-section-v2">
        <div className="container p-0">
          <div className="single-service-section-v2__inner">
            <div className="single-service-section-v2__inner_heading">
              <div className="single-service-section-v2__inner_heading-subheading">
                <RichText
                  placeholder={__( "Icon class", "qrolic" )}
                  value={icontop}
                  onChange={onChangeIcontop}
                />
                <RichText
                  tagName="p"
                  placeholder={__( "Sub-heading", "qrolic" )}
                  value={subtitle}
                  onChange={onChangeSubtitle}
                  className="top-subheading"
                />
              </div>
              <RichText
                tagName="h2"
                placeholder={__( "Main Heading", "qrolic" )}
                value={h2heading}
                onChange={onChangeH2Heading}
                className="main-heading"
              />
              <RichText
                tagName="p"
                placeholder={__( "Description", "qrolic" )}
                value={description}
                onChange={onChangeDescription}
                className="section-description description-primary"
              />
            </div>
            <div className="single-service-section-v2__inner_item">
              <div className="row g-5">
                {items.map((item, index) => (
                  <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <div className="single-service-section-v2__inner_item-box">
                      <div className="icon">
                        <TextControl
                          placeholder={__( "Icon class", "qrolic" )}
                          value={item.icon}
                          onChange={(value) => updateItem(index, "icon", value)}
                        />
                      </div>
                      <div className="heading">
                        <RichText
                          tagName="h3"
                          placeholder={__( "Heading", "qrolic" )}
                          value={item.heading}
                          onChange={(value) =>
                            updateItem(index, "heading", value)
                          }
                        />
                      </div>
                      <div className="content">
                        <RichText
                          tagName="p"
                          className="description"
                          placeholder={__( "Description", "qrolic" )}
                          value={item.description}
                          onChange={(value) =>
                            updateItem(index, "description", value)
                          }
                        />
                      </div>
                      <Button onClick={() => removeItem(index)} isDestructive>
                      {__("X", "qrolic")}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <InspectorControls key="styles">
              <PanelBody title={__( "Process Settings", "qrolic" )}>
                <Button onClick={addItem} className="icon-doc-add">
                  {__("Add services", "qrolic")}
                </Button>
              </PanelBody>
            </InspectorControls>
          </div>
        </div>
      </div>
    </section>
  );
}
