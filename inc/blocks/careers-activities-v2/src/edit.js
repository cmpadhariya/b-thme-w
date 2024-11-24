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
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
const { PanelBody, SelectControl, TextControl, Button, TextareaControl, ToggleControl } = wp.components;

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
export default function Edit({ attributes, setAttributes }) {
	const { sectionTitle, sectionDescription, activities = [] } = attributes;

	const onChangeSectionTitle = ( newSectionTitle ) => {
		setAttributes({ sectionTitle: newSectionTitle });
	};

	const onChangeSectionDescription = ( newSectionDescription ) => {
		setAttributes({ sectionDescription: newSectionDescription });
	};

	const addActivity = () => {
		const newActivity = [...activities, { images: [], title: '', description: '' }];
		setAttributes({ activities: newActivity });
	};

	const removeActivity = (index) => {
		const newActivities = [...activities];
		newActivities.splice(index, 1);
		setAttributes({ activities: newActivities });
	};

	const updateActivity = (index, field, value) => {
		const newActivities = [...activities];
		newActivities[index][field] = value;
		setAttributes({ activities: newActivities });
	};

	const addImage = (index, media) => {
		const newActivities = [...activities];
		if (!Array.isArray(newActivities[index].images)) {
			newActivities[index].images = [];
		}
		newActivities[index].images = [...newActivities[index].images, media.url];
		setAttributes({ activities: newActivities });
	};

	const removeImage = (activityIndex, imageIndex) => {
		const newActivities = [...activities];
		newActivities[activityIndex].images.splice(imageIndex, 1);
		setAttributes({ activities: newActivities });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Activities Settings', 'qrolic')}>
                    <Button isPrimary onClick={addActivity}>
                        {__('+ Add Activities', 'qrolic')}
                    </Button>
                </PanelBody>
			</InspectorControls>
			<section { ...useBlockProps() }>
				<div className='careers-activities'>
					<div className='container p-0'>
						<div className='careers-activities__inner'>
							<div className='row justify-content-center'>
								<div className='col-lg-9 col-md-12 col-12'>
									<div className='careers-activities__inner--top'>
										<RichText
											tagName="h2"
											placeholder={__('Main title', 'qrolic')}
											value={sectionTitle}
											onChange={onChangeSectionTitle}
											className="main-title"
										/>
										<RichText
											tagName="p"
											placeholder={__('Main description', 'qrolic')}
											value={sectionDescription}
											onChange={onChangeSectionDescription}
											className="description-primary"
										/>
									</div>
								</div>
							</div>
							<div className='row'>
								{activities.map((activity, index) => (
									<div key={index} className='col-lg-4 col-md-6 col-sm-6 col-12 height-increase'>
										<div className='careers-activities__inner--activity'>
											<MediaUploadCheck>
												<MediaUpload
													onSelect={(media) => addImage(index, media)}
													allowedTypes={["image"]}
													render={({ open }) => (
														<Button onClick={open} isPrimary className="icon-doc-add">
															<span className='add-items'>{__('Add Images', 'qrolic')}</span>
														</Button>
													)}
												/>
											</MediaUploadCheck>
											<Button isDestructive onClick={() => removeActivity(index)}>
												{__('Remove Activities', 'qrolic')}
											</Button>
											{activity.images && activity.images.length > 0 && (
												<div className='activity-slider splide'>
													<div class="splide__track">
														<div className='splide__list'>
															{activity.images.map((image, imgIndex) => (
																<div key={imgIndex} className='splide__slide'>
																	<img src={image} alt={`Activity Image ${imgIndex}`} />
																	<Button onClick={() => removeImage(index, imgIndex)} isDestructive>{__('X', 'qrolic')}</Button>
																</div>
															))}
														</div>
													</div>
												</div>
											)}
											<div class="activity-overlay-wrapper editor-overlay">
												<div className='activity-overlay'>
													<RichText
														tagName="h3"
														className='description-secondary'
														placeholder={__('Title', 'qrolic')}
														value={activity.title}
														onChange={(value) => updateActivity(index, 'title', value)}
													/>
													<RichText
														tagName="p"
														className=""
														placeholder={__('Description', 'qrolic')}
														value={activity.description}
														onChange={(value) => updateActivity(index, 'description', value)}
													/>
												</div>
											</div>
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
