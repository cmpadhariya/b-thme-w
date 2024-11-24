import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, ToggleControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { heading, description, items, buttonText1, buttonURL1, buttonText2, buttonURL2, imageUrl, showButtons, showList } = attributes;

	const onChangeHeading = ( newHeading ) => {
		setAttributes( { heading: newHeading } );
	};

	const onChangeDescription = ( newDescription ) => {
		setAttributes( { description: newDescription } );
	};

	const handleItemChange = ( index, type, value ) => {
		const newItems = [ ...items ];
		newItems[ index ][ type ] = value;
		setAttributes( { items: newItems } );
	};

	const addItem = () => {
		setAttributes( { items: [ ...items, { text: '', icon: '' } ] } );
	};

	const removeItem = ( index ) => {
		const newItems = items.filter( ( _, i ) => i !== index );
		setAttributes( { items: newItems } );
	};

	const onSelectImage = ( media ) => {
		setAttributes( { imageUrl: media.url } );
	};

	const removeImage = () => {
		setAttributes( { imageUrl: '' } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( "Button Settings", "why-qrolic-benefits-v2" ) }>
					<TextControl
						label={ __( "Button 1 URL", "why-qrolic-benefits-v2" ) }
						value={ buttonURL1 }
						onChange={ ( newURL ) => setAttributes( { buttonURL1: newURL } )}
					/>
					<TextControl
						label={ __( "Button 2 URL", "why-qrolic-benefits-v2" ) }
						value={ buttonURL2 }
						onChange={ ( newURL ) => setAttributes( { buttonURL2: newURL } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( "Display Settings", "why-qrolic-benefits-v2" ) }>
					<ToggleControl
						label={ __( "Show Buttons", "why-qrolic-benefits-v2" ) }
						checked={ showButtons }
						onChange={ (value ) => setAttributes( { showButtons: value } )}
					/>
					<ToggleControl
						label={ __( "Show List", "why-qrolic-benefits-v2" ) }
						checked={ showList }
						onChange={ ( value ) => setAttributes( { showList: value } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( "List Items", "why-qrolic-benefits-v2" ) }>
                    <Button
                        isSecondary
                        onClick={ addItem }
                    >
                        { __( "Add List Item", "why-qrolic-benefits-v2" ) }
                    </Button>
				</PanelBody>
			</InspectorControls>
			<div className="why-qt-benefits__inner_box" { ...useBlockProps() }>
				<div className="row">
					<div className="col-lg-8">
						<div className="why-qt-benefits__inner_text">
							<div className="why-qt-benefits__inner_text--heading">
								<RichText
									tagName="h2"
									value={ heading }
									onChange={ onChangeHeading }
									placeholder={ __( 'Enter heading...', 'why-qrolic-benefits-v2' ) }
								/>
								<RichText
									tagName="p"
									value={ description }
									onChange={ onChangeDescription }
									placeholder={__( 'Enter description...', 'why-qrolic-benefits-v2' ) }
									className="description-primary"
								/>
							</div>
							{showList && (
								<ul className="why-qt-benefits__inner_text--list">
									{items.map( ( item, index ) => (
										<li key={ index }>
											<TextControl
												tagName="i"
												value={ item.icon }
												onChange={ ( value ) => handleItemChange( index, 'icon', value ) }
												placeholder={ __( 'Add Icons Class', 'why-qrolic-benefits-v2' ) }
											/>
											<RichText
												tagName="span"
												value={ item.text }
												onChange={ ( value ) => handleItemChange( index, 'text', value ) } 
												placeholder={ __( 'Enter list item...', 'why-qrolic-benefits-v2' ) }
											/>
											<Button isDestructive onClick={ () => removeItem( index ) }>
												{ __( 'X', 'why-qrolic-benefits-v2' ) }
											</Button>
										</li>
									))}
								</ul>
							)}
							{showButtons && (
								<div className="why-qt-benefits__inner_text--button">
									<div>
										<RichText
											tagName="a"
											className="why-qt-benefits__btnwhite"
											target="_blank"
											rel="noopener noreferrer"
											placeholder={ __( "Button Text 1", "why-qrolic-benefits-v2" ) }
											value={ buttonText1 }
											onChange={ ( newText ) => setAttributes( { buttonText1: newText } ) }
										/>
									</div>
									<div>
										<RichText
											tagName="a"
											className="why-qt-benefits__btnlink"
											target="_self"
											rel="noopener noreferrer"
											placeholder={ __( "Button Text 2", "why-qrolic-benefits-v2" ) }
											value={ buttonText2 }
											onChange={ ( newText ) => setAttributes( { buttonText2: newText } ) }
										/>
									</div>
								</div>
							)}
						</div>
					</div>
					<div className="col-lg-4">
						<div className="why-qt-benefits__inner_image">
							{ imageUrl ? (
								<>
									<img src={ imageUrl } alt={ __( 'Uploaded image', 'why-qrolic-benefits-v2' ) } height="" width="" loading="lazy" />
									<Button isDestructive onClick={ removeImage }>
										{ __( 'X', 'why-qrolic-benefits-v2' ) }
									</Button>
								</>
							) : (
								<MediaUploadCheck>
									<MediaUpload
										onSelect={ onSelectImage }
										allowedTypes={ [ 'image' ] }
										render={ ( { open } ) => (
											<Button onClick={ open } isPrimary>
												{ __( 'Upload Image', 'why-qrolic-benefits-v2' ) }
											</Button>
										) }
									/>
								</MediaUploadCheck>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
