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

export default function save({ attributes }) {
  const { items, subtitle, h2heading, description, icontop } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <section {...blockProps}>
      <div className="single-service-section-v2">
        <div className="container p-0">
          <div className="single-service-section-v2__inner">
            <div className="single-service-section-v2__inner_heading">
              <div className="single-service-section-v2__inner_heading-subheading">
                {icontop && <i className={icontop}></i>}
                <RichText.Content
                  tagName="p"
                  className="top-subheading"
                  value={subtitle}
                />
              </div>
              <RichText.Content
                tagName="h2"
                className="main-heading"
                value={h2heading}
              />
              <RichText.Content
                tagName="p"
                className="description-primary"
                value={description}
              />
            </div>
            <div className="single-service-section-v2__inner_item">
              <div className="row m-left">
                {items.map((item, index) => (
                  <div className="col-lg-4 col-md-6 col-12 content-width" key={index} >
                    <div className="single-service-section-v2__inner_item-box">
                      <div className="icon">
                        {item.icon && <i className={item.icon}></i>}
                      </div>
                      <div className="heading">
                        <RichText.Content
                          tagName="h3"
                          className="description-primary"
                          value={item.heading}
                        />
                      </div>
                      <div className="content">
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
      </div>
    </section>
  );
}
