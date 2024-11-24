/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

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
	const { subtitle, subTitleUrl, title, description, descriptionSecondary, blackBtnText, blackBtnUrl, grayBtnText, grayBtnUrl, mediaURL, altText, height, width, SectionStyle } = attributes;

	return (
		<section {...useBlockProps.save()}>
			<div className="position-hero">
				<div className="container p-0">
					<div className={`position-hero__inner ${SectionStyle}`}>
						<div className="row align-items-center justify-content-center">
							<div className="col-lg-6 col-md-10 col-sm-10 col-12">
								<div className="position-hero__inner--content">
									{subtitle && (
										<a href={subTitleUrl} className='subtitle-heading' target='_blank' rel="noreferrer noopener">{subtitle}</a>
									)}
									<h1 className='position-hero__title' dangerouslySetInnerHTML={{ __html: title }} />
									<p className='description-secondary'>{description}</p>
									{descriptionSecondary && (
										<p className='description-secondary applynow-secondary-text'>{descriptionSecondary}</p>
									)}
									<div className='banner-buttons'>
										<a href={blackBtnUrl} className="white-button" target="_self" rel="noreferrer noopener">
											{blackBtnText}
										</a>
										<a href={grayBtnUrl} className="black-button" target="_self" rel="noreferrer noopener">
											{grayBtnText}
										</a>
									</div>
								</div>
							</div>
							<div className='col-lg-4 col-md-10 col-sm-10 col-12'>
								<div className='position-hero__inner--image'>
									<picture>
										{mediaURL ? <img src={mediaURL} alt={attributes.altText} width={width} height={height} /> : ''}
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