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
import { useBlockProps,RichText,MediaUpload,InspectorControls } from '@wordpress/block-editor';
const { Button,PanelBody,TextControl} = wp.components;

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
	const { items } = attributes;
	const blockProps = useBlockProps();
	const addItem = () => {
		const newItems = [...items, { title: '', iconclass: '' }];
		setAttributes({ items: newItems });
	};

	const removeItem = (index) => {
		const newItems = [...items];
		newItems.splice(index, 1);
		setAttributes({ items: newItems });
	};

	const updateItem = (index, field, value) => {
		const newItems = [...items];
		newItems[index][field] = value;
		setAttributes({ items: newItems });
	};
	return (
		<section { ...useBlockProps() }>
			<div className='icon-text'>
				<div className='container'>
					<div className='row'>
						{items.map((item, index) => (
							<div className='col-lg-2 col-md-2 col-sm-4 col-6 m-bottom'>
								<div className='icon-text__box'>
									<span className='icon-text'>Below you can add the icon class</span>
									<TextControl 
										placeholder='Add icon class'
										value={item.iconclass}
										onChange={(value) => updateItem(index, 'iconclass', value)}
									/>
									<RichText
										tagName='p'
										placeholder='Title'
										value={item.title}
										onChange={(value) => updateItem(index, 'title', value)}
									/>
									<Button onClick={() => removeItem(index)}>
										{__('- Remove Box', 'rich-text-list-save-block')}
									</Button>
								</div>
							</div>
						))}
						<InspectorControls key="styles">
							<PanelBody title="Icon and Text Settings">
								<Button onClick={addItem}>
									{__('+ Add Item', 'custom-gutenberg-block')}
								</Button>
							</PanelBody>
						</InspectorControls>
					</div>
				</div>
			</div>
		</section>
	);
}
