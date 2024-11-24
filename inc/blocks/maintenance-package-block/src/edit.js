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
import { PanelBody, Button, TextControl } from "@wordpress/components";
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

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
export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const {
    title,
    heading,
    discription,
    buttonText,
    buttonURL,
    items,
    mostpopular,
    discount,
  } = attributes;

  const onChangetitle = (newtitle) => {
    setAttributes({ title: newtitle });
  };

  const onChangeheading = (newheading) => {
    setAttributes({ heading: newheading });
  };

  const onChangemostpopular = (newmostpopular) => {
    setAttributes({ mostpopular: newmostpopular });
  };

  const onChangediscription = (newdiscription) => {
    setAttributes({ discription: newdiscription });
  };
  const onChangediscount = (newdiscount) => {
    setAttributes({ discount: newdiscount });
  };

  const addItem = () => {
    const newItems = [...items, { list: "" }];
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
    <div className="col-lg-4 col-md-4 col-sm-12 col-12" {...useBlockProps()}>
      <RichText
        tagName="p"
        className="most-popular__text"
        value={mostpopular}
        onChange={onChangemostpopular}
        placeholder={__(" mostpopular...", "qrolic")}
      />

      <div className="maintenance-packages__inner_box">
        <div className="maintenance-packages__inner_box--heading">
          <RichText
            tagName="h3"
            value={heading}
            onChange={onChangeheading}
            placeholder={__("heading...", "qrolic")}
          />
        </div>
        <div className="maintenance-packages__inner_box--content">
          <div className="maintenance-packages__inner_box--content-title">
            <RichText
              tagName="h4"
              value={title}
              onChange={onChangetitle}
              placeholder={__("title...", "qrolic")}
            />
            <RichText
              tagName="span"
              value={discount}
              onChange={onChangediscount}
              placeholder={__("Discount...", "qrolic")}
            />
          </div>
          <div className="maintenance-packages__inner_box--content-discription">
            <RichText
              tagName="p"
              value={discription}
              onChange={onChangediscription}
              placeholder={__(" discription...", "qrolic")}
            />
          </div>
        </div>
        <hr></hr>
        <div className="maintenance-packages__inner_box--list">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <RichText
                  tagName="span"
                  value={item.list}
                  onChange={(value) => updateItem(index, "list", value)}
                  placeholder={__("list", "qrolic")}
                />
                <Button onClick={() => removeItem(index)}>Remove Item</Button>
              </li>
            ))}

            <Button onClick={addItem}>Add Item</Button>
          </ul>
        </div>
        <div className="maintenance-packages__inner_box--button">
          <RichText
            tagName="a"
            target="_self"
            rel="noopener noreferrer"
            className="button-general"
            placeholder={__("Button Text")}
            value={buttonText}
            onChange={(newText) => setAttributes({ buttonText: newText })}
          />
          <TextControl
            label={__("Button URL")}
            value={buttonURL}
            onChange={(newURL) => setAttributes({ buttonURL: newURL })}
          />
        </div>
      </div>
    </div>
  );
}
