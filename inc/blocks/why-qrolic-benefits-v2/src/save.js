import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { heading, description, items, buttonText1, buttonURL1, buttonText2, buttonURL2, imageUrl, showButtons, showList } = attributes;

	return (
		<div className="why-qt-benefits__inner_box" { ...useBlockProps.save() }>
			<div className="row">
				<div className="col-lg-8">
					<div className="why-qt-benefits__inner_text">
						<div className="why-qt-benefits__inner_text--heading">
							<RichText.Content tagName="h2" value={ heading } />
							<RichText.Content tagName="p" value={ description } className="description-primary" />
						</div>
						{ showList && (
							<ul className="why-qt-benefits__inner_text--list">
								{ items.map( ( item, index ) => (
									<li key={ index }>
										<RichText.Content tagName="i" className={ item.icon } />
										<RichText.Content tagName="span" value={ item.text } />
									</li>
								))}
							</ul>
						) }
						{ showButtons && (
							<div className="why-qt-benefits__inner_text--button">
								<a href={ buttonURL1 } className="why-qt-benefits__btnwhite" target="_blank" rel="noopener noreferrer">
									{ buttonText1 }
								</a>
								<a href={ buttonURL2 } className="why-qt-benefits__btnlink" target="_self" rel="noopener noreferrer">
									{ buttonText2 }
								</a>
							</div>
						)}
					</div>
				</div>
				<div className="col-lg-4">
					<div className="why-qt-benefits__inner_image">
						{ imageUrl && <img src={ imageUrl } alt="Why Qrolic Benefits Image" height="520" width="527" loading="lazy" /> }
					</div>
				</div>
			</div>
		</div>
	);
}
