import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { items } = attributes;

	const handleItemChange = (index, field, value) => {
		const newItems = [...items];
		newItems[index] = { ...newItems[index], [field]: value };
		setAttributes({ items: newItems });
	};

	const addItem = () => {
		setAttributes({ items: [...items, { title: '', description: '', icon: '', imageUrl: '' }] });
	};

	const removeItem = (index) => {
		setAttributes({ items: items.filter((_, i) => i !== index) });
	};

	const onSelectImage = (index, image) => {
		handleItemChange(index, 'imageUrl', image.url);
	};

	const removeImage = (index) => {
		handleItemChange(index, 'imageUrl', '');
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__( 'Settings', 'why-qrolic-services-v2' )} initialOpen={true}>
					<Button isPrimary onClick={addItem}>
						{__( 'Add Item', 'why-qrolic-services-v2' )}
					</Button>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()}>
				<div className="why-qt-services">
					<div className="container p-0">
						<div className="why-qt-services__inner">
							<div className="row">
								{items.map((item, index) => (
									<div className="col-lg-4 col-md-6 col-sm-6" key={index}>
										<div className="why-qt-services__inner_item">
											<div className="why-qt-services__inner_item--icon">
												{!item.imageUrl ? (
													<>
														<RichText
															tagName="span"
															value={item.icon}
															onChange={(value) => handleItemChange(index, 'icon', value)}
															placeholder={__( 'Add Icons Class', 'why-qrolic-services-v2' )}
														/>
														<MediaUploadCheck>
															<MediaUpload
																onSelect={(image) => onSelectImage(index, image)}
																allowedTypes={['image']}
																value={item.imageUrl}
																render={({ open }) => (
																	<Button onClick={open} isSecondary className="upload-image-button">
																		{__( 'Upload Image', 'why-qrolic-services-v2' )}
																	</Button>
																)}
															/>
														</MediaUploadCheck>
													</>
												) : (
													<>
														<img src={item.imageUrl} alt={__( 'Benefits Icon', 'why-qrolic-services-v2' )} className="service-image" width="72" height="72" loading="lazy" />

														<Button
															isDestructive
															onClick={() => removeImage(index)}
															className="remove-image-button"
														>
															{__( 'X', 'why-qrolic-services-v2' )}
														</Button>
													</>
												)}
											</div>
											<div className="why-qt-services__inner_item--text">
												<RichText
													tagName="h3"
													value={item.title}
													onChange={(value) => handleItemChange(index, 'title', value)}
													placeholder={__( 'Benefit Title', 'why-qrolic-services-v2' )}
												/>
												<RichText
													tagName="p"
													value={item.description}
													onChange={(value) => handleItemChange(index, 'description', value)}
													placeholder={__( 'Benefit Description', 'why-qrolic-services-v2' )}
													className='description-secondary'
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
