import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const {
    imageUrl,
    logoUrl,
    quote,
    authorName,
    authorPosition,
    authorImageUrl,
  } = attributes;

  const onSelectImage = ( media ) => {
    setAttributes({ imageUrl: media.url });
  };

  const onRemoveImage = () => {
    setAttributes({ imageUrl: "" });
  };

  const onSelectLogo = ( media ) => {
    setAttributes({ logoUrl: media.url });
  };

  const onRemoveLogo = () => {
    setAttributes({ logoUrl: "" });
  };

  const onSelectAuthorImage = ( media ) => {
    setAttributes({ authorImageUrl: media.url });
  };

  const onRemoveAuthorImage = () => {
    setAttributes({ authorImageUrl: "" });
  };

  return (
    <div {...useBlockProps()}>
      <div className="testimonial-image-editable-v2">
        <div class="container p-0">
          <div className="testimonial-image-editable-v2__inner">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="testimonial-image-editable-v2__inner_image">
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={ onSelectImage }
                      allowedTypes={[ "image" ]}
                      render={({ open }) => (
                        <>
                          {!imageUrl ? (
                            <Button onClick={ open }>{__( "Upload Image", "qrolic" )}</Button>
                          ) : (
                            <>
                              <img
                                src={imageUrl}
                                alt={__( "Image" )}
                                className="img-fluid"
                                loading="lezy"
                                width={500}
                                height={468}
                                loading="lazy"
                              />
                             <Button onClick={onRemoveImage} isDestructive>
                                {__( "X", "qrolic" )}
                              </Button>
                            </>
                          )}
                        </>
                      )}
                    />
                  </MediaUploadCheck>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="testimonial-image-editable-v2__inner_details">
                  <div className="testimonial-image-editable-v2__inner_details--logo">
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={onSelectLogo}
                        allowedTypes={[ "image" ]}
                        render={({ open }) => (
                          <>
                           {!logoUrl ? (
                              <Button onClick={open}>
                                {__( "Upload Logo", "qrolic" )}
                              </Button>
                            ) : (
                              <>
                                <img
                                  src={logoUrl}
                                  alt={__( "Logo" )}
                                  className="testimonial-logo"
                                  width={162}
                                  height={39}
                                  loading="lazy"
                                />
                                <Button onClick={onRemoveLogo} isDestructive>
                                {__( "X", "qrolic" )}
                                </Button>
                              </>
                            )}
                          </>
                        )}
                      />
                    </MediaUploadCheck>
                  </div>
                  <div className="testimonial-image-editable-v2__inner_details--content">
                    <RichText
                      tagName="p"
                      value={quote}
                      onChange={( value ) => setAttributes({ quote: value })}
                      placeholder={__( "Enter quote...", "qrolic" )}
                    />
                  </div>
                  <div className="testimonial-image-editable-v2__inner_details--author">
                    <div className="testimonial-image-editable-v2__inner_details--author-logo">
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={onSelectAuthorImage}
                          allowedTypes={[ "image" ]}
                          render={({ open }) => (
                            <>
                              {!authorImageUrl ? (
                                <Button onClick={open}>
                                  {__( "Upload Author Image", "qrolic" )}
                                </Button>
                              ) : (
                                <>
                                  <img
                                    src={authorImageUrl}
                                    alt={__( "Author Image", "qrolic" )}
                                    className="author-image"
                                    width={60}
                                    height={60}
                                    loading="lazy"
                                  />
                                  <Button
                                    onClick={onRemoveAuthorImage}
                                    isDestructive
                                  >
                                    {__( "X", "qrolic" )}
                                  </Button>
                                </>
                              )}
                            </>
                          )}
                        />
                      </MediaUploadCheck>
                    </div>
                    <div className="testimonial-image-editable-v2__inner_details--author-details">
                      <RichText
                        tagName="p"
                        value={authorName}
                        className="author-name"
                        onChange={( value ) =>
                          setAttributes({ authorName: value })
                        }
                        placeholder={__( "Enter author name...", "qrolic" )}
                      />
                      <RichText
                        tagName="p"
                        value={authorPosition}
                        className="author-position"
                        onChange={( value ) =>
                          setAttributes({ authorPosition: value })
                        }
                        placeholder={__( "Enter author position...", "qrolic" )}
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
  );
}
