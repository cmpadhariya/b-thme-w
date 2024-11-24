import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';

export default function Save({ attributes }) {
	const { items } = attributes;

	return (
		<section {...useBlockProps.save()}>
			<div className="why-qt-services">
				<div className="container p-0">
					<div className="why-qt-services__inner">
						<div className="row">
							{items.map((item, index) => (
								<div className="col-lg-4 col-md-6 col-sm-6" key={index}>
									<div className="why-qt-services__inner_item">
										<div className="why-qt-services__inner_item--icon">
											{item.imageUrl ? (
												<img src={item.imageUrl} alt={__( 'Benefits Icon', 'why-qrolic-services-v2' )} className="service-image" width="72" height="72" loading="lazy" />
											) : (
												<RichText.Content tagName="span" className={item.icon} />
											)}
										</div>
										<div className="why-qt-services__inner_item--text">
											<RichText.Content
												tagName="h3"
												value={item.title}
											/>
											<RichText.Content
												tagName="p"
												value={item.description}
												className='description-secondary'
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
