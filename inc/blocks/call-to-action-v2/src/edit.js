/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, SelectControl } from "@wordpress/components";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { Heading, content, buttonText1, buttonURL1, buttonTarget } =
		attributes;

	const onChangeHeading = (newHeading) => {
		setAttributes({ Heading: newHeading });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "qrolic")}>
					<TextControl
						label={__("Button 1 URL")}
						value={buttonURL1}
						onChange={(newURL) => setAttributes({ buttonURL1: newURL })}
					/>
					<SelectControl
						label={__("Button Target", "qrolic")}
						value={buttonTarget}
						options={[
							{ label: __("Open in same tab (_self)", "qrolic"), value: "_self" },
							{ label: __("Open in new tab (_blank)", "qrolic"), value: "_blank" },
						]}
						onChange={(newTarget) => setAttributes({ buttonTarget: newTarget })}
					/>
				</PanelBody>
			</InspectorControls>

			<section id="callto-action" {...useBlockProps()}>
				<div className="callto-action ">
					<div className="container p-0">
						<div className="callto-action__inner">
							<div className="row">
								<div className="col-lg-8 col-md-7 col-sm-12">
									<div className="callto-action__inner_text">
										<div className="callto-action__inner_text--title">
											<RichText
												tagName="h2"
												value={Heading}
												onChange={onChangeHeading}
												placeholder={__("Enter call to-action heading text...", "qrolic")}
											/>
										</div>
										<div className="callto-action__inner_text--discription">
											<RichText
												tagName="p"
												value={content}
												className="subtitle"
												onChange={onChangeContent}
												placeholder={__(
													"Enter call-to-action text...",
													"qrolic",
												)}
											/>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-5 col-sm-12 d-flex align-items-center justify-content-lg-end justify-content-md-end justify-content-start">
									<div className="callto-action__inner_btn">
										<RichText
											tagName="a"
											target={buttonTarget}
											rel="noopener noreferrer"
											placeholder={__("Button Text 1")}
											value={buttonText1}
											onChange={(newText) =>
												setAttributes({
													buttonText1: newText,
												})
											}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
