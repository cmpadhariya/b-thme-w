/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const {
		attributes: {
			heading,
			subheading,
			discription,
			subheading2,
			discription2,
			subheading3,
			discription3,
		},
		setAttributes,
	} = props;
	const blockProps = useBlockProps();
	const onChangeheading = (newContent) => {
		setAttributes({ heading: newContent });
	};
	const onChangesubheading = (newContent) => {
		setAttributes({ subheading: newContent });
	};
	const onChangediscription = (newContent) => {
		setAttributes({ discription: newContent });
	};
	const onChangesubheading2 = (newContent) => {
		setAttributes({ subheading2: newContent });
	};
	const onChangediscription2 = (newContent) => {
		setAttributes({ discription2: newContent });
	};
	const onChangesubheading3 = (newContent) => {
		setAttributes({ subheading3: newContent });
	};
	const onChangediscription3 = (newContent) => {
		setAttributes({ discription3: newContent });
	};

	return (
		<div class="what-drivesus section-padding">
			<div class="container p-0">
				<div class="what-drivesus__inner">
					<div class="what-drivesus__inner_heading">
						<RichText
							{...blockProps}
							tagName="h2"
							onChange={onChangeheading}
							placeholder="Title"
							value={heading}
						/>
					</div>
					<div class="what-drivesus__inner_content">
						<div class="row">
							<div class="col-lg-4 col-md-4 col-12">
								<div class="what-drivesus__inner_content--text">
									<RichText
										{...blockProps}
										tagName="h3"
										onChange={onChangesubheading}
										placeholder="Sub Heading"
										value={subheading}
									/>
									<RichText
										{...blockProps}
										tagName="p"
										className="description-primary"
										onChange={onChangediscription}
										placeholder="Discription"
										value={discription}
									/>
								</div>
							</div>
							<div class="col-lg-4 col-md-4 col-12">
								<div class="what-drivesus__inner_content--text">
									<RichText
										{...blockProps}
										tagName="h3"
										onChange={onChangesubheading2}
										placeholder="Sub Heading"
										value={subheading2}
									/>
									<RichText
										{...blockProps}
										tagName="p"
										className="description-primary"
										onChange={onChangediscription2}
										placeholder="Discription"
										value={discription2}
									/>
								</div>
							</div>
							<div class="col-lg-4 col-md-4 col-12">
								<div class="what-drivesus__inner_content--text">
									<RichText
										{...blockProps}
										tagName="h3"
										onChange={onChangesubheading3}
										placeholder="Sub Heading"
										value={subheading3}
									/>
									<RichText
										{...blockProps}
										tagName="p"
										className="description-primary"
										onChange={onChangediscription3}
										placeholder="Discription"
										value={discription3}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
