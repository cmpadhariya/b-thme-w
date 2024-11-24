/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';

export default function save({ attributes }) {
	const { boxes } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className='mission-vission'>
				<div className='container p-0'>
					<div className='mission-vission__inner'>
						<div className='row'>
							{boxes.map((box, index) => (
								<div key={index} className='col-lg-4 col-md-6 col-12'>
									<div className="mission-vission__inner_box">
										<div className="mission-vission__inner_box-heading">
											<i className={box.icon}></i>
											<RichText.Content
												tagName="h3"
												value={box.title}
											/>
										</div>
										<div className="mission-vission__inner_box-description">
											<RichText.Content
												tagName="p"
												value={box.description}
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
		</div>
	);
}
