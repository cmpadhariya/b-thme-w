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
export default function Edit( { attributes, setAttributes } ) {
	const { breadcrumbs, hideBreadcrumbs, subtitle, hideSubtitle, title, description, hideDescription, blackBtnText, hideBlackBtn, blackBtnUrl, grayBtnText, hideGrayBtn, grayBtnUrl, altText, mediaID, mediaURL, height, width, blackBtnTarget, grayBtnTarget } = attributes;

	const onChangeBreadcrumbs = ( newBreadcrumbs ) => {
		setAttributes( { breadcrumbs: newBreadcrumbs } );
	};

	const onChangeSubtitle = ( newSubtitle ) => {
		setAttributes( { subtitle: newSubtitle } );
	};

	const onChangeTitle = ( newTitle ) => {
		setAttributes( { title: newTitle } );
	};

	const onChangeDescription = ( newDescription ) => {
		setAttributes( { description: newDescription } );
	};

	const onChangeBlackBtnText = ( newBlackBtnText ) => {
		setAttributes({ blackBtnText: newBlackBtnText });
	};

	function onChangeBlackBtnUrl( newBlackBtnUrl ) {
		setAttributes( { blackBtnUrl: newBlackBtnUrl } );
	}

	const onChangeGrayBtnText = ( newGrayBtnText ) => {
		setAttributes( { grayBtnText: newGrayBtnText } );
	};

	function onChangeGrayBtnUrl( newGrayBtnUrl ) {
		setAttributes( { grayBtnUrl: newGrayBtnUrl } );
	}

	const onToggleHideSubtitle = () => {
		setAttributes( { hideSubtitle: !hideSubtitle } );
	};

	const onToggleHideBreadcrumbs = () => {
		setAttributes( { hideBreadcrumbs: !hideBreadcrumbs } );
	};

	const onToggleHideDescription = () => {
		setAttributes( { hideDescription: !hideDescription } );
	};

	const onToggleHideBlackBtn = () => {
		setAttributes( { hideBlackBtn: !hideBlackBtn } );
	};

	const onToggleHideGrayBtn = () => {
		setAttributes( { hideGrayBtn: !hideGrayBtn } );
	};

	const onChangeHeight = ( newHeight ) => {
		setAttributes( { height: newHeight } );
	};

	const onChangeWidth = ( newWidth ) => {
		setAttributes( { width: newWidth } );
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
	return (
		<>
			<InspectorControls key="styles">
				<PanelBody title="Page banner all settings">
					<TextControl format="string" label="Add Black(first) Button Link" onChange={ onChangeBlackBtnUrl } value={ blackBtnUrl } />
					<TextControl format="string" label="Add Gray(second) Button Link" onChange={ onChangeGrayBtnUrl } value={ grayBtnUrl } />

					<TextControl format="string" label="Add height attribute in image" onChange={ onChangeHeight } value={ height } />
					<TextControl format="string" label="Add width attribute in image" onChange={ onChangeWidth } value={ width } />

					<SelectControl
						label={__( "Button Black Target", "qrolic" )}
						value={blackBtnTarget}
						options={[
							{ label: __( "Open in same tab (_self)", "qrolic" ), value: "_self" },
							{ label: __( "Open in new tab (_blank)", "qrolic" ), value: "_blank" },
						]}
						onChange={ ( newTarget ) => setAttributes( { blackBtnTarget: newTarget } ) }
					/>

					<SelectControl
						label={ __( "Button Gray Target", "qrolic" ) }
						value={grayBtnTarget}
						options={[
							{ label: __( "Open in same tab (_self)", "qrolic" ), value: "_self" },
							{ label: __( "Open in new tab (_blank)", "qrolic" ), value: "_blank" },
						]}
						onChange={ ( newTarget ) => setAttributes( { grayBtnTarget: newTarget } ) }
					/>

					<ToggleControl
						label="Hide Subtitle"
						checked={ hideSubtitle }
						onChange={ onToggleHideSubtitle }
					/>
					<ToggleControl
						label="Hide Breadcrumbs"
						checked={ hideBreadcrumbs }
						onChange={ onToggleHideBreadcrumbs }
					/>
					<ToggleControl
						label="Hide Description"
						checked={ hideDescription }
						onChange={ onToggleHideDescription }
					/>
					<ToggleControl
						label="Hide Black(first) Button"
						checked={ hideBlackBtn }
						onChange={ onToggleHideBlackBtn }
					/>
					<ToggleControl
						label="Hide Gray(second) Button"
						checked={ hideGrayBtn }
						onChange={ onToggleHideGrayBtn }
					/>
				</PanelBody>
			</InspectorControls>
			<section { ...useBlockProps() }>
				<div className='page-banner'>
					<div className='container p-0'>
						<div className='page-banner__inner'>
							<div className='row align-items-center'>
								<div className='col-lg-6 col-md-12 col-12'>
									<div className='page-banner__inner--content'>
										{!hideSubtitle && (
											<RichText
												tagName='p'
												className='subtitle subtitle-heading'
												onChange={ onChangeSubtitle }
												placeholder={ __( 'Enter subtitle here...', 'page-banner-v2' ) }
												value={ subtitle }
											/>
										)}
										{!hideBreadcrumbs && (
											<TextControl
												tagName='div'
												className="breadcrumb"
												onChange={ onChangeBreadcrumbs }
												placeholder={ __( 'Add breadcrumbs code here...', 'page-banner-v2' ) }
												value={ breadcrumbs }
											/>
										)}
										<TextControl
											tagName='h1'
											className="page-banner__inner--content-mainTitle"
											onChange={ onChangeTitle }
											placeholder={ __( 'Enter title here...', 'page-banner-v2' ) }
											value={ title }
										/>
										{!hideDescription && (
											<TextareaControl
												tagName='p'
												className='description-secondary'
												onChange={ onChangeDescription }
												placeholder={ __( 'Enter description here...', 'page-banner-v2' ) }
												value={ description }
											/>
										)}
										<div className='banner-buttons'>
											{!hideBlackBtn && (
												<RichText
													tagName="a"
													target={ blackBtnTarget }
													rel="noreferrer noopener"
													placeholder={ __( 'Button', 'page-banner-v2' ) }
													className='hero-black-button button-general'
													value={ blackBtnText }
													onChange={ onChangeBlackBtnText }
												/>
											)}
											{!hideGrayBtn && (
												<RichText
													tagName="a"
													target={ grayBtnTarget }
													rel="noreferrer noopener"
													placeholder={ __( 'Button', 'page-banner-v2' ) }
													className='hero-gray-button button-general'
													value={ grayBtnText }
													onChange={ onChangeGrayBtnText }
												/>
											)}
										</div>
									</div>
								</div>
								<div className='col-lg-6 col-md-12 col-12'>
									<div className='page-banner__inner--image'>
										<MediaUploadCheck>
											<MediaUpload
												onSelect={ onSelectMedia }
												allowedTypes={ [ "image" ] }
												value={ mediaID }
												render={ ( { open } ) => (
													<div>
														{!mediaID && (
															<Button onClick={ open } isPrimary className="icon-doc-add">
																<span className='add-items'>Add Items</span>
															</Button>
														)}
														{mediaID && (
															<div>
																{ attributes.mediaURL ? (
																	<img src={ attributes.mediaURL } loading="eager" alt={ attributes.altText } width={ width } height={ height } />
																) : (
																	"Upload Image"
																)}
																<Button onClick={ onRemoveMedia } isDestructive>{ __( 'X', 'qrolic' ) }</Button>
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
