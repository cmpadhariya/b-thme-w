import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow, SelectControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { selectedPostId, selectedCategory } = attributes;

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

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Content Settings", "author-plugin")}>
          <PanelRow>
            <SelectControl
              label={__("Select Post", "author-plugin")}
              value={selectedPostId}
              options={[
                { value: "", label: __("Select a post", "author-plugin") },
                ...postOptions,
              ]}
              onChange={(value) => setAttributes({ selectedPostId: value })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps()} className="testimonial_single section-padding">
        <div className="container p-0">

          {selectedPost && (
            <div className="testimonial_single_inner">
              <div className="testimonial_single_inner__heading">
                <RawHTML>{selectedPost.content.rendered}</RawHTML>
              </div>
              <div className="testimonial_single_inner__title">
                <p>{selectedPost.title.rendered}</p>
              </div>
              <div className="testimonial_single_inner__location">
                <RawHTML>{selectedPost.excerpt.rendered}</RawHTML>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
