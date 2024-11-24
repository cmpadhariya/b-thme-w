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
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	TextControl,
	SelectControl,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";

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
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		numberOfItems,
		displayThumbnail,
		Title,
		SectionPadding,
		readMore,
	} = attributes;

	const onChangereadMore = (newReadMore) => {
		setAttributes({ readMore: newReadMore });
	};

	const onChangeTitle = (newTitle) => {
		setAttributes({ Title: newTitle });
	};

	const onChangeNumberOfItems = (newNumberOfItems) => {
		setAttributes({ numberOfItems: parseInt(newNumberOfItems, 10) });
	};

	const { posts } = useSelect(
		(select) => {
			const currentPostId = select("core/editor").getCurrentPostId();
			const categories = select("core/editor").getEditedPostAttribute("categories");

			const queryArgs = {
				categories: categories,
				per_page: numberOfItems,
				_embed: true,
				exclude: [currentPostId]
			};

			const posts = select("core").getEntityRecords(
				"postType",
				"case-studies",
				queryArgs
			);

			return {
				posts: posts,
			};
		},
		[numberOfItems]
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Block Settings", "qrolic")}>
					<PanelRow>
						<TextControl
							label={__("Section Padding Class", "qrolic")}
							value={SectionPadding}
							onChange={(value) => setAttributes({ SectionPadding: value })}
						/>
					</PanelRow>
					<SelectControl
						label={__("Number of Posts", "qrolic")}
						value={numberOfItems}
						options={[
							{ label: "0", value: 0 },
							{ label: "1", value: 1 },
							{ label: "2", value: 2 },
							{ label: "3", value: 3 },
							{ label: "4", value: 4 },
							{ label: "5", value: 5 },
							{ label: "6", value: 6 },
							{ label: "7", value: 7 },
							{ label: "8", value: 8 },
							{ label: "9", value: 9 },
							{ label: "10", value: 10 },
						]}
						onChange={onChangeNumberOfItems}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div className={`casestudy-related ${SectionPadding}`}>
					<div className="container p-0">
						<div className="casestudy-related__inner">
							<RichText
								tagName="h2"
								value={Title}
								onChange={onChangeTitle}
								placeholder={__("Enter title...", "qrolic")}
							/>
							{posts && posts.length > 0 && (
								<div className="row">
									{posts.map((post) => {
										const categories = post._embedded['wp:term'] ? post._embedded['wp:term'][0] : [];
										return (
											<div className="col-lg-6 col-md-6 col-sm-12 col-12" key={post.id}>
												<div className="casestudy-related__list">
													{displayThumbnail && post._embedded && post._embedded['wp:featuredmedia'] && (
														<div className="casestudy-related__list_image post-thumbnail">
															<img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} />
														</div>
													)}
													<div className="casestudy-related__list_title">
														<h3>
															<a href={post.link}>{post.title.rendered}</a>
														</h3>
													</div>
													{categories.length > 0 && (
														<ul className="post-categories casestudy-related__list_category">
															{categories.map((category) => (
																<li key={category.id}>{category.name}</li>
															))}
														</ul>
													)}
													<div className='casestudy-related__list_readmore'>
													<RichText
														tagName="span"
														value={readMore}
														onChange={onChangereadMore}
														placeholder={__("Enter Read More Text...", "qrolic")}
														className='subtitle'
													/>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
