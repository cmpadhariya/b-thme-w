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
 *sssss
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
	const { items,Heading } = attributes;
	const blockProps = useBlockProps();
	const addItem = () => {
            const newItems = [...items, { image: '', title: '', description: '', iconclass: '',Heading: '' }];
            setAttributes({ items: newItems });
        };

		const removeItem = (index) => {
			const newItems = [...items];
			newItems.splice(index, 1);
			setAttributes({ items: newItems });
		};

        const updateItem = (index, field, value, alt) => {
            const newItems = [...items];
            newItems[index][field] = value;
			newItems[index]['altText'] = alt;
            setAttributes({ items: newItems });
        };

		const onChangeHeading = (newHeading) => {
			setAttributes({ Heading: newHeading });
		  };
	return (
		<div className='single-service' { ...useBlockProps() }>
			<div className='single-service__inner'>
				<div className='container p-0'>
				<div className='single-service__inner_heading'>
							<RichText {...blockProps}
									tagName='h2'
									placeholder='Title'
									value={Heading}
									onChange={onChangeHeading}
								/>
							</div>
					<div className='row'>
					{items.map((item, index) => (
						<div className='col-lg-4 col-md-6 col-sm-6 col-12'>
							<div className='single-service__inner_content' id={index}>
								<MediaUpload
									onSelect={(media) => updateItem(index, 'image', media.url, media.alt)}
									render={({ open }) => (
									<div className='image'>
										{item.image && <img src={item.image} alt={item.altText} />}
										<div className='image-inner'>										<Button onClick={open}>
											{__('+ Add Image', 'custom-gutenberg-block')}
										</Button>
										{item.image && (
											<Button onClick={() => updateItem(index, 'image', '')} className="remove-button">
												{__('- Remove Image', 'custom-gutenberg-block')}
											</Button>
            							)}
										</div>
									</div>
									)}
								/>
								<span className='icon-text'>Below you can add the icon class</span>
								<TextControl 
									placeholder='Add icon class'
									value={item.iconclass}
									onChange={(value) => updateItem(index, 'iconclass', value)}
								/>
								<RichText {...blockProps}
									tagName='h3'
									placeholder='Title'
									value={item.title}
									onChange={(value) => updateItem(index, 'title', value)}
								/>
								<RichText {...blockProps}
									tagName='p'
									className='description-primary'
									placeholder='Description'
									value={item.description}
									onChange={(value) => updateItem(index, 'description', value)}
								/>
							</div>
							<Button onClick={() => removeItem(index)}>
								{__('- Remove Box', 'rich-text-list-save-block')}
							</Button>
						</div>
						))}
						<InspectorControls key="styles">
							<PanelBody title="Service Settings">
								<Button onClick={addItem}>
									{__('+ Add Item', 'custom-gutenberg-block')}
								</Button>
							</PanelBody>
						</InspectorControls>
					</div>
				</div>
			</div>
		</div>
	);
}
