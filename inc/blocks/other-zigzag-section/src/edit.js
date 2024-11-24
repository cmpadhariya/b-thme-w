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
export default function Edit( { attributes, setAttributes } ) {
	const { image,altText,heading, description, alignment, heading_url,mediaID, mediaURL,downloadbtn_text, downloadbtn_url, docsbtn_text, docsbtn_url } = attributes;
	const blockProps = useBlockProps();

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const onChangeHeading = (newHeading) => {
		setAttributes({ heading: newHeading });
	};

	const onChangeDescription = (newDescription) => {
		setAttributes({ description: newDescription });
	};

	function onChangeheadingURL ( content ) {
		setAttributes({heading_url: content})
	}

	const onChangedownloadbtn = ( newContent ) => {
		setAttributes( { downloadbtn_text: newContent } );
	};

	function onChangedownloadbtnURL ( content ) {
		setAttributes( { downloadbtn_url: content } )
	}

	const onChangedocsbtn = ( newContent ) => {
		setAttributes( { docsbtn_text: newContent } );
	};

	function onChangedocsbtnURL ( content ) {
		setAttributes( { docsbtn_url: content } )
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
							<TextControl format="string" label="Add Plugin Title Link" onChange={onChangeheadingURL} value={heading_url} />
							<TextControl format="string" label="Add Download Button Link" onChange={onChangedownloadbtnURL} value={downloadbtn_url} />
							<TextControl format="string" label="Add Docs Button Link" onChange={onChangedocsbtnURL} value={docsbtn_url} />
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
							onChange={onChangeHeading}
							placeholder='title'
							value={heading} 
							className='title'
							/>
						<RichText {...blockProps}
							tagName='p'
							onChange={onChangeDescription}
							placeholder='Short description'
							className='description-primary'
							value={description} />
						<div className="zigzag-buttons">
							<div id='button-plugin' className='zigzag-buttons__two'>
								<RichText
									tagName="a"
									target="_self"
									rel="noreferrer noopener"
									value={downloadbtn_text}
									onChange={onChangedownloadbtn}
								/>
								<RichText
									tagName="a"
									target="_self"
									rel="noreferrer noopener"
									value={docsbtn_text}
									onChange={onChangedocsbtn}
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
