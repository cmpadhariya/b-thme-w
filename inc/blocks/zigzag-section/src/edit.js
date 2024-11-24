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
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { image,altText,content, description, alignment, textButton,button_url,mediaID, mediaURL } = attributes;
	const blockProps = useBlockProps();

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	};

	const onChangeDescription = (newDescription) => {
		setAttributes({ description: newDescription });
	};

	const onChangebtn = ( newContent ) => {
		setAttributes( { textButton: newContent } );
	};

	function onChangebtnURL ( content ) {
		setAttributes({button_url: content})
	}

	const onSelectMedia = (media) => {
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
	return (
		<section {...useBlockProps()}>
			<div class="zigzag">
				<div class="container p-0">
				<div class="zigzag__inner">
					<InspectorControls key="styles">
						<PanelBody title="Image Alignment">
							<SelectControl
								label="Alignment"
								value={alignment}
								options={[
									{ label: 'Left', value: 'left' },
									{ label: 'Right', value: 'right' },
								]}
								onChange={onChangeAlignment}
							/>
						</PanelBody>
						<PanelBody title="All Button Link Settings">
							<TextControl format="string" label="Add Button Link" onChange={onChangebtnURL} value={button_url} />
						</PanelBody>
					</InspectorControls>
					<div className={`zigzag__inner_image align${alignment}`}>
						<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectMedia}
							allowedTypes={["image"]}
							value={mediaID}
							render={({ open }) => (
							<div>
								{!mediaID && (
								<Button onClick={open} isDefault>
									Select Media
								</Button>
								)}
								{mediaID && (
								<div>
									{attributes.mediaURL ? (
									<img src={attributes.mediaURL} alt={attributes.altText} width="559" height="373" />
									) : (
									"Upload Image"
									)}
									<Button onClick={onRemoveMedia} isLink isDestructive>
									 Remove
									</Button>
								</div>
								)}
							</div>
							)}
						/>
						</MediaUploadCheck>
					</div>
					<div className={`zigzag__inner_text`}>
						<RichText
							tagName='h2'
							onChange={onChangeContent}
							placeholder='title'
							value={content} />
						<RichText {...blockProps}
							tagName='p'
							onChange={onChangeDescription}
							placeholder='Short description'
							className='description-primary'
							value={description} />
						<RichText
							tagName="a"
							target="_self"
							rel="noreferrer noopener"
							value={textButton}
							onChange={onChangebtn}
						/>
					</div>
				</div>
				</div>
			</div>
		</section>
	);
}