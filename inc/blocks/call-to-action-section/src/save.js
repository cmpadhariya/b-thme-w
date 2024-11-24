import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save(props) {
  const { Heading, content, buttonText, buttonURL } = props.attributes;

  return (
    <section id="call-to-action" {...useBlockProps.save()}>
      <div className="call-to-action section-padding">
        <div className="container p-0">
          <div className="call-to-action__inner">
            <div className="row">
              <div className="col">
                <div className="call-to-action__inner_heading">
                  <RichText.Content tagName="h2" value={Heading} />
                </div>
                <div className="call-to-action__inner_text">
                  <RichText.Content tagName="p" value={content} className="description-primary" />
                </div>
                <div className="call-to-action__inner_button">
                  <a href={buttonURL} target="_self" rel="noopener noreferrer" className="button-general">
                    <RichText.Content
                      tagName="span"
                      className="button-text"
                      value={buttonText}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}