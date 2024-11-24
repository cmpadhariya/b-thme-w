/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function Save(props) {
	const { Heading, content, buttonText1, buttonURL1, buttonTarget } =
		props.attributes;

	return (
		<section id="callto-action" {...useBlockProps.save()}>
			<div className="callto-action">
				<div className="container p-0">
					<div className="callto-action__inner">
						<div className="row">
							<div className="col-lg-8 col-md-7 col-sm-12">
								<div className="callto-action__inner_text">
									<div className="callto-action__inner_text--title">
										<RichText.Content tagName="h2" value={Heading} />
									</div>
									<div className="callto-action__inner_text--discription">
										<RichText.Content
											tagName="p"
											value={content}
											className="subtitle"
										/>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-5 col-sm-12 d-flex align-items-center justify-content-lg-end justify-content-md-end justify-content-start ">
								<div className="callto-action__inner_btn">
									<a
										href={buttonURL1}
										target={buttonTarget}
										rel="noopener noreferrer"
									>
										<RichText.Content
											tagName="span"
											className="button-text1"
											value={buttonText1}
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
