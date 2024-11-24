/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the className name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save(props) {
	const { attributes, setAttributes } = props;
	const {
		heading,
		subheading,
		facebook,
		twitter,
		instagram,
		linkedin,
		whatsapp,
		facebooktext,
		twittertext,
		instagramtext,
		linkedintext,
		whatsapptext,
	} = attributes;
	return (
		<section  { ...useBlockProps.save() }>
			<div className="follow-us section-padding">
				<div className="container p-0">
					<div className="follow-us__inner">
						<div className="follow-us__inner_heading">
							<RichText.Content tagName="h2" value={heading} />
							<RichText.Content tagName="p" value={subheading} />
						</div>
						<div className="follow-us__inner_social-icon">
							<ul>
								<li>
									<a href={linkedin} className="icon-linkedin">
										<RichText.Content tagName="span" value={linkedintext} />
									</a>
								</li>
								<li>
									<a href={twitter} className="icon-twitter">
										<RichText.Content tagName="span" value={twittertext} />
									</a>
								</li>
								<li>
									<a href={facebook} className="icon-facebook">
										<RichText.Content tagName="span" value={facebooktext} />
									</a>
								</li>
								<li>
									<a href={instagram} className="icon-instagram">
										<RichText.Content tagName="span" value={instagramtext} />
									</a>
								</li>
								<li>
									<a href={whatsapp} className="icon-whatsapp">
										<RichText.Content tagName="span" value={whatsapptext} />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
