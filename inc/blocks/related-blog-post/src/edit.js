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
	RichText
} from '@wordpress/block-editor';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import { useSelect } from '@wordpress/data';

import { RawHTML } from '@wordpress/element';

import {  dateI18n, format, __experimentalGetSettings } from '@wordpress/date';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { 
		numberOfItems, 
		displayExcerpt, 
		displayDate, 
		displayThumbnail,
		Title
	} = attributes;
	const onChangeTitle = (newTitle) => {
		setAttributes({ Title: newTitle });
	};
	const { authorDetails, posts } = useSelect(
		( select ) => {

			const _authorId = select( 'core/editor' ).getCurrentPostAttribute( 'author' );

			const authorDetails = _authorId ? select( 'core' ).getUser( _authorId ) : null;
		
			const posts = select( 'core' ).getEntityRecords( 'postType', 'blog', {
				'author': _authorId,
				'per_page': numberOfItems,
				'_embed': true
			});

			return { 
				authorDetails: authorDetails,
				posts: posts
			};
		},
		[ numberOfItems ]
	);
	return (
			<div className='related-blog'>
				<RichText
					tagName="h4"
					value={Title}
					onChange={onChangeTitle}
					placeholder={__("Enter title...", "qrolic")}
				/>
				<div className='related-blog__inner'>
					{ posts && posts.map( ( post ) => {
						return (
							<div key={ post.id } className='related-blog__inner_content'>
								<div className='description'>
									<h5 className='wp-block-author-box-author-plugin__post-title'>
										<a href={ post.link }>
											{ post.title.rendered ? (
												<RawHTML>
													{ post.title.rendered }
												</RawHTML>
											) : (
												__( 'Default title', 'author-plugin' )
											)}
										</a>
									</h5>
									<span
										className='post-date'
										dateTime={ format( 'c', post.date_gmt ) }
									>
										{ dateI18n(
											__experimentalGetSettings().formats.date, 
											post.date_gmt
										)}
									</span>
								</div>
							</div>
						)
					})}
				</div>
			</div>
	);
}
