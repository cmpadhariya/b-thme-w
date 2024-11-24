import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, InspectorControls, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';
import { Fragment } from 'react';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { mainHeading, mainDescription, boxes } = attributes;
    const blockProps = useBlockProps();

    const addBox = () => {
        const newBoxes = [...boxes, { imageUrl: '', heading: '', description: '' }];
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
                <div className='careers-advantage'>
                    <div className='container p-0'>
                        <div className='careers-advantage__inner'>
                            <div className='careers-advantage__inner_heading'>
                                <RichText
                                    tagName="h2"
                                    placeholder={__('Heading', 'qrolic')}
                                    value={mainHeading}
                                    onChange={(value) => setAttributes({ mainHeading: value })}
                                />
                                <RichText
                                    tagName="p"
                                    className='description-primary'
                                    placeholder={__('carrier Description', 'qrolic')}
                                    value={mainDescription}
                                    onChange={(value) => setAttributes({ mainDescription: value })}
                                />
                            </div>
                            <div className='row'>
                                {boxes.map((box, index) => (
                                    <div key={index} className='col-lg-3 col-md-4 col-sm-6 col-12'>
                                        <div className="careers-advantage__inner_box">
                                            <div className="careers-advantage__inner_box-content">
                                                <div className="careers-advantage__inner_box-content--img">
                                                    <MediaUploadCheck>
                                                        <MediaUpload
                                                            onSelect={(media) => updateBox(index, 'imageUrl', media.url)}
                                                            allowedTypes={['image']}
                                                            render={({ open }) => (
                                                                <div>
                                                                    <Button onClick={open}>
                                                                        {box.imageUrl ? (
                                                                            <img src={box.imageUrl} alt={__('Box Image', 'qrolic')} width="233" height="200" loading="lazy" />
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
                                                    className='careers-advantage-textsize'
                                                    placeholder={__('Heading', 'qrolic')}
                                                    value={box.heading}
                                                    onChange={(value) => updateBox(index, 'heading', value)}
                                                />
                                                <RichText
                                                    tagName="p"
                                                    className="description-secondary"
                                                    placeholder={__('Description', 'qrolic')}
                                                    value={box.description}
                                                    onChange={(value) => updateBox(index, 'description', value)}
                                                />
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
                        {__('+ Add Advantage', 'qrolic')}
                    </Button>
                </PanelBody>
            </InspectorControls>
        </Fragment>
    );
}
