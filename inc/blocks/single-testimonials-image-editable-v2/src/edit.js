import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls, RichText, MediaUploadCheck, MediaUpload } from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import "./editor.scss";

export default function Edit( { attributes, setAttributes } ) {
  const { imageId, imageUrl, imgWidth, imgHeight, positionIcon, heading, description, position, positiondescription, mediaID, mediaURL, altText } = attributes;
  const blockProps = useBlockProps();

  const onChangeIcon = ( newIconClass ) => {
    setAttributes( { positionIcon: newIconClass } );
  };

  const onChangeHeading = ( newContent ) => {
    setAttributes({ heading: newContent });
  };

  const onChangeDescription = ( newContent ) => {
    setAttributes({ description: newContent });
  };

  const onChangeH3heading = ( newContent ) => {
    setAttributes( { position: newContent } );
  };

  const onChangeHeight = ( newHeight ) => {
    setAttributes( { imgHeight: newHeight } );
  };

  const onChangeWidth = ( newWidth ) => {
    setAttributes( { imgWidth: newWidth } );
  };

  const onChangePositiondescription = ( newContent ) => {
    setAttributes( { positiondescription: newContent } );
  };

  const onSelectImage = ( media ) => {
    setAttributes( {
      imageUrl: media.url,
      imageId: media.id,
    } );
  };

  const onRemoveImage = () => {
    setAttributes( {
        imageUrl: undefined,
        imageId: undefined,
    } );
  };

  const onSelectReviewMedia = ( media ) => {
		setAttributes( {
		    mediaID: media.id,
		  	mediaURL: media.url,
		  	altText: media.alt,
		} );
	  };
	
	const onRemoveReviewMedia = () => {
		setAttributes( {
			mediaID: null,
			mediaURL: null,
			altText: null,
		} );
	};

  return (
    <>
      <InspectorControls>
        <PanelBody>
          <TextControl label={ __( "Add icon class", "single-testimonial-img-editable-v2" ) } onChange={ onChangeIcon } value={ positionIcon } />
          <TextControl label={ __( "Add height", "single-testimonial-img-editable-v2" ) } onChange={ onChangeHeight } value={ imgHeight } />
          <TextControl label={ __( "Add width", "single-testimonial-img-editable-v2" ) } onChange={ onChangeWidth } value={ imgWidth } />
        </PanelBody>
      </InspectorControls>

      <section { ...blockProps }>
        <div className="single-testimonial-img-editable">
          <div className="container p-0">
            <div className="single-testimonial-img-editable__inner">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-12">
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={ onSelectImage }
                      allowedTypes={ [ "image" ] }
                      value={ imageId }
                      render={ ( { open } ) => (
                        <div className="single-testimonial-img-editable__inner_thumbnail">
                          { !imageId && (
                            <Button onClick={ open } isDefault>
                              Upload Media
                            </Button>
                          ) }
                          { imageId && (
                            <div>
                              { attributes.imageUrl ? (
                                <img src={ attributes.imageUrl } alt="single-testimonial-img-editable" width={ imgWidth } height={ imgHeight } />
                              ) : (
                                "Upload Image"
                              ) } <br />
                              <Button onClick={ onRemoveImage } isLink isDestructive>
                                X
                              </Button>
                            </div>
                          ) }
                        </div>
                      ) }
                    />
                  </MediaUploadCheck>
                </div>
                <div className="col-lg-9 col-md-8 col-12 content-center">
                  <div className="single-testimonial-img-editable__inner_heading">
                    <RichText
                      tagName="h2"
                      placeholder={ __( 'Main Heading', 'qrolic' ) }
                      value={ heading }
                      onChange={ onChangeHeading }
                    />
                  </div>
                  <div className="single-testimonial-img-editable__inner_content">
                    <RichText
                      tagName="p"
                      placeholder={ __( 'Write Here Employee Review Description', 'qrolic' ) }
                      value={ description }
                      onChange={ onChangeDescription }
                      className="single-testimonial-description"
                    />
                  </div>
                  <div className="single-testimonial-img-editable__inner_title">
                    <div>  
                      <RichText
                        tagName="h3"
                        placeholder={ __( 'Enter Employee Name', 'qrolic' ) }
                        value={ position }
                        onChange={ onChangeH3heading }
                        className="single-testimonial-position"
                      />
                      <div class="single-testimonial-img-editable__inner_title-position">
                        <RichText
                          tagName="p"
                          placeholder={ __( 'Enter Employee Position', 'qrolic' ) }
                          value={ positiondescription }
                          onChange={ onChangePositiondescription }
                          className="single-testimonial-subdescription"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="single-testimonial-google-review">
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={ onSelectReviewMedia }
                          allowedTypes={ [ "image" ] }
                          value={ mediaID }
                          render={ ( { open } ) => (
                          <picture>
                            { !mediaID && (
                            <Button onClick={ open } isPrimary className="icon-doc-add">
                              <span className='add-items'>Add Review Image</span>
                            </Button>
                            ) }
                            { mediaID && (
                            <>
                              { attributes.mediaURL ? (
                              <img src={ attributes.mediaURL } alt={ attributes.altText } width="145" height="61" />
                              ) : (
                                "Upload Image"
                              ) } <br />
                              <Button onClick={onRemoveReviewMedia} isLink isDestructive>{ __( 'X', 'qrolic' ) }</Button>
                            </>
                            ) }
                          </picture>
                          ) }
                        />
                      </MediaUploadCheck>
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
