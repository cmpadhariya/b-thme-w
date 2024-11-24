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
import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';

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
 * @return { Element } Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const {
		subtitle, title, description, grayBtnText, grayBtnUrl, mediaID, mediaURL, altText, SecondAltText, mediaIDSecond, mediaURLSecond, FirstImageHeight, FirstImageWidth, SecondImageHeight, SecondImageWidth,
	} = attributes;

	const onChangeSubtitle = ( newSubtitle ) => {
		setAttributes( { subtitle: newSubtitle } );
	};

	const onChangeTitle = ( newTitle ) => {
		setAttributes( { title: newTitle });
	};

	const onChangeDescription = ( newDescription ) => {
		setAttributes( { description: newDescription } );
	};

	const onChangeGrayBtnText = ( newGrayBtnText ) => {
		setAttributes( { grayBtnText: newGrayBtnText } );
	};

	function onChangeGrayBtnUrl( newGrayBtnUrl ) {
		setAttributes( { grayBtnUrl: newGrayBtnUrl } );
	}

	const onChangeFirstImageHeight = ( newFirstImageHeight ) => {
		setAttributes( { FirstImageHeight: newFirstImageHeight } );
	};

	const onChangeFirstImageWidth = ( newFirstImageWidth ) => {
		setAttributes( { FirstImageWidth: newFirstImageWidth } );
	};

	const onChangeSecondImageHeight = ( newSecondImageHeight ) => {
		setAttributes( { SecondImageHeight: newSecondImageHeight } );
	};

	const onChangeSecondImageWidth = ( newSecondImageWidth ) => {
		setAttributes( { SecondImageWidth: newSecondImageWidth } );
	};

	const onSelectMedia = ( media ) => {
		setAttributes( {
			mediaID: media.id,
			mediaURL: media.url,
			altText: media.alt,
		} );
	};

	const onRemoveMedia = () => {
		setAttributes( {
			mediaID: null,
			mediaURL: null,
			altText: null,
		} );
	};

	const onSelectMediaSecond = ( media ) => {
		setAttributes( {
			mediaIDSecond: media.id,
			mediaURLSecond: media.url,
			SecondAltText: media.alt,
		} );
	};

	const onRemoveMediaSecond = () => {
		setAttributes( {
			mediaIDSecond: null,
			mediaURLSecond: null,
			SecondAltText: null,
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<TextControl
						format="string"
						label={ __( 'Add First Image height', 'qrolic' ) }
						onChange={ onChangeFirstImageHeight }
						value={ FirstImageHeight }
					/>
					<TextControl
						format="string"
						label={ __( 'Add First Image width', 'qrolic' ) }
						onChange={ onChangeFirstImageWidth }
						value={ FirstImageWidth }
					/>
					<TextControl
						format="string"
						label={ __( 'Add Second Image height', 'qrolic' ) }
						onChange={ onChangeSecondImageHeight }
						value={ SecondImageHeight }
					/>
					<TextControl
						format="string"
						label={ __( 'Add Second Image width', 'qrolic' ) }
						onChange={ onChangeSecondImageWidth }
						value={ SecondImageWidth }
					/>
					<TextControl
						format="string"
						label={ __( 'Add Button Link', 'qrolic' ) }
						onChange={ onChangeGrayBtnUrl }
						value={ grayBtnUrl }
					/>
				</PanelBody>
			</InspectorControls>
			<section { ...useBlockProps() }>
				<div className="our-journey">
					<div className="container p-0">
						<div className="our-journey__inner">
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-12 col-12">
									<div className="our-journey__inner_content">
										<RichText
											tagName="p"
											className="subtitle subtitle-heading"
											onChange={ onChangeSubtitle }
											placeholder={ __( 'Subtitle', 'qrolic' ) }
											value={ subtitle }
										/>
										<RichText
											tagName="h2"
											onChange={ onChangeTitle }
											placeholder={ __( 'Title', 'qrolic' ) }
											value={ title }
										/>
										<RichText
											tagName="p"
											className="subtitle our-journey-description"
											onChange={ onChangeDescription }
											placeholder={ __( 'Description', 'qrolic' ) }
											value={ description }
										/>
										<RichText
											tagName="a"
											target="_self"
											rel="noreferrer noopener"
											placeholder={ __( 'Button', 'qrolic' ) }
											className="our-journey-btn button-general"
											value={ grayBtnText }
											onChange={ onChangeGrayBtnText }
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-12 col-12">
									<div className="our-journey__inner_image">
										<MediaUploadCheck>
											<MediaUpload
												onSelect={ onSelectMedia }
												allowedTypes={ ['image'] }
												value={ mediaID }
												render={ ( { open } ) => (
													<picture>
														{!mediaID && (
															<Button
																onClick={ open }
																isPrimary
																className="icon-doc-add"
															>
																<span className="add-items">
																	{ __( 'Add Items', 'qrolic' ) }
																</span>
															</Button>
														)}
														{mediaID && (
															<>
																{ attributes.mediaURL ? (
																	<img
																		src={ attributes.mediaURL }
																		alt={ attributes.altText }
																		width={ FirstImageWidth }
																		height={ FirstImageHeight }
																	/>
																) : (
																	__( 'Upload Image First', 'qrolic' )
																)}
																<Button
																	onClick={ onRemoveMedia }
																	isDestructive
																>
																	{ __( 'X', 'qrolic' ) }
																</Button>
															</>
														)}
													</picture>
												)}
											/>
										</MediaUploadCheck>

										<MediaUploadCheck>
											<MediaUpload
												onSelect={ onSelectMediaSecond }
												allowedTypes={ ['image'] }
												value={ mediaIDSecond }
												render={ ( { open } ) => (
													<picture>
														{!mediaIDSecond && (
															<Button
																onClick={ open }
																isPrimary
																className="icon-doc-add"
															>
																<span className="add-items">
																	{ __( 'Add Items', 'qrolic' ) }
																</span>
															</Button>
														)}
														{mediaIDSecond && (
															<>
																{ attributes.mediaURLSecond ? (
																	<img
																		src={ attributes.mediaURLSecond }
																		alt={ attributes.SecondAltText }
																		width={ SecondImageWidth }
																		height={ SecondImageHeight }
																	/>
																) : (
																	__( 'Upload Image Second', 'qrolic' )
																)}
																<Button
																	onClick={ onRemoveMediaSecond }
																	isDestructive
																>
																	{ __( 'X', 'qrolic' ) }
																</Button>
															</>
														)}
													</picture>
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
