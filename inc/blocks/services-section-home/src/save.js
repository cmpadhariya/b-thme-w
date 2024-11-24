// save.js code
import { useBlockProps } from "@wordpress/block-editor";
import { RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { items, heading,button_text,button_url } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div className="services-home section-padding section-bg">
      <div className="container p-0">
        <div className="services-home__heading">
          <RichText.Content tagName="h2" value={heading} />
        </div>
        <div className="services-home__inner">
          <div className="row">
            {items.map((item, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                <div className="services-home__inner_content p-bottom">
                  <div className="services-home__inner_text--subheading">
                    {item.linkURL ? (
                      <a href={item.linkURL} target="_self" rel="noopener noreferrer">
                        <RichText.Content
                          tagName="h3"
                          value={item.subheading}
                        />
                        <div className="services-home__inner_text--arrow icon-right-1"></div>
                      </a>
                    ) : (
                      <div>
                        <RichText.Content
                          tagName="h3"
                          value={item.subheading}
                        />
                        <div className="services-home__inner_text--arrow icon-right-1"></div>
                      </div>
                    )}
                  </div>
                  {item.linkURL ? (
                    <a href={item.linkURL} target="_self" rel="noopener noreferrer">
                      <p className="description-primary">{item.description}</p>
                    </a>
                  ) : (
                    <p className="description-primary">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="services-home__button">
          <a href={button_url} 
							className="wpt-button button-general">
							{button_text}
					</a>
        </div>
      </div>
    </div>
  );
}
