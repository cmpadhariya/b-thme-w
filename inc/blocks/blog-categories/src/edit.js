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
import { useEffect, useState } from 'react';
import { useBlockProps,InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";

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
export default function Edit({ attributes, setAttributes }) {
	const [selectedCategories, setSelectedCategories] = useState(() => {
        const savedCategories = localStorage.getItem('selectedCategories');
        return savedCategories ? JSON.parse(savedCategories) : [];
    });
	const categories = useSelect((select) => {
		const categories = select("core").getEntityRecords(
		  "taxonomy",
		  "blog-category",
		  {
			per_page: -1,
		  }
		);
	
		return categories || [];
	}, []);

	useEffect(() => {
        const savedCategories = localStorage.getItem('selectedCategories');
        if (savedCategories) {
            setSelectedCategories(JSON.parse(savedCategories));
        }
    }, []);

	useEffect(() => {
        localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    }, [selectedCategories]);

	const handleCategoryClick = (category) => {
		if (category === null) {
            setSelectedCategories(categories);
            setAttributes({ selectedCategories: categories });
        } else {
            const updatedCategories = selectedCategories.includes(category)
                ? selectedCategories.filter((c) => c.id !== category.id)
                : [...selectedCategories, category];

            setSelectedCategories(updatedCategories);
            setAttributes({ selectedCategories: updatedCategories });
        }
	};
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Category Settings", "qrolic")}>
					<PanelRow>
						<div className='category-settings'>
							{categories.map((category) => (
								<div key={category.id}>
									<label>
										<input
											type="checkbox"
											checked={selectedCategories.some((selectedCategory) => selectedCategory.id === category.id)}
											onChange={() => handleCategoryClick(category)}
										/>
										{category.name}
									</label>
								</div>
							))}
						</div>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() } className='blog-categories'>
				<div className='container'>
					<div className='row'>
						<div className='blog-categories__list'>
						<ul>
							<li><a href="#"> All</a></li>
							{selectedCategories.map((category) => (
								<li key={category.id}>
									<a href='#'>
										{category.name}
									</a>
								</li>
							))}
						</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
