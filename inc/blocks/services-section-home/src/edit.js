// edit.js code
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, InspectorControls } from "@wordpress/block-editor";
import { TextControl, Button, PanelBody } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { items, heading,button_text,button_url } = attributes;
  const blockProps = useBlockProps();

  const addItem = () => {
    const newItems = [...items, { subheading: "", description: "", linkURL: "" }];
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

  const onChangeHeading = (newContent) => {
    setAttributes({ heading: newContent });
  };

  const onChangebtntext = ( newContent ) => {
		setAttributes( { button_text: newContent } );
	};

	function onChangebtnURL ( content ) {
		setAttributes({button_url: content});
	}

  return (
    <div className="services-home section-padding section-bg">
      <div className="container p-0">
        <div className="services-home__heading">
          <RichText
            {...blockProps}
            tagName="h2"
            onChange={onChangeHeading}
            placeholder={__("Services Heading", "custom-gutenberg-block")}
            value={heading}
          />
        </div>
        <div className="services-home__inner">
          <div className="row">
            {items.map((item, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                <div className="services-home__inner_content p-bottom">
                <Button onClick={() => removeItem(index)} isDestructive>
                    {__("x", "qrolic")}
                  </Button>
                  <div className="services-home__inner_text--subheading">
                    <RichText
                      {...blockProps}
                      tagName="h3"
                      onChange={(newContent) => updateItem(index, "subheading", newContent)}
                      placeholder={__("Sub Heading", "qrolic")}
                      value={item.subheading}
                    />
                    <div className="services-home__inner_text--arrow icon-right-1"></div>
                  </div>
                  <RichText
                    {...blockProps}
                    tagName="p"
                    className="description-primary"
                    onChange={(newContent) => updateItem(index, "description", newContent)}
                    placeholder={__("Description", "custom-gutenberg-block")}
                    value={item.description}
                  />
                   <div className="services-home__inner_text--link">
                  <TextControl
                    label={__("Add Service Link", "custom-gutenberg-block")}
                    onChange={(newURL) => updateItem(index, "linkURL", newURL)}
                    placeholder={__("Enter Service Link", "qrolic")}
                    value={item.linkURL}
                  />
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="services-home__button">
          <RichText
						className="wpt-button button-general"
						tagName="a"
						value={button_text}
						onChange={onChangebtntext}
					/>
        </div>
        <InspectorControls>
          <PanelBody title={__("Service Settings")}>
            <Button onClick={addItem}>
              {__("+ Add Item", "custom-gutenberg-block")}
            </Button>
            <TextControl format="string" label="Add Button Link" onChange={onChangebtnURL} value={button_url} />
          </PanelBody>
        </InspectorControls>
      </div>
    </div>
  );
}