/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { items, subtitle, h2heading, description } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <section {...blockProps}>
            <div className="careers-benefits">
                <div className="container p-0">
                    <div className="careers-benefits__inner">
                        <div className="careers-benefits__inner_heading">
                            <div className="careers-benefits__inner_heading-subheading">
                                <RichText.Content
                                    tagName="p"
                                    value={subtitle}
                                    className="benefits-subheading"
                                />
                            </div>
                            <RichText.Content
                                tagName="h2"
                                value={h2heading}
                                className="benefits-heading"
                            />
                            <RichText.Content
                                tagName="p"
                                value={description}
                                className="section-description description-primary"
                            />
                        </div>
                        <div className="careers-benefits__inner_item row">
                            {items.map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                                    <div className={`careers-benefits__inner_item-box ${index === 0 ? 'first-item' : ''}`}>
                                        <div className="icon">
                                            {item.imageUrl ? (
                                                <img src={item.imageUrl} alt={__('benefits Icon', 'qrolic')} className="service-image" width="32" height="32"  />
                                            ) : (
                                                <RichText.Content
                                                tagName="i"
                                                value={item.topicon}
                                                className={`first-boxicon ${item.topicon}`}
                                            />
                                            )}
                                            <RichText.Content
                                                tagName="h3"
                                                value={item.heading}
                                                className='description-secondary'
                                            />
                                        </div>
                                        <div className="content">
                                            <RichText.Content
                                                tagName="p"
                                                value={item.description}
                                                className="description-secondary"
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
