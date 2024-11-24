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
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
	const { attributes } = props;
	const { items } = attributes;
	const blockProps = useBlockProps.save();
	return (
		<div className='col-lg-6 col-md-6 col-12 m-bottom'>
			<div className='internship-types__inner_box'>
				<RichText.Content {...blockProps}
					tagName='span'
					value={props.attributes.heading} 
					className='blue bottom description-primary'
				/>
				{items.map((item) => (
				<div key={item.id} className='content'>
					<h3>{item.title}</h3>
					<p className='description-secondary'>{item.description}</p>
				</div>
				))}
			</div>
		</div>
	);
}
