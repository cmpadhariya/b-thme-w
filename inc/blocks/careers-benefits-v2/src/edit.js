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
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { items, subtitle, h2heading, description } = attributes;
	const blockProps = useBlockProps();

	const onChangeSubtitle = ( newContent ) => {
		setAttributes( { subtitle: newContent } );
	};

	const onChangeH2Heading = ( newContent ) => {
		setAttributes( { h2heading: newContent } );
	};

	const onChangeDescription = ( newContent ) => {
		setAttributes( { description: newContent } );
	};

	const addItem = () => {
		const newItems = [ ...items, { topicon: '', heading: '', description: '', imageUrl: '' } ];
		setAttributes( { items: newItems } );
	};

	const removeItem = ( index ) => {
		const newItems = [ ...items ];
		newItems.splice( index, 1 );
		setAttributes( { items: newItems } );
	};

	const updateItem = ( index, field, value ) => {
		const newItems = [ ...items ];
		newItems[ index ][ field ] = value;
		setAttributes( { items: newItems } );
	};

	const onSelectImage = ( index, image ) => {
		updateItem( index, 'imageUrl', image.url );
	};

	const removeImage = ( index ) => {
		updateItem( index, 'imageUrl', '' );
	};

	return (
		<section { ...blockProps }>
			<InspectorControls key="styles">
				<PanelBody title={ __( 'Benefit Settings', 'qrolic' ) }>
					<Button isPrimary onClick={ addItem }>
						{ __( '+ Add Benefit', 'qrolic' ) }
					</Button>

				</PanelBody>
			</InspectorControls>
			<div className="careers-benefits">
				<div className="container p-0">
					<div className="careers-benefits__inner">
						<div className="careers-benefits__inner_heading">
							<div className="careers-benefits__inner_heading-subheading">
								<RichText
									tagName="p"
									placeholder={ __( 'Sub-heading', 'qrolic' ) }
									value={ subtitle }
									onChange={ onChangeSubtitle }
									className="benefits-subheading"
								/>
							</div>
							<RichText
								tagName="h2"
								placeholder={ __( 'Benefits Heading', 'qrolic' ) }
								value={ h2heading }
								onChange={ onChangeH2Heading }
								className="benefits-heading"
							/>
							<RichText
								tagName="p"
								placeholder={ __( 'Description', 'qrolic' ) }
								value={ description }
								onChange={ onChangeDescription }
								className="section-description description-primary"
							/>
						</div>
						<div className="careers-benefits__inner_item row">
							{ items.map( ( item, index ) => (
								<div className="col-lg-4 col-md-6 col-sm-6 col-12" key={ index }>
									<div className={ `careers-benefits__inner_item-box ${ index === 0 ? 'first-item' : '' }` }>
										<div className="icon">
											<TextControl
												className="first-boxicon"
												placeholder={ __( 'Icon class', 'qrolic' ) }
												value={ item.topicon }
												onChange={ ( value ) => updateItem( index, 'topicon', value ) }
											/>
											<MediaUploadCheck>
												<MediaUpload
													onSelect={ ( image ) => onSelectImage( index, image ) }
													allowedTypes={ [ 'image' ] }
													value={ item.imageUrl }
													render={ ( { open } ) => (
														<>
															<Button onClick={ open } isSecondary className="upload-image-button">
																{ ! item.imageUrl ? __( 'Upload Image', 'qrolic' ) : <img src={ item.imageUrl } alt={ __( 'Upload Image', 'qrolic' ) } /> }
															</Button>
															{ item.imageUrl && (
																<Button
																	isDestructive
																	onClick={ () => removeImage( index ) }
																	className="remove-image-button"
																>
																	{ __( 'X', 'qrolic' ) }
																</Button>
															) }
														</>
													) }
												/>
											</MediaUploadCheck>
											<RichText
												tagName="h3"
												placeholder={ __( 'Heading', 'qrolic' ) }
												value={ item.heading }
												onChange={ ( value ) => updateItem( index, 'heading', value ) }
												className="description-secondary"
											/>
										</div>
										<div className="content">
											<RichText
												tagName="p"
												className="description-secondary"
												placeholder={ __( 'Description', 'qrolic' ) }
												value={ item.description }
												onChange={ ( value ) => updateItem( index, 'description', value ) }
											/>
										</div>
										<Button isSecondary onClick={ () => removeItem( index ) }>
											{ __( 'X', 'qrolic' ) }
										</Button>
									</div>
								</div>
							) ) }
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
