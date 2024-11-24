/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the className name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,RichText,InspectorControls,URLInput } from '@wordpress/block-editor';
const { TextControl,Button,PanelBody,PanelRow } = wp.components;
import { useState } from 'react';

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
export default function Edit( props ) {
	const {
		attributes: { items,heading, subheading, description, descriptiontext, descriptionlink, relatedservice },
		setAttributes,
	} = props;
	const blockProps = useBlockProps();

	const onChangeHeading = (newContent) => {
		setAttributes({ heading: newContent });
	};

	const onChangeSubHeading = (newContent) => {
		setAttributes({ subheading: newContent });
	};

	const onChangeDescription = (newContent) => {
		setAttributes({ description: newContent });
	};

	const onChangeDescriptionText = (newContent) => {
		setAttributes({ descriptiontext: newContent });
	};

	const onChangeDescriptionLink = (newContent) => {
		setAttributes({ descriptionlink: newContent });
	};

	const onChangeRelatedService = (newContent) => {
		setAttributes({ relatedservice: newContent });
	};

	const addItem = () => {
		const newItem = { id: new Date().getTime(), text: '', link: '' };
		setAttributes({ items: [...items, newItem] });
	};

	const removeItem = (id) => {
		const updatedItems = items.filter((item) => item.id !== id);
		setAttributes({ items: updatedItems });
	};

	const updateItemText = (id, text) => {
		const updatedItems = items.map((item) =>
		item.id === id ? { ...item, text } : item
		);
		setAttributes({ items: updatedItems });
	};

	const updateItemLink = (id, link) => {
		const updatedItems = items.map((item) =>
		item.id === id ? { ...item, link } : item
		);
		setAttributes({ items: updatedItems });
	};
	return (
		<div className="services-headings section-padding">
			<div className="services-headings__inner">
				<div className="container p-0">
					<div className="row justify-content-center">
						<div className="col-lg-9 col-md-10 col-12">
							<RichText {...blockProps}
								tagName='h1'
								onChange={onChangeHeading}
								placeholder='heading'
								value={heading} 
							/>
							<RichText {...blockProps}
								tagName='p'
								className='description-primary'
								onChange={onChangeSubHeading}
								placeholder='sub heading'
								value={subheading} 
							/>
							<InspectorControls>
								<PanelBody title={ __( 'Services Headings Info' ) }>
									<PanelRow>
										<label>Add Service:</label>
										<Button onClick={addItem}>
											{__('+', 'rich-text-list-save-block')}
										</Button>
									</PanelRow>
									<TextControl label="Add Service Link" onChange={onChangeDescriptionLink} value={descriptionlink} />
								</PanelBody>
							</InspectorControls>
							<ul>
								<li><RichText {...blockProps}
										onChange={onChangeDescription}
										placeholder='Description'
										className='description-secondary'
										value={description} 
									/>
									<a href='#'>
										<RichText {...blockProps}
											onChange={onChangeDescriptionText}
											placeholder='Description Text'
											value={descriptiontext}
										/> 
									</a>
								</li>
								<li>
									<RichText {...blockProps}
										onChange={onChangeRelatedService}
										placeholder='Description'
										value={relatedservice} 
									/>
									<ul className="sub-menu">
										{items.map((item) => (
											<li key={item.id}>
												<RichText
													tagName="a"
													placeholder={__('Enter text', 'rich-text-list-save-block')}
													value={item.text}
													onChange={(text) => updateItemText(item.id, text)}
												/>
												<InspectorControls>
													<label>Related Service Link</label>
													<URLInput
														value={item.link}
														onChange={(link) => updateItemLink(item.id, link)}
													/>
												</InspectorControls>
												<Button onClick={() => removeItem(item.id)}>
													{__('Remove', 'rich-text-list-save-block')}
												</Button>
											</li>
										))}
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
