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
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button, TextControl } from "@wordpress/components";

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
export default function Edit(props) {
	const {
		attributes: { subheading, discription, mediaID, mediaURL, iconClass, altText },
		setAttributes,
	} = props;
	const blockProps = useBlockProps();
	const onChangesubheading = (newContent) => {
		setAttributes({ subheading: newContent });
	};
	const onChangediscription = (newContent) => {
		setAttributes({ discription: newContent });
	};
	const onSelectMedia = (media) => {
		setAttributes({
			mediaID: media.id,
			mediaURL: media.url,
			altText: media.alt
		});
	};

	const onRemoveMedia = () => {
		setAttributes({
			mediaID: null,
			mediaURL: null,
			altText: null,
		});
	};

	const onChangeIconClass = (newIconClass) => {
		setAttributes({ iconClass: newIconClass });
	};
	return (
		<div className="col-lg-3 col-md-6 col-sm-6 col-12">
			<div className="career-benefits__inner_text">
				<div className="career-benefits__inner_text--img">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectMedia}
							allowedTypes={["image"]}
							value={mediaID}
							render={({ open }) => (
								<div>
									{!mediaID && (
										<Button onClick={open} isDefault>
											Select Media
										</Button>
									)}
									{mediaID && (
										<div>
											{mediaURL ? <img src={mediaURL} alt={altText} /> : 'Upload Image'}

											<Button onClick={onRemoveMedia} isLink isDestructive>
												x - Remove Image
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>
				</div>
				<div className="career-benefits__inner_text--icon">
					<span> Please below add class in font icon</span>
					<TextControl
						value={iconClass}
						onChange={onChangeIconClass}
						placeholder={__("Enter icon class...", "your-theme")}
					/>
				</div>
				<div className="career-benefits__inner_text--subheading">
					<RichText
						{...blockProps}
						tagName="h3"
						onChange={onChangesubheading}
						placeholder="Sub Heading"
						value={subheading}
					/>
				</div>
				<div className="career-benefits__inner_text--discription">
					<RichText
						{...blockProps}
						tagName="p"
						onChange={onChangediscription}
						placeholder="Discription"
						className="description-primary"
						value={discription}
					/>
				</div>
			</div>
		</div>
	);
}
