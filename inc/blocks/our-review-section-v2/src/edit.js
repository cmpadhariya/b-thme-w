import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import {
  PanelBody,
  PanelRow,
  QueryControls,
  TextControl,
  SelectControl
} from "@wordpress/components";
import "./editor.scss";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
  const { title, SectionPadding, selectedReviewIds = [] } = attributes;

  const onChangeTitle = (newTitle) => {
    setAttributes({ title: newTitle });
  };

  const postOptions = useSelect((select) => {
		const testimonialRecords = select("core").getEntityRecords("postType", "testimonial");
			return testimonialRecords ? testimonialRecords.map((testimonial) => ({
				value: testimonial.id.toString(),
				label: testimonial.title.rendered,
			})) : [];
	}, []);

	const selectedPosts = useSelect(
    (select) => {
        if (!Array.isArray(selectedReviewIds)) {
            return [];
        }
        return selectedReviewIds.map((id) => select("core").getEntityRecord("postType", "testimonial", id));
    },
    [selectedReviewIds]
  );

	const updateSelectedPostId = (index, value) => {
    const newSelectedReviewIds = [...selectedReviewIds];
    newSelectedReviewIds[index] = parseInt(value, 10);
    setAttributes({ selectedReviewIds: newSelectedReviewIds });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Our Review Section Settings", "qrolic")}>
          <PanelRow>
            <TextControl
              label={__("Add Section Padding Class", "qrolic")}
              value={SectionPadding}
              onChange={(value) => setAttributes({ SectionPadding: value })}
            />
          </PanelRow>
          {[0, 1, 2].map((index) => (
						<PanelRow key={index}>
							<SelectControl
								label={__("Select Reviews", "qrolic") + ` ${index + 1}`}
								value={selectedReviewIds[index] || ""}
								options={[{ value: "", label: __("Select a review", "qrolic") }, ...postOptions]}
								onChange={(value) => updateSelectedPostId(index, value)}
							/>
						</PanelRow>
					))}
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        <div className={`our-review-section ${SectionPadding}`}>
          <div className="container p-0">
            <div
              className="our-review-section__top"
              style={{ textAlign: "center", paddingBottom: "30px" }}
            >
              <RichText
                tagName="h2"
                value={title}
                multiline="br"
                onChange={onChangeTitle}
                placeholder={__("Enter section title...", "qrolic")}
              />
            </div>
            <div className="our-review-section__inner">
              <div className="row">
                    {selectedPosts.map((post, index) => post && (
                      <div key={post.id} className="col-lg-4 col-md-6 col-12">
                        <div className="our-review-section__inner--content">
                          <ul>
                            <li className="icon-star"></li>
                            <li className="icon-star"></li>
                            <li className="icon-star"></li>
                            <li className="icon-star"></li>
                            <li className="icon-star"></li>
                          </ul>
                          <p className="description-secondary">
                            <RawHTML>{post.excerpt.rendered}</RawHTML>
                          </p>
                          <h3>
                            <RawHTML>{post.title.rendered}</RawHTML>
                          </h3>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
