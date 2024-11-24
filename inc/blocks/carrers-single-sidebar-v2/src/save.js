import { RichText, useBlockProps } from "@wordpress/block-editor";
export default function save({ attributes }) {
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

  return (
    <section {...useBlockProps.save()}>
      <div className="careers-single-sidebar">
        <hr />
        <div className="careers-single-sidebar_summary">
          <RichText.Content tagName="h2" value={summaryTitle} />
          <ul>
            {summaryItems.map((item, index) => (
              <li key={`summary-${index}`}>
                <i className={item.className}></i>
                <p>
                  <RichText.Content
                    tagName="span"
                    value={item.title}
                    className="summary-title"
                  />
                  <RichText.Content
                    tagName="span"
                    value={item.description}
                    className="summary-discription"
                  />
                </p>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="careers-single-sidebar_benefits">
          <RichText.Content tagName="h2" value={benefitTitle} />
          <ul>
            {benefitsItems.map((item, index) => (
              <li key={`benefits-${index}`}>
                <i className={item.className}></i>
                <p>
                  <RichText.Content
                    tagName="span"
                    value={item.title}
                    className="benefits-title"
                  />
                </p>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="careers-single-sidebar_btn">
          <a href={buttonLink} target="_self" rel="noreferrer noopener">
            {buttonText}
          </a>
        </div>
        <div className="careers-single-sidebar_share">
          <RichText.Content tagName="h2" value={shareTitle} />
          <ul>
            <li>
              <RichText.Content
                tagName="button"
                id="share-copy-link"
                className="share-copy-link"
                value={shareItemsCopy}
              />
            </li>
            {shareItems.map((item, index) => (
              <li key={`share-${index}`}>
                <a
                  href={item.link}
                  className={item.className}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Share Items Icon"
                ></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
