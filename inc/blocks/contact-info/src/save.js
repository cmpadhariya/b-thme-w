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
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
import { TextControl } from "@wordpress/components";
export default function save(props) {
  const {
    attributes: {},
    setAttributes,
  } = props;
  const blockProps = useBlockProps.save();

  return (
    <div class="contact-info section-padding section-bg">
      <div class="container">
        <div class="contact-info__inner">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="contact-info__inner_form">
                <RichText.Content
                  {...blockProps}
                  tagName="div"
                  value={props.attributes.contactform}
                />
              </div>
            </div>
            <div class="col-lg-1 col-md-12 col-sm-12 col-12"></div>
            <div class="col-lg-5 col-md-12 col-sm-12 col-12">
              <div class="contact-info__inner_information">
                <RichText.Content
                  {...blockProps}
                  tagName="h2"
                  value={props.attributes.heading}
                />
                <ul className="contact-info__address">
                  <li>
                    <RichText.Content
                      {...blockProps}
                      tagName="p"
                      value={props.attributes.address}
                    />
                    <RichText.Content
                      {...blockProps}
                      tagName="p"
                      value={props.attributes.addresstext}
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <RichText.Content
                      {...blockProps}
                      tagName="p"
                      value={props.attributes.email}
                    />
                    <a href={props.attributes.emaillink}>
                      <RichText.Content
                        {...blockProps}
                        value={props.attributes.emailtext}
                      />
                    </a>
                  </li>
                </ul>

           
                <ul>
                  <li>
                    <RichText.Content
                      {...blockProps}
                      tagName="p"
                      value={props.attributes.number}
                    />
                    <a href={props.attributes.numberlink}>
                      <RichText.Content
                        {...blockProps}
                        value={props.attributes.numbertext}
                      />
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <RichText.Content
                      {...blockProps}
                      tagName="p"
                      value={props.attributes.skype}
                    />
                    <RichText.Content
                      {...blockProps}
                      tagName="p"
                      value={props.attributes.skypetext}
                    />
                  </li>
                </ul>

                <p class="contact-info__inner_information--message">
                  <RichText.Content
                    {...blockProps}
                    value={props.attributes.message}
                  />
                </p>
                <div class="contact-info__inner_information--icons">
                  <RichText.Content
                    {...blockProps}
                    tagName="h3"
                    value={props.attributes.socialtext}
                  />
                  <ul>
                    <li className="facebook-contactus">
                      <a
                        href={props.attributes.facebook}
                        class="icon-facebook"
                      ></a>
                    </li>
                    <li className="instagram-contactus">
                      <a
                        href={props.attributes.instagram}
                        class="icon-instagram"
                      ></a>
                    </li>
                    <li className="linkedin-contactus">
                      <a
                        href={props.attributes.linkedin}
                        class="icon-linkedin"
                      ></a>
                    </li>
                    <li className="twitter-contactus">
                      <a
                        href={props.attributes.twitter}
                        class="icon-twitter"
                      ></a>
                    </li>
                    <li className="whatsapp-contactus">
                      <a
                        href={props.attributes.whatsapp}
                        class="icon-whatsapp"
                      ></a>
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
