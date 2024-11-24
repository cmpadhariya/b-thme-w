/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the className name.
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
const { createElement } = wp.element;
export default function save( props ) {
	const {
		attributes: { items },
		setAttributes,
	} = props;
	const blockProps = useBlockProps.save();
	return (
		<div className="services-headings section-padding">
			<div className="services-headings__inner">
				<div className="container p-0">
					<div className="row justify-content-center">
						<div className="col-lg-9 col-md-10 col-12">
							<RichText.Content {...blockProps}
								tagName='h1'
								value={props.attributes.heading} 
							/>
							<RichText.Content {...blockProps}
								tagName='p'
								value={props.attributes.subheading} 
							/>
							<ul>
								<li>
									<RichText.Content {...blockProps}
										tagName='p'
										value={props.attributes.description} 
									/>
									<a href={props.attributes.descriptionlink}>
										<RichText.Content {...blockProps}
											value={props.attributes.descriptiontext} 
										/>
									</a>
								</li>
								<li>
									<RichText.Content {...blockProps}
										tagName='p'
										value={props.attributes.relatedservice} 
									/>
									<ul className="sub-menu">
										{items.map((item) => (
										<li key={item.id}>
											{item.link && (
											<a href={item.link}>
												{item.text}
											</a>
											)}
										</li>
										))}
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
