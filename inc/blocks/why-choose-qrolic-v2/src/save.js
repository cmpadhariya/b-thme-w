import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
export default function Save({ attributes }) {
  const {
    ourExpertiseTitle,
    ourExpertiseDescription,
    ourExpertise,
    workWithLoveText,
    workWithLoveTitle,
    workWithLoveDescription,
    wordpressComplexitiesTitle,
    wordpressComplexitiesDescription,
    wordpressComplexitiesgifUrl,
    provenSuccessTitle,
    provenSuccessDescription,
    provenSuccessLogos,
    moreCompaniesText,
    ongoingSupportTitle,
    ongoingSupportDescription,
    ongoingSupportgifUrl,
    SectionPadding,
  } = attributes;

  const blockProps = useBlockProps.save();
  const { gifUrl, gifAlt, gifWidth, gifHeight } = ongoingSupportgifUrl || {
    gifUrl: "",
    gifAlt: "",
    gifWidth: "",
    gifHeight: "",
  };
  const { url, alt, width, height } = wordpressComplexitiesgifUrl || {
    url: "",
    alt: "",
    width: "",
    height: "",
  };
  
  return (
    <div {...blockProps} className={`why-choose-qrolic ${SectionPadding || ""} `} >
      <div className="container p-0">
        <div className="why-choose-qrolic__inner">
          <div className="why-choose-qrolic__inner_top">
            <div className="why-choose-qrolic__inner_top--our-expertise">
              <h3>{ourExpertiseTitle}</h3>
              <p className="description-secondary">{ourExpertiseDescription}</p>
              <div className="expertise-tags">
                {ourExpertise.map(( item, index ) => (
                  <span key={index}>
                    <i className={item.icon}></i> {item.expertise}
                  </span>
                ))}
              </div>
            </div>
            <div className="why-choose-qrolic__inner_top--work-with-love">
              <h3>{workWithLoveTitle}</h3>
              <p className="description-secondary">{workWithLoveDescription}</p>
              <div className="work-with-love-tag">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="538"
                  height="113"
                  viewBox="0 0 538 113"
                  fill="none"
                >
                  <path
                    d="M-64 0.5H39.3621C43.7804 0.5 47.3621 4.08172 47.3621 8.5V41.2175C47.3621 45.6358 50.9438 49.2175 55.3621 49.2175H407.178C411.596 49.2175 415.178 52.7992 415.178 57.2175V104.5C415.178 108.918 418.76 112.5 423.178 112.5H594"
                    stroke="url(#paint0_radial_5284_19506)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_5284_19506"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(264.732 44.1951) scale(288.578 607.521)"
                    >
                      <stop stop-color="#A6A7AD" />
                      <stop offset="1" stop-color="#13161B" />
                    </radialGradient>
                  </defs>
                </svg>
                <span dangerouslySetInnerHTML={{ __html: workWithLoveText }}>
                  <i className="icon-heart"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="why-choose-qrolic__inner_bottom">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="why-choose-qrolic__inner_bottom--wordPress-complexities">
                  <h3
                    className="wordpress-complexities-title"
                    dangerouslySetInnerHTML={{ __html: wordpressComplexitiesTitle, }}
                  />
                  <p className="description-secondary remove-extra-padding">
                    {wordpressComplexitiesDescription}
                  </p>
                  {url && (
                    <img
                      src={url}
                      alt={alt || __( "GIF Image", "qrolic" )}
                      width={width}
                      height={height}
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="why-choose-qrolic__inner_bottom--Success">
                  <h3>{provenSuccessTitle}</h3>
                  <p className="description-secondary">
                    {provenSuccessDescription}
                  </p>
                  <div className="logos">
                    {provenSuccessLogos.map(( logo, index ) => (
                      <div className="logos__inner">
                        <img
                          key={index}
                          src={logo.url}
                          alt={logo.alt || `Logo`}
                          width={logo.width || 100}
                          height={logo.height || 100}
                          loading="lazy"
                        />
                      </div>
                    ))}
                    <p className="morecompanies">{moreCompaniesText}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="why-choose-qrolic__inner_bottom--ongoing-support">
                  <h3>{ongoingSupportTitle}</h3>
                  <p className="description-secondary">
                    {ongoingSupportDescription}
                  </p>
                  {gifUrl && (
                    <img
                      src={gifUrl}
                      alt={gifAlt || __( "GIF Image", "qrolic" )}
                      width={gifWidth}
                      height={gifHeight}
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
