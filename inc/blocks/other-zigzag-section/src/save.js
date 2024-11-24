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
export default function save( { attributes } ) {
	const { heading,description,mediaURL,altText,alignment, heading_url, downloadbtn_text, downloadbtn_url, docsbtn_text, docsbtn_url } = attributes;
	const blockProps = useBlockProps.save();
	return (
		<section {...useBlockProps.save()}>
			<div class="other-zigzag">
				<div class="container p-0">
					<div class="other-zigzag__inner">
						<div className={`other-zigzag__inner_image align${alignment}`}>
							{mediaURL ? <img src={mediaURL} alt={altText} width="559" height="373" /> : '' }
						</div>
						<div className={`other-zigzag__inner_text`}>
							<h2 className='title'>
								<a href={heading_url} target="_self" rel="noreferrer noopener">{heading}</a>
							</h2>
							<RichText.Content {...blockProps}
								tagName='p'
								className='description-primary'
								value={description} 
							/>
							<div className='other-zigzag__buttons'>
								<div className='other-zigzag__buttons_two'>
									<a href={downloadbtn_url} {...blockProps.save} 
										className="wpt-button" target="_self" rel="noreferrer noopener">
										{downloadbtn_text}
									</a>
									<a href={docsbtn_url} {...blockProps.save} 
										className="wpt-button" target="_self" rel="noreferrer noopener">
										{docsbtn_text}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
