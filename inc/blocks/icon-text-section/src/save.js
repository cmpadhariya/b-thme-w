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
	const { items } = attributes;
	const blockProps = useBlockProps.save();
	return (
		<section { ...useBlockProps.save() }>
			<div className='icon-text'>
				<div className='container'>
					<div className='row'>
						{items.map((item, index) => (
							<div className='col-lg-2 col-md-2 col-sm-4 col-6 m-bottom'>
								<div className='icon-text__box'>
									{item.iconclass && <i className={item.iconclass}></i>}
									<p>{item.title}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
