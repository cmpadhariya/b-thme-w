import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const {
    imageUrl,
    logoUrl,
    quote,
    authorName,
    authorPosition,
    authorImageUrl,
  } = attributes;

  return (
    <div {...useBlockProps.save()}>
      <div className="testimonial-image-editable-v2">
        <div className="container p-0">
          <div className="testimonial-image-editable-v2__inner">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="testimonial-image-editable-v2__inner_image">
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={__( "Image", "qrolic" )}
                      className="img-fluid testimonial-image"
                      width={500}
                      height={468}
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="testimonial-image-editable-v2__inner_details">
                  <div className="testimonial-image-editable-v2__inner_details--logo">
                    {logoUrl && (
                      <img
                        src={logoUrl}
                        alt={__( "Logo", "qrolic" )}
                        className="testimonial-logo"
                        width={162}
                        height={39}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="testimonial-image-editable-v2__inner_details--content">
                    <RichText.Content tagName="p" value={quote} />
                  </div>
                  <div className="testimonial-image-editable-v2__inner_details--author">
                    <div className="testimonial-image-editable-v2__inner_details--author-logo">
                      {authorImageUrl && (
                        <img
                          src={authorImageUrl}
                          alt={__( "Author Image", "qrolic" )}
                          className="author-image"
                          width={60}
                          height={60}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="testimonial-image-editable-v2__inner_details--author-details">
                      <RichText.Content
                        tagName="p"
                        className="author-name"
                        value={authorName}
                      />
                      <RichText.Content
                        tagName="p"
                        className="author-position"
                        value={authorPosition}
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
