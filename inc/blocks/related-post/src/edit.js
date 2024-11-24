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
	useBlockProps,RichText, InspectorControls 
} from '@wordpress/block-editor';

import { SelectControl, PanelBody, PanelRow,ToggleControl, TextControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { RawHTML } from "@wordpress/element";
import { useSelect } from '@wordpress/data';
import { dateI18n, format, __experimentalGetSettings } from '@wordpress/date';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { 
		numberOfItems,
		Title,
		buttonText,
		displayDate,
    	buttonURL,
		selectedCategory,
		displayThumbnail,
		displayExcerpt,
		SectionPadding
	} = attributes;

	const onChangeTitle = (newTitle) => {
		setAttributes({ Title: newTitle });
	};
	
	const onChangeButtonText = (newButtonText) => {
		setAttributes({ buttonText: newButtonText });
	};

	const { authorDetails, posts, categories } = useSelect(
		(select) => {
		  const _authorId = select("core/editor").getCurrentPostAttribute("author");
		  const authorDetails = _authorId ? select("core").getUser(_authorId) : "";
	
		  const perPage = numberOfItems || 10;
	
		  const posts = select("core").getEntityRecords("postType", "blog", {
			author: _authorId,
			per_page: perPage,
			_embed: true,
			...(selectedCategory && {
				"blog-category": selectedCategory,
			}),
		  });
	
		  const categories = select("core").getEntityRecords(
			"taxonomy",
			"blog-category",
			{
			  per_page: -1,
			}
		  );
	
		  return {
			authorDetails: authorDetails,
			posts: posts,
			categories: categories || [],
		  };
		},
		[numberOfItems, selectedCategory]
	);

	const latestPosts = useSelect((select) => {
		const perPage = numberOfItems || 3;
		const latestPosts = select("core").getEntityRecords("postType", "blog", {
			per_page: perPage,
			orderby: "date",
			order: "desc",
			_embed: true,
		});

		return latestPosts || [];
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Related Blog Post Settings", "qrolic")}>
					<PanelRow>
						<TextControl
							label={ __( 'Add Section Padding Class', 'qrolic' ) }
							value={ SectionPadding }
							onChange={ ( value ) =>
								setAttributes( { SectionPadding: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						{categories && (
							<SelectControl
								label={__("Select Category", "qrolic")}
								value={selectedCategory}
								options={[
									{ value: '', label: __("No category", "qrolic") }, // Added "No category" option
									...categories.map((category) => ({
										value: category.id.toString(),
										label: category.name,
									}))
    							]}
								onChange={(value) => setAttributes({ selectedCategory: value })}
							/>
						)}
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__("Number of Posts", "qrolic")}
							value={numberOfItems}
							onChange={(value) => setAttributes({ numberOfItems: value })}
							type="number"
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__("Button URL", "qrolic")}
							value={buttonURL}
							onChange={(url) => setAttributes({ buttonURL: url })}
						/>
          			</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show Date', 'qrolic' ) }
							checked={ displayDate }
							onChange={ () =>
								setAttributes( { displayDate: ! displayDate } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Display Excerpt', 'qrolic' ) }
							checked={ displayExcerpt }
							onChange={ () =>
								setAttributes( { displayExcerpt: ! displayExcerpt } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() } className={`related-service-blog ${ SectionPadding }`}>
				<div className='container p-0'>
					<RichText
						tagName="h2"
						value={Title}
						onChange={onChangeTitle}
						placeholder={__("Enter title...", "qrolic")}
					/>
					<div className='related-service-blog__inner'>
						<div className={ `row` }>
							{ selectedCategory ? posts && posts.map((post) => (
								<div key={post.id} className="col-lg-6 col-md-6 col-sm-12 col-12 m-bottom">
									<div className="related-service-blog__inner_box">
										<div className="description">
											<h3 className="title">
												<a href={post.link}>
													{post.title.rendered ? (
													<RawHTML>{post.title.rendered}</RawHTML>
													) : (
													__("Default title", "qrolic")
													)}
												</a>
											</h3>
											{ 
												displayDate && (
													<span className='post-date'
														dateTime={ format( 'c', post.date_gmt ) }
													>
														{ dateI18n(
															__experimentalGetSettings().formats.date, 
															post.date_gmt
														)}
													</span>
												) 
											}
											{ 
												displayExcerpt &&
												post.excerpt?.rendered && (
													<div className='post-excerpt description-primary'>
														<RawHTML>
															{ post.excerpt.rendered }
														</RawHTML>
													</div>
												)
											}
										</div>
									</div>
								</div>
							)) : (
								latestPosts && latestPosts.length > 0 ? (
									latestPosts.map((latestPost) => (
										<div key={latestPost.id} className="col-lg-6 col-md-6 col-sm-12 col-12 m-bottom">
											{/* Render the latest posts here */}
											<div className="related-service-blog__inner_box">
												<div className="description">
													<h3 className="title">
														<a href={latestPost.link}>
															{latestPost.title.rendered ? (
																<RawHTML>{latestPost.title.rendered}</RawHTML>
															) : (
																__("Default title", "qrolic")
															)}
														</a>
													</h3>
													{displayDate && (
														<span className='post-date'
															dateTime={format('c', latestPost.date_gmt)}
														>
															{dateI18n(
																__experimentalGetSettings().formats.date,
																latestPost.date_gmt
															)}
														</span>
													)}
													{displayExcerpt &&
														latestPost.excerpt?.rendered && (
															<div className='post-excerpt description-primary'>
																<RawHTML>
																	{latestPost.excerpt.rendered}
																</RawHTML>
															</div>
													)}
												</div>
											</div>
										</div>
									))) :(
										<div>No Posts</div>
									)
								)}
						</div>
						<div className='related-service-blog__inner_button'>
							<a className="button-general">
								<RichText
									value={buttonText}
									onChange={onChangeButtonText}
									placeholder={__("Enter button text...", "qrolic")}
								/>
            				</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
