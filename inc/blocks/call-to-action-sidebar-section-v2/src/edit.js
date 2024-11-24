import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { TextControl, TextareaControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { callheading, calldescription, callbutton, buttonURL, iconName } =
		attributes;

	const onChangeCallheading     = ( value ) => setAttributes({ callheading: value });
	const onChangeCalldescription = ( value ) =>setAttributes({ calldescription: value });
	const onChangeCallbutton      = ( value ) => setAttributes({ callbutton: value });
	const onChangeButtonURL 	  = ( value ) => setAttributes({ buttonURL: value });
	const onChangeIconName 		  = ( value ) => setAttributes({ iconName: value });

	return (
		<div className="call-to-action-sidebar-section-v2" {...useBlockProps()}>
			<InspectorControls>
				<TextControl
					label={__( "Button URL", "qrolic" )}
					value={buttonURL}
					onChange={onChangeButtonURL}
				/>
				<TextControl
					label={__( "Icon Name", "qrolic" )}
					value={iconName}
					onChange={onChangeIconName}
				/>
			</InspectorControls>
			<div className="call-to-action-sidebar-section-v2__inner">
				<div className="call-to-action-sidebar-section-v2__inner_heading">
					<RichText
						tagName="h3"
						onChange={onChangeCallheading}
						placeholder={__( "Call Heading", "qrolic" )}
						value={callheading}
						className="contact-call-sidebar-heading"
					/>
					<TextareaControl
						tagName="p"
						value={calldescription}
						onChange={onChangeCalldescription}
						className="description-primary contact-call-sidebar-description"
					/>
				</div>
				<div className="call-to-action-sidebar-section-v2__inner_button">
					<RichText
						tagName="a"
						onChange={onChangeCallbutton}
						placeholder={__( "Button Text", "qrolic" )}
						value={callbutton}
					/>
				</div>
			</div>
		</div>
	);
}
