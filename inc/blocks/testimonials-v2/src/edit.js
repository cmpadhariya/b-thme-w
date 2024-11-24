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
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	QueryControls,	
	TextControl,
	SelectControl
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { useSelect } from '@wordpress/data';
import { RawHTML } from '@wordpress/element';
import { dateI18n, format, __experimentalGetSettings } from '@wordpress/date';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

const stripHTMLTags = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
};

export default function Edit( { attributes, setAttributes } ) {

	const { title, subtitle, description, SectionPadding, displayExcerpt, selectedPostIds = [] } = attributes;

	const onChangeSubtitle = (newSubtitle) => {
		setAttributes({ subtitle: newSubtitle });
	};

	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });
	};

	const onChangeDescription = (newDescription) => {
		setAttributes({ description: newDescription });
	};

	const postOptions = useSelect((select) => {
		const testimonialRecords = select("core").getEntityRecords("postType", "testimonial");
			return testimonialRecords ? testimonialRecords.map((testimonial) => ({
				value: testimonial.id.toString(),
				label: testimonial.title.rendered,
			})) : [];
	}, []);

	const selectedPosts = useSelect(
        (select) => {
            if (!Array.isArray(selectedPostIds)) {
                return [];
            }
            return selectedPostIds.map((id) => select("core").getEntityRecord("postType", "testimonial", id));
        },
        [selectedPostIds]
    );

	const updateSelectedPostId = (index, value) => {
        const newSelectedPostIds = [...selectedPostIds];
        newSelectedPostIds[index] = parseInt(value, 10);
        setAttributes({ selectedPostIds: newSelectedPostIds });
    };

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Testimonials Settings', 'qrolic' ) }>
					<PanelRow>
						<TextControl
							label={ __( 'Add Section Padding Class', 'qrolic' ) }
							value={ SectionPadding }
							onChange={ ( value ) =>
								setAttributes( { SectionPadding: value } )
							}
						/>
					</PanelRow>
					{[0, 1, 2].map((index) => (
						<PanelRow key={index}>
							<SelectControl
								label={__("Select Post", "qrolic") + ` ${index + 1}`}
								value={selectedPostIds[index] || ""}
								options={[{ value: "", label: __("Select a post", "qrolic") }, ...postOptions]}
								onChange={(value) => updateSelectedPostId(index, value)}
							/>
						</PanelRow>
					))}
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<div className={`testimonials ${ SectionPadding }`}>
					<div className='container p-0'>
						<div className='testimonials__top'>
							<RichText
								tagName="p"
								className='subtitle subtitle-heading'
								value={subtitle}
								multiline="br"
								onChange={onChangeSubtitle}
								placeholder={__("Enter subtitle...", "qrolic")}
							/>
							<div className='row align-items-center'>
								<div className='col-lg-6 col-md-6 col-12'>
									<RichText
										tagName="h2"
										value={title}
										multiline="br"
										onChange={onChangeTitle}
										placeholder={__("Enter section title...", "qrolic")}
									/>
								</div>
								<div className='col-lg-6 col-md-6 col-12'>
									<RichText
										tagName="p"
										value={description}
										multiline="br"
										className='description-primary'
										onChange={onChangeDescription}
										placeholder={__("Enter subtitle...", "qrolic")}
									/>
								</div>
							</div>
						</div>
						<div className='testimonials__inner'>
							<div className='row'>
								{selectedPosts.map((post, index) => post && (
									<div key={ post.id } className={`col-lg-4 col-md-6 col-12 m-bottom columns-${ columns }`}>
										<div className='testimonials__inner--content'>
											<ul>
												<li class="icon-star"></li>
												<li class="icon-star"></li>
												<li class="icon-star"></li>
												<li class="icon-star"></li>
												<li class="icon-star"></li>
											</ul>
											<p class="description-secondary">
												{stripHTMLTags(post.excerpt.rendered)}
											</p>
											<div class="post-meta">
												<h3>{post.title.rendered}</h3>
												<p class="client-position">{post.meta && post.meta.client_position && <p>{post.meta.client_position}</p>}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
