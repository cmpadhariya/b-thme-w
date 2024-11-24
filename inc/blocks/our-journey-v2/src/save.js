/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	const { subtitle,title,description,grayBtnText,grayBtnUrl,altText,mediaID,mediaURL,SecondAltText,mediaIDSecond, mediaURLSecond,FirstImageHeight,FirstImageWidth,SecondImageHeight,SecondImageWidth } = attributes;
	return (
		<section { ...useBlockProps.save() }>
			<div className='our-journey'>
				<div className='container p-0'>
					<div className='our-journey__inner'>
						<div className='row align-items-center'>
							<div className='col-lg-6 col-md-12 col-12'>
								<div className='our-journey__inner_content'>
									<p className='subtitle subtitle-heading'>{ subtitle }</p>
									<h2 dangerouslySetInnerHTML={ { __html: title } } />
									<p className='subtitle our-journey-description'>{ description }</p>
									<a href={ grayBtnUrl } className="our-journey-btn button-general" target="_self" rel="noreferrer noopener">
										{ grayBtnText }
									</a>
								</div>
							</div>
							<div className='col-lg-6 col-md-12 col-12'>
								<div className='our-journey__inner_image'>
									<picture>
										{ mediaURL ? <img src={ mediaURL } alt={ attributes.altText } width={ FirstImageWidth } height={ FirstImageHeight } loading='lazy' /> : '' }
									</picture>
									<picture>
										{ mediaURLSecond ? <img src={ mediaURLSecond } alt={ attributes.SecondAltText } width={ SecondImageWidth } height={ SecondImageHeight } loading='lazy' /> : '' }
									</picture>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
