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
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	const { content,description,mediaURL,altText,alignment, textButton, button_url } = attributes;
	const blockProps = useBlockProps.save();
	return (
		<section {...useBlockProps.save()}>
			<div class="zigzag">
				<div class="container p-0">
					<div class="zigzag__inner">
						<div className={`zigzag__inner_image align${alignment}`}>
							{mediaURL ? <img src={mediaURL} alt={attributes.altText} width="559" height="373" /> : '' }
						</div>
						<div className={`zigzag__inner_text`}>
							<RichText.Content
								tagName='h2'
								value={content} 
							/>
							<RichText.Content {...blockProps}
								tagName='p'
								className='description-primary'
								value={description} 
							/>
							<a href={button_url} {...blockProps.save} 
								className="wpt-button" target="_self" rel="noreferrer noopener">
								{textButton}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}