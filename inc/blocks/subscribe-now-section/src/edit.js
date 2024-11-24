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
import { useBlockProps,RichText,MediaUpload,MediaUploadCheck } from '@wordpress/block-editor';
const { TextControl,Button } = wp.components;

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
		attributes: { title,description,subscribeform,imageUrl,altText },
		setAttributes,
	} = props;
	const blockProps = useBlockProps();
	const onChangeTitle = (newContent) => {
		setAttributes({ title: newContent });
	};

	const onChangeDescription = (newDescription) => {
		setAttributes({ description: newDescription });
	};

	const onChangesubscribeform = (newContent) => {
		setAttributes({ subscribeform: newContent });
	};
	const onSelectImage = (media) => {
		setAttributes({
		  imageUrl: media.url,
		  altText: media.alt,
		});
	};
	const onRemoveImage = () => {
		setAttributes({
		  imageUrl: '',
		  altText: '',
		});
	  };
	return (
		<section { ...useBlockProps() }>
			<div className='subscribe'>
				<div className='container p-0'>
					<div className='row justify-content-center'>
						<div className='col-lg-10 col-md-12 col-12'>
							<div className='subscribe__inner'>
								
								<MediaUploadCheck>
									<MediaUpload
									onSelect={onSelectImage}
									allowedTypes={['image']}
									value={imageUrl}
									render={({ open }) => (
										imageUrl ?
										<div>
											{imageUrl && <img src={imageUrl} alt={altText} />} <br></br>
											{imageUrl && <Button onClick={onRemoveImage}>Remove Image</Button>}
										</div> : 
										<Button onClick={open}>Upload Image</Button>
									)}
									/>
								</MediaUploadCheck>
								<RichText
									tagName='h2'
									onChange={onChangeTitle}
									placeholder='Title'
									value={title} />
								<RichText {...blockProps}
									tagName='p'
									onChange={onChangeDescription}
									placeholder='Short description'
									className='description-primary'
									value={description} />
								<TextControl
									{...blockProps}
									tagName="div"
									onChange={onChangesubscribeform}
									placeholder="Subscribe Form "
									value={subscribeform}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
