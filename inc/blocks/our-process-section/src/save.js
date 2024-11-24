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
	const { items, sectiontitle, sectiontitlealignment } = props.attributes;
	const blockProps = useBlockProps.save();
	return (
		<section { ...useBlockProps.save() }>
			<div className='process'>
				<div className='container p-0'>
					<div className={`process__heading ${sectiontitlealignment === "center" ? "text-center" : ""}`}>
						<RichText.Content tagName="h2" value={sectiontitle} />
					</div>
					<div className='process__inner'>
						<div className='row'>
							{items.map((item, index) => (
								<div className='col-lg-3 col-md-6 col-sm-6 col-12' id={index}>
									<div className='process__box'>
										<div className='block'>
											<h2>{item.number}</h2>
										</div>
										<div className='content'>
											<h3>{item.heading}</h3>
											<p>{item.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
