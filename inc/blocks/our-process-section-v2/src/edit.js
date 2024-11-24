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
import { useBlockProps, RichText, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';

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
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { processItems, Heading, subTitle } = attributes;
	const blockProps = useBlockProps();

	const addItem = () => {
		const newItems = [ ...processItems, { image: '', title: '', description: '', iconclass: '', altText: '' } ];
		setAttributes( { processItems: newItems } );
	};

	const removeItem = ( index ) => {
		const newItems = [ ...processItems ];
		newItems.splice( index, 1 );
		setAttributes( { processItems: newItems } );
	};

	const updateItem = ( index, field, value, alt = '' ) => {
		const newItems = [ ...processItems ];
		newItems[ index ][ field ] = value;
		if ( field === 'image' ) {
			newItems[ index ].altText = alt;
		}
		setAttributes( { processItems: newItems } );
	};

	const onChangeHeading = ( newHeading ) => {
		setAttributes( { Heading: newHeading } );
	};

	const onChangeSubTitle = ( newSubTitle ) => {
		setAttributes( { subTitle: newSubTitle } );
	};

	return (
		<section { ...blockProps }>
			<div className="our-process">
				<div className="container p-0">
					<div className="our-process__inner">
						<div className="our-process__inner_heading">
							<RichText
								tagName="p"
								placeholder={ __( 'Add SubTitle', 'our-process-section-v2' ) }
								value={ subTitle }
								onChange={ onChangeSubTitle }
								className="subtitle"
							/>
							<RichText
								tagName="h2"
								placeholder={ __( 'Add Title', 'our-process-section-v2' ) }
								value={ Heading }
								onChange={ onChangeHeading }
							/>
						</div>
						<div className="row">
							{ processItems.map( ( item, index ) => (
								<div className="our-process_col col-lg-3 col-md-6 col-sm-6 col-12" key={ index }>
									<div className="our-process__inner_items">
										<MediaUpload
											onSelect={ ( media ) => updateItem( index, 'image', media.url, media.alt ) }
											render={ ( { open } ) => (
												<div className="image">
													{ item.image && <img src={ item.image } alt={ item.altText } /> }
													<div className="image-inner">
														<Button onClick={ open }>
															{ __( '+ Add Image', 'our-process-section-v2' ) }
														</Button>
														{ item.image && (
															<Button onClick={ () => updateItem( index, 'image', '' ) } className="remove-button">
																{ __( '- Remove Image', 'our-process-section-v2' ) }
															</Button>
														) }
													</div>
												</div>
											) }
										/>
										<span className="icon-text">{ __( ' Add icon class', 'our-process-section-v2' ) }</span>
										<TextControl
											placeholder={ __( 'Add icon class', 'our-process-section-v2' ) }
											value={ item.iconclass }
											onChange={ ( value ) => updateItem( index, 'iconclass', value ) }
										/>
										<RichText
											tagName="h3"
											placeholder={ __( 'Title', 'our-process-section-v2' ) }
											value={ item.title }
											onChange={ ( value ) => updateItem( index, 'title', value ) }
										/>
										<RichText
											tagName="p"
											className="description-secondary"
											placeholder={ __( 'Description', 'our-process-section-v2' ) }
											value={ item.description }
											onChange={ ( value ) => updateItem( index, 'description', value ) }
										/>
										<Button onClick={ () => removeItem( index ) } className="remove-item-button">
											{ __( 'X - Remove Process Item', 'our-process-section-v2' ) }
										</Button>
									</div>
								</div>
							) ) }
						</div>
						<InspectorControls key="settings">
							<PanelBody title={ __( 'Add Our Process Items', 'our-process-section-v2' ) }>
								<Button onClick={ addItem }>
									{ __( '+ Add Process Item', 'our-process-section-v2' ) }
								</Button>
							</PanelBody>
						</InspectorControls>
					</div>
				</div>
			</div>
		</section>
	);
}
