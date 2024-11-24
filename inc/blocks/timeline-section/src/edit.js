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
const { PanelBody, SelectControl } = wp.components;

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const {
		attributes: { year,title,description, alignment },
		setAttributes,
	} = props;
	const blockProps = useBlockProps();
	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};
	const onChangeYear = (newYear) => {
		setAttributes({ year: newYear });
	};
	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });
	};
	const onChangeDescription = (newDescription) => {
		setAttributes({ description: newDescription });
	};
	return (
		<div className='timeline__inner'>
			<InspectorControls key="styles">
				<PanelBody title="Timeline Alignment">
					<SelectControl
						label="Alignment"
						value={alignment}
						options={[
							{ label: 'Left', value: 'left' },
							{ label: 'Right', value: 'right' },
						]}
						onChange={onChangeAlignment}
					/>
				</PanelBody>
			</InspectorControls>
			<div className={`timeline__year`}>
				<RichText
					tagName='h3'
					onChange={onChangeYear}
					placeholder='Year'
					value={year}
				/>
			</div>
			<div className={`timeline__description align${alignment}`}>
				<RichText
					tagName='h4'
					onChange={onChangeTitle}
					placeholder='Title'
					value={title}
				/>
				<RichText
					tagName='p'
					onChange={onChangeDescription}
					placeholder='Short description'
					className='description-primary'
					value={description}
				/>
			</div>
		</div>
	);
}
