import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { mainHeading, mainDescription, iconclass, boxes } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <div className='careers-advantage'>
                <div className='container p-0'>
                    <div className='careers-advantage__inner'>
                        <div className='careers-advantage__inner_heading'>
                            <RichText.Content tagName="h2" value={mainHeading} />
                            <RichText.Content tagName="p" className='description-primary' value={mainDescription} />
                        </div>
                        <div className='row'>
                            {boxes.map((box, index) => (
                                <div key={index} className='col-lg-3 col-md-4 col-sm-6 col-12'>
                                    <div className="careers-advantage__inner_box">
                                        <div className="careers-advantage__inner_box-content">
                                            <div className="careers-advantage__inner_box-content--img">
                                                {box.imageUrl && (
                                                    <img src={box.imageUrl} alt={box.heading} width="233" height="200" loading="lazy" />
                                                )}
                                            </div>
                                            <RichText.Content tagName="h3" className='careers-advantage-textsize' value={box.heading} />
                                            <RichText.Content tagName="p" className="description-secondary" value={box.description} />
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
