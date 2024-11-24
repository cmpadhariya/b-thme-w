import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, IconButton } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

const Edit = (props) => {
    const { attributes: { slides }, setAttributes } = props;
    const blockProps = useBlockProps();
    const [slideCount, setSlideCount] = useState(1);

    const onSlideSelect = (media, index) => {
        if (media && media.url) {
            const altText = media.alt || `Slide ${index + 1}`;
            const updatedSlides = [...slides];
            updatedSlides[index] = { src: media.url, alt: altText };
            setAttributes({
                slides: updatedSlides,
            });
        }
    };

    const addSlide = (media) => {
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
        <div className='images-slider-section' { ...blockProps }>
            <InspectorControls>
                <PanelBody title={__('Add Image Slide', 'image-slider-section')}>
                    <MediaUpload
                        onSelect={addSlide}
                        render={({ open }) => (
                            <Button onClick={open}>
                                {__('+ Add Slide Image', 'image-slider-section')}
                            </Button>
                        )}
                    />
                </PanelBody>
                {slides.map((slide, index) => (
                    <PanelBody key={index} title={__('Edit Slide Image', 'image-slider-section')}>
                        <div className="image-preview">
                            <img src={slide.src} alt={slide.alt} />
                        </div>
                        <MediaUpload
                            onSelect={(media) => onSlideSelect(media, index)}
                            render={({ open }) => (
                                <Button onClick={open}>
                                    {__('Change Image', 'image-slider-section')}
                                </Button>
                            )}
                        />
                        <Button onClick={() => onRemoveImage(index)}>
                            {__('Remove Image', 'image-slider-section')}
                        </Button>
                    </PanelBody>
                ))}
            </InspectorControls>
            <div className='images-slider-section__inner'>
                <div className='container p-0'>
                    <div className='splide' id='image-slider'>
                        <div className='images-slider-section__inner_content splide__track'>
                            <div className='splide__list'>
                                {slides.map((slide, index) => (
                                    <div key={index} className='splide__slide '>
                                        <img src={slide.src} alt={slide.alt} height="405.05px"
                                      width="1140px" loading="lazy"  className='images-slider__inner_content--image' />
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
