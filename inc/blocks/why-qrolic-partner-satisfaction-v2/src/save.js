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
 * editor into post_content.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

export default function save({ attributes }) {
  const { items, subtitle, h2heading, icontop } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <section {...blockProps}>
      <div className="why-qrolic-partner-satisfaction">
        <div className="container p-0">
          <div className="why-qrolic-partner-satisfaction__inner">
            <div className="why-qrolic-partner-satisfaction__inner_heading">
              <div className="why-qrolic-partner-satisfaction__inner_heading-subheading">
                {icontop && <i className={icontop}></i>}
                <RichText.Content
                  tagName="p"
                  className="subtitle qrolic-partner-satisfaction-subheading"
                  value={subtitle}
                />
              </div>
              <RichText.Content
                tagName="h2"
                className="qrolic-partner-satisfaction-title"
                value={h2heading}
              />
            </div>
            <div className="why-qrolic-partner-satisfaction__inner_item">
              <div className="row">
                {items.map((item, index) => (
                  <div className="col-lg-6 col-md-6 col-12" key={index}>
                    <div className="why-qrolic-partner-satisfaction__inner_item-box">
                      <div className="icon">
                        {item.icon && <i className={item.icon}></i>}
                      </div>
                      <div className="box-heading">
                        <RichText.Content tagName="h3" value={item.heading} />
                        <p className="description subtitle" dangerouslySetInnerHTML={{ __html: item.description }} />
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
