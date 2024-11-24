export default function Save({ attributes }) {
  const { Heading, Content01, mediaURL, iconClass } = attributes;

  return (
    <div className="service-single__inner_box--details">
      <div className="service-single__inner_box--details-image">
        {mediaURL && <img src={mediaURL} alt={attributes.altText} />}
      </div>
      <div className="service-single__inner_box--details-icon">
        {iconClass && <i className={iconClass}></i>}
      </div>
      <div className="service-single__inner_box--details-title">
        <h2>{Heading}</h2>
      </div>
      <div className="service-single__inner_box--details-details">
        <p>{Content01}</p>
      </div>
    </div>
  );
}
