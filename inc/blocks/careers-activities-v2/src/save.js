/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { sectionTitle, sectionDescription, activities } = attributes;
	return (
		<section { ...useBlockProps.save() }>
			<div className='careers-activities'>
				<div className='container p-0'>
					<div className='careers-activities__inner'>
						<div className='row justify-content-center'>
							<div className='col-lg-9 col-md-12 col-12'>
								<div className='careers-activities__inner--top'>
									<h2>{sectionTitle}</h2>
									<p className='description-primary'>{sectionDescription}</p>
								</div>
							</div>
						</div>
						<div className='row'>
							{activities.map((activity, index) => (
								<div key={index} className='col-lg-4 col-md-6 col-sm-6 col-12'>
									<div className='careers-activities__inner--activity'>
										{activity.images && activity.images.length > 0 && (
											<div className='activity-slider splide'>
												<div class="splide__track">
													<div className='splide__list'>
														{activity.images.map((imageUrl, imgIndex) => (
															<div key={imgIndex} className='splide__slide'>
																<img src={imageUrl} alt={`Activity Image ${imgIndex}`} loading="lazy" width="305" height="381" />
															</div>
														))}
													</div>
												</div>
												<div class="careers-slider-progress">
    												<div class="careers-slider-progress-bar"></div>
  												</div>
											</div>
										)}
										<div class="activity-overlay-wrapper">
											<div className='activity-overlay'>
												<h3 className='description-secondary'>{activity.title}</h3>
												<p>{activity.description}</p>
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
	);
}
