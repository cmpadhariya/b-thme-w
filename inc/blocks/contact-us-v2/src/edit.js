/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

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
    MediaUpload,
    MediaUploadCheck
} from '@wordpress/block-editor';
import { Button, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit(props) {
    const {
        attributes: {
            contactform,
            mainheading,
            topdescription,
            heading,
            email,
            emaillink,
            emailtext,
            number,
            numberlink,
            numbertext,
            socialtext,
            facebook,
            twitter,
            instagram,
            linkedin,
            addresstext,
            whatsapp,
            centertext,
            secondheading,
            callheading,
            calldescription,
            callbutton,
            callbuttonlink,
            imageUrl,
            imgheight,
            imgwidth,
            iconclass
        },
        setAttributes,
    } = props;
    const blockProps = useBlockProps();

    const onChangeHeading = (newContent) => {
        setAttributes({ heading: newContent });
    };
    const onChangeMainheading = (newContent) => {
        setAttributes({ mainheading: newContent });
    };
    const onChangeTopdescription = (newContent) => {
        setAttributes({ topdescription: newContent });
    };
    const onChangeEmailText = (newContent) => {
        setAttributes({ emailtext: newContent });
    };
    const onChangeEmail = (newContent) => {
        setAttributes({ email: newContent });
    };
    const onChangeEmailLink = (newContent) => {
        setAttributes({ emaillink: newContent });
    };
    const onChangeNumberText = (newContent) => {
        setAttributes({ numbertext: newContent });
    };
    const onChangeNumber = (newContent) => {
        setAttributes({ number: newContent });
    };
    const onChangeNumberLink = (newContent) => {
        setAttributes({ numberlink: newContent });
    };
    const onChangeSocialText = (newContent) => {
        setAttributes({ socialtext: newContent });
    };
    const onChangeContactForm = (newContent) => {
        setAttributes({ contactform: newContent });
    };
    const onChangeTwitter = (newContent) => {
        setAttributes({ twitter: newContent });
    };
    const onChangeFacebook = (newContent) => {
        setAttributes({ facebook: newContent });
    };
    const onChangeInstagram = (newContent) => {
        setAttributes({ instagram: newContent });
    };
    const onChangeLinkedin = (newContent) => {
        setAttributes({ linkedin: newContent });
    };
    const onChangeAddressText = (newContent) => {
        setAttributes({ addresstext: newContent });
    };
    const onChangeWhatsapp = (newContent) => {
        setAttributes({ whatsapp: newContent });
    };
    const onChangeCentertext = (newContent) => {
        setAttributes({ centertext: newContent });
    };
    const onChangeSecondheading = (newContent) => {
        setAttributes({ secondheading: newContent });
    };
    const onChangeCallheading = (newContent) => {
        setAttributes({ callheading: newContent });
    };
    const onChangeCalldescription = (newContent) => {
        setAttributes({ calldescription: newContent });
    };
    const onChangeCallbutton = (newContent) => {
        setAttributes({ callbutton: newContent });
    };
    const onChangeCallbuttonlink = (newContent) => {
        setAttributes({ callbuttonlink: newContent });
    };
    const onChangeImagewidth = (newWidth) => {
        setAttributes({ imgwidth: newWidth });
    };
    const onChangeImageheight = (newHeight) => {
        setAttributes({ imgheight: newHeight });
    };
    const onChangeIconclass = (newContent) => {
        setAttributes({ iconclass: newContent });
    };
    const updateImageUrl = (url) => {
        setAttributes({ imageUrl: url });
    };
    const removeImage = () => {
        setAttributes({ imageUrl: '' });
    };

    return (
        <section  {...blockProps} >
        <div className="contact-info-v2">
            <div className="container p-0">
                <div className="contact-info-v2__heading">
                    <TextControl
                        tagName="h1"
                        onChange={onChangeMainheading}
                        placeholder={__('Heading')}
                        value={mainheading}
                    />
                    <RichText
                        tagName="p"
                        onChange={onChangeTopdescription}
                        placeholder={__('description')}
                        value={topdescription}
                        className='description-primary'
                    />
                </div>
                <div className="contact-info-v2__inner">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="contact-info-v2__inner_form">
                                <TextControl
                                    tagName="div"
                                    onChange={onChangeContactForm}
                                    placeholder={__('Contact Form')}
                                    value={contactform}
                                />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="contact-info-v2__inner_information">
                                <RichText
                                    tagName="h2"
                                    onChange={onChangeHeading}
                                    placeholder={__('Title')}
                                    value={heading}
                                    className='contact-change-heading'
                                />
                                <div className="contact-info-v2__inner_information-email">
                                <i className="icon-mail"></i>
                                <div class="contact-info-v2__inner_information-email--content">
                                    <RichText
                                        tagName="p"
                                        className="changecolor"
                                        onChange={onChangeEmail}
                                        placeholder={__('Text')}
                                        value={email}
                                    />
                                    <RichText
                                        tagName="a"
                                        onChange={onChangeEmailText}
                                        placeholder={__('Link')}
                                        value={emailtext}
                                    />
                                    </div>
                                </div>
                                <div className="contact-info-v2__inner_information-phone">
                                <i className="icon-phone"></i>
                                <div className="contact-info-v2__inner_information-phone--content">
                                    <RichText
                                        tagName="p"
                                        onChange={onChangeNumber}
                                        placeholder={__('Text')}
                                        value={number}
                                        className="changecolor description-secondary"
                                    />
                                    <RichText
                                        tagName="a"
                                        onChange={onChangeNumberText}
                                        placeholder={__('Link')}
                                        value={numbertext}
                                    />
                                    </div>
                                </div>
                                <div className="contact-info-v2__inner_information-address">
                                <i className="icon-location-v2"></i>
                                <div className="contact-info-v2__inner_information-address--content">
                                    <RichText
                                        tagName="p"
                                        onChange={onChangeAddressText}
                                        placeholder={__('Text')}
                                        value={addresstext}
                                        className="changecolor description-secondary"
                                    />
                                    </div>
                                </div>
                                <div className="contact-info__inner_information--icons">
                                    <RichText
                                        tagName="h3"
                                        onChange={onChangeSocialText}
                                        placeholder={__('Text')}
                                        value={socialtext}
                                    />
                                    <ul>
                                        <li className="linkedin-contactus">
                                            <a href={linkedin} className="icon-linkedin"></a>
                                        </li>
                                        <li className="facebook-contactus">
                                            <a href={facebook} className="icon-facebook"></a>
                                        </li>
                                        <li className="instagram-contactus">
                                            <a href={instagram} className="icon-instagram"></a>
                                        </li>
                                        <li className="twitter-contactus">
                                            <a href={twitter} className="icon-twitter"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-info-v2__bookcall">
                    <RichText
                        tagName="p"
                        onChange={onChangeCentertext}
                        placeholder={__('description')}
                        value={centertext}
                        className='description-primary line-description'
                    />
                    <TextControl
                        tagName="h2"
                        onChange={onChangeSecondheading}
                        placeholder={__('second heading')}
                        value={secondheading}
                        className='contact-second-heading'
                    />
                    <div className="contact-info-v2__bookcall_jumpcall">
                        <div className="contact-info-v2__bookcall_box">
                            <div className="background-img"></div>
                            <div className="contact-info-v2__bookcall_box-img">
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={(media) => updateImageUrl(media.url)}
                                    allowedTypes={['image']}
                                    render={({ open }) => (
                                        <div>
                                            <Button onClick={open}>
                                                {imageUrl ? (
                                                    <img src={imageUrl} alt={__('Box Image', 'qrolic')} width={imgwidth} height={imgheight} loading="lazy" />
                                                ) : (
                                                    __('Upload Image', 'qrolic')
                                                )}
                                            </Button>
                                            {imageUrl && (
                                                <Button
                                                    isDestructive
                                                    onClick={removeImage}
                                                >
                                                    {__('X', 'qrolic')}
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                />
                            </MediaUploadCheck>
                            </div>
                            <div className="contact-info-v2__bookcall_box-content">
                            <div className="contact-info-v2__bookcall_box-heading">
                                <RichText
                                    tagName="h2"
                                    onChange={onChangeCallheading}
                                    placeholder={__('second heading')}
                                    value={callheading}
                                    className='contact-call-heading'
                                />
                                <RichText
                                    tagName="p"
                                    onChange={onChangeCalldescription}
                                    placeholder={__('description')}
                                    value={calldescription}
                                    className='description-primary contact-call-description'
                                />
                            </div>
                            <div className="contact-info-v2__bookcall_box-button">
                                <RichText
                                    tagName="a"
                                    onChange={onChangeCallbutton}
                                    placeholder={__('description')}
                                    value={callbutton}
                                    className='description-primary'
                                    target='_blank'
                                    rel="noopener"
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <InspectorControls>
                    <TextControl
                        label={__('Add Number Link')}
                        onChange={onChangeNumberLink}
                        value={numberlink}
                    />
                    <TextControl
                        label="Add Email Link"
                        onChange={onChangeEmailLink}
                        value={emaillink}
                      />
                    <TextControl
                        label={__('Add LinkedIn Icon Link')}
                        onChange={onChangeLinkedin}
                        value={linkedin}
                    />
                    <TextControl
                        label={__('Add Facebook Icon Link')}
                        onChange={onChangeFacebook}
                        value={facebook}
                    />
                    <TextControl
                        label={__('Add Instagram Icon Link')}
                        onChange={onChangeInstagram}
                        value={instagram}
                    />
                    <TextControl
                        label={__('Add Twitter Icon Link')}
                        onChange={onChangeTwitter}
                        value={twitter}
                    />
                    <TextControl
                        label={__('Add WhatsApp Icon Link')}
                        onChange={onChangeWhatsapp}
                        value={whatsapp}
                    />
                    <TextControl
                        label={__('Add Button link')}
                        onChange={onChangeCallbuttonlink}
                        value={callbuttonlink}
                    />
                    <TextControl
                        label={__('Add Image Width')}
                        onChange={onChangeImagewidth}
                        value={imgwidth}
                    />
                    <TextControl
                        label={__('Add Image Height')}
                        onChange={onChangeImageheight}
                        value={imgheight}
                    />
                    <TextControl
                        label={__('Add Icon class')}
                        onChange={onChangeIconclass}
                        value={iconclass}
                    />
                </InspectorControls>
            </div>
        </div>
        </section>
    );
}
