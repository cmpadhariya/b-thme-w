import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, PanelRow, SelectControl, TextControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { selectedPostId, positionIcon } = attributes;

  const onChangeIcon = (newIconClass) => {
    setAttributes({ positionIcon: newIconClass });
  };

  const postOptions = useSelect((select) => {
    const testimonialRecords = select("core").getEntityRecords(
      "postType",
      "testimonial"
    );

    return testimonialRecords
      ? testimonialRecords.map((testimonial) => ({
        value: testimonial.id.toString(),
        label: testimonial.title.rendered,
      }))
      : [];
  });

  const selectedPost = useSelect(
    (select) => {
      return selectedPostId
        ? select("core").getEntityRecord(
          "postType",
          "testimonial",
          selectedPostId
        )
        : null;
    },
    [selectedPostId]
  );

  const clientPosition = useSelect(
    (select) => {
      if (!selectedPostId) {
        return null;
      }

      const meta = select("core").getEntityRecord(
        "postType",
        "testimonial",
        selectedPostId
      );

      return meta ? meta.meta.client_position : null;
    },
    [selectedPostId]
  );

  const clientQuotes = useSelect(
    (select) => {
      if (!selectedPostId) {
        return null;
      }

      const meta = select("core").getEntityRecord(
        "postType",
        "testimonial",
        selectedPostId
      );

      return meta ? meta.meta.client_quotes : null;
    },
    [selectedPostId]
  );

  const featuredImageUrl = useSelect(
    (select) => {
      if (
        !selectedPostId ||
        !selectedPost ||
        !selectedPost.featured_media
      ) {
        return null;
      }

      const media = select("core").getMedia(selectedPost.featured_media);

      return media ? media.source_url : null;
    },
    [selectedPostId, selectedPost]
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Content Settings", "single-testimonial-image-v2")}>
          <PanelRow>
            <SelectControl
              label={__("Select Post", "single-testimonial-image-v2")}
              value={selectedPostId}
              options={[
                {
                  value: "",
                  label: __("Select a post", "single-testimonial-image-v2"),
                },
                ...postOptions,
              ]}
              onChange={(value) => setAttributes({ selectedPostId: value })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl format="string" label="Add icon class" onChange={onChangeIcon} value={positionIcon} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps()} className="single-testimonial-image section-padding">
        <div className="container p-0">
          {selectedPost && (
            <div className="single-testimonial-image__inner">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-12">
                  {featuredImageUrl && (
                    <div className="single-testimonial-image__inner_thumbnail">
                      <img src={featuredImageUrl} alt={selectedPost.title.rendered} />
                    </div>
                  )}
                </div>
                <div className="col-lg-9 col-md-8 col-12 content-center">
                  <div className="single-testimonial-image__inner_heading">
                    {clientQuotes && (
                      <h2 className="single-testimonial-textColor">
                        {clientQuotes}
                      </h2>
                    )}
                  </div>
                  <div className="single-testimonial-image__inner_content">
                    <RawHTML className="single-testimonial-textColor">
                      {selectedPost.content.rendered}
                    </RawHTML>
                  </div>
                  <div className="single-testimonial-image__inner_title">
                    <h3 className="single-testimonial-textColor">
                      {selectedPost.title.rendered}
                    </h3>
                    {clientPosition && (
                      <p className="single-testimonial-textColor">
                        {clientPosition}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
