import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { slides } = attributes;
    const blockProps = useBlockProps.save();
    return (
        <div className='images-slider' {...blockProps}>
            <div className='images-slider__inner'>
                <div className='container p-0'>
                    <div className='splide' id='image-slider'>
                        <div className='images-slider__inner_content splide__track'>
                            <div className='splide__list'>
                                {slides.map((slide, index) => (
                                    <div key={index} className='splide__slide images-slider__inner_content--image '>
                                        <img src={slide.src} alt={slide.alt}height="405.05px"
                                      width="1140px" loading="lazy" />
                                    </div>
                                ))}
                            </div>
                            <div className="splide__pagination images-slider__inner_content--pagination "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
