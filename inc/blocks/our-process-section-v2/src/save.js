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
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * The save function defines the way in which the block's content will be
 * rendered on the front end.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	const { processItems, Heading, subTitle } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<section { ...blockProps }>
			<div className="our-process">
				<div className="container p-0">
					<div className="our-process__inner">
						<div className="our-process__inner_heading">
							<RichText.Content tagName="p" value={ subTitle } className="subtitle" />
							<RichText.Content tagName="h2" value={ Heading } />
						</div>
						<div className="row">
							{ processItems.map( ( item, index ) => (
								<div className="our-process_col col-lg-3 col-md-6 col-sm-6 col-12" key={ index }>
									<div className="our-process__inner_items">
										{ item.image && (
											<img src={ item.image } alt={ item.altText } />
										) }
										<i className={ item.iconclass }></i>
										<RichText.Content tagName="h3" value={ item.title } />
										<RichText.Content tagName="p" className="description-secondary" value={ item.description } />
									</div>
								</div>
							) ) }
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}