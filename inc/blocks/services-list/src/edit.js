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
const { TextControl, PanelBody,ToggleControl  } = wp.components;

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
  const {
    attributes: { hasLink,subheading, subheadinglink, discription },
    setAttributes,
  } = props;
  const blockProps = useBlockProps();
  const onChangesubheading = (newContent) => {
    setAttributes({ subheading: newContent });
  };

  const onChangesubheadinglink = (newContent) => {
    setAttributes({ subheadinglink: newContent });
  };
  const onChangediscription = (newContent) => {
    setAttributes({ discription: newContent });
  };
  return (
    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
      <div class="services-list__inner_text">
        <h3 class="services-list__inner_text--subheading">
          <InspectorControls>
            <PanelBody title={__("Services Headings Info")}>
              <TextControl
                label="Add Service Link"
                onChange={onChangesubheadinglink}
                value={subheadinglink}
              />
            </PanelBody>
            <PanelBody title={__('Link Settings')}>
                <ToggleControl
                    label={__('Has Link')}
                    checked={hasLink}
                    onChange={() => setAttributes({ hasLink: !hasLink })}
                />
            </PanelBody>
          </InspectorControls>
          {hasLink ? (
          <a href="#">
            <RichText
              {...blockProps}
              onChange={onChangesubheading}
              placeholder="Description Text"
              value={subheading}
            />
            <div class="services-list__inner_text--arrow icon-right-1"></div>
          </a>
          ) : (
            <RichText
              {...blockProps}
              onChange={onChangesubheading}
              placeholder="Description Text"
              value={subheading}
            />
          )}
        </h3>
        <div class="services-list__inner_text--discription">
          <RichText
            {...blockProps}
            tagName="p"
            className="description-primary"
            onChange={onChangediscription}
            placeholder="Discription"
            value={discription}
          />
        </div>
      </div>
    </div>
  );
}
