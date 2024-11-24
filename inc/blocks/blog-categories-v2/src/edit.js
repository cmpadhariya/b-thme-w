import { __ } from '@wordpress/i18n';
import { useEffect, useState, useRef } from 'react';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl, RangeControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { buttonText, categoriesToShow, orderedCategories, blogpostClass } = attributes;
    const [selectedCategories, setSelectedCategories] = useState(attributes.selectedCategories);
    const dragItem = useRef();
    const dragOverItem = useRef();

    const categories = useSelect((select) => {
        return select("core").getEntityRecords("taxonomy", "blog-category", { per_page: -1 }) || [];
    }, []);

    useEffect(() => {
        setAttributes({ selectedCategories });
        if (!orderedCategories.length) {
            setAttributes({ orderedCategories: selectedCategories });
        }
    }, [selectedCategories]);

    useEffect(() => {
        if (!orderedCategories.length) {
            setAttributes({ orderedCategories: selectedCategories });
        }
    }, [orderedCategories]);

    const handleCategoryClick = (category) => {
        const updatedCategories = selectedCategories.includes(category.id)
            ? selectedCategories.filter((c) => c !== category.id)
            : [...selectedCategories, category.id];

        setSelectedCategories(updatedCategories);
        setAttributes({ orderedCategories: updatedCategories });
    };

    const handleSort = () => {
        let updatedCategories = [...orderedCategories];
        const draggedItemContent = updatedCategories.splice(dragItem.current, 1)[0];
        updatedCategories.splice(dragOverItem.current, 0, draggedItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setAttributes({ orderedCategories: updatedCategories });
    };

    const handleDragStart = (index) => {
        dragItem.current = index;
    };

    const handleDragEnter = (index) => {
        dragOverItem.current = index;
    };

    const handleDragEnd = () => {
        handleSort();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Settings", "blog-categories-v2")}>
                    <PanelRow>
                        <TextControl
                            label={__('Add Section Padding And Other Class', 'qrolic')}
                            value={blogpostClass}
                            onChange={(value) =>
                                setAttributes({ blogpostClass: value })
                            }
                        />
                    </PanelRow>
                    <PanelRow>
                        <RangeControl
                            label={__("Number of Categories to Show", "blog-categories-v2")}
                            value={categoriesToShow}
                            onChange={(value) => setAttributes({ categoriesToShow: value })}
                            min={1}
                            max={categories.length}
                        />
                    </PanelRow>
                    <PanelRow>
                        <div className='category-settings'>
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    draggable
                                    onDragStart={() => handleDragStart(category.id)}
                                    onDragEnter={() => handleDragEnter(category.id)}
                                    onDragEnd={handleDragEnd}
                                    onDragOver={handleDragOver}
                                    className='draggable-category'
                                >
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(category.id)}
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
            <div {...useBlockProps()} className={`blogpost-categories ${blogpostClass}`}>
                <div className='container p-0'>
                    <div className='blogpost-categories__list'>
                        <ul>
                              <li>
                                <a href="#" className="description-secondary">
                                    {__('All', 'blog-categories-v2')}
                                </a>
                            </li>
                            {orderedCategories.slice(0, categoriesToShow).map((categoryID) => {
                                const category = categories.find(cat => cat.id === categoryID);
                                if (!category) return null;
                                return (
                                    <li key={category.id}>
                                        <a href='#' className='description-secondary'>
                                            {category.name}
                                        </a>
                                    </li>
                                );
                            })}
							<li>
								<button id='blog-category-show-btn' className='blog-category-show-btn button-general'>
									<RichText
										value={buttonText}
										onChange={(value) => setAttributes({ buttonText: value })}
										placeholder={__("Button Text ...", "blog-categories-v2")}
									/>
								</button>
							</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
