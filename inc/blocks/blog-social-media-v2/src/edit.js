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
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
const { Button, PanelBody, TextControl } = wp.components;

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
export default function Edit( props ) {
	const {
		attributes: { heading, boxwidth },
		setAttributes,
	} = props;

	const onChangeHeading = ( newContent ) => {
		setAttributes({ heading: newContent });
	};

	const onChangeBoxwidth = ( newContent ) => {
		setAttributes({ boxwidth: newContent });
	};

	return (
		<section >
			<InspectorControls>
				<PanelBody>
					<TextControl label={__( "Add width", "box width" )} onChange={ onChangeBoxwidth } value={ boxwidth } />
				</PanelBody>
			</InspectorControls>
			<div className='blog-social-media-block' {...useBlockProps()}>
				<div class="container p-0">
					<div className="blog-social-media-block__inner" style={{ width: `${boxwidth}` }}>
						<div className="blog-social-media-block__inner_heading">
							<RichText
								placeholder={__( "Add Heading", "qrolic" )}
								value={ heading }
								onChange={ onChangeHeading }
								tagName='p'
								className='description-secondary heading-color'
							/>
						</div>
						<div className="blog-social-media-block__inner_icon">
							<ul>
								<li>
									<a href='#'>
										<i class="icon-facebook-v2"></i>
									</a>
								</li>
								<li>
									<a href='#'>
										<i class="icon-twitter-v2"></i>
									</a>
								</li>
								<li>
									<a href='#'>
										<i class="icon-linked-in"></i>
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
