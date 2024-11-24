/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
import { TextControl } from "@wordpress/components";
export default function save(props) {
	const {
		attributes: { imageUrl, iconclass },
		setAttributes,
	} = props;
	const blockProps = useBlockProps.save();

	return (
		<section {...blockProps} >
			<div class="contact-info-v2">
				<div class="container p-0">
					<div class="contact-info-v2__heading">
						<RichText.Content
							tagName="h1"
							value={props.attributes.mainheading}
						/>
						<RichText.Content
							tagName="p"
							value={props.attributes.topdescription}
							className='description-primary'
						/>
					</div>
					<div class="contact-info-v2__inner">
						<div class="row">
							<div class="col-lg-7 col-md-12 col-sm-12 col-12">
								<div class="contact-info-v2__inner_form">
									<RichText.Content
										tagName="div"
										value={props.attributes.contactform}
									/>
								</div>
							</div>
							<div class="col-lg-5 col-md-12 col-sm-12 col-12">
								<div class="contact-info-v2__inner_information">
									<RichText.Content
										tagName="h2"
										value={props.attributes.heading}
										className="contact-change-heading"
									/>
									<div class="contact-info-v2__inner_information-email">
										<i className="icon-mail"></i>
										<div class="contact-info-v2__inner_information-email--content">
											<RichText.Content
												tagName="p"
												value={props.attributes.email}
												className="description-secondary"
											/>
											<a href={props.attributes.emaillink}>
												<RichText.Content
													value={props.attributes.emailtext}
												/>
											</a>
										</div>
									</div>
									<div className="contact-info-v2__inner_information-phone">
										<i className="icon-phone"></i>
										<div className="contact-info-v2__inner_information-phone--content">
											<RichText.Content
												tagName="p"
												value={props.attributes.number}
												className="description-secondary"
											/>
											<a href={props.attributes.numberlink}>
												<RichText.Content
													value={props.attributes.numbertext}
												/>
											</a>
										</div>
									</div>
									<div className="contact-info-v2__inner_information-address">
										<i className="icon-location-v2"></i>
										<div className="contact-info-v2__inner_information-address--content">
											<RichText.Content
												tagName="p"
												value={props.attributes.addresstext}
												className="description-secondary"
											/>
										</div>
									</div>

									<div class="contact-info__inner_information--icons">
										<RichText.Content
											tagName="h3"
											value={props.attributes.socialtext}
										/>
										<ul>
											<li className="linkedin-contactus">
												<a
													href={props.attributes.linkedin}
													class="icon-linkedin"
													aria-label="LinkedIn"
												></a>
											</li>
											<li className="facebook-contactus">
												<a
													href={props.attributes.facebook}
													class="icon-facebook"
													aria-label="Facebook"
												></a>
											</li>
											<li className="instagram-contactus">
												<a
													href={props.attributes.instagram}
													class="icon-instagram"
													aria-label="Instagram"
												></a>
											</li>
											<li className="twitter-contactus">
												<a
													href={props.attributes.twitter}
													class="icon-twitter-v2"
													aria-label="Twitter"
												></a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="contact-info-v2__bookcall">
						<RichText.Content
							tagName="p"
							value={props.attributes.centertext}
							className='description-primary line-description'
						/>
						<RichText.Content
							tagName="h2"
							value={props.attributes.secondheading}
							className='contact-second-heading'
						/>
						<div className="contact-info-v2__bookcall_jumpcall">
							<div className="contact-info-v2__bookcall_box">
								<div className="background-img"></div>
								<div className="contact-info-v2__bookcall_box-img">
								{imageUrl && (
									<img src={imageUrl} alt="contact-image" width={props.attributes.imgwidth} height={props.attributes.imgheight} loading="lazy" />
								)}
								</div>
								<div className="contact-info-v2__bookcall_box-content">
								<div className="contact-info-v2__bookcall_box-heading">
									<RichText.Content
										tagName="h2"
										value={props.attributes.callheading}
										className='contact-call-heading'
									/>
									<RichText.Content
										tagName="p"
										value={props.attributes.calldescription}
										className='description-primary contact-call-description'
									/>
								</div>	
								<div className="contact-info-v2__bookcall_box-button">
									<a href={props.attributes.callbuttonlink} className="button button-primary button-large" target="_blank" rel="noopener">{props.attributes.callbutton}</a>
									<i className={iconclass} ></i>
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
