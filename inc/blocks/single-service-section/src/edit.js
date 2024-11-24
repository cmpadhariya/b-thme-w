import { __ } from "@wordpress/i18n";
import './editor.scss';
import {
  useBlockProps,
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { Heading, Content01, mediaID, mediaURL, iconClass } = attributes;

  const onChangeHeading = (newHeading) => {
    setAttributes({ Heading: newHeading });
  };

  const onChangeContent01 = (newContent01) => {
    setAttributes({ Content01: newContent01 });
  };

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

  const onChangeIconClass = (newIconClass) => {
    setAttributes({ iconClass: newIconClass });
  };

  return (
    <div class="service-single__inner_box--details">
      <div class="service-single__inner_box--details-image">
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
                      <img src={attributes.mediaURL} alt={attributes.altText} />
                    ) : (
                      "Upload Image"
                    )}
                    <Button onClick={onRemoveMedia} isLink isDestructive>
                      x
                    </Button>
                  </div>
                )}
              </div>
            )}
          />
        </MediaUploadCheck>
      </div>
      <div class="service-single__inner_box--details-icon">
        <span> please below add class in font icon</span>
        <TextControl
          value={iconClass}
          onChange={onChangeIconClass}
          placeholder={__("Enter icon class...", "your-theme")}
        />
      </div>
      <div class="service-single__inner_box--details-title">
        <RichText
          tagName="h2"
          value={Heading}
          onChange={onChangeHeading}
          placeholder={__("Enter about heading text...", "your-theme")}
        />
      </div>
      <div class="service-single__inner_box--details-details">
        <RichText
          tagName="p"
          value={Content01}
          onChange={onChangeContent01}
          placeholder={__("Enter about content...", "your-theme")}
        />
      </div>
    </div>
  );
}
