import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	Button,
	IconButton,
	TextControl,
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		description,
		SectionPadding,
		testimonials = [],
	} = attributes;

	const updateTestimonial = (index, field, value) => {
		const updatedTestimonials = [...testimonials];
		updatedTestimonials[index] = {
			...updatedTestimonials[index],
			[field]: value,
		};
		setAttributes({ testimonials: updatedTestimonials });
	};

	const addTestimonial = () => {
		setAttributes({
			testimonials: [
				...testimonials,
				{ image: "", review: "", name: "", position: "", reviewImage: "" },
			],
		});
	};

	const removeTestimonial = (index) => {
		const updatedTestimonials = testimonials.filter((_, i) => i !== index);
		setAttributes({ testimonials: updatedTestimonials });
	};

	const onImageSelect = (index, media) => {
		updateTestimonial(index, "image", media.url);
	};

	const removeImage = (index) => {
		updateTestimonial(index, "image", "");
	};

	const onReviewImageSelect = (index, media) => {
		updateTestimonial(index, "reviewImage", media.url);
	};

	const removeReviewImage = (index) => {
		updateTestimonial(index, "reviewImage", "");
	};

	useEffect(() => {
		if (testimonials.length === 0) {
			addTestimonial();
		}
	}, []);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Block Settings", "career-testimonials-section-v2")} >
					<PanelRow>
						<TextControl
							label={__(
								"Section Padding Class",
								"career-testimonials-section-v2",
							)}
							value={SectionPadding}
							onChange={(value) => setAttributes({ SectionPadding: value })}
						/>
					</PanelRow>
					<PanelBody
						title={__("Manage Testimonials", "career-testimonials-section-v2")}
					>
						<Button isPrimary onClick={addTestimonial}>
							{__("Add Testimonials ", "career-testimonials-section-v2")}
						</Button>
						{testimonials.map((_, index) => (
							<PanelRow key={index}>
								<TextControl
									label={`${__(
										"Testimonial",
										"career-testimonials-section-v2",
									)} ${index + 1}`}
									value={`Testimonial ${index + 1}`}
									readOnly
								/>

								<IconButton
									icon="trash"
									onClick={() => removeTestimonial(index)}
									label={__("X Testimonial", "career-testimonials-section-v2")}
								/>
							</PanelRow>
						))}
					</PanelBody>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className={`career-testimonial-editable ${SectionPadding}`}>
					<div className="container p-0">
						<div className="career-testimonial-editable__top">
							<div className="row align-items-center">
								<div class="col-lg-8 col-md-12 col-12 mx-auto">
									<RichText
										tagName="h2"
										value={title}
										onChange={(newTitle) => setAttributes({ title: newTitle })}
										placeholder={__(
											"Enter section title...",
											"career-testimonials-section-v2",
										)}
									/>
									<RichText
										tagName="p"
										className="description-primary"
										value={description}
										onChange={(newDescription) =>
											setAttributes({ description: newDescription })
										}
										placeholder={__(
											"Enter description...",
											"career-testimonials-section-v2",
										)}
									/>
								</div>
							</div>
						</div>
						<div className="career-testimonial-editable__inner">
							<div className="row">
								{testimonials.map((testimonial, index) => (
									<div key={index} className="col-lg-4 col-md-6 col-12 m-top-back-end">
										<div className="career-testimonial-editable__inner_box">
											<div className="career-testimonial-editable__inner_box--image">
												<MediaUploadCheck>
													<MediaUpload
														onSelect={(media) => onImageSelect(index, media)}
														allowedTypes={["image"]}
														value={testimonial.image}
														render={({ open }) => (
															<>
																{testimonial.image ? (
																	<Button
																		onClick={() => removeImage(index)}
																		isSecondary
																	>
																		{__("X", "career-testimonials-section-v2")}
																	</Button>
																) : (
																	<Button onClick={open} isSecondary>
																		{__("+", "career-testimonials-section-v2")}
																	</Button>
																)}
															</>
														)}
													/>
												</MediaUploadCheck>
												{testimonial.image && (
													<div>
														<img
															src={testimonial.image}
															alt={`Testimonial Image ${index + 1}`}
															width="113"
															height="113"
															className="career-testimonial-editable__inner_box--image-img"
															loading="lazy"
														/>
													</div>
												)}
											</div>
											<div className="career-testimonial-editable__inner_box--content">
												<ul className="star-rating">
													{[...Array(5)].map((_, i) => (
														<li key={i} className="icon-star"></li>
													))}
												</ul>
												<RichText
													tagName="p"
													className="career_testimonials__inner_box--content-text"
													value={testimonial.review}
													onChange={(value) =>
														updateTestimonial(index, "review", value)
													}
													placeholder={__(
														"Enter review...",
														"career-testimonials-section-v2",
													)}
												/>
												<div className="post-meta">
													<RichText
														tagName="h3"
														className="employed-review"
														value={testimonial.name}
														onChange={(value) =>
															updateTestimonial(index, "name", value)
														}
														placeholder={__(
															"Enter name...",
															"career-testimonials-section-v2",
														)}
													/>
													<RichText
														tagName="p"
														className="client-position"
														value={testimonial.position}
														onChange={(value) =>
															updateTestimonial(index, "position", value)
														}
														placeholder={__(
															"Enter position...",
															"career-testimonials-section-v2",
														)}
													/>
													<div className="career-testimonial-editable__inner_box--content-bottom-image">
														<MediaUploadCheck>
															<MediaUpload
																onSelect={(media) => onReviewImageSelect(index, media)}
																allowedTypes={["reviewImage"]}
																value={testimonial.reviewImage}
																render={({ open }) => (
																	<>
																		{testimonial.reviewImage ? (
																			<Button
																				onClick={() => removeReviewImage(index)}
																				isSecondary
																			>
																				{__("X", "career-testimonials-section-v2")}
																			</Button>
																		) : (
																			<Button onClick={open} isSecondary>
																				{__("+", "career-testimonials-section-v2")}
																			</Button>
																		)}
																	</>
																)}
															/>
														</MediaUploadCheck>
														{testimonial.reviewImage && (
															<div>
																<img
																	src={testimonial.reviewImage}
																	alt={`Testimonial ReviewImage ${index + 1}`}
																	width="71"
																	height="30"
																	className="career-testimonial-editable__inner_box--image-img"
																	loading="lazy"
																/>
															</div>
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
			</div>
		</>
	);
}
