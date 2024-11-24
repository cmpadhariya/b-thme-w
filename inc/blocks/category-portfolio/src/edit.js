import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow, TextControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { numberOfItems, selectedCategory } = attributes;

  // Retrieve a list of categories
  const categories = useSelect((select) => {
    const categories = select("core").getEntityRecords(
      "taxonomy",
      "portfolio_category",
      {
        per_page: -1,
      }
    );

    return categories || [];
  }, []);

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setAttributes({ selectedCategory: category.id });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Content Settings", "author-plugin")}>
          <PanelRow>
            <TextControl
              label={__("Number of Posts", "author-plugin")}
              value={numberOfItems}
              onChange={(value) => setAttributes({ numberOfItems: value })}
              type="number"
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps()} className="category-portfolio">
        <div className="container p-0">
          <div className={`row`}>
            <div className="category-portfolio-list">
              <p>
                <a
                  href="#"
                  onClick={() => handleCategoryClick(null)} // Show all categories
                >
                  All
                </a>

                {categories.map((category) => (
                  <a
                    key={category.id}
                    href="#"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category.name}
                  </a>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
