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
import { Button, PanelBody, IconButton } from '@wordpress/components';

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
export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { items, sectiontitle, sectiontitlealignment } = attributes;
	const blockProps = useBlockProps();

	const onChangeSectionTitle = (newContent) => {
		setAttributes({ sectiontitle: newContent });
	};

	const addItem = () => {
		const newItems = [...items, { imageUrl: '', heading: '', description: '' }];
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

	const onSelectImage = (index, media) => {
		const newItems = [...items];
		newItems[index].imageUrl = media.url;
		setAttributes({ items: newItems });
	};

	const removeImage = (index) => {
		const newItems = [...items];
		newItems[index].imageUrl = '';
		setAttributes({ items: newItems });
	};

	return (
		<section {...useBlockProps()}>
			<div className="our-solution">
				<div className="container p-0">
					<div className="our-solution__inner">
						<div className='row row-wrapper'>
							{items.map((item, index) => (
								<div className="col-lg-6 col-md-6 col-12 right-width" key={index} >
									<div className="our-solution__inner_box">
										<div className='row'>
											<div className="col-4">
												<div className="our-solution__inner_box-img">
													{item.imageUrl ? (
														<>
															<img src={item.imageUrl} alt={item.heading} width="167" height="167" />
															<Button onClick={() => removeImage(index)} className="button button-small">
																{__('X', 'qrolic')}
															</Button>
														</>
													) : (
														<MediaUploadCheck>
															<MediaUpload
																onSelect={(media) => onSelectImage(index, media)}
																allowedTypes={['image']}
																render={({ open }) => (
																	<>
																		<Button onClick={open} isPrimary className="icon-doc-add">
																			<span className='add-items'>Add Items</span>
																		</Button>
																	</>
																)}
															/>
														</MediaUploadCheck>
													)}
												</div>
											</div>
											<div className="col-8">
												<div className="our-solution__inner_box-content">
													<RichText
														tagName="h3"
														placeholder={__('Heading', 'qrolic')}
														value={item.heading}
														onChange={(value) => updateItem(index, 'heading', value)}
													/>
													<RichText
														tagName="p"
														className='description-secondary'
														placeholder={__('Description', 'qrolic')}
														value={item.description}
														onChange={(value) => updateItem(index, 'description', value)}
													/>
												</div>
											</div>
										</div>
										<Button onClick={() => removeItem(index)}>
											{__('X', 'rich-text-list-save-block')}
										</Button>
									</div>
								</div>
							))}
						</div>
						<InspectorControls key="styles">
							<PanelBody title="Process Settings">
								<Button onClick={addItem} className='icon-doc-add'>
									{__('+ Add Our Process', 'qrolic')}
								</Button>
							</PanelBody>
						</InspectorControls>
					</div>
				</div>
			</div>
		</section>
	);
}
