/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the block content should be saved.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
const Save = ({ attributes }) => {
    const { slides } = attributes;
    const blockProps = useBlockProps.save();
    return (
        <div className='images-slider' {...useBlockProps.save()}>
            <div className='images-slider__inner'>
                <div className='container p-0'>
                    <div className='splide' id='image-slider'>
                        <div className='images-slider__inner_content splide__track'>
                            <div className='splide__list'>
                                {slides.map((slide, index) => (
                                    <div key={index} className='splide__slide col-lg-10 col-md-10 col-12'>
                                        <img src={slide.src} alt={slide.alt} />
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

export default Save;

