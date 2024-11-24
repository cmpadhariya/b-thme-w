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
export default function save({ attributes }) {
	const { subtitle,title,description,altText,mediaID,mediaURL,boxTitleOne,boxDescriptionOne,boxTitleTwo,boxDescriptionTwo,boxIconOne,boxIconTwo,imageHeight,imageWidth } = attributes;
	return (
		<section { ...useBlockProps.save() }>
			<div className='our-partner'>
				<div className='container p-0'>
					<div className='our-partner__inner'>
						<div className='row align-items-center'>
							<div className='col-lg-6 col-md-12 col-12'>
								<div className='our-partner__inner_image'>
									<picture>
										{mediaURL ? <img src={mediaURL} alt={attributes.altText} width={imageWidth} height={imageHeight} loading='lazy' /> : '' }
									</picture>
								</div>
							</div>
							<div className='col-lg-6 col-md-12 col-12'>
								<div className='our-partner__inner_content'>
									<p className='subtitle subtitle-heading'>{subtitle}</p>
									<h2 dangerouslySetInnerHTML={{__html: title}} />
									<p className='description-secondary'>{description}</p>
									<div className='content-wrapper'>
										<div className='content-box'>
											<div className='content-box__image'>
												{boxIconOne && <i className={boxIconOne}></i>}
											</div>
											<div className='content-box__description'>
												<h3 className='description-primary'>{boxTitleOne}</h3>
												<p className='description-secondary'>{boxDescriptionOne}</p>
											</div>
										</div>
										<hr></hr>
										<div className='content-box'>
											<div className='content-box__image'>
												{boxIconTwo && <i className={boxIconTwo}></i>}
											</div>
											<div className='content-box__description'>
												<h3 className='description-primary'>{boxTitleTwo}</h3>
												<p className='description-secondary'>{boxDescriptionTwo}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
