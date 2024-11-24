import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, MediaUpload, InspectorControls } from "@wordpress/block-editor";
import { TextControl, Button, SelectControl } from "@wordpress/components";
import './editor.scss';

export default function Edit(props) {
    const { attributes, setAttributes } = props;
    const { sections, title, itemsPerRow } = attributes;

    // Function to add a new section
    const addSection = () => {
        const newSection = {
            image: null,
            altText: "",
            content: "",
            description: "",
            textButton: "",
            button_url: "",
        };

        setAttributes({
            sections: [...sections, newSection],
        });
    };

    // Function to remove a section
    const removeSection = (index) => {
        const updatedSections = [...sections];
        updatedSections.splice(index, 1);
        setAttributes({ sections: updatedSections });
    };

    // Function to remove an image from a section
    const removeImage = (index) => {
        const updatedSections = [...sections];
        updatedSections[index].image = null;
        updatedSections[index].altText = "";
        setAttributes({ sections: updatedSections });
    };

    return (
        <section {...useBlockProps()}>
            <InspectorControls>
                <SelectControl
                    label="Items per Row"
                    value={itemsPerRow}
                    options={[
                        { label: '2', value: 2 },
                        { label: '3', value: 3 },
                    ]}
                    onChange={(value) => setAttributes({ itemsPerRow: parseInt(value) })}
                />
                 
                <Button isPrimary  label="click to add new Add Section"  onClick={addSection}>
                    
                    Add Section
                </Button>
            </InspectorControls>
            <div className="we-contributing-section ">
                <div className="container p-0">
                    <div className="we-contributing-section__heading section-pt-0">
                        <RichText
                            tagName="h2"
                            onChange={(newTitle) => setAttributes({ title: newTitle })}
                            value={title}
                            placeholder="Title"
                        />
                    </div>
                    <div className="row">
                        {sections.map((section, index) => (
                            <div key={index} className={`col-lg-${12 / itemsPerRow} col-md-${12 / itemsPerRow} col-sm-6 col-12`}>
                                <div className="we-contributing-section__inner">
                                    <div className="we-contributing-section__inner_image">
                                        <MediaUpload
                                            allowedTypes={["image"]}
                                            multiple={false}
                                            value={section.image ? section.image.id : ""}
                                            onSelect={(media) => {
                                                const altText = media.alt || "";
                                                const updatedSections = [...sections];
                                                updatedSections[index].image = media;
                                                updatedSections[index].altText = altText;
                                                setAttributes({ sections: updatedSections });
                                            }}
                                            render={({ open }) =>
                                                section.image ? (
                                                    <div>
                                                        <img
                                                            src={section.image.url}
                                                            width="559"
                                                            height="373"
                                                            alt={section.altText}
                                                        />
                                                        <Button isDestructive onClick={() => removeImage(index)}>
                                                            Remove Image
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <Button onClick={open} className="button">
                                                        Upload Image
                                                    </Button>
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="we-contributing-section__inner_details">
                                        <div className="we-contributing-section__inner_details--heading">
                                            <RichText
                                                tagName="h3"
                                                onChange={(newContent) => {
                                                    const updatedSections = [...sections];
                                                    updatedSections[index].content = newContent;
                                                    setAttributes({ sections: updatedSections });
                                                }}
                                                placeholder="Title"
                                                value={section.content}
                                            />
                                        </div>
                                        <div className="we-contributing-section__inner_details--description">
                                            <RichText
                                                tagName="p"
                                                onChange={(newDescription) => {
                                                    const updatedSections = [...sections];
                                                    updatedSections[index].description = newDescription;
                                                    setAttributes({ sections: updatedSections });
                                                }}
                                                placeholder="Short description"
                                                className="description-primary"
                                                value={section.description}
                                            />
                                        </div>
                                        <div className="we-contributing-section__inner_details--button">
                                            <RichText
                                                className="button-general"
                                                tagName="a"
                                                target="_self"
                                                rel="noreferrer noopener"
                                                onChange={(newTextButton) => {
                                                    const updatedSections = [...sections];
                                                    updatedSections[index].textButton = newTextButton;
                                                    setAttributes({ sections: updatedSections });
                                                }}
                                                placeholder="Button Text"
                                                value={section.textButton}
                                            />
                                        </div>
                                        <TextControl
                                            label="Button URL"
                                            onChange={(newButtonURL) => {
                                                const updatedSections = [...sections];
                                                updatedSections[index].button_url = newButtonURL;
                                                setAttributes({ sections: updatedSections });
                                            }}
                                            value={section.button_url}
                                        />
                                        <Button isDestructive onClick={() => removeSection(index)}>
                                            Remove Section
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
