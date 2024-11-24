/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,RichText } from '@wordpress/block-editor';
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
export default function save( props ) {
	const {
		attributes: { },
		setAttributes,
	} = props;
	const blockProps = useBlockProps.save();
	return (
		<section { ...useBlockProps.save() } id='partner-form'>
			<div className='partner-hero'>
				<div className='container p-0'>
					<div className='partner-hero__inner'>
						<div className='row justify-content-between'>
							<div className='col-lg-7 col-md-7 col-12'>
								<div className='partner-hero__text'>
									<RichText.Content
										tagName='h1'
										className='title'
										value={props.attributes.heading} 
									/>
									<RichText.Content {...blockProps}
										tagName='p'
										className='description'
										value={props.attributes.description} 
									/>
								</div>
							</div>
							<div className='col-lg-4 col-md-5 col-12'>
								<div className='partner-hero__form'>
									<RichText.Content
										tagName="div"
										value={props.attributes.partnerform}
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
