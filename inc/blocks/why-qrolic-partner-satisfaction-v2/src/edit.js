import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  Button,
  PanelBody,
  TextareaControl,
  TextControl,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit( props ) {
  const { attributes, setAttributes } = props;
  const { items, subtitle, h2heading, icontop } = attributes;
  const blockProps = useBlockProps();

  const onChangeSubtitle = ( newContent ) => {
    setAttributes({ subtitle: newContent });
  };

  const onChangeH2Heading = ( newContent ) => {
    setAttributes({ h2heading: newContent });
  };

  const onChangeIcontop = ( newContent ) => {
    setAttributes({ icontop: newContent });
  };

  const addItem = () => {
    const newItems = [...items, { icon: "", heading: "", description: "" }];
    setAttributes({ items: newItems });
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setAttributes({ items: newItems });
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setAttributes({ items: newItems });
  };

  return (
    <section {...blockProps}>
      <div className="why-qrolic-partner-satisfaction">
        <div className="container p-0">
          <div className="why-qrolic-partner-satisfaction__inner">
            <div className="why-qrolic-partner-satisfaction__inner_heading">
              <div className="why-qrolic-partner-satisfaction__inner_heading-subheading"> 
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
                  className="subtitle qrolic-partner-satisfaction-subheading"
                />
              </div>
              <RichText
                tagName="h2"
                placeholder={__( "Main Heading", "qrolic" )}
                value={h2heading}
                onChange={onChangeH2Heading}
                className="qrolic-partner-satisfaction-title"
              />
            </div>
            <div className="why-qrolic-partner-satisfaction__inner_item">
              <div className="row">
                {items.map(( item, index ) => (
                  <div className="col-lg-6 col-md-6 col-12" key={index}>
                    <div className="why-qrolic-partner-satisfaction__inner_item-box">
                      <Button onClick={() => removeItem(index)} isDestructive>
                        {__( "X", "qrolic" )}
                      </Button>
                      <div className="icon">
                        <RichText
                          placeholder={__( "Icon class", "qrolic" )}
                          value={item.icon}
                          onChange={(value) => updateItem(index, "icon", value)}
                        />
                      </div>

                      <div className="box-heading">
                        <RichText
                          tagName="h3"
                          placeholder={__( "Heading", "qrolic" )}
                          value={item.heading}
                          onChange={(value) =>
                            updateItem(index, "heading", value)
                          }
                        />
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <InspectorControls key="settings">
              <PanelBody title={__( "Manage Items", "qrolic" )}>
                <Button onClick={addItem} className="add-item-button" isPrimary>
                  {__( "Add New Item", "qrolic" )}
                </Button>
              </PanelBody>
            </InspectorControls>
          </div>
        </div>
      </div>
    </section>
  );
}
