import { RichText } from "@wordpress/block-editor";
import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
  const { attributes } = props;
  const { sections, title } = attributes;

  return (
    <section
      className="we-contributing-section "
      {...useBlockProps.save()}
    >
      <div className="container p-0">
        <div className="we-contributing-section__heading section-pt-0">
          <RichText.Content tagName="h2" value={title} />
          <div className="row">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`col-lg-${12 / attributes.itemsPerRow} col-md-${
                  12 / attributes.itemsPerRow
                } col-sm-6 col-12`}
              >
                <div className="we-contributing-section__inner">
                  <div className="we-contributing-section__inner_image">
                    {section.image && (
                      <img
                        src={section.image.url}
                        width="559"
                        height="373"
                        alt={section.altText}
                      />
                    )}
                  </div>
                  <div className="we-contributing-section__inner_details">
                    <div className="we-contributing-section__inner_details--heading">
                      <h3>
                        <a href={section.button_url}>
                          <RichText.Content value={section.content} />
                        </a>
                      </h3>
                    </div>
                    <div className="we-contributing-section__inner_details--description">
                      <RichText.Content
                        tagName="p"
                        className="description-primary"
                        value={section.description}
                      />
                    </div>
                    <div className="we-contributing-section__inner_details--button">
                      {section.textButton && (
                        <a className="button-general" href={section.button_url}>
                          {section.textButton}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
