/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
  const {
    attributes: { hasLink },
    setAttributes,
  } = props;
  const blockProps = useBlockProps.save();
  return (
    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
      <div class="services-list__inner_text">
        <h3 class="services-list__inner_text--subheading">
          {hasLink ? (
          <a href={props.attributes.subheadinglink}>
            <RichText.Content
              {...blockProps}
              value={props.attributes.subheading}
            />
             <div class="services-list__inner_text--arrow icon-right-1"></div>
          </a>
          ) : (
            <RichText.Content
              {...blockProps}
              value={props.attributes.subheading}
            />
          )}
        </h3>
        <div class="services-list__inner_text--discription">
          <RichText.Content
            {...blockProps}
            tagName="p"
            className="description-primary"
            value={props.attributes.discription}
          />
        </div>
      </div>
    </div>
  );
}
