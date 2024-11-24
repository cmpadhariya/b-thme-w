/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,RichText } from '@wordpress/block-editor';
import { TextControl } from "@wordpress/components";

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
	const {
		attributes: { imageUrl, altText },
		setAttributes,
	} = props;
	const blockProps = useBlockProps.save();
	return (
		<section { ...useBlockProps.save() }>
			<div className='subscribe'>
				<div className='container p-0'>
					<div className='row justify-content-center'>
						<div className='col-lg-10 col-md-12 col-12'>
							<div className='subscribe__inner'>
								{imageUrl ? <img src={imageUrl} alt={altText} width={64} height={64} /> : ''}
								<RichText.Content
									tagName='h2'
									value={props.attributes.title} 
								/>
								<RichText.Content
									tagName='p'
									className='description-primary'
									value={props.attributes.description} 
								/>
								<RichText.Content
									tagName="div"
									value={props.attributes.subscribeform}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
