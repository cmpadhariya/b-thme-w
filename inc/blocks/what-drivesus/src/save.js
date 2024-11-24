/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const {
		attributes: {},
		setAttributes,
	} = props;
	const blockProps = useBlockProps.save();
	return (
		<div class="what-drivesus section-padding">
			<div class="container p-0">
				<div class="what-drivesus__inner">
					<div class="what-drivesus__inner_heading">
						<RichText.Content
							{...blockProps}
							tagName="h2"
							value={props.attributes.heading}
						/>
					</div>
					<div class="what-drivesus__inner_content">
						<div class="row">
							<div class="col-lg-4 col-md-4 col-12">
								<div class="what-drivesus__inner_content--text">
									<RichText.Content
										{...blockProps}
										tagName="h3"
										value={props.attributes.subheading}
									/>
									<RichText.Content
										{...blockProps}
										tagName="p"
										className="description-primary"
										value={props.attributes.discription}
									/>
								</div>
							</div>
							<div class="col-lg-4 col-md-4 col-12">
								<div class="what-drivesus__inner_content--text">
									<RichText.Content
										{...blockProps}
										tagName="h3"
										value={props.attributes.subheading2}
									/>
									<RichText.Content
										{...blockProps}
										tagName="p"
										className="description-primary"
										value={props.attributes.discription2}
									/>
								</div>
							</div>
							<div class="col-lg-4 col-md-4 col-12">
								<div class="what-drivesus__inner_content--text">
									<RichText.Content
										{...blockProps}
										tagName="h3"
										value={props.attributes.subheading3}
									/>
									<RichText.Content
										{...blockProps}
										tagName="p"
										className="description-primary"
										value={props.attributes.discription3}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
