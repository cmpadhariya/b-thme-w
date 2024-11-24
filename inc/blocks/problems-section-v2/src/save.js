import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { processes = [], showList, useParagraph } = attributes;
  const process = processes[0] || {};
  const blockProps = useBlockProps.save();

  return (
    <section {...blockProps}>
      <div className="problem-section__block-content">
        <div className="problem-section__block-content_inner">
          <div className="problem-section__block-content_inner--img">
            {process.imageUrl ? (
              <img
                data-src={process.imageUrl}
                alt={process.title}
                height={process.height}
                width={process.width}
              />
            ) : (
              process.iconclass && (
                <div className="problem-section__block-content_inner--img-icon">
                  <i className={process.iconclass}></i>
                </div>
              )
            )}
          </div>
          <div className="problem-section__block-content_inner--list">
            <h3>
              <RichText.Content value={process.title} />
            </h3>
            {showList && (
              <ul>
                {(process.listItems || []).map((item, listItemIndex) => (
                  <li key={listItemIndex}>
                    <RichText.Content value={item} />
                  </li>
                ))}
              </ul>
            )}
            {useParagraph && (
              <RichText.Content tagName="p" value={process.paragraphContent} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
