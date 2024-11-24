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
 * @return { Element } Element to render.
 */
export default function save( { attributes } ) {
	const { blackBtnTarget, grayBtnTarget, breadcrumbs,hideBreadcrumbs,subtitle,hideSubtitle,title,description,hideDescription,blackBtnText,hideBlackBtn,blackBtnUrl,grayBtnText,hideGrayBtn,grayBtnUrl,altText,mediaID,mediaURL,height,width } = attributes;

	return (
		<section { ...useBlockProps.save() }>
			<div className='page-banner'>
				<div className='container p-0'>
					<div className='page-banner__inner'>
						<div className='row align-items-center'>
							<div className='col-lg-6 col-md-12 col-12'>
								<div className='page-banner__inner--content'>
									{!hideSubtitle && (
										<p className='subtitle subtitle-heading'>{ subtitle }</p>
									)}
									{!hideBreadcrumbs && (
										<div className='career-breadcrumbs'>{ breadcrumbs }</div>
									)}
									<h1 className='page-banner__inner--content-mainTitle' dangerouslySetInnerHTML={{__html: title}} />
									{!hideDescription && (
										<RichText.Content
												tagName="p"
												value={ description }
												className='description-secondary'
											/>
									)}
									<div className='banner-buttons'>
										{!hideBlackBtn && (
											<a href={ blackBtnUrl } className="hero-black-button button-general" target={ blackBtnTarget } rel="noreferrer noopener">
												{ blackBtnText }
											</a>
										)}
										{!hideGrayBtn && (
											<a href={ grayBtnUrl } className="hero-gray-button button-general" target={ grayBtnTarget } rel="noreferrer noopener">
												{ grayBtnText }
											</a>
										)}
									</div>
								</div>
							</div>
							<div className='col-lg-6 col-md-12 col-12'>
								<div className='page-banner__inner--image'>
									<picture>
										{ mediaURL ? <img src={ mediaURL } loading="eager" alt={ attributes.altText } width={ width } height={ height } /> : '' }
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
