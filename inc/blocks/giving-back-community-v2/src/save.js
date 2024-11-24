import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { mainHeading, mainDescription,iconclass, boxes } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <div className='giving-back-v2'>
                <div className='container p-0'>
                    <div className='giving-back-v2__inner'>
                        <div className='giving-back-v2__inner_heading'>
                            <RichText.Content tagName="h2" value={mainHeading} className="main-heading" />
                            <RichText.Content tagName="p" value={mainDescription} className="main-description" />
                        </div>
                        <div className='row'>
                            {boxes.map((box, index) => (
                                <div key={index} className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                    <div className="giving-back-v2__inner_box">
                                    <div className="giving-back-v2__inner_box-content">
                                    <div className="giving-back-v2__inner_box-content--img">
                                        {box.imageUrl && (
                                            <img src={box.imageUrl} alt={box.heading} width="310" height="198" loading="lazy" />
                                        )}
                                        </div>
                                        <RichText.Content tagName="h3" className='giving-textsize' value={box.heading} />
                                        <RichText.Content tagName="p" value={box.description} />
                                        <div className="giving-back-v2__inner_box-content--link">
                                        <a href={box.linkUrl} >{box.linkText}
                                        <i className={iconclass}></i>
                                        </a>
                                        </div>
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
