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
 * @return { Element } Element to render.
 */
export default function save( { attributes } ) {
	const { positionIcon, heading, description, position, positiondescription, imageUrl, imgWidth, imgHeight, mediaID, mediaURL, altText } = attributes;
	return (
		<section { ...useBlockProps.save() }>
			<div class="single-testimonial-img-editable">
				<div class="container p-0">
					<div class="single-testimonial-img-editable__inner">
						<div class="row">
							<div class="col-lg-3 col-md-4 col-12">
								<div class="single-testimonial-img-editable__inner_thumbnail">
									<img src={ imageUrl } alt="single-testimonial-img-editable" width={ imgWidth } height={ imgHeight } />
								</div>
							</div>
							<div class="col-lg-9 col-md-8 col-12 content-center">
								<div class="single-testimonial-img-editable__inner_heading">
									<h2>{ heading }</h2>
								</div>
								<div class="single-testimonial-img-editable__inner_content">
									<p class='single-testimonial-description'>{ description }</p>
								</div>
								<div class="single-testimonial-img-editable__inner_title">
									<div>
										<h3 class="single-testimonial-position">{ position }</h3>
										<div class="single-testimonial-img-editable__inner_title-position">
											<p class="single-testimonial-subdescription">{ positiondescription }</p>
											{ positionIcon && (
												<div dangerouslySetInnerHTML={ { __html: `<i class="${ positionIcon }"></i>` } } />
											) }
										</div>
									</div>
									<hr />
									<div className='single-testimonial-google-review'>
										{ mediaURL ? <img src={ mediaURL } alt={ attributes.altText } width="145" height="61" loading='lazy' /> : '' }
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
