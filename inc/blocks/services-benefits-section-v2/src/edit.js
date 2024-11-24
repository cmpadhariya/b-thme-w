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
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, TextareaControl } from '@wordpress/components';

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
export default function Edit({ attributes, setAttributes }) {
	const { sectionTitle, sectionDescription, benefitsItems } = attributes;

	const handleTitleChange = ( value ) => {
		setAttributes({ sectionTitle: value });
	};

	const handleDescriptionChange = ( value ) => {
		setAttributes({ sectionDescription: value });
	};

	const handleItemChange = ( index, field, value ) => {
		const newItems = [...benefitsItems];
		newItems[index] = { ...newItems[index], [field]: value };
		setAttributes({ benefitsItems: newItems });
	};

	const addItem = () => {
		setAttributes({ benefitsItems: [...benefitsItems, { title: '', description: '', icon: '' }] });
	};

	const removeItem = ( index ) => {
		setAttributes({ benefitsItems: benefitsItems.filter((_, i) => i !== index) });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'services-benefits-section-v2')} initialOpen={true}>
					<Button
						isPrimary
						onClick={addItem}
					>
						{__('Add Item', 'services-benefits-section-v2')}
					</Button>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()}>
				<div className="services-benefits">
					<div className="container p-0">
						<div className="services-benefits__inner">
							<div className="services-benefits__inner_heading">
								<RichText
									tagName="h2"
									value={sectionTitle}
									onChange={handleTitleChange}
									placeholder={__( "Section Title", "services-benefits-section-v2" )}
								/>
								<RichText
									tagName="p"
									value={sectionDescription}
									onChange={handleDescriptionChange}
									placeholder={__( "Section Description", "services-benefits-section-v2" )}
								/>
							</div>
							<div className="row">
								{benefitsItems.map((item, index) => (
									<div className="col-sm-6" key={index}>
										<div className="services-benefits__inner_items">
											<div className="services-benefits__inner_items--icon">
												<RichText
													tagName="span"
													value={item.icon}
													onChange={(value) => handleItemChange(index, 'icon', value)}
													placeholder={__( "Benefit Icons", "services-benefits-section-v2" )}
												/>
											</div>
											<div className="services-benefits__inner_items--text">
												<RichText
													tagName="h3"
													value={item.title}
													onChange={(value) => handleItemChange(index, 'title', value)}
													placeholder={__( "Benefit Title", "services-benefits-section-v2" )}
												/>
												<TextareaControl
													tagName="p"
													value={item.description}
													onChange={(value) => handleItemChange(index, 'description', value)}
													placeholder={__( "Benefit Description", "services-benefits-section-v2" )}
												/>
											</div>
											<button className='remove-benefits-item-btn' onClick={() => removeItem(index)}>x</button>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
