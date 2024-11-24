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
export default function Save({ attributes }) {
	const { sectionTitle, sectionDescription, benefitsItems } = attributes;

	return (
		<section {...useBlockProps.save()}>
			<div className="services-benefits">
				<div className="container p-0">
					<div className="services-benefits__inner">
						<div className="services-benefits__inner_heading">
							<RichText.Content
								tagName="h2"
								value={sectionTitle}
							/>
							<RichText.Content
								tagName="p"
								value={sectionDescription}
								className='description-primary'
							/>
						</div>
						<div className="row">
							{benefitsItems.map((item, index) => (
								<div className="col-sm-6" key={index}>
									<div className="services-benefits__inner_items">
										<div className="services-benefits__inner_items--icon">
											<RichText.Content
												tagName="span"
												value={item.icon}
											/>
										</div>
										<div className="services-benefits__inner_items--text">
											<RichText.Content
												tagName="h3"
												value={item.title}
											/>
											<RichText.Content
												tagName="p"
												value={item.description}
												className='subtitle'
											/>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
