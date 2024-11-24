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
import { useBlockProps, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const { attributes: { careerSlides }, setAttributes } = props;
	const [slideCount, setSlideCount] = useState(1);

	const onSlideSelect = (media) => {
        if (media && media.url) {
            const altText = media.alt || `Slide ${slideCount}`;
            setSlideCount(slideCount + 1);
            setAttributes({
                careerSlides: [...careerSlides, { src: media.url, alt: altText }],
            });
        }
    };

	const onRemoveImage = (index) => {
        const updatedCareerSlides = [...careerSlides];
        updatedCareerSlides.splice(index, 1);
        setAttributes({ careerSlides: updatedCareerSlides });
    };

	return (
		<>
			<InspectorControls>
                <PanelBody title={__('Careers image slide settings', 'qrolic')}>
                    <MediaUpload
                        onSelect={onSlideSelect}
                        render={({ open }) => (
                            <Button isPrimary onClick={open}>
                                {__('+ Add Slide Image', 'qrolic')}
                            </Button>
                        )}
                    />
                </PanelBody>
            </InspectorControls>
			<section { ...useBlockProps() }>
				<div className='careers-slider'>
					<div className='container p-0'>
						<div className='careers-slider__inner'>
							<div className='careers-slider__inner--content editor-side-content'>
								{careerSlides.map((slide, index) => (
									<div key={index} className='splide__slide'>
                                        <img src={slide.src} alt={slide.alt} width="100%" height="100%" loading='lazy' />
                                        <Button isDestructive onClick={() => onRemoveImage(index)}>
                                            {__('X', 'qrolic')}
                                        </Button>
                                    </div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
