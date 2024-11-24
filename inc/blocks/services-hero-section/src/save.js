/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( props ) {
	const { attributes, setAttributes } = props;
	const { heading, description, buttonText, buttonURL,altText,mediaURL } = attributes;
	return (
		<section { ...useBlockProps.save() }>
			<div className='services-hero'>
				<div className='container p-0'>
					<div className='services-hero'>
						<div className='row justify-content-between'>
							<div className='col-lg-8 col-md-7 col-12'>
								<div className='services-hero__text'>
									<RichText.Content tagName="h1" className='title' value={heading} />
									<RichText.Content tagName="p" value={description} />
									<RichText.Content
										tagName="a"
										href={buttonURL}
										className="button-text"
										value={buttonText}
									/>
								</div>
							</div>
							<div className='col-lg-4 col-md-5 col-12'>
								<div className='services-hero__image'>
									{mediaURL ? <img src={mediaURL} alt={attributes.altText} width="256" height="256" /> : '' }
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
