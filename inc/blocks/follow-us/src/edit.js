/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

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
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

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

	const onChangeheading = (newContent) => {
		setAttributes({ heading: newContent });
	};
	const onChangesubheading = (newContent) => {
		setAttributes({ subheading: newContent });
	};

	const onChangetwitter = (newContent) => {
		setAttributes({ twitter: newContent });
	};
	const onChangefacebook = (newContent) => {
		setAttributes({ facebook: newContent });
	};
	const onChangeinstagram = (newContent) => {
		setAttributes({ instagram: newContent });
	};
	const onChangelinkedin = (newContent) => {
		setAttributes({ linkedin: newContent });
	};
	const onChangewhatsapp = (newContent) => {
		setAttributes({ whatsapp: newContent });
	};

	const onChangetwittertext = (newContent) => {
		setAttributes({ twittertext: newContent });
	};
	const onChangefacebooktext = (newContent) => {
		setAttributes({ facebooktext: newContent });
	};
	const onChangeinstagramtext = (newContent) => {
		setAttributes({ instagramtext: newContent });
	};
	const onChangelinkedintext = (newContent) => {
		setAttributes({ linkedintext: newContent });
	};
	const onChangewhatsapptext = (newContent) => {
		setAttributes({ whatsapptext: newContent });
	};

	return (
		<section {...useBlockProps()}>
			<div className="follow-us section-padding">
				<div className="container p-0">
					<div className="follow-us__inner">
						<div className="follow-us__inner_heading">
							<RichText
								tagName="h2"
								onChange={onChangeheading}
								placeholder="Title"
								value={heading}
							/>
							<RichText
								tagName="p"
								onChange={onChangesubheading}
								placeholder="Sub Heading"
								value={subheading}
							/>
						</div>
						<div className="follow-us__inner_social-icon">
							<ul>
								<li>
									<InspectorControls>
										<TextControl
											label="Add linkedin icon Link"
											onChange={onChangelinkedin}
											value={linkedin}
										/>
									</InspectorControls>
									<a href={linkedin} className="icon-linkedin">
										<RichText
											tagName="span"
											onChange={onChangelinkedintext}
											placeholder="Linkedin"
											value={linkedintext}
										/>
									</a>
								</li>
								<li>
									<InspectorControls>
										<TextControl
											label="Add twitter icon Link"
											onChange={onChangetwitter}
											value={twitter}
										/>
									</InspectorControls>
									<a href={twitter} className="icon-twitter">
										<RichText
											tagName="span"
											onChange={onChangetwittertext}
											placeholder="Twitter"
											value={twittertext}
										/>
									</a>
								</li>
								<li>
									<InspectorControls>
										<TextControl
											label="Add facebook icon Link"
											onChange={onChangefacebook}
											value={facebook}
										/>
									</InspectorControls>
									<a href={facebook} className="icon-facebook">
										<RichText
											tagName="span"
											onChange={onChangefacebooktext}
											placeholder="Facebook"
											value={facebooktext}
										/>
									</a>
								</li>
								<li>
									<InspectorControls>
										<TextControl
											label="Add instagram icon Link"
											onChange={onChangeinstagram}
											value={instagram}
										/>
									</InspectorControls>
									<a href={instagram} className="icon-instagram">
										<RichText
											tagName="span"
											onChange={onChangeinstagramtext}
											placeholder="Instagram"
											value={instagramtext}
										/>
									</a>
								</li>
								<li>
									<InspectorControls>
										<TextControl
											label="Add Whatsapp icon Link"
											onChange={onChangewhatsapp}
											value={whatsapp}
										/>
									</InspectorControls>
									<a href={whatsapp} className="icon-whatsapp">
										<RichText
											tagName="span"
											onChange={onChangewhatsapptext}
											placeholder="Whatsapp"
											value={whatsapptext}
										/>
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
