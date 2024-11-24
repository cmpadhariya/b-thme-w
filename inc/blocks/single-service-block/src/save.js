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
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	const { items,Heading } = attributes;
	const blockProps = useBlockProps.save();
	return (
		<div className='single-service' { ...useBlockProps.save() }>
			<div className='single-service__inner'>
				<div className='container p-0'>
				<div className='single-service__inner_heading'>
								<h2>{Heading}</h2>
									</div>
					<div className='row'>
						{items.map((item, index) => (
							<div className='col-lg-4 col-md-6 col-sm-6 col-12' id={index}>
								<div className='single-service__inner_content'>
									{item.image && <img src={item.image} alt={item.altText} />}
									{item.iconclass && <i className={item.iconclass}></i>}
									<h3>{item.title}</h3>
									<p className='description-primary'>{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
