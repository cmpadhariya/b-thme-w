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
		attributes: { heading,items },
		setAttributes,
	} = props;
	const blockProps = useBlockProps();

	const onChangeHeading = (newContent) => {
		setAttributes({ heading: newContent });
	};
	const addItem = () => {
		const newItem = { id: new Date().getTime(), title: '', link: '' };
		setAttributes({ items: [...items, newItem] });
	};

	const removeItem = (id) => {
		const updatedItems = items.filter((item) => item.id !== id);
		setAttributes({ items: updatedItems });
	};

	const updateItemTitle = (id, title) => {
		const updatedItems = items.map((item) =>
		item.id === id ? { ...item, title } : item
		);
		setAttributes({ items: updatedItems });
	};

	const updateItemDescription = (id, description) => {
		const updatedItems = items.map((item) =>
		item.id === id ? { ...item, description } : item
		);
		setAttributes({ items: updatedItems });
	};

	return (		 
		<div class="col-lg-6 col-md-6 col-12 m-bottom">
			<div className='internship-types__inner_box'>
				<RichText
					tagName='span'
					onChange={onChangeHeading}
					placeholder='heading'
					value={heading} 
					className='description-primary'
				/>
				<InspectorControls>
					<PanelBody title={ __( 'Internship Content Info' ) }>
						<PanelRow>
							<label>Add Content:</label>
							<Button onClick={addItem}>
								{__('+', 'rich-text-list-save-block')}
							</Button>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				{items.map((item) => (
					<div key={item.id} className='content'>
						<RichText
							tagName="h3"
							placeholder={__('Enter text', 'rich-text-list-save-block')}
							value={item.title}
							onChange={(title) => updateItemTitle(item.id, title)}
						/>
						<RichText
							tagName="p"
							className='description-secondary'
							placeholder={__('Enter text', 'rich-text-list-save-block')}
							value={item.description}
							onChange={(description) => updateItemDescription(item.id, description)}
						/>
						<Button onClick={() => removeItem(item.id)}>
						{__('-', 'rich-text-list-save-block')}
						</Button>
					</div>
				))}
			</div>
		</div>
	);
}
