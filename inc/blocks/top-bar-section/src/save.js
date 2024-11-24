/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function Save({ attributes }) {
  const { content1, content2, buttonURL } = attributes; // Retrieve the content from the block's attributes

  return (
    <div {...useBlockProps.save()}>
      <div className="top-bar-section">
        <div className="container">
          <div className="top-bar-section__inner">
            <div className=" top-bar-section__inner_heading">
              <a href={buttonURL} target="_self" rel="noopener noreferrer">
                <p className="top-bar-section__heading">{content1}</p>
              </a>
            </div>
            <div className=" top-bar-section__inner_content">
              <a href={buttonURL} target="_self" rel="noopener noreferrer">
                <p className="top-bar-section__content">{content2}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
