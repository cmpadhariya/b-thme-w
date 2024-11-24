import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
    RichText,
} from '@wordpress/block-editor';
import {
    PanelBody,
    PanelRow,
    TextControl,
    SelectControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const {
        title,
        description,
        SectionPadding,
        sectionDescription,
        icon,
        selectedPostIds = [],
    } = attributes;

    // Fetch options for testimonial posts
    const postOptions = useSelect((select) => {
        const testimonialRecords = select('core').getEntityRecords(
            'postType',
            'testimonial'
        );
        return testimonialRecords
            ? testimonialRecords.map((testimonial) => ({
                  value: testimonial.id.toString(),
                  label: testimonial.title.rendered,
              }))
            : [];
    }, []);

    // Ensure selectedPostIds array has default values on first load
    useEffect(() => {
        if (selectedPostIds.length === 0) {
            setAttributes({ selectedPostIds: ['', '', ''] });
        }
    }, []);

    // Update selected post ID based on index
    const updateSelectedPostId = (index, value) => {
        const newSelectedPostIds = [...selectedPostIds];
        newSelectedPostIds[index] = parseInt(value, 10);
        setAttributes({ selectedPostIds: newSelectedPostIds });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody
                    title={__('Testimonials Settings', 'career-testimonials-section-v2')}
                >
                    <PanelRow>
                        <TextControl
                            label={__('Section Padding Class', 'career-testimonials-section-v2')}
                            value={SectionPadding}
                            onChange={(value) => setAttributes({ SectionPadding: value })}
                        />
                    </PanelRow>
                    {[0, 1, 2].map((index) => (
                        <PanelRow key={index}>
                            <SelectControl
                                label={`${__('Select Testimonial', 'career-testimonials-section-v2')} ${index + 1}`}
                                value={selectedPostIds[index] || ''}
                                options={[
                                    {
                                        value: '',
                                        label: __('Select a testimonial', 'career-testimonials-section-v2'),
                                    },
                                    ...postOptions,
                                ]}
                                onChange={(value) => updateSelectedPostId(index, value)}
                            />
                        </PanelRow>
                    ))}
                    <PanelRow>
                        <TextControl
                            label={__('Icon Name', 'career-testimonials-section-v2')}
                            value={icon}
                            onChange={(value) => setAttributes({ icon: value })}
                            placeholder={__('Enter Icon name', 'career-testimonials-section-v2')}
                        />
                    </PanelRow>
                    <PanelRow>
                        <TextControl
                            label={__('Section bottom Heading name', 'career-testimonials-section-v2')}
                            value={sectionDescription}
                            onChange={(newSectionDescription) =>
                                setAttributes({ sectionDescription: newSectionDescription })
                            }
                            placeholder={__('Enter section description...', 'career-testimonials-section-v2')}
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <div {...useBlockProps()}>
                <div className={`career_testimonials ${SectionPadding}`}>
                    <div className="container p-0">
                        <div className="career_testimonials__top">
                            <div className="row align-items-center">
                                <RichText
                                    tagName="h2"
                                    value={title}
                                    onChange={(newTitle) => setAttributes({ title: newTitle })}
                                    placeholder={__('Enter section title...', 'career-testimonials-section-v2')}
                                />
                                <RichText
                                    tagName="p"
                                    className="description-heading"
                                    value={description}
                                    onChange={(newDescription) =>
                                        setAttributes({ description: newDescription })
                                    }
                                    placeholder={__('Enter description...', 'career-testimonials-section-v2')}
                                />
                            </div>
                        </div>
                        <div className="career_testimonials__inner">
                            <div className="row">
                                {selectedPostIds.map((postId, index) => (
                                    <TestimonialItem key={index} postId={postId} />
                                ))}
                            </div>
                            <RichText
                                tagName="p"
                                className="section-description-heading"
                                value={sectionDescription}
                                onChange={(newSectionDescription) =>
                                    setAttributes({ sectionDescription: newSectionDescription })
                                }
                                placeholder={__('Enter section description...', 'career-testimonials-section-v2')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

/**
 * Component to render each testimonial item.
 */
const TestimonialItem = ({ postId }) => {
    const post = useSelect((select) =>
        postId
            ? select('core').getEntityRecord('postType', 'testimonial', postId)
            : null
    );

    if (!post) {
        return null;
    }

    const thumbnailUrl       = post?.featured_media_src_url;
    const clientPosition     = post?.meta?.client_position || '';
    const title              = post?.title.rendered || '';
    const excerptWithoutTags = post?.excerpt?.rendered
        ? post.excerpt.rendered.replace(/(<([^>]+)>)/gi, '')
        : '';

    return (
        <div className="col-lg-4 col-md-6 col-12 m-bottom">
            <div className="career_testimonials__inner_box">
                <div className="career_testimonials__inner_box--image">
                    {thumbnailUrl && (
                        <img
                            src={thumbnailUrl}
                            alt="client image"
                            width="113"
                            height="113"
                            loading="lazy"
                        />
                    )}
                </div>
                <div className="career_testimonials__inner_box--content">
                    <ul>
                        {[...Array(5)].map((_, index) => (
                            <li key={index} className="icon-star"></li>
                        ))}
                    </ul>
                    <p className="description-secondary career_testimonials__inner_box--content-text">
                        {excerptWithoutTags}
                    </p>
                    <h3>{title}</h3>
                    {clientPosition && (
                        <p className="client-position">{clientPosition}</p>
                    )}
                    <p className="career_testimonials__inner_box--content-position">
                        {excerptWithoutTags}
                    </p>
                </div>
            </div>
        </div>
    );
};
