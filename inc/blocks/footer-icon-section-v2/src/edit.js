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
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { Button, PanelBody, TextControl } from "@wordpress/components";

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
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const { items = [] } = attributes;
  const blockProps = useBlockProps();

  const addItem = () => {
    const newItems = [
      ...items,
      { title: "", iconclass: "", imageUrl: "" },
    ];
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
    <Fragment>
      <InspectorControls>
        <PanelBody
          title={__("Icon and Text Settings", "qrolic")}
        >
          <Button onClick={addItem}>
            {__("+ Add Item", "qrolic")}
          </Button>
        </PanelBody>
      </InspectorControls>

      <section {...blockProps}>
        <div className="foot-icon-text">
          <div className="foot-icon-text__inner">
            <div className="container">
              <div className="row">
                {items.map((item, index) => (
                  <div key={index} className="col-lg-2 col-md-2 col-sm-4 col-6">
                    <div className="foot-icon-text__inner_box">
                      <div className="foot-icon-text__inner_box--img">
                        {item.imageUrl && (
                          <>
                            <img
                              src={item.imageUrl}
                              alt={__("item Image", "qrolic")}
                              height="57"
                              width="57"
                            />
                          </>
                        )}
                        <div className="foot-icon-text__buttons">
                        <MediaUploadCheck>
                          <MediaUpload
                            onSelect={(media) =>
                              updateItem(index, "imageUrl", media.url)
                            }
                            allowedTypes={["image"]}
                            render={({ open }) => (
                              <Button onClick={open} isPrimary className="icon-doc-add">
                                {item.imageUrl
                                  ? __("", "qrolic")
                                  : __("", "qrolic")}
                                  <span className='add-items'>Add Image</span>
                              </Button>
                            )}
                          />
                        </MediaUploadCheck>
                        <Button
                          isDestructive
                          onClick={() => updateItem(index, "imageUrl", "")}
                        >
                          {__("X", "qrolic")}
                        </Button>
                        </div>
                        <span className="icon-text">
                          {__(
                            "Below you can add the icon class",
                            "qrolic"
                          )}
                        </span>
                        <TextControl
                          placeholder={__("Add icon class", "qrolic")}
                          value={item.iconclass}
                          onChange={(value) =>
                            updateItem(index, "iconclass", value)
                          }
                        />
                      </div>
                      <div className="foot-icon-text__inner_box--text">
                        <RichText
                          tagName="p"
                          placeholder={__("Title", "qrolic")}
                          value={item.title}
                          onChange={(value) =>
                            updateItem(index, "title", value)
                          }
                        />
                      </div>
                      <div className="foot-icon-text__inner_box--settings">
                        <Button isDestructive onClick={() => removeItem(index)}>
                          {__("X", "qrolic")}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
