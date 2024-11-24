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
import { PanelBody, Button, TextControl } from "@wordpress/components";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import { useSelect } from "@wordpress/data";

import { RawHTML } from "@wordpress/element";

import { __experimentalGetSettings } from "@wordpress/date";

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
		attributes: { numberOfItems },
		setAttributes,
	} = props;
	const onChangelocation = (newlocation) => {
		setAttributes({ location: newlocation });
	};
	const onChangecategory = (newcategory) => {
		setAttributes({ category: newcategory });
	};
	const onChangebuttonText = (newbuttonText) => {
		setAttributes({ buttonText: newbuttonText });
	};

	const { authorDetails, posts } = useSelect(
		(select) => {
			const _authorId = select("core/editor").getCurrentPostAttribute("author");

			const authorDetails = _authorId
				? select("core").getUser(_authorId)
				: null;

			const posts = select("core").getEntityRecords("postType", "careers", {
				author: _authorId,
				per_page: numberOfItems,
				_embed: true,
			});

			return {
				authorDetails: authorDetails,
				posts: posts,
			};
		},
		[numberOfItems]
	);

	return (
		<>
			<div className="career-list ">
				<div className="container p-0">
					<div className="career-list__inner">
						<div className={`row`}>
							{posts &&
								posts.map((post) => {
									return (
										<div key={post.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
											<div class="career-list__inner_content">
												<h3>
													{post.title.rendered ? (
														<RawHTML>{post.title.rendered}</RawHTML>
													) : (
														__("Default title", "author-plugin")
													)}
												</h3>
												<RichText
													tagName="p"
													value={props.attributes.location}
													onChange={onChangelocation}
													placeholder={__("Enter post location ...")}
												/>
												<RichText
													tagName="span"
													value={props.attributes.category}
													onChange={onChangecategory}
													placeholder={__("Add category manual ...")}
												/>

												<h5 className="wp-block-author-box-author-plugin__post-title">
													<a href={post.link} className="button-view-post-service">
														<RichText
															value={props.attributes.buttonText}
															onChange={onChangebuttonText}
															placeholder={__("Button Text ...")}
														/>
													</a>
												</h5>
											</div>
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
