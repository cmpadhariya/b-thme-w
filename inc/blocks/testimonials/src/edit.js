import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import {
	PanelBody, PanelRow, QueryControls, SelectControl, ToggleControl, RangeControl
} from '@wordpress/components';
import './editor.scss';
import { useSelect } from '@wordpress/data';
import { RawHTML } from '@wordpress/element';
import { __experimentalGetSettings } from '@wordpress/date';
export default function Edit({ attributes, setAttributes }) {
	const {
		Heading, numberOfItems, columns, displayExcerpt, displayContent, displayDate, displayThumbnail, displayAuthorInfo, showAvatar, avatarSize, showBio } = attributes;
	const onChangeHeading = (newHeading) => {
		setAttributes({ Heading: newHeading });
	};
	const { authorDetails, posts } = useSelect(
		(select) => {
			const _authorId = select('core/editor').getCurrentPostAttribute('author');
			const authorDetails = _authorId ? select('core').getUser(_authorId) : null;
			const posts = select('core').getEntityRecords('postType', 'testimonial', {
				'author': _authorId,
				'per_page': numberOfItems,
				'_embed': true
			});
			return {
				authorDetails: authorDetails,
				posts: posts
			};
		},
		[numberOfItems]
	);
	const avatarSizes = [];
    if (authorDetails) {
        for (const [size, url] of Object.entries(authorDetails.avatar_urls)) {
            avatarSizes.push({
                value: size,
                label: `${size} x ${size}`,
            });
        }
    }

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Author Info', 'author-plugin')}>
					<PanelRow>
						<ToggleControl
							label={__('Display Author Info', 'author-plugin')}
							checked={displayAuthorInfo}
							onChange={() =>
								setAttributes({ displayAuthorInfo: !displayAuthorInfo })
							}
						/>
					</PanelRow>
					{displayAuthorInfo && (
						<>
							<PanelRow>
								<ToggleControl
									label={__('Show avatar')}
									checked={showAvatar}
									onChange={() =>
										setAttributes({ showAvatar: !showAvatar })
									}
								/>
								{showAvatar && (
									<SelectControl
										label={__('Avatar size')}
										value={avatarSize}
										options={avatarSizes}
										onChange={(size) => {
											setAttributes({
												avatarSize: Number(size),
											});
										}}
									/>
								)}
							</PanelRow>
							<PanelRow>
								<ToggleControl
									label={__('Show Bio', 'author-plugin')}
									checked={showBio}
									onChange={() =>
										setAttributes({ showBio: !showBio })
									}
								/>
							</PanelRow>
						</>
					)}
				</PanelBody>
				<PanelBody title={__('Content Settings', 'author-plugin')}>
					<PanelRow>
						<QueryControls
							numberOfItems={numberOfItems}
							onNumberOfItemsChange={(value) =>
								setAttributes({ numberOfItems: value })
							}
							minItems={1}
							maxItems={10}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label={__('Number of Columns', 'author-plugin')}
							value={columns}
							onChange={(value) =>
								setAttributes({ columns: value })
							}
							min={1}
							max={4}
							required
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Show Featured Image', 'author-plugin')}
							checked={displayThumbnail}
							onChange={() =>
								setAttributes({ displayThumbnail: !displayThumbnail })
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Show Date', 'author-plugin')}
							checked={displayDate}
							onChange={() =>
								setAttributes({ displayDate: !displayDate })
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Display Excerpt', 'author-plugin')}
							checked={displayExcerpt}
							onChange={() =>
								setAttributes({ displayExcerpt: !displayExcerpt })
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Display Content', 'author-plugin')}
							checked={displayContent}
							onChange={() =>
								setAttributes({ displayContent: !displayContent })
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="testimonial-block section-padding">
					<div className="testimonial__heading">
						<div class='container p-0'>
							<RichText
								tagName="h2"
								value={Heading}
								multiline="br"
								onChange={onChangeHeading}
								placeholder={__("Enter banner heading text...", "qrolic")}
							/>
						</div>
					</div>
					<div className="testimonial__inner">
						<div class='container p-0'>
							<div className="splider">
								<div className="splide__track">
									<div className="splide__list">
										<ul className={`wp-block-author-box-author-plugin__post-items columns-${columns} `}>
											{posts &&
												posts.map((post, index) => (
													<li key={post.id} className="splide__slide">
														<div className="testimonial__inner_heading">
															<span className="post-number" > slider {index +1}</span>
															{displayContent && post.content?.rendered && (
																<p className="testimonial__inner_heading description-primary">
																	<RawHTML>{post.content.rendered}</RawHTML>
																</p>
															)}
														</div>
														<span className="testimonial__inner_name-back-end">
															<a href={post.link}>
																{post.title.rendered ? (
																	<RawHTML>{post.title.rendered}</RawHTML>
																) : (
																	__('Default title', 'author-plugin')
																)}
															</a>
														</span>
														{displayExcerpt && post.excerpt?.rendered && (
															<p className="testimonial__inner_location description-primary">
																<RawHTML>{post.excerpt.rendered}</RawHTML>
															</p>
														)}
													</li>
												))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
	