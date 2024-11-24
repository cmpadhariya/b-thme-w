import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, InspectorControls, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';
import { Fragment } from 'react';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { mainHeading, mainDescription,headingicon, iconclass, boxes } = attributes;
    const blockProps = useBlockProps();

    const addBox = () => {
        const newBoxes = [...boxes, { imageUrl: '', heading: '', description: '', linkText: '', linkUrl: '' }];
        setAttributes({ boxes: newBoxes });
    };

    const removeBox = (index) => {
        const newBoxes = [...boxes];
        newBoxes.splice(index, 1);
        setAttributes({ boxes: newBoxes });
    };

    const updateBox = (index, field, value) => {
        const newBoxes = [...boxes];
        newBoxes[index][field] = value;
        setAttributes({ boxes: newBoxes });
    };

    const removeImage = (index) => {
        updateBox(index, 'imageUrl', '');
    };

    return (
        <Fragment>
            <div {...blockProps}>
                <div className='giving-back-v2'>
                    <div className='container p-0'>
                        <div className='giving-back-v2__inner'>
                            <div className='giving-back-v2__inner_heading'>
                                <TextControl
                                    tagName="h2"
                                    placeholder={__('Main Heading', 'qrolic')}
                                    value={mainHeading}
                                    onChange={(value) => setAttributes({ mainHeading: value })}
                                    className="main-heading"
                                />
                                <RichText
                                    tagName="p"
                                    placeholder={__('Main Description', 'qrolic')}
                                    value={mainDescription}
                                    onChange={(value) => setAttributes({ mainDescription: value })}
                                    className="main-description"
                                />
                            </div>
                            <div className='row'>
                                {boxes.map((box, index) => (
                                    <div key={index} className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                        <div className="giving-back-v2__inner_box">
                                        <div className="giving-back-v2__inner_box-content">
                                        <div className="giving-back-v2__inner_box-content--img">
                                            <MediaUploadCheck>
                                                <MediaUpload
                                                    onSelect={(media) => updateBox(index, 'imageUrl', media.url)}
                                                    allowedTypes={['image']}
                                                    render={({ open }) => (
                                                        <div>
                                                            <Button onClick={open}>
                                                                {box.imageUrl ? (
                                                                    <img src={box.imageUrl} alt={__('Box Image', 'qrolic')} width="310" height="198" loading="lazy" />
                                                                ) : (
                                                                    __('Upload Image', 'qrolic')
                                                                )}
                                                            </Button>
                                                            {box.imageUrl && (
                                                                <Button
                                                                    isDestructive
                                                                    onClick={() => removeImage(index)}
                                                                >
                                                                    {__('X', 'qrolic')}
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                />
                                            </MediaUploadCheck>
                                            </div>
                                            <RichText
                                                tagName="h3"
                                                className='giving-textsize'
                                                placeholder={__('Heading', 'qrolic')}
                                                value={box.heading}
                                                onChange={(value) => updateBox(index, 'heading', value)}
                                            />
                                            <RichText
                                                tagName="p"
                                                placeholder={__('Description', 'qrolic')}
                                                value={box.description}
                                                onChange={(value) => updateBox(index, 'description', value)}
                                            />
                                            <div className="giving-back-v2__inner_box-content--link">
                                            <RichText
                                                tagName="a"
                                                placeholder={__('Link Text', 'qrolic')}
                                                value={box.linkText}
                                                onChange={(value) => updateBox(index, 'linkText', value)}
                                            />
                                            <TextControl
                                                label={__('Link URL', 'qrolic')}
                                                value={box.linkUrl}
                                                onChange={(value) => updateBox(index, 'linkUrl', value)}
                                            />
                                            </div>
                                            <Button
                                                isDestructive
                                                onClick={() => removeBox(index)}
                                            >
                                                {__('X', 'qrolic')}
                                            </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InspectorControls>
                <PanelBody title={__('Box Settings', 'qrolic')}>
                    <Button
                        isPrimary
                        onClick={addBox}
                    >
                        {__('+ Add Box', 'qrolic')}
                    </Button>
                    <TextControl
                        label={__('Heading Icon class', 'qrolic')}
                        value={headingicon}
                        onChange={(value) => setAttributes({ headingicon: value })}
                    />
                    <TextControl
                        label={__('Link Icon class', 'qrolic')}
                        value={iconclass}
                        onChange={(value) => setAttributes({ iconclass: value })}
                    />
                </PanelBody>
            </InspectorControls>
        </Fragment>
    );
}
