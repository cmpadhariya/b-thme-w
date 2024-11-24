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
import { useBlockProps,RichText,MediaUpload,MediaUploadCheck,InspectorControls } from '@wordpress/block-editor';
const { PanelBody, SelectControl,TextControl,Button } = wp.components;

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
export default function Edit({ attributes, setAttributes }) {
	const { subtitle,title,description,mediaID,mediaURL,altText,boxTitleOne,boxDescriptionOne,boxTitleTwo,boxDescriptionTwo,boxIconOne,boxIconTwo,imageHeight,imageWidth } = attributes;

	const onChangeSubtitle = ( newSubtitle ) => {
		setAttributes({ subtitle: newSubtitle });
	};

	const onChangeTitle = ( newTitle ) => {
		setAttributes({ title: newTitle });
	};

	const onChangeDescription = ( newDescription ) => {
		setAttributes({ description: newDescription });
	};

	const onSelectMedia = ( media ) => {
		setAttributes({
		  	mediaID: media.id,
		  	mediaURL: media.url,
		  	altText: media.alt,
		});
	  };
	
	const onRemoveMedia = () => {
		setAttributes({
			mediaID: null,
			mediaURL: null,
			altText: null,
		});
	};
	
	const onChangeBoxTitleOne = ( newBoxTitleOne ) => {
		setAttributes({ boxTitleOne: newBoxTitleOne });
	};

	const onChangeBoxDescriptionOne = ( newBoxDescriptionOne ) => {
		setAttributes({ boxDescriptionOne: newBoxDescriptionOne });
	};

	const onChangeBoxTitleTwo = ( newBoxTitleTwo ) => {
		setAttributes({ boxTitleTwo: newBoxTitleTwo });
	};

	const onChangeBoxDescriptionTwo = ( newBoxDescriptionTwo ) => {
		setAttributes({ boxDescriptionTwo: newBoxDescriptionTwo });
	};

	const onChangeBoxIconOne = ( newBoxIconOne ) => {
        setAttributes({ boxIconOne: newBoxIconOne });
    };

	const onChangeBoxIconTwo = ( newBoxIconTwo ) => {
        setAttributes({ boxIconTwo: newBoxIconTwo });
    };

	const onChangeImageHeight = ( newImageHeight ) => {
		setAttributes({ imageHeight: newImageHeight });
	};

	const onChangeImageWidth = ( newImageWidth ) => {
		setAttributes({ imageWidth: newImageWidth });
	};
	return (
		<>
		<InspectorControls>
			<PanelBody>
				<TextControl format="string" label="Add Image height" onChange={onChangeImageHeight} value={imageHeight} />
				<TextControl format="string" label="Add Image width" onChange={onChangeImageWidth} value={imageWidth} />
			</PanelBody>
		</InspectorControls>
		<section { ...useBlockProps() }>
			<div className='our-partner'>
				<div className='container p-0'>
					<div className='our-partner__inner'>
						<div className='row align-items-center'>
							<div className='col-lg-6 col-md-12 col-12'>
								<div className='our-partner__inner_image'>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={onSelectMedia}
											allowedTypes={["image"]}
											value={mediaID}
											render={({ open }) => (
											<div>
												{!mediaID && (
												<Button onClick={open} isPrimary className="icon-doc-add">
													<span className='add-items'>Add Items</span>
												</Button>
												)}
												{mediaID && (
												<div>
													{attributes.mediaURL ? (
													<img src={attributes.mediaURL} alt={attributes.altText} width={imageWidth} height={imageHeight} />
													) : (
														"Upload Image"
													)}
													<Button onClick={onRemoveMedia} isDestructive>{__('X', 'qrolic')}</Button>
												</div>
												)}
											</div>
											)}
										/>
									</MediaUploadCheck>
								</div>
							</div>
							<div className='col-lg-6 col-md-12 col-12'>
								<div className='our-partner__inner_content'>
									<RichText
										tagName='p'
										className='subtitle subtitle-heading'
										onChange={onChangeSubtitle}
										placeholder={__('subtitle', 'qrolic')}
										value={subtitle} 
									/>
									<RichText
										tagName='h2'
										onChange={onChangeTitle}
										placeholder={__('section title', 'qrolic')}
										value={title} 
									/>
									<RichText
										tagName='p'
										className='description-secondary'
										onChange={onChangeDescription}
										placeholder={__('section description', 'qrolic')}
										value={description} 
									/>
									<div className='content-wrapper'>
										<div className='content-box'>
											<div className='content-box__image'>
												<RichText
													tagName="span"
													placeholder={__('Icon class', 'qrolic')}
													value={boxIconOne}
													onChange={onChangeBoxIconOne}
												/>
											</div>
											<div className='content-box__description'>
												<RichText
													tagName='h3'
													onChange={onChangeBoxTitleOne}
													placeholder={__('title', 'qrolic')}
													value={boxTitleOne} 
													className='description-primary'
												/>
												<RichText
													tagName='p'
													onChange={onChangeBoxDescriptionOne}
													placeholder={__('description', 'qrolic')}
													value={boxDescriptionOne}
													className='description-secondary' 
												/>
											</div>
										</div>
										<hr></hr>
										<div className='content-box'>
											<div className='content-box__image'>
												<RichText
													tagName="span"
													placeholder={__('Icon class', 'qrolic')}
													value={boxIconTwo}
													onChange={onChangeBoxIconTwo}
												/>
											</div>
											<div className='content-box__description'>
												<RichText
													tagName='h3'
													onChange={onChangeBoxTitleTwo}
													placeholder={__('title', 'qrolic')}
													value={boxTitleTwo}
													className='description-primary' 
												/>
												<RichText
													tagName='p'
													onChange={onChangeBoxDescriptionTwo}
													placeholder={__('description', 'qrolic')}
													value={boxDescriptionTwo} 
													className='description-secondary'
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	);
}
