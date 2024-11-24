import { RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const {
		title,
		description,
		SectionPadding,
		sectionDescription,
		icon,
		testimonials,
	} = attributes;

	return (
		<div className={`career-testimonial-editable ${SectionPadding}`}>
			<div className="container p-0">
				<div className="career-testimonial-editable__top">
					<div className="row align-items-center">
						<div class="col-lg-8 col-md-12 col-12 mx-auto">
							<RichText.Content tagName="h2" value={title} />
							<RichText.Content
								tagName="p"
								className="description-primary"
								value={description}
							/>
						</div>
					</div>
				</div>
				<div className="career-testimonial-editable__inner">
					<div className="row">
						{testimonials.map((testimonial, index) => (
							<div key={index} className="col-lg-4 col-md-6 col-12 m-bottom">
								<div className="career-testimonial-editable__inner_box">
									<div className="career-testimonial-editable__inner_box--image">
										{testimonial.image && (
											<img
												src={testimonial.image}
												alt={`Client image ${index + 1}`}
												width="113"
												height="113"
												loading="lazy"
											/>
										)}
									</div>
									<div className="career-testimonial-editable__inner_box--content">
										<ul className="star-rating">
											{[...Array(5)].map((_, i) => (
												<li key={i} className="icon-star"></li>
											))}
										</ul>

										<RichText.Content
											tagName="p"
											className="career-testimonial-editable__inner_box--content-text"
											value={testimonial.review}
										/>
										<div className="post-meta">
											<RichText.Content tagName="h3" value={testimonial.name} />

											{testimonial.position && (
												<p className="client-position">
													{testimonial.position}
												</p>
											)}
											<div className="career-testimonial-editable__inner_box--content-bottom-image">
												{testimonial.reviewImage && (
													<img
														src={testimonial.reviewImage}
														alt={`Client review image ${index + 1}`}
														width="71"
														height="30"
														loading="lazy"
													/>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
