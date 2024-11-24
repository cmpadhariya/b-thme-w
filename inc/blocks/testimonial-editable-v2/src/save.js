import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const {
    heading,
    description,
    position,
    positiondescription,
    imageUrl,
    imgWidth,
    imgHeight,
    mediaURL,
    altText,
    quoteImage,
    className,
  } = attributes;

  const blockProps = useBlockProps.save();

  return (
    <section >
      <div className={`testimonial-editable-v2 ${className}`}>
        <div className="container p-0">
          <div className="testimonial-editable-v2__inner">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-12">
                {imageUrl && (
                  <div className="testimonial-editable-v2__inner_thumbnail">
                    <img
                      src={imageUrl}
                      alt="testimonial client image"
                      width={imgWidth}
                      height={imgHeight}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
              <div className="col-lg-8 col-md-12 col-12 content-center">
                <div className="testimonial-editable-v2__inner_heading">
                  <RichText.Content tagName="h2" value={heading} />
                </div>	
                <div className="testimonial-editable-v2__inner_content">
                  <p
                    className="testimonial-description"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  <div className="single-testimonial-quote-image">
                    {quoteImage.url && (
                      <img
                        src={quoteImage.url}
                        alt={quoteImage.alt}
                        width="92"
                        height="64"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
                <div className="testimonial-editable-v2__inner_title">
                  <div>
                    <RichText.Content
                      tagName="h3"
                      value={position}
                      className="single-testimonial-position"
                    />
                    <div className="testimonial-editable-v2__inner_title-position">
                      <RichText.Content
                        tagName="p"
                        value={positiondescription}
                        className="single-testimonial-subdescription"
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="single-testimonial-google-review">
                    {mediaURL && (
                      <img
                        src={mediaURL}
                        alt={altText}
                        width="205"
                        height="55"
                        loading="lezy"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
