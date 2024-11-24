/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { forEach } from 'lodash';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,InspectorControls,RichText } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	QueryControls,
	SelectControl,
	ToggleControl,
	RangeControl
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
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { 
		numberOfItems, 
		columns, 
		displayExcerpt, 
		displayDate, 
		displayThumbnail,
		readMore,
		Title
	} = attributes;

	const onChangeTitle = (newTitle) => {
		setAttributes({ Title: newTitle });
	};

	const { authorDetails, posts } = useSelect(
		( select ) => {

			const _authorId = select( 'core/editor' ).getCurrentPostAttribute( 'author' );

			const authorDetails = _authorId ? select( 'core' ).getUser( _authorId ) : null;
		
			const posts = select( 'core' ).getEntityRecords( 'postType', 'case-studies', {
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
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Content Settings', 'author-plugin' ) }>
					<PanelRow>
						<QueryControls 
							numberOfItems={ numberOfItems }
							onNumberOfItemsChange={ ( value ) =>
								setAttributes( { numberOfItems: value } )
							}
							minItems={ 1 }
							maxItems={ 10 }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label={ __( 'Number of Columns', 'author-plugin' ) }
							value={ columns }
							onChange={ ( value ) =>
								setAttributes( { columns: value } )
							}
							min={ 1 }
							max={ 4 }
							required
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show Featured Image', 'author-plugin' ) }
							checked={ displayThumbnail }
							onChange={ () =>
								setAttributes( { displayThumbnail: ! displayThumbnail } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show Date', 'author-plugin' ) }
							checked={ displayDate }
							onChange={ () =>
								setAttributes( { displayDate: ! displayDate } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Display Excerpt', 'author-plugin' ) }
							checked={ displayExcerpt }
							onChange={ () =>
								setAttributes( { displayExcerpt: ! displayExcerpt } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() } className='casestudies-related-posts section-padding'>
				<div className='container p-0'>
					<RichText
						tagName="h2"
						value={Title}
						onChange={onChangeTitle}
						placeholder={__("Enter title...", "qrolic")}
					/>
					<div className={ `row` }>
					{ posts && posts.map( ( post ) => {					
						return (
							<div key={ post.id } className='col-lg-6 col-md-6 col-12'>
								<div class="casestudies-related-posts__inner">
									<a href={ post.link }>
										{
											displayThumbnail && 
											post._embedded && 
											post._embedded['wp:featuredmedia'] &&
											post._embedded['wp:featuredmedia'][0] &&
											<img 
											className='wp-block-author-box-author-plugin__post-thumbnail'
												src={ post._embedded['wp:featuredmedia'][0].source_url }
												alt={ post._embedded['wp:featuredmedia'][0].alt_text }
											/>
										}
									</a>
									<div class="description">
										<h4
											className='wp-block-author-box-author-plugin__post-title'
										>
											<a href={ post.link }>
												{ post.title.rendered ? (
													<RawHTML>
														{ post.title.rendered }
													</RawHTML>
												) : (
													__( 'Default title', 'author-plugin' )
												)}
											</a>
										</h4>
										{ 
											displayDate && (
												<time
													className='wp-block-author-box-author-plugin__post-date'
													dateTime={ format( 'c', post.date_gmt ) }
												>
													{ dateI18n(
														__experimentalGetSettings().formats.date, 
														post.date_gmt
													)}
												</time>
											) 
										}
										{ 
											displayExcerpt &&
											// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
											post.excerpt?.rendered && (
												<div className='wp-block-author-box-author-plugin__post-excerpt'>
													<RawHTML>
														{ post.excerpt.rendered }
													</RawHTML>
												</div>
											)
										}
										<a href={ post.link } className='readmore'>
											Keep Reading
										</a>
									</div>
								</div>
							</div>
						)
					})}
					</div>
				</div>
			</div>
		</>
	);
}
