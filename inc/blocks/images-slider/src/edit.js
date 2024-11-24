import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

const Edit = (props) => {
    const { attributes: { slides }, setAttributes } = props;
    const blockProps = useBlockProps();
    const [slideCount, setSlideCount] = useState(1);

    const onSlideSelect = (media) => {
        if (media && media.url) {
            const altText = media.alt || `Slide ${slideCount}`;
            setSlideCount(slideCount + 1);
            setAttributes({
                slides: [...slides, { src: media.url, alt: altText }],
            });
        }
    };

    const onRemoveImage = (index) => {
        const updatedSlides = [...slides];
        updatedSlides.splice(index, 1);
        setAttributes({ slides: updatedSlides });
    };

    return (
        <div className='images-slider' { ...useBlockProps() }>
            <InspectorControls>
                <PanelBody title={__('Add Image Slide', 'image-slider-block')}>
                    <MediaUpload
                        onSelect={onSlideSelect}
                        render={({ open }) => (
                            <Button onClick={open}>
                                {__('+ Add Slide Image', 'image-slider-block')}
                            </Button>
                        )}
                    />
                </PanelBody>
            </InspectorControls>
            <div className='images-slider__inner'>
                <div className='container p-0'>
                    <div className='splide' id='image-slider'>
                        <div className='images-slider__inner_content splide__track'>
                            <div className='splide__list'>
                                {slides.map((slide, index) => (
                                    <div key={index} className='splide__slide col-lg-10 col-md-10 col-12'>
                                        <img src={slide.src} alt={slide.alt} />
                                        <Button onClick={() => onRemoveImage(index)}>
                                            {__('Remove Image', 'image-slider-block')}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
