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
		<div className="faq-section__inner_text">
			<div className="faq-section__question faq-section__toggle">
				<RichText.Content
					{...blockProps}
					tagName="p"
					value={props.attributes.question}
				/>
			</div>
			<div className="faq-section__answer faq-section__toggle">
				<RichText.Content
					{...blockProps}
					tagName="p"
					className="faq-section__toggle_answer"
					value={props.attributes.answer}
				/>
			</div>
		</div>
	);
}
