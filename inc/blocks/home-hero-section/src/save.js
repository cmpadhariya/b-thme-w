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
export default function Save(props) {
  const { Heading, content, buttonText, buttonURL } = props.attributes;

  return (
    <section id="home-hero" {...useBlockProps.save()}>
      <div className="home-hero">
        <div className="container p-0">
          <div className="home-hero__inner">
            <div className="row">
              <div className="col">
                <div className="home-hero__inner_heading">
                  <RichText.Content tagName="h1" value={Heading} />
                </div>
                <div className="home-hero__inner_text">
                  <RichText.Content tagName="p" value={content} />
                </div>
                <div className="home-hero__inner_button">
                  <RichText.Content
                    tagName="a"
                    href={buttonURL}
                    className="button-text"
                    value={buttonText}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
