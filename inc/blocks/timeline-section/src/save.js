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
export default function save(props) {
	const {
		attributes: { alignment },
		setAttributes,
	} = props;
	const blockProps = useBlockProps.save();
	return (
		<div className='timeline__inner'>
			<div className={`timeline__year`}>
				<RichText.Content
					tagName='h3'
					value={props.attributes.year} 
				/>
			</div>
			<div className={`timeline__description align${alignment}`}>
				<RichText.Content
					tagName='h4'
					value={props.attributes.title} 
				/>
				<RichText.Content
					tagName='p'
					className='description-primary'
					value={props.attributes.description} 
				/>
			</div>
		</div>
	);
}
