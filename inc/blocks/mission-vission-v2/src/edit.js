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
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { boxes } = attributes;
	const blockProps = useBlockProps();

	const addBox = () => {
		const newBoxes = [...boxes, { icon: '', title: '', description: '' }];
		setAttributes({ boxes: newBoxes });
	};

	const removeBox = (index) => {
		const newBoxes = [...boxes];
		newBoxes.splice(index, 1);
		setAttributes({ boxes: newBoxes });
	};

	const updateBox = (index, field, value) => {
		const newBoxes = [...boxes];
		newBoxes[index][field] = value;
		setAttributes({ boxes: newBoxes });
	};

	return (
		<div {...blockProps}>
			<div className='mission-vission'>
				<div className='container p-0'>
					<div className='mission-vission__inner'>
						<div className='row'>
							{boxes.map((box, index) => (
								<div key={index} className='col-lg-4 col-md-6 col-12'>
									<div key={index} className="mission-vission__inner_box">
										<div className="mission-vission__inner_box-heading">
											<TextControl
												label={__('Icon class', 'qrolic')}
												value={box.icon}
												placeholder={__('Add icon class', 'qrolic')}
												onChange={(value) => updateBox(index, 'icon', value)}
											/>
											<RichText
												tagName="h3"
												className='mission-textcolor'
												label={__('Title', 'qrolic')}
												value={box.title}
												placeholder={__('Heading', 'qrolic')}
												onChange={(value) => updateBox(index, 'title', value)}
											/>
										</div>
										<div className="mission-vission__inner_box-description">
											<RichText
												tagName="p"
												className='mission-textcolor subtitle'
												placeholder={__('Description', 'qrolic')}
												value={box.description}
												onChange={(value) => updateBox(index, 'description', value)}
											/>
										</div>
										<Button isDestructive onClick={() => removeBox(index)}>
											{__('X', 'qrolic')}
										</Button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<InspectorControls key="styles">
				<PanelBody title="Box Settings">
					<Button
						isPrimary
						onClick={addBox}
					>
						{__('+ Add Box', 'qrolic')}
					</Button>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
