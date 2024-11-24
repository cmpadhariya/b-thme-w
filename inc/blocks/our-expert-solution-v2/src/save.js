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
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( props ) {
  const { attributes } = props;
  const { items } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <section {...blockProps}>
      <div className="our-expert-solution-v2">
        <div className="container p-0">
          <div className="our-expert-solution-v2__inner">
            <div className="row row-wrapper">
              {items.map(( item, index ) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 right-width" key={index} >
                  <div className="our-expert-solution-v2__inner_box">
                    <div className="our-expert-solution-v2__inner_box-heading">
                      <div className="our-expert-solution-v2__inner_box-heading--icon">
                        {item.icon && <i className={item.icon}></i>}
                      </div>
                      <RichText.Content tagName="h3" value={item.heading} />
                    </div>
                    <div className="our-expert-solution-v2__inner_box-content">
                      <RichText.Content
                        tagName="p"
                        className="description"
                        value={item.description}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
