import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
const { PanelBody, SelectControl, ToggleControl, TextControl, Button } = wp.components;
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { mediaType, subtitle, title, description, blackBtnText, blackBtnUrl, grayBtnText, grayBtnUrl, altText, mediaID, mediaURL, srcSet, videoControls, height, width } = attributes;

    const onChangeSubtitle = (newSubtitle) => setAttributes({ subtitle: newSubtitle });
    const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });
    const onChangeDescription = (newDescription) => setAttributes({ description: newDescription });
    const onChangeBlackBtnText = (newBlackBtnText) => setAttributes({ blackBtnText: newBlackBtnText });
    function onChangeBlackBtnUrl (newBlackBtnUrl) {
        setAttributes({ blackBtnUrl: newBlackBtnUrl });
    }
    const onChangeGrayBtnText = (newGrayBtnText) => setAttributes({ grayBtnText: newGrayBtnText });
    function onChangeGrayBtnUrl (newGrayBtnUrl) {
        setAttributes({ grayBtnUrl: newGrayBtnUrl });
    }
    const onChangeMediaType = (newMediaType) => setAttributes({ mediaType: newMediaType });

	const onChangeHeight = ( newHeight ) => {
		setAttributes({ height: newHeight });
	};

	const onChangeWidth = ( newWidth ) => {
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
					<TextControl format="string" label="Add height attribute in image" onChange={onChangeHeight} value={height} />
				<TextControl format="string" label="Add width attribute in image" onChange={onChangeWidth} value={width} />
                </PanelBody>
            </InspectorControls>
            <section {...useBlockProps()}>
                <div className='hero-section'>
                    <div className='container p-0'>
                        <div className='hero-section__inner'>
                            <div className='row align-items-center'>
                                <div className='col-lg-7 col-md-12 col-12'>
                                    <div className='hero-section__inner--content'>
                                        <RichText
                                            tagName='p'
                                            className='subtitle subtitle-heading'
                                            onChange={onChangeSubtitle}
                                            placeholder='Subtitle'
                                            value={subtitle}
                                        />
                                        <RichText
                                            tagName='h1'
                                            className='main-title'
                                            onChange={onChangeTitle}
                                            placeholder='Title'
                                            value={title}
                                        />
                                        <RichText
                                            tagName='p'
                                            className='subtitle main-description'
                                            onChange={onChangeDescription}
                                            placeholder='Description'
                                            value={description}
                                        />
                                        <div className='hero-buttons'>
                                            <RichText
                                                tagName="a"
                                                target="_self"
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
                                                className='hero-gray-button button-general'
                                                value={grayBtnText}
                                                onChange={onChangeGrayBtnText}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-5 col-md-12 col-12'>
                                    <div className='hero-section__inner--image'>
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
                                        {mediaID && (
                                            <Button className='remove-media' onClick={onRemoveMedia}>
                                                {__('Remove Media', 'awp')}
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
