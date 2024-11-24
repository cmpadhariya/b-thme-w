import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import {
  TextControl,
  TextareaControl,
  PanelBody,
  Button,
  PanelRow
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
  const {
    SectionPadding,
    ourExpertiseTitle,
    ourExpertiseDescription,
    ourExpertise,
    workWithLoveTitle,
    workWithLoveText,
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
  } = attributes;

  const blockProps = useBlockProps();

  const { gifUrl, gifAlt, gifWidth, gifHeight } = ongoingSupportgifUrl || {
    gifUrl: "",
    gifAlt: "",
    gifWidth: "",
    gifHeight: "",
  };

  const addLogo = () => {
    const newLogos = [
      ...provenSuccessLogos,
      { url: "", alt: "", width: 100, height: 100 },
    ];
    setAttributes({ provenSuccessLogos: newLogos });
  };

  const { url, alt, width, height } = wordpressComplexitiesgifUrl || {
    url: "",
    alt: "",
    width: "",
    height: "",
  };

  const updateLogo = ( media, index ) => {
    const updatedLogos = [...provenSuccessLogos];
    updatedLogos[index] = {
      url: media.url,
      alt: media.alt || `Logo ${index + 1}`,
      width: media.width || 100,
      height: media.height || 100,
    };
    setAttributes({ provenSuccessLogos: updatedLogos });
  };
  const removeLogo = ( index ) => {
    const updatedLogos = [...provenSuccessLogos];
    updatedLogos.splice( index, 1 );
    setAttributes({ provenSuccessLogos: updatedLogos });
  };

  const removegif3 = () => {
    setAttributes({ ongoingSupportgifUrl: { gifUrl: "", gifAlt: "", gifWidth: "", gifHeight: "" } });
  };

  const removegif1 = () => {
    setAttributes({ wordpressComplexitiesgifUrl: { gifUrl: "", gifAlt: "", gifWidth: "", gifHeight: "" } });
  };

  const [newIcon, setNewIcon] = useState("");
  const [newExpertise, setNewExpertise] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateExpertise = () => {
    if ( newIcon || newExpertise ) {
      const updatedExpertise = [...ourExpertise];
      const expertiseEntry = {
        icon: newIcon || "",
        expertise: newExpertise || "",
      };
      if ( editIndex !== null ) {
        updatedExpertise[editIndex] = expertiseEntry;
        setEditIndex(null);
      } else {
        updatedExpertise.push( expertiseEntry );
      }
      setAttributes({ ourExpertise: updatedExpertise });
      setNewIcon("");
      setNewExpertise("");
    }
  };

  const removeExpertise = ( index ) => {
    const updatedExpertise = ourExpertise.filter( (_, i) => i !== index );
    setAttributes({ ourExpertise: updatedExpertise });
    if ( editIndex === index ) {
      setEditIndex(null);
      setNewIcon("");
      setNewExpertise("");
    }
  };

  return (
    <>
      <div {...blockProps} className={`why-choose-qrolic ${SectionPadding || ""} `} >
        <div className="container p-0">
          <div className="why-choose-qrolic__inner">
            <div className="why-choose-qrolic__inner_top">
              <div className="why-choose-qrolic__inner_top--our-expertise">
                <RichText
                  tagName="h3"
                  value={ourExpertiseTitle}
                  placeholder={__( "Enter Subtitle...", "qrolic" )}
                  onChange={(value) =>
                    setAttributes({ ourExpertiseTitle: value })
                  }
                />
                <RichText
                  tagName="p"
                  className="description-secondary"
                  value={ourExpertiseDescription}
                  placeholder={__( "Enter Our Expertise Description...", "qrolic" )}
                  onChange={( value ) =>
                    setAttributes({ ourExpertiseDescription: value })
                  }
                />
                <div className="expertise-tags">
                  {ourExpertise.map(( item, index ) => (
                    <span key={index}>
                      <i className={item.icon}></i>
                      <RichText
                        className="expertise-name"
                        value={item.expertise}
                        placeholder={__( "Enter Expertise Name...", "qrolic" )}
                        onChange={( value ) => setNewExpertise( value )}
                      />
                      <a isDestructive onClick={() => removeExpertise( index )}>
                        {__( "x", "qrolic" )}
                      </a>
                    </span>
                  ))}
                </div>
              </div>
              <div className="why-choose-qrolic__inner_top--work-with-love">
                <RichText
                  tagName="h3"
                  value={workWithLoveTitle}
                  placeholder={__( "Enter Work With Love Title...", "qrolic" )}
                  onChange={( value ) =>
                    setAttributes({ workWithLoveTitle: value })
                  }
                />
                <RichText
                  tagName="p"
                  className="description-secondary"
                  value={workWithLoveDescription}
                  placeholder={__( "Enter Work With Love Description...", "qrolic" )}
                  onChange={( value ) =>
                    setAttributes({ workWithLoveDescription: value })
                  }
                />
                <div >
                  <span>
                    <TextareaControl
                      value={workWithLoveText}
                      onChange={( value ) =>
                        setAttributes({ workWithLoveText: value })
                      }
                      placeholder={__( "Enter text...", "qrolic" )}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="why-choose-qrolic__inner_bottom">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="why-choose-qrolic__inner_bottom--wordPress-complexities">
                    <TextControl
                      label={__( "Title", "qrolic" )}
                      value={wordpressComplexitiesTitle}
                      onChange={( value ) =>
                        setAttributes({ wordpressComplexitiesTitle: value })
                      }
                    />

                    <RichText
                      tagName="p"
                      className="description-secondary remove-extra-padding"
                      value={wordpressComplexitiesDescription}
                      placeholder={__( "Enter WordPress Complexities Description...","qrolic" )}
                      onChange={( value ) =>
                        setAttributes({
                          wordpressComplexitiesDescription: value,
                        })
                      }
                    />
                    {url && (
                      <img
                        src={url}
                        alt={alt}
                        width={width}
                        height={height}
                        loading="lazy"
                      />
                    )}
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={( media ) =>
                          setAttributes({
                            wordpressComplexitiesgifUrl: {
                              url: media.url,
                              alt: media.alt,
                              width: media.width,
                              height: media.height,
                            },
                          })
                        }
                        allowedTypes={[ "image", "video", "gif" ]}
                        value={url}
                        render={({ open }) => (
                          <Button onClick={open}>{__( "Select GIF", "qrolic" )}</Button>
                        )}
                      />
                      <Button isDestructive onClick={removegif1}>
                        {__( "x", "qrolic" )}
                      </Button>
                    </MediaUploadCheck>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="why-choose-qrolic__inner_bottom--Success">
                    <RichText
                      tagName="h3"
                      value={provenSuccessTitle}
                      placeholder={__( "Enter Proven Success Title...","qrolic" )}
                      onChange={( value ) =>
                        setAttributes({ provenSuccessTitle: value })
                      }
                    />
                    <RichText
                      tagName="p"
                      className="description-secondary"
                      value={provenSuccessDescription}
                      placeholder={__( "Enter Proven Success Description...","qrolic" )}
                      onChange={( value ) =>
                        setAttributes({ provenSuccessDescription: value })
                      }
                    />
                    <div className="logos">
                      {provenSuccessLogos.map(( logo, index ) => (
                        <div className="logos__inner">
                          <img
                            key={index}
                            src={logo.url}
                            alt={logo.alt || `Logo ${index + 1}`}
                            width={logo.width || 100}
                            height={logo.height || 100}
                            loading="lazy"
                          />
                        </div>
                      ))}
                      <RichText
                        tagName="p"
                        className="morecompanies"
                        value={moreCompaniesText}
                        onChange={( value ) =>
                          setAttributes({ moreCompaniesText: value })
                        }
                        placeholder={__( "Enter text...", "qrolic" )}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="why-choose-qrolic__inner_bottom--ongoing-support">
                    <RichText
                      tagName="h3"
                      value={ongoingSupportTitle}
                      placeholder={__( "Enter Ongoing Support Title...", "qrolic" )}
                      onChange={( value ) =>
                        setAttributes({ ongoingSupportTitle: value })
                      }
                    />
                    <RichText
                      tagName="p"
                      className="description-secondary"
                      value={ongoingSupportDescription}
                      placeholder={__( "Enter Ongoing Support Description...","qrolic" )}
                      onChange={( value ) =>
                        setAttributes({ ongoingSupportDescription: value })
                      }
                    />
                    {gifUrl && (
                      <img
                        src={gifUrl}
                        alt={gifAlt}
                        width={gifWidth}
                        height={gifHeight}
                        loading="lazy"
                      />
                    )}
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={(media) =>
                          setAttributes({
                            ongoingSupportgifUrl: {
                              gifUrl: media.url,
                              gifAlt: media.alt,
                              gifWidth: media.width,
                              gifHeight: media.height,
                            },
                          })
                        }
                        allowedTypes={[ "image", "video", "gif" ]}
                        value={gifUrl}
                        render={({ open }) => (
                          <Button onClick={open}>{__( "Select GIF", "qrolic" )}</Button>
                        )}
                      />
                      <Button isDestructive onClick={removegif3}>
                        {__( "x", "qrolic" )}
                      </Button>
                    </MediaUploadCheck>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InspectorControls>
        <PanelBody title={__( "Block Settings", "qrolic" )}>
          <TextControl
            label={__( "Section Padding", "qrolic" )}
            value={SectionPadding}
            onChange={( value ) => setAttributes({ SectionPadding: value })}
            placeholder={__( "Section Padding Class Name", "qrolic" )}
          />
        </PanelBody>
        <PanelBody title={__( "Our Expertise", "qrolic" )}>
          <TextControl
            label={__( "Icon Class", "qrolic" )}
            value={newIcon}
            onChange={( value ) => setNewIcon( value )}
          />
          <TextControl
            label={__( "Expertise", "qrolic" )}
            value={newExpertise}
            onChange={( value ) => setNewExpertise( value )}
          />
          <PanelRow>
            <Button isPrimary onClick={addOrUpdateExpertise} disabled={!newIcon && !newExpertise} >
              {editIndex !== null
                ? __( "Update Expertise", "qrolic" )
                : __( "Add Expertise", "qrolic" )}
            </Button>
          </PanelRow>
        </PanelBody>
        <PanelBody title={__( "WordPress Complexities", "qrolic" )}>
          <TextControl
            label={__( "GIF Alt Text", "qrolic" )}
            value={alt}
            onChange={(value) =>
              setAttributes({
                wordpressComplexitiesgifUrl: {
                  ...wordpressComplexitiesgifUrl,
                  alt: value,
                },
              })
            }
          />
          <TextControl
            label={__( "Width", "qrolic" )}
            value={width}
            onChange={( value ) =>
              setAttributes({
                wordpressComplexitiesgifUrl: {
                  ...wordpressComplexitiesgifUrl,
                  width: value,
                },
              })
            }
          />
          <TextControl
            label={__( "Height", "qrolic" )}
            value={height}
            onChange={( value ) =>
              setAttributes({
                wordpressComplexitiesgifUrl: {
                  ...wordpressComplexitiesgifUrl,
                  height: value,
                },
              })
            }
          />
        </PanelBody>
        <PanelBody title={__( "Proven Success", "qrolic" )}>
          <PanelRow>
            <Button isPrimary onClick={addLogo}>
              {__( "Add Logo", "qrolic" )}
            </Button>
          </PanelRow>
          <div className="logo-list">
            {provenSuccessLogos.map(( logo, index ) => (
              <PanelRow key={index}>
                <MediaUpload
                  onSelect={( media ) => updateLogo(media, index)}
                  allowedTypes={["image"]}
                  value={logo.url}
                  render={({ open }) => (
                    <Button onClick={open}>
                      {logo.url ? (
                        <img src={logo.url} alt={logo.alt} width={50} />
                      ) : (
                        __( "Select Logo", "qrolic" )
                      )}
                    </Button>
                  )}
                />
                <Button isDestructive onClick={() => removeLogo(index)}>
                  {__( "x", "qrolic" )}
                </Button>
              </PanelRow>
            ))}
          </div>
        </PanelBody>
        <PanelBody title={__( "Ongoing Support", "qrolic" )}>
          <TextControl
            label={__( "GIF Alt Text", "qrolic" )}
            value={gifAlt}
            onChange={( value ) =>
              setAttributes({
                ongoingSupportgifUrl: {
                  ...ongoingSupportgifUrl,
                  gifAlt: value,
                },
              })
            }
          />
          <TextControl
            label={__( "Width", "qrolic" )}
            value={gifWidth}
            onChange={( value ) =>
              setAttributes({
                ongoingSupportgifUrl: {
                  ...ongoingSupportgifUrl,
                  gifWidth: value,
                },
              })
            }
          />
          <TextControl
            label={__( "Height", "qrolic" )}
            value={gifHeight}
            onChange={( value ) =>
              setAttributes({
                ongoingSupportgifUrl: {
                  ...ongoingSupportgifUrl,
                  gifHeight: value,
                },
              })
            }
          />
        </PanelBody>
      </InspectorControls>
    </>
  );
}