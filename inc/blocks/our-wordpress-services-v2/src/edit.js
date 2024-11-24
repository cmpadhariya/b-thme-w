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
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, TextareaControl,TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( props ) {
    const { attributes, setAttributes } = props;
    const { items, subtitle, h2heading, description, icontop } = attributes;
    const blockProps = useBlockProps();

    const onChangeSubtitle = ( newContent ) => {
        setAttributes({ subtitle: newContent });
    };

    const onChangeH2Heading = ( newContent ) => {
        setAttributes({ h2heading: newContent });
    };

    const onChangeDescription = ( newContent ) => {
        setAttributes({ description: newContent });
    };

    const onChangeIconTop = ( newContent ) => {
        setAttributes({ icontop: newContent });
    };

    const addItem = () => {
        const newItems = [...items, { topicon: '', heading: '',url:'', description: '', pricing: '' }];
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
        <section {...blockProps}>
            <InspectorControls key="styles">
                <PanelBody title={__('Process Settings', 'qrolic')}>
                    <Button isPrimary onClick={addItem}>
                        {__('+ Add services', 'qrolic')}
                    </Button>
                </PanelBody>
            </InspectorControls>
            <div className="our-wordpress-services">
                <div className="container p-0">
                    <div className="our-wordpress-services__inner">
                        <div className="our-wordpress-services__inner_heading">
                            <div className="our-wordpress-services__inner_heading-subheading">
                                <RichText
                                    tagName="p"
                                    placeholder={__('Sub-heading', 'qrolic')}
                                    value={subtitle}
                                    onChange={onChangeSubtitle}
                                    className="top-subheading"
                                />
                                <RichText
                                    tagName="span"
                                    placeholder={__('Icon class', 'qrolic')}
                                    value={icontop}
                                    onChange={onChangeIconTop}
                                />
                            </div>
                            <RichText
                                tagName="h2"
                                placeholder={__('Main Heading', 'qrolic')}
                                value={h2heading}
                                onChange={onChangeH2Heading}
                                className="main-heading"
                            />
                            <RichText
                                tagName="p"
                                placeholder={__('Description', 'qrolic')}
                                value={description}
                                onChange={onChangeDescription}
                                className="section-description description-primary"
                            />
                        </div>
                        <div className="our-wordpress-services__inner_item row">
                            {items.map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-12" key={index}>
                                    <div className="our-wordpress-services__inner_item-box">
                                        <a>
                                        <div className="icon">
                                            <TextControl
                                                className="first-boxicon"
                                                placeholder={__('Icon class', 'qrolic')}
                                                value={item.topicon}
                                                onChange={(value) => updateItem(index, 'topicon', value)}
                                            />
                                            <RichText
                                                tagName="h3"
                                                placeholder={__('Heading', 'qrolic')}
                                                value={item.heading}
                                                onChange={(value) => updateItem(index, 'heading', value)}
                                            />
                                            <TextControl
                                                tagName="input"
                                                type="url"
                                                placeholder={__('URl', 'qrolic')}
                                                value={item.url}
                                                onChange={(value) => updateItem(index, 'url', value)}
										    />
                                        </div>
                                        <div className="content">
                                            <RichText
                                                tagName="p"
                                                className="description-secondary"
                                                placeholder={__('Description', 'qrolic')}
                                                value={item.description}
                                                onChange={(value) => updateItem(index, 'description', value)}
                                            />
                                            <RichText
                                                tagName="p"
                                                className="price"
                                                placeholder={__('Pricing', 'qrolic')}
                                                value={item.pricing}
                                                onChange={(value) => updateItem(index, 'pricing', value)}
                                            />
                                        </div>
                                        </a>
                                    </div>
                                    
                                    <Button isSecondary onClick={() => removeItem(index)}>
                                        {__('X', 'qrolic')}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
