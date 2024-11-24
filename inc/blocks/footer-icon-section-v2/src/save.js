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
  const { items = [] } = attributes;
  const blockProps = useBlockProps.save();
  return (
    <section {...useBlockProps.save()}>
      <div className="foot-icon-text">
        <div className="foot-icon-text__inner">
          <div className="container">
            <div className="row">
              {items.map((item, index) => (
                <div key={index} className="col-lg-2 col-md-2 col-sm-4 col-6">
                  <div className="foot-icon-text__inner_box">
                    <div className="foot-icon-text__inner_box--img">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          height="57"
                          width="57"
                        />
                      ) : (
                        item.iconclass && (
                         
                            <i className={item.iconclass}></i>
               
                        )
                      )}
                    </div>
                    <div className="foot-icon-text__inner_box--text">
                      <RichText.Content
                        tagName="p"
                        className="foot_text__title"
                        value={item.title}
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
