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
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
const { PanelBody, SelectControl, TextControl, Button, TextareaControl, ToggleControl } = wp.components;

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
export default function Edit({ attributes, setAttributes }) {
	const { subtitle, subTitleUrl, title, description, descriptionSecondary, blackBtnText, blackBtnUrl, grayBtnText, grayBtnUrl, altText, mediaID, mediaURL, height, width, SectionStyle } = attributes;

	const onChangeSubtitle = (newSubtitle) => {
		setAttributes({ subtitle: newSubtitle });
	};

	const onToggleSubtitle = () => {
		setAttributes({ subtitle: !subtitle });
	};

	const onChangeSubTitleUrl = (newSubTitleUrl) => {
		setAttributes({ subTitleUrl: newSubTitleUrl });
	};

	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });
	};

	const onChangeDescription = (newDescription) => {
		setAttributes({ description: newDescription });
	};

	const onChangeDescriptionSecondary = (newDescriptionSecondary) => {
		setAttributes({ descriptionSecondary: newDescriptionSecondary });
	};

	const onToggleDescriptionSecondary = () => {
		setAttributes({ descriptionSecondary: !descriptionSecondary });
	};

	const onChangeBlackBtnText = (newBlackBtnText) => {
		setAttributes({ blackBtnText: newBlackBtnText });
	};

	const onChangeBlackBtnUrl = (newBlackBtnUrl) => {
		setAttributes({ blackBtnUrl: newBlackBtnUrl });
	};

	const onChangeGrayBtnText = (newGrayBtnText) => {
		setAttributes({ grayBtnText: newGrayBtnText });
	};

	const onChangeGrayBtnUrl = (newGrayBtnUrl) => {
		setAttributes({ grayBtnUrl: newGrayBtnUrl });
	};

	const onChangeHeight = (newHeight) => {
		setAttributes({ height: newHeight });
	};

	const onChangeWidth = (newWidth) => {
		setAttributes({ width: newWidth });
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
		<>
			<InspectorControls key="styles">
				<PanelBody title={__('Position Hero Section Settings', 'qrolic')}>
					<ToggleControl
						label={__('Hide Subtitle', 'qrolic')}
						checked={!subtitle}
						onChange={onToggleSubtitle}
					/>
					<ToggleControl
						label={__('Hide Secondary Description', 'qrolic')}
						checked={!descriptionSecondary}
						onChange={onToggleDescriptionSecondary}
					/>
					<TextControl
						label={__('Section Style Class', 'qrolic')}
						value={SectionStyle}
						onChange={(value) => setAttributes({ SectionStyle: value })}
					/>
					<TextControl
						label={__('Subtitle URL', 'qrolic')}
						value={subTitleUrl}
						onChange={onChangeSubTitleUrl}
					/>
					<TextControl
						label={__('Black Button URL', 'qrolic')}
						value={blackBtnUrl}
						onChange={onChangeBlackBtnUrl}
					/>
					<TextControl
						label={__('Gray Button URL', 'qrolic')}
						value={grayBtnUrl}
						onChange={onChangeGrayBtnUrl}
					/>
					<TextControl
						label={__('Image Height', 'qrolic')}
						value={height}
						onChange={onChangeHeight}
					/>
					<TextControl
						label={__('Image Width', 'qrolic')}
						value={width}
						onChange={onChangeWidth}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()}>
				<div className="position-hero">
					<div className="container p-0">
						<div className={`position-hero__inner ${SectionStyle}`}>
							<div className="row align-items-center justify-content-center">
								<div className="col-lg-6 col-md-10 col-sm-10 col-12">
									<div className="position-hero__inner--content">
										{subtitle && (
											<RichText
												tagName="a"
												target="_blank"
												rel="noreferrer noopener"
												className="subtitle-heading"
												onChange={onChangeSubtitle}
												placeholder={__('Subtitle', 'qrolic')}
												value={subtitle}
											/>
										)}
										<RichText
											tagName="h1"
											className="position-hero__title"
											onChange={onChangeTitle}
											placeholder={__('Title', 'qrolic')}
											value={title}
										/>
										<RichText
											tagName="p"
											className="description-secondary"
											onChange={onChangeDescription}
											placeholder={__('Description', 'qrolic')}
											value={description}
										/>
										{descriptionSecondary && (
											<RichText
												tagName="p"
												className="description-secondary applynow-secondary-text"
												onChange={onChangeDescriptionSecondary}
												placeholder={__('Secondary Description', 'qrolic')}
												value={descriptionSecondary}
											/>
										)}
										<div className='banner-buttons'>
											<RichText
												tagName="a"
												target="_self"
												rel="noreferrer noopener"
												placeholder={__('Button', 'qrolic')}
												className='white-button'
												value={blackBtnText}
												onChange={onChangeBlackBtnText}
											/>
											<RichText
												tagName="a"
												target="_self"
												rel="noreferrer noopener"
												placeholder={__('Button', 'qrolic')}
												className='black-button'
												value={grayBtnText}
												onChange={onChangeGrayBtnText}
											/>
										</div>
									</div>
								</div>
								<div className='col-lg-4 col-md-10 col-sm-10 col-12'>
									<div className='position-hero__inner--image'>
										<MediaUploadCheck>
											<MediaUpload
												onSelect={onSelectMedia}
												allowedTypes={["image"]}
												value={mediaID}
												render={({ open }) => (
													<div>
														{!mediaID && (
															<Button onClick={open} isPrimary className="icon-doc-add">
																<span className='add-items'>Add Items</span>
															</Button>
														)}
														{mediaID && (
															<div>
																{attributes.mediaURL ? (
																	<img src={attributes.mediaURL} alt={attributes.altText} width={width} height={height} />
																) : (
																	"Upload Image"
																)}
																<Button onClick={onRemoveMedia} isDestructive>{__('X', 'qrolic')}</Button>
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
		</>
	);
}