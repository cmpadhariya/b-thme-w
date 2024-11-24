/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,RichText,MediaUpload,InspectorControls,MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, Button,SelectControl, TextControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const { attributes, setAttributes } = props;
  	const { heading, description, buttonText, buttonURL,altText,mediaID, mediaURL } = attributes;
	const onChangeHeading = (newHeading) => {
		setAttributes({ heading: newHeading });
	};
	
	const onChangeDescription = (newContent) => {
		setAttributes({ description: newContent });
	};
	const onSelectMedia = (media) => {
		setAttributes({
		  mediaID: media.id,
		  mediaURL: media.url,
		  altText: media.alt,
		});
	  };
	
	const onRemoveMedia = () => {
		setAttributes({
			mediaID: null,
			mediaURL: null,
			altText: null,
		});
	};
	return (
		<section { ...useBlockProps() }>
			<div className='services-hero'>
				<div className='container p-0'>
					<div className='services-hero'>
						<div className='row justify-content-between'>
							<div className='col-lg-8 col-md-7 col-12'>
								<div className='services-hero__text'>
									<RichText
										tagName="h1"
										className='title'
										value={heading}
										onChange={onChangeHeading}
										placeholder={__(
											"Enter services hero heading text...",
											"qrolic"
										)}
                    				/>
									<RichText
										tagName="p"
										value={description}
										onChange={onChangeDescription}
										placeholder={__("Enter services hero text...", "qrolic")}
									/>
									<RichText
										tagName="a"
										className="button-text"
										placeholder={__("Button Text")}
										value={buttonText}
										onChange={(newText) =>
											setAttributes({ buttonText: newText })
										}
                    				/>
									<InspectorControls>
										<PanelBody title={__("Settings", "qrolic")}>
											<TextControl
												label={__("Button URL")}
												value={buttonURL}
												onChange={(newURL) => setAttributes({ buttonURL: newURL })}
											/>
										</PanelBody>
      								</InspectorControls>
								</div>
							</div>
							<div className='col-lg-4 col-md-5 col-12'>
								<div className='services-hero__image'>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={onSelectMedia}
											allowedTypes={["image"]}
											value={mediaID}
											render={({ open }) => (
											<div>
												{!mediaID && (
												<Button onClick={open} isDefault>
													Upload Media
												</Button>
												)}
												{mediaID && (
												<div>
													{attributes.mediaURL ? (
													<img src={attributes.mediaURL} alt={attributes.altText} width="256" height="256" />
													) : (
													"Upload Image"
													)}
													<Button onClick={onRemoveMedia} isLink isDestructive>
													Remove image
													</Button>
												</div>
												)}
											</div>
											)}
										/>
									</MediaUploadCheck>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
