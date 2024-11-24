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
import { Button, PanelBody,TextControl,TextareaControl } from '@wordpress/components';
import './editor.scss';

export default function Edit(props) {
    const { attributes, setAttributes } = props;
    const { items, subtitle, h2heading, description,icontop,icon } = attributes;
    const blockProps = useBlockProps();

    const onChangeSubtitle = (newContent) => {
        setAttributes({ subtitle: newContent });
    };

    const onChangeH2Heading = (newContent) => {
        setAttributes({ h2heading: newContent });
    };

    const onChangeDescription = (newContent) => {
        setAttributes({ description: newContent });
    };
    const onChangeicontop = (newContent) => {
        setAttributes({ icontop: newContent });
    };
    const onChangeicon = (newContent) => {
        setAttributes({ icon: newContent });
    };

    const addItem = () => {
        const newItems = [...items, { icon: '', heading: '', description: '' ,url: '' }];
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
            <div className="our-expertise">
                <div className="container p-0">
                    <div className="our-expertise__inner">
                        <div className="our-expertise__inner_heading">
						<div className="our-expertise__inner_heading-subheading">
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
                                onChange={onChangeicontop}
                            />
							</div>
                            <TextControl
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
                        <div className="our-expertise__inner_item">
                            <div className='row'>
                            {items.map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-12 m-bottom" key={index}>
                                    <a href="#" className="anchor">
                                    <div className="our-expertise__inner_item-box">	
                                        <div className="icon">
                                            {icon && <i className={icon}></i>}
                                            <RichText
                                                tagName="h3"
                                                placeholder={__('Heading', 'qrolic')}
                                                value={item.heading}
                                                onChange={(value) => updateItem(index, 'heading', value)}
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
                                            <TextControl
                                                tagName="input"
                                                type="url"
                                                className='box-link'
                                                placeholder={__('URl', 'qrolic')}
                                                value={item.url}
                                                onChange={(value) => updateItem(index, 'url', value)}
                                            />
                                        </div>
									</div>
                                    <Button onClick={() => removeItem(index)} isDestructive>
                                        {__('X', 'qrolic')}
                                    </Button>
                                    </a>
                                </div>
                            ))}
                            </div>
                        </div>
                        <InspectorControls key="styles">
                            <PanelBody title="Process Settings">
                                <Button onClick={addItem} className='icon-doc-add'>
                                    {__('Add services', 'qrolic')}
                                </Button>
                                <TextControl
                                    tagName="div"
                                    placeholder={__('Icon class', 'qrolic')}
                                    value={icon}
                                    onChange={onChangeicon}
                                />
                            </PanelBody>
                        </InspectorControls>
                    </div>
                </div>
            </div>
        </section>
    );
}
