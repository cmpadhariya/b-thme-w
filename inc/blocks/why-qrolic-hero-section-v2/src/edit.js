import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
const { PanelBody, SelectControl, ToggleControl, TextControl, Button } = wp.components;
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { mediaType, subtitle, title, description, blackBtnText, blackBtnUrl, grayBtnText, grayBtnUrl, altText, mediaID, mediaURL, srcSet, videoControls, height, width, imagetoptext, imagetopicon, imagebuttontext, imagebuttonicon, imagebuttonurl } = attributes;

    const onChangeSubtitle = (newSubtitle) => setAttributes({ subtitle: newSubtitle });
    const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });
    const onChangeDescription = (newDescription) => setAttributes({ description: newDescription });
    const onChangeBlackBtnText = (newBlackBtnText) => setAttributes({ blackBtnText: newBlackBtnText });
    function onChangeBlackBtnUrl(newBlackBtnUrl) {
        setAttributes({ blackBtnUrl: newBlackBtnUrl });
    }
    const onChangeGrayBtnText = (newGrayBtnText) => setAttributes({ grayBtnText: newGrayBtnText });
    function onChangeGrayBtnUrl(newGrayBtnUrl) {
        setAttributes({ grayBtnUrl: newGrayBtnUrl });
    }
    const onChangeMediaType = (newMediaType) => setAttributes({ mediaType: newMediaType });

    const onChangeHeight = (newHeight) => {
        setAttributes({ height: newHeight });
    };

    const onChangeImagetoptext = (newContent) => {
        setAttributes({ imagetoptext: newContent });
    };
    const onChangeImagetopicon = (newContent) => {
        setAttributes({ imagetopicon: newContent });
    };
    const onChangeImagebuttonicon = (newContent) => {
        setAttributes({ imagebuttonicon: newContent });
    };
    const onChangeImagebottomtext = (newContent) => {
        setAttributes({ imagebuttontext: newContent });
    };
    const onChangeImagebuttonurl = (newContent) => {
        setAttributes({ imagebuttonurl: newContent });
    };

    const onChangeWidth = (newWidth) => {
        setAttributes({ width: newWidth });
    };

    const onChangeVideoControls = (control, value) => {
        setAttributes({
            videoControls: {
                ...videoControls,
                [control]: value,
            },
        });
    };

    const onSelectMedia = (media) => {
        setAttributes({
            mediaID: media.id,
            mediaURL: media.url,
            altText: media.alt,
            srcSet: media.sizes,
        });
    };

    const onRemoveMedia = () => {
        setAttributes({
            mediaID: null,
            mediaURL: null,
            altText: null,
            srcSet: {}
        });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title="Hero Section Settings">
                    <SelectControl
                        label="Media Type"
                        value={mediaType}
                        options={[
                            { label: 'Image', value: 'image' },
                            { label: 'Video', value: 'video' }
                        ]}
                        onChange={onChangeMediaType}
                    />
                    {mediaType === 'video' && (
                        <>
                            <ToggleControl
                                label="Autoplay"
                                checked={videoControls.autoplay}
                                onChange={(value) => onChangeVideoControls('autoplay', value)}
                            />
                            <ToggleControl
                                label="Loop"
                                checked={videoControls.loop}
                                onChange={(value) => onChangeVideoControls('loop', value)}
                            />
                            <ToggleControl
                                label="Muted"
                                checked={videoControls.muted}
                                onChange={(value) => onChangeVideoControls('muted', value)}
                            />
                            <ToggleControl
                                label="Show Controls"
                                checked={videoControls.controls}
                                onChange={(value) => onChangeVideoControls('controls', value)}
                            />
                        </>
                    )}
                    <TextControl label="Black Button URL" onChange={onChangeBlackBtnUrl} value={blackBtnUrl} />
                    <TextControl label="Gray Button URL" onChange={onChangeGrayBtnUrl} value={grayBtnUrl} />
                    <TextControl label="Image top text" onChange={onChangeImagetoptext} value={imagetoptext} />
                    <TextControl label="Image button Text" onChange={onChangeImagebottomtext} value={imagebuttontext} />
                    <TextControl label="Image Top Icon" onChange={onChangeImagetopicon} value={imagetopicon} />
                    <TextControl label="Image Button Icon" onChange={onChangeImagebuttonicon} value={imagebuttonicon} />
                    <TextControl label="Image button URL" onChange={onChangeImagebuttonurl} value={imagebuttonurl} />
                    <TextControl format="string" label="Add height attribute in image" onChange={onChangeHeight} value={height} />
                    <TextControl format="string" label="Add width attribute in image" onChange={onChangeWidth} value={width} />
                </PanelBody>
            </InspectorControls>
            <section {...useBlockProps()}>
                <div className='why-qrolic-hero-section'>
                    <div className='container p-0'>
                        <div className='why-qrolic-hero-section__inner'>
                            <div className='row align-items-center'>
                                <div className='col-lg-6 col-md-12 col-12'>
                                    <div className='why-qrolic-hero-section__inner--content'>
                                        <TextControl
                                            tagName='p'
                                            className='subtitle subtitle-heading'
                                            onChange={onChangeSubtitle}
                                            placeholder='Subtitle'
                                            value={subtitle}
                                        />
                                        <RichText
                                            tagName='h1'
                                            className='why-qrolic-hero-title'
                                            onChange={onChangeTitle}
                                            placeholder='Title'
                                            value={title}
                                        />
                                        <TextControl
                                            tagName='p'
                                            className='subtitle why-qrolic-hero-description'
                                            onChange={onChangeDescription}
                                            placeholder='Description'
                                            value={description}
                                        />
                                        <div className='hero-buttons'>
                                            <RichText
                                                tagName="a"
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                placeholder='Black Button'
                                                className='hero-black-button button-general'
                                                value={blackBtnText}
                                                onChange={onChangeBlackBtnText}
                                            />
                                            <RichText
                                                tagName="a"
                                                target="_self"
                                                rel="noreferrer noopener"
                                                placeholder='Gray Button'
                                                className='hero-gray-button'
                                                value={grayBtnText}
                                                onChange={onChangeGrayBtnText}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col-12'>
                                    <div className='why-qrolic-hero-section__inner--image'>
                                        <MediaUploadCheck>
                                            <MediaUpload
                                                onSelect={onSelectMedia}
                                                allowedTypes={['image', 'video']}
                                                value={mediaID}
                                                render={({ open }) => (
                                                    <Button
                                                        className={mediaID ? 'image-button' : 'button button-large'}
                                                        onClick={open}
                                                    >
                                                        {!mediaID ? __('Upload Image/Video', 'awp') : (
                                                            mediaType === 'image' ? <img src={mediaURL} alt={altText} loading="eager" height={height} width={width} /> : <video src={mediaURL} autoPlay={videoControls.autoplay ? 'autoplay' : undefined} loop={videoControls.loop ? 'loop' : undefined} muted={videoControls.muted ? 'muted' : undefined} controls={videoControls.controls ? 'controls' : undefined} loading="eager" height={height} width={width} />
                                                        )}
                                                    </Button>
                                                )}
                                            />
                                        </MediaUploadCheck>
                                        <div className='why-qrolic-hero-section__inner--image-topcontent'>
                                            <RichText.Content
                                                tagName='p'
                                                className='subtitle'
                                                value={imagetoptext}
                                            />
                                            <i className={imagetopicon}></i>
                                            </div>
                                            <div className='why-qrolic-hero-section__inner--image-buttomcontent'>
                                            <RichText.Content
                                                tagName='a'
                                                className='subtitle'
                                                value={imagebuttontext}
                                                href={imagebuttonurl}
                                            />
                                            <i className={imagebuttonicon}></i>
                                            </div>
                                        {mediaID && (
                                            <Button className='remove-media' onClick={onRemoveMedia}>
                                                {__('Remove Media', 'qrolic')}
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
