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
import { useBlockProps, RichText } from "@wordpress/block-editor";

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
 * @return {WPElement} Element to render.
 */
import {
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
export default function Edit(props) {
	const { attributes, setAttributes, isSelected } = props;
	const { src, alignment } = attributes;
	return (
		<div class="map-section section-padding">
			<div class="container p-0">
				<div class="map-section__inner">
					<InspectorControls>
						<PanelBody title={__("Iframe Settings")}>
							<TextControl
								label={__("Iframe Source")}
								value={src}
								onChange={(newSrc) => setAttributes({ src: newSrc })}
							/>
						</PanelBody>
					</InspectorControls>

					{isSelected && (
						<BlockControls>
							<AlignmentToolbar
								value={alignment}
								onChange={(newAlignment) =>
									setAttributes({ alignment: newAlignment })
								}
							/>
						</BlockControls>
					)}

					<div style={{ textAlign: alignment }}>
						<iframe title="Address map of our company" src={src} />
					</div>
				</div>
			</div>
		</div>
	);
}
