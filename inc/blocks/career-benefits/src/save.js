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
		attributes:  { subheading, discription, mediaID, mediaURL, iconClass, altText },
		setAttributes,
	} = props;
	const blockProps = useBlockProps.save();
	return (
		<div className="col-lg-3 col-md-6 col-sm-6 col-12">
			<div className="career-benefits__inner_text">
				<div className="career-benefits__inner_text--img">
				{mediaURL ? <img src={mediaURL} alt={altText} /> : ''}
					{/* <img src={mediaURL} alt={altText} /> */}
				</div>
				<div className="career-benefits__inner_text--icon">
					{props.attributes.iconClass && (
						<i className={props.attributes.iconClass}></i>
					)}
				</div>
				<div className="career-benefits__inner_text--subheading">
					<RichText.Content
						{...blockProps}
						tagName="h3"
						value={props.attributes.subheading}
					/>
				</div>
				<div className="career-benefits__inner_text--discription">
					<RichText.Content
						{...blockProps}
						tagName="p"
						className="description-primary"
						value={props.attributes.discription}
					/>
				</div>
			</div>
		</div>
	);
}