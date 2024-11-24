/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
import { TextControl } from "@wordpress/components";
export default function Edit(props) {
  const {
    attributes: {
      contactform,
      heading,
      email,
      emaillink,
      emailtext,
      skype,
      skypetext,
      number,
      numberlink,
      numbertext,
      message,
      socialtext,
      facebook,
      twitter,
      instagram,
      linkedin,
      address,
      addresstext,
      whatsapp,
    },
    setAttributes,
  } = props;
  const blockProps = useBlockProps();

  const onChangeheading = (newContent) => {
    setAttributes({ heading: newContent });
  };
  const onChangeemailtext = (newContent) => {
    setAttributes({ emailtext: newContent });
  };
  const onChangeemail = (newContent) => {
    setAttributes({ email: newContent });
  };
  const onChangeemaillink = (newContent) => {
    setAttributes({ emaillink: newContent });
  };
  const onChangeskype = (newContent) => {
    setAttributes({ skype: newContent });
  };
  const onChangeskypetext = (newContent) => {
    setAttributes({ skypetext: newContent });
  };
  const onChangenumbertext = (newContent) => {
    setAttributes({ numbertext: newContent });
  };
  const onChangenumber = (newContent) => {
    setAttributes({ number: newContent });
  };
  const onChangenumberlink = (newContent) => {
    setAttributes({ numberlink: newContent });
  };
  const onChangemessage = (newContent) => {
    setAttributes({ message: newContent });
  };
  const onChangesocialtext = (newContent) => {
    setAttributes({ socialtext: newContent });
  };
  const onChangecontactform = (newContent) => {
    setAttributes({ contactform: newContent });
  };
  const onChangetwitter = (newContent) => {
    setAttributes({ twitter: newContent });
  };
  const onChangefacebook = (newContent) => {
    setAttributes({ facebook: newContent });
  };
  const onChangeinstagram = (newContent) => {
    setAttributes({ instagram: newContent });
  };
  const onChangelinkedin = (newContent) => {
    setAttributes({ linkedin: newContent });
  };
  const onChangeaddress = (newContent) => {
    setAttributes({ address: newContent });
  };
  const onChangeaddresstext = (newContent) => {
    setAttributes({ addresstext: newContent });
  };
  const onChangewhatsapp = (newContent) => {
    setAttributes({ whatsapp: newContent });
  };

  return (
    <div class="contact-info section-padding section-bg">
      <div class="container">
        <div class="contact-info__inner">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="contact-info__inner_form">
                <TextControl
                  {...blockProps}
                  tagName="div"
                  onChange={onChangecontactform}
                  placeholder="contactform "
                  value={contactform}
                />
              </div>
            </div>
            <div class="col-lg-1 col-md-12 col-sm-12 col-12"></div>
            <div class="col-lg-5 col-md-12 col-sm-12 col-12">
              <div class="contact-info__inner_information">
                <RichText
                  {...blockProps}
                  tagName="h2"
                  onChange={onChangeheading}
                  placeholder="Title"
                  value={heading}
                />
                <ul className="contact-info__address">
                  <li>
                    <RichText
                      {...blockProps}
                      tagName="p"
                      onChange={onChangeaddress}
                      placeholder="Address"
                      value={address}
                    />
                    <RichText
                      {...blockProps}
                      tagName="p"
                      onChange={onChangeaddresstext}
                      placeholder="Text"
                      value={addresstext}
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <InspectorControls>
                      <TextControl
                        label="Add Email Link"
                        onChange={onChangeemaillink}
                        value={emaillink}
                      />
                    </InspectorControls>
                    <RichText
                      {...blockProps}
                      tagName="p"
                      onChange={onChangeemail}
                      placeholder="Text"
                      value={email}
                    />
                    <RichText
                      {...blockProps}
                      tagName="a"
                      onChange={onChangeemailtext}
                      placeholder="Link"
                      value={emailtext}
                    />
                  </li>
                </ul>

                <ul>
                  <li>
                    <InspectorControls>
                      <TextControl
                        label="Add number Link"
                        onChange={onChangenumberlink}
                        value={numberlink}
                      />
                    </InspectorControls>
                    <RichText
                      {...blockProps}
                      tagName="p"
                      onChange={onChangenumber}
                      placeholder="Text"
                      value={number}
                    />
                    <RichText
                      {...blockProps}
                      tagName="a"
                      onChange={onChangenumbertext}
                      placeholder="Link"
                      value={numbertext}
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <RichText
                      {...blockProps}
                      tagName="p"
                      //   className="padding-tb"
                      onChange={onChangeskype}
                      placeholder="Text"
                      value={skype}
                    />
                    <RichText
                      {...blockProps}
                      tagName="p"
                      onChange={onChangeskypetext}
                      placeholder="Text"
                      value={skypetext}
                    />
                  </li>
                </ul>
                <p class="contact-info__inner_information--message">
                  <RichText
                    {...blockProps}
                    onChange={onChangemessage}
                    placeholder="Text"
                    value={message}
                  />
                </p>
                <div class="contact-info__inner_information--icons">
                  <RichText
                    {...blockProps}
                    tagName="h3"
                    onChange={onChangesocialtext}
                    placeholder="Text"
                    value={socialtext}
                  />
                  <ul>
                    <li className="facebook-contactus">
                      <InspectorControls>
                        <TextControl
                          label="Add facebook icon Link"
                          onChange={onChangefacebook}
                          value={facebook}
                        />
                      </InspectorControls>
                      <a href={facebook} class="icon-facebook"></a>
                    </li>
                    <li className="instagram-contactus">
                      <InspectorControls>
                        <TextControl
                          label="Add instagram icon Link"
                          onChange={onChangeinstagram}
                          value={instagram}
                        />
                      </InspectorControls>
                      <a href={instagram} class="icon-instagram"></a>
                    </li>
                    <li className="linkedin-contactus">
                      <InspectorControls>
                        <TextControl
                          label="Add linkedin icon Link"
                          onChange={onChangelinkedin}
                          value={linkedin}
                        />
                      </InspectorControls>
                      <a href={linkedin} class="icon-linkedin"></a>
                    </li>
                    <li className="twitter-contactus">
                      <InspectorControls>
                        <TextControl
                          label="Add twitter icon Link"
                          onChange={onChangetwitter}
                          value={twitter}
                        />
                      </InspectorControls>
                      <a href={twitter} class="icon-twitter"></a>
                    </li>
                    <li className="whatsapp-contactus">
                      <InspectorControls>
                        <TextControl
                          label="Add Whatsapp icon Link"
                          onChange={onChangewhatsapp}
                          value={whatsapp}
                        />
                      </InspectorControls>
                      <a href={whatsapp} class="icon-whatsapp"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
