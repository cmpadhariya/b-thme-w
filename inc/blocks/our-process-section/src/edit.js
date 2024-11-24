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
import { useBlockProps,RichText,InspectorControls } from '@wordpress/block-editor';
const { Button,PanelBody,RadioControl } = wp.components;

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
export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { items, sectiontitle, sectiontitlealignment } = attributes;
	const blockProps = useBlockProps();
	const onChangeSectionTitle = (newContent) => {
		setAttributes({ sectiontitle: newContent });
	};
	const addItem = () => {
		const newItems = [...items, { number: '', heading: '', description: '' }];
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
			<div className='process'>
				<div className='container p-0'>
					<div className={`process__heading ${sectiontitlealignment === "center" ? "text-center" : ""}`}>
						<RichText
							tagName='h2'
							onChange={onChangeSectionTitle}
							placeholder='title'
							value={sectiontitle} 
						/>
					</div>
					<div className='process__inner'>
						<div className='row'>
							{items.map((item, index) => (
							<div className='col-lg-3 col-md-6 col-sm-6 col-12'>
								<div className='process__box'>
									<div className='block'>
										<RichText
											tagName='h2'
											placeholder='00'
											value={item.number}
											onChange={(value) => updateItem(index, 'number', value)}
										/>
									</div>
									<div className='content'>
										<RichText
											tagName='h3'
											placeholder='Heading'
											value={item.heading}
											onChange={(value) => updateItem(index, 'heading', value)}
										/>
										<RichText 
											tagName='p'
											placeholder='Description'
											value={item.description}
											onChange={(value) => updateItem(index, 'description', value)}
										/>
									</div>
								</div>
								<Button onClick={() => removeItem(index)}>
									{__('- Remove Box', 'rich-text-list-save-block')}
								</Button>
							</div>
							))}
							<InspectorControls key="styles">
								<PanelBody title="Process Settings">
									<RadioControl
										label={__("Section Title Alignment", "qrolic")}
										selected={sectiontitlealignment}
										options={[
											{ label: "Left", value: "left" },
											{ label: "Center", value: "center" },
										]}
										onChange={(value) => setAttributes({ sectiontitlealignment: value })}
									/>
									<Button onClick={addItem}>
										{__('+ Add Our Process', 'custom-gutenberg-block')}
									</Button>
								</PanelBody>
							</InspectorControls>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
