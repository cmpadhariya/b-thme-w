import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  MediaUploadCheck,
  MediaUpload,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl, Button } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const {
    imageId,
    imageUrl,
    imgWidth,
    imgHeight,
    heading,
    description,
    position,
    positiondescription,
    mediaID,
    mediaURL,
    altText,
    quoteImage,
    className,
  } = attributes;

  const blockProps = useBlockProps();

  const onChangeHeading = ( newContent ) => {
    setAttributes({ heading: newContent });
  };

  const onChangeDescription = ( newContent ) => {
    setAttributes({ description: newContent });
  };

  const onChangePosition = ( newContent ) => {
    setAttributes({ position: newContent });
  };

  const onChangeHeight = ( newHeight ) => {
    setAttributes({ imgHeight: newHeight });
  };

  const onChangeWidth = ( newWidth ) => {
    setAttributes({ imgWidth: newWidth });
  };

  const onChangePositionDescription = ( newContent ) => {
    setAttributes({ positiondescription: newContent });
  };

  const onSelectImage = ( media )  => {
    setAttributes({
      imageUrl: media.url,
      imageId: media.id,
    });
  };

  const onRemoveImage = () => {
    setAttributes({
      imageUrl: "",
      imageId: 0,
    });
  };

  const onSelectReviewMedia = ( media ) => {
    setAttributes({
      mediaID: media.id,
      mediaURL: media.url,
      altText: media.alt,
    });
  };

  const onRemoveReviewMedia = () => {
    setAttributes({
      mediaID: null,
      mediaURL: "",
      altText: "",
    });
  };

  const onSelectQuoteImage = ( media ) => {
    setAttributes({
      quoteImage: {
        id: media.id,
        url: media.url,
        alt: media.alt,
      },
    });
  };

  const onRemoveQuoteImage = () => {
    setAttributes({
      quoteImage: {
        id: null,
        url: "",
        alt: "",
      },
    });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__( "Image Settings", "testimonial-editable-v2" )}>
          <TextControl
            label={__( "Add height", "testimonial-editable-v2" )}
            onChange={onChangeHeight}
            value={imgHeight}
          />
          <TextControl
            label={__( "Add width", "testimonial-editable-v2" )}
            onChange={onChangeWidth}
            value={imgWidth}
          />
        </PanelBody>
        <PanelBody title={__( "Quote Image", "testimonial-editable-v2" )}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectQuoteImage}
              allowedTypes={["image"]}
              value={quoteImage.id}
              render={({ open }) => (
                <div>
                  {!quoteImage.id ? (
                    <Button onClick={open} isPrimary>
                      {__( "Add Quote Image", "testimonial-editable-v2" )}
                    </Button>
                  ) : (
                    <div>
                      <img
                        src={quoteImage.url}
                        alt={quoteImage.alt}
                        width={imgWidth}
                        height={imgHeight}
                        loading="lazy"
                      />
                      <Button onClick={onRemoveQuoteImage} isLink isDestructive>
                        {__( "Remove Quote Image", "testimonial-editable-v2" )}
                      </Button>
                    </div>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>
      </InspectorControls>

      <section >
        <div className={`testimonial-editable-v2 ${className}`}>
          <div className="container p-0">
            <div className="testimonial-editable-v2__inner">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-12">
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={onSelectImage}
                      allowedTypes={["image"]}
                      value={imageId}
                      render={({ open }) => (
                        <div className="testimonial-editable-v2__inner_thumbnail">
                          {!imageId ? (
                            <Button onClick={open} isDefault>
                              {__( "Upload Media", "testimonial-editable-v2" )}
                            </Button>
                          ) : (
                            <div>
                              <img
                                src={imageUrl}
                                alt="testimonial client image"
                                width={imgWidth}
                                height={imgHeight}
                                loading="lazy"
                              />
                              <br />
                              <Button
                                onClick={onRemoveImage}
                                isLink
                                isDestructive
                              >
                                {__( "Remove Image", "testimonial-editable-v2" )}
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                    />
                  </MediaUploadCheck>
                </div>
                <div className="col-lg-9 col-md-8 col-12 content-center back-end-content-center">
                  <div className="testimonial-editable-v2__inner_heading">
                    <RichText
                      tagName="h2"
                      placeholder={__( "Main Heading", "testimonial-editable-v2" )}
                      value={heading}
                      onChange={onChangeHeading}
                    />
                  </div>
                  <div className="testimonial-editable-v2__inner_content full-width-textarea">
                    <TextareaControl
                      tagName="p"
                      placeholder={__( "Description", "testimonial-editable-v2" )}
                      value={description}
                      onChange={onChangeDescription}
                      className="testimonial-description "
                    />
                  </div>
                  <div className="testimonial-editable-v2__inner_title">
                    <div>
                      <RichText
                        tagName="h3"
                        placeholder={__( "Enter position", "testimonial-editable-v2" )}
                        value={position}
                        onChange={onChangePosition}
                        className="single-testimonial-position"
                      />
                      <div className="testimonial-editable-v2__inner_title-position">
                        <RichText
                          tagName="p"
                          placeholder={__( "Position Description", "testimonial-editable-v2" )}
                          value={positiondescription}
                          onChange={onChangePositionDescription}
                          className="single-testimonial-subdescription"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="single-testimonial-google-review">
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={onSelectReviewMedia}
                          allowedTypes={["image"]}
                          value={mediaID}
                          render={({ open }) => (
                            <div>
                              {!mediaID ? (
                                <Button onClick={open} isPrimary>
                                  {__( "Add Review Image", "testimonial-editable-v2" )}
                                </Button>
                              ) : (
                                <div>
                                  <img
                                    src={mediaURL}
                                    alt={altText}
                                    width="145"
                                    height="61"
                                    loading="lazy"
                                  />
                                  <Button
                                    onClick={onRemoveReviewMedia}
                                    isLink
                                    isDestructive
                                  >
                                    {__( "Remove Review Image", "testimonial-editable-v2" )}
                                  </Button>
                                </div>
                              )}
                            </div>
                          )}
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
