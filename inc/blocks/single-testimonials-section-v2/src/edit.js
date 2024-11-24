import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow, SelectControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { selectedPostId } = attributes;

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

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Content Settings", "qrolic")}>
          <PanelRow>
            <SelectControl
              label={__("Select Post", "qrolic")}
              value={selectedPostId}
              options={[
                { value: "", label: __("Select a post", "qrolic") },
                ...postOptions,
              ]}
              onChange={(value) => setAttributes({ selectedPostId: value })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div
        {...useBlockProps()}
        className="testimonial_single-section section-padding"
      >
        <div className="container p-0">
          {selectedPost && (
            <div className="testimonial_single-section_inner">
              <div className="testimonial_single-section_inner__heading">
                <RawHTML className="single-testimonial-textColor">{selectedPost.content.rendered}</RawHTML>
              </div>

              <div className="testimonial_single-section_inner__title">
                <h4 className="single-testimonial-textColor">{selectedPost.title.rendered}</h4>
              </div>
              <div className="testimonial_single-section_inner__location">
                {clientPosition && <p className="single-testimonial-textColor">{clientPosition}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
