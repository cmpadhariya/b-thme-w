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
import { useBlockProps,RichText } from '@wordpress/block-editor';
import { TextControl } from "@wordpress/components";

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
		attributes: { heading,description,partnerform },
		setAttributes,
	} = props;
	const blockProps = useBlockProps();
	const onChangeHeading = (newHeading) => {
		setAttributes({ heading: newHeading });
	};

	const onChangeDescription = (newDescription) => {
		setAttributes({ description: newDescription });
	};

	const onChangePartnerform = (newPartner) => {
		setAttributes({ partnerform: newPartner });
	};
	return (
		<section { ...useBlockProps() } id='partner-form'>
			<div className='partner-hero'>
				<div className='container p-0'>
					<div className='partner-hero__inner'>
						<div className='row justify-content-between'>
							<div className='col-lg-7 col-md-7 col-12'>
								<div className='partner-hero__text'>
									<RichText
										tagName='h1'
										className='title'
										onChange={onChangeHeading}
										placeholder='Heading'
										value={heading} />
									<RichText {...blockProps}
										tagName='p'
										onChange={onChangeDescription}
										placeholder='Short description'
										className='description'
										value={description} />
								</div>
							</div>
							<div className='col-lg-4 col-md-5 col-12'>
								<div className='partner-hero__form'>
									<TextControl
										tagName="div"
										onChange={onChangePartnerform}
										placeholder="Add your partner form shortcode"
										value={partnerform}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
