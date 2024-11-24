import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  Button,
  PanelBody,
  PanelRow,
  TextControl,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const {
    summaryItems = [],
    benefitsItems = [],
    shareItems = [],
    summaryTitle = "",
    benefitTitle = "",
    buttonText = "",
    buttonLink = "",
    shareTitle = "",
    shareItemsCopy = "",
  } = attributes;

  const blockProps = useBlockProps();

  const updateSummaryItem = (value, index, field) => {
    const items = [...summaryItems];
    items[index] = { ...items[index], [field]: value };
    setAttributes({ summaryItems: items });
  };

  const removeSummaryItem = (index) => {
    const items = summaryItems.filter((_, i) => i !== index);
    setAttributes({ summaryItems: items });
  };

  const updateBenefitsItem = (value, index, field) => {
    const items = [...benefitsItems];
    items[index] = { ...items[index], [field]: value };
    setAttributes({ benefitsItems: items });
  };

  const removeBenefitsItem = (index) => {
    const items = benefitsItems.filter((_, i) => i !== index);
    setAttributes({ benefitsItems: items });
  };

  const updateShareItem = (value, index, field) => {
    const items = [...shareItems];
    items[index] = { ...items[index], [field]: value };
    setAttributes({ shareItems: items });
  };

  const removeShareItem = (index) => {
    const items = shareItems.filter((_, i) => i !== index);
    setAttributes({ shareItems: items });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Summary Items", "qrolic")}>
          <p>Click To Add Summary Item</p>
          <PanelRow>
            <Button
              isPrimary
              onClick={() =>
                setAttributes({
                  summaryItems: [
                    ...summaryItems,
                    { title: "", description: "", className: "" },
                  ],
                })
              }
            >
              {__("Add Summary Item", "qrolic")}
            </Button>
          </PanelRow>
        </PanelBody>

        <PanelBody title={__("Benefits Items", "qrolic")}>
          <p>Click To Add Benefits Item</p>
          <PanelRow>
            <Button
              isPrimary
              onClick={() =>
                setAttributes({
                  benefitsItems: [
                    ...benefitsItems,
                    { title: "", description: "", className: "" },
                  ],
                })
              }
            >
              {__("Add Benefits Item", "qrolic")}
            </Button>
          </PanelRow>
        </PanelBody>

        <PanelBody title={__("Share Items", "qrolic")}>
          <p>Click To Add Share Item</p>
          <PanelRow>
            <Button
              isPrimary
              onClick={() =>
                setAttributes({
                  shareItems: [...shareItems, { link: "", className: "" }],
                })
              }
            >
              {__("Add Share Item", "qrolic")}
            </Button>
          </PanelRow>
        </PanelBody>

        <PanelBody title={__("Button Link", "qrolic")}>
          <PanelRow>
            <TextControl
              label={__("Button Link URL", "qrolic")}
              value={buttonLink}
              onChange={(value) => setAttributes({ buttonLink: value })}
              placeholder={__("Button Link", "qrolic")}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <section {...blockProps}>
        <div className="careers-single-sidebar">
          <div className="careers-single-sidebar_summary">
            <RichText
              tagName="h2"
              value={summaryTitle}
              onChange={(value) => setAttributes({ summaryTitle: value })}
              placeholder={__("Summary Title", "qrolic")}
            />
            <ul>
              {summaryItems.map((item, index) => (
                <li key={`summary-${index}`}>
                  <div className="summary-items-editor">
                    <TextControl
                      value={item.className}
                      onChange={(value) =>
                        updateSummaryItem(value, index, "className")
                      }
                      placeholder={__("Add Summary Item Icon Class", "qrolic")}
                    />
                    <Button
                      isDestructive
                      onClick={() => removeSummaryItem(index)}
                    >
                      {__("X", "qrolic")}
                    </Button>
                  </div>
                  <div className="summary-items-editor">
                    <RichText
                      tagName="div"
                      className="summary-title"
                      value={item.title}
                      onChange={(value) =>
                        updateSummaryItem(value, index, "title")
                      }
                      placeholder={__("Summary Item Title", "qrolic")}
                    />
                    <RichText
                      tagName="div"
                      className="summary-discription"
                      value={item.description}
                      onChange={(value) =>
                        updateSummaryItem(value, index, "description")
                      }
                      placeholder={__("Summary Item Description", "qrolic")}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="careers-single-sidebar_benefits">
            <RichText
              tagName="h2"
              value={benefitTitle}
              onChange={(value) => setAttributes({ benefitTitle: value })}
              placeholder={__("Benefits Title", "qrolic")}
            />
            <ul>
              {benefitsItems.map((item, index) => (
                <li key={`benefits-${index}`}>
                  <div className="summary-items-editor">
                    <TextControl
                      value={item.className}
                      onChange={(value) =>
                        updateBenefitsItem(value, index, "className")
                      }
                      placeholder={__("Add Benefits Item Icon Class", "qrolic")}
                    />
                    <Button
                      isDestructive
                      onClick={() => removeBenefitsItem(index)}
                    >
                      {__("X", "qrolic")}
                    </Button>
                  </div>
                  <div className="summary-items-editor">
                    <RichText
                      tagName="div"
                      className="benefits-title"
                      value={item.title}
                      onChange={(value) =>
                        updateBenefitsItem(value, index, "title")
                      }
                      placeholder={__("Benefits Item Title", "qrolic")}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="careers-single-sidebar_btn">
            <RichText
              tagName="div"
              value={buttonText}
              onChange={(value) => setAttributes({ buttonText: value })}
              placeholder={__("Button Text", "qrolic")}
            />
          </div>
          <div className="careers-single-sidebar_share">
            <RichText
              tagName="h2"
              value={shareTitle}
              onChange={(value) => setAttributes({ shareTitle: value })}
              placeholder={__("Share Title", "qrolic")}
            />
            <ul>
              <li>
                <RichText
                  tagName="div"
                  id="share-copy-link"
                  className="share-copy-link"
                  value={shareItemsCopy}
                  onChange={(value) => setAttributes({ shareItemsCopy: value })}
                  placeholder={__("Copy Link", "qrolic")}
                />
              </li>
              {shareItems.map((item, index) => (
                <li key={`share-${index}`}>
                  <TextControl
                    value={item.link}
                    onChange={(value) => updateShareItem(value, index, "link")}
                    placeholder={__("Add Social Icon Link", "qrolic")}
                  />
                  <TextControl
                    value={item.className}
                    onChange={(value) =>
                      updateShareItem(value, index, "className")
                    }
                    placeholder={__("Add Social Icon Class", "qrolic")}
                  />
                  <Button isDestructive onClick={() => removeShareItem(index)}>
                    {__("X", "qrolic")}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
