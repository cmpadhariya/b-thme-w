import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, Button, TextControl, ToggleControl } from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import "./editor.scss";

const OurProcessSection = ({ attributes, setAttributes }) => {
  const { processes = [{}], showList, useParagraph } = attributes;
  const process = processes[0] || {};
  const blockProps = useBlockProps();

  const updateAttribute = (field, value) => {
    const newProcess = { ...process, [field]: value };
    setAttributes({ processes: [newProcess] });
  };

  const updateListItem = (listItemIndex, value) => {
    const newListItems = [...(process.listItems || [])];
    newListItems[listItemIndex] = value;
    updateAttribute("listItems", newListItems);
  };

  const removeListItem = (listItemIndex) => {
    const newListItems = [...(process.listItems || [])];
    newListItems.splice(listItemIndex, 1);
    updateAttribute("listItems", newListItems);
  };

  const addListItem = () => {
    const newListItems = [...(process.listItems || []), ""];
    updateAttribute("listItems", newListItems);
  };

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody>
          <ToggleControl
            label={__("Show List", "qrolic")}
            checked={showList}
            onChange={(value) => setAttributes({ showList: value })}
          />
          <ToggleControl
            label={__("Use Paragraph Tag", "qrolic")}
            checked={useParagraph}
            onChange={(value) => setAttributes({ useParagraph: value })}
          />
          <div className="problem-section__block-content_inner--img-settings">
            <TextControl
              label={__("Height", "qrolic")}
              value={process.height}
              onChange={(value) => updateAttribute("height", value)}
            />
            <TextControl
              label={__("Width", "qrolic")}
              value={process.width}
              onChange={(value) => updateAttribute("width", value)}
            />
          </div>
        </PanelBody>
      </InspectorControls>
      <section {...blockProps}>
        <div className="problem-section__block-content">
          <div className="problem-section__block-content_inner">
            <div className="problem-section__block-content_inner--img">
              <div className="img-wrapper">
                {process.imageUrl && (
                  <>
                    <img
                      src={process.imageUrl}
                      alt={__( "Process Image", "qrolic" )}
                      height={process.height}
                      width={process.width}
                    />
                  </>
                )}
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => updateAttribute("imageUrl", media.url)}
                    allowedTypes={["image"]}
                    render={({ open }) => (
                      <Button onClick={open} isPrimary className="icon-doc-add img-add">
                        {process.imageUrl ? __( "", "qrolic" ) : __( "", "qrolic" )}
                        <span className='add-items'>Add Items</span>
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
                <Button
                  isDestructive
                  onClick={() => updateAttribute("imageUrl", "")}
                >
                  {__("X", "qrolic")}
                </Button>
              </div>
              <span className="icon-text">
                {__("Below you can add the icon class", "qrolic")}
              </span>
              <TextControl
                placeholder={__( "Add icon class", "qrolic" )}
                value={process.iconclass}
                onChange={(value) => updateAttribute("iconclass", value)}
              />
            </div>
            <div className="problem-section__block-content_inner--list">
              <h3>
                <RichText
                  value={process.title}
                  onChange={(value) => updateAttribute("title", value)}
                  placeholder={__("Enter title...", "qrolic")}
                />
              </h3>
              {showList && (
                <>
                  <ul>
                    {(process.listItems || []).map((item, listItemIndex) => (
                      <li key={listItemIndex} className="list-flex-item">
                        <RichText
                          value={item}
                          onChange={(value) => updateListItem(listItemIndex, value)}
                          placeholder={__("Enter list item...", "qrolic")}
                        />
                        <Button
                          isDestructive
                          onClick={() => removeListItem(listItemIndex)}
                        >
                          {__( "X", "qrolic" )}
                        </Button>
                      </li>
                    ))}
                  </ul>
                  <div className="problem-section__block-content_inner--list-settings">
                    <Button isPrimary onClick={addListItem} className="icon-doc-add">
                      {__("", "qrolic")}
                      <span className='add-items'>Add Items</span>
                    </Button>
                  </div>
                </>
              )}
              {useParagraph && (
                <RichText
                  tagName="p"
                  value={process.paragraphContent}
                  onChange={(value) => updateAttribute("paragraphContent", value)}
                  placeholder={__("Enter paragraph content...", "qrolic")}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurProcessSection;