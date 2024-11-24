import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { mediaType, subtitle, title, description, blackBtnText, blackBtnUrl, grayBtnText, grayBtnUrl, altText, mediaURL, videoControls, height,width } = attributes;

    return (
        <section {...useBlockProps.save()}>
            <div className='hero-section'>
                <div className='container p-0'>
                    <div className='hero-section__inner'>
                        <div className='row align-items-center'>
                            <div className='col-lg-7 col-md-12 col-12'>
                                <div className='hero-section__inner--content'>
                                    <RichText.Content
                                        tagName='p'
                                        className='subtitle subtitle-heading'
                                        value={subtitle}
                                    />
                                    <RichText.Content
                                        tagName='h1'
                                        className='main-title'
                                        value={title}
                                    />
                                    <RichText.Content
                                        tagName='p'
                                        className='subtitle main-description'
                                        value={description}
                                    />
                                    <div className='hero-buttons'>
                                        <RichText.Content
                                            tagName="a"
                                            href={blackBtnUrl}
                                            target="_self"
                                            rel="noreferrer noopener"
                                            className='hero-black-button button-general'
                                            value={blackBtnText}
                                        />
                                        <RichText.Content
                                            tagName="a"
                                            href={grayBtnUrl}
                                            target="_self"
                                            rel="noreferrer noopener"
                                            className='hero-gray-button button-general'
                                            value={grayBtnText}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-12 col-12'>
                                <div className='hero-section__inner--image'>
                                    {mediaType === 'image' && <img src={mediaURL} alt={altText} height={height} width={width} />}
                                    {mediaType === 'video' && (
                                        <video
                                            src={mediaURL}
                                            autoPlay={videoControls.autoplay}
                                            loop={videoControls.loop}
                                            muted={videoControls.autoplay ? true : videoControls.muted}
                                            controls={videoControls.controls}
											height={height} width={width}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
