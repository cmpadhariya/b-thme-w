/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { PanelBody, Button, TextControl } from "@wordpress/components";
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

export default function Save(props) {
	const {
    	title,
    	heading,
    	discription,
    	buttonText,
    	buttonURL,
    	items,
    	mostpopular,
    	discount,
	} = props.attributes;
	return (
    <div className="col-lg-4 col-md-4 col-sm-12 col-12" {...useBlockProps.save()}>
      	<RichText.Content
        	className="most-popular__text"
        	tagName="p"
        	value={mostpopular}
      	/>

      	<div className="maintenance-packages__inner_box">

        
          		<div className="maintenance-packages__inner_box--heading">
            		<RichText.Content tagName="h3" value={heading} />
          		</div>
				  <div className="maintenance-packages__inner_box--content">
          		<div className="maintenance-packages__inner_box--content-title">
            		<RichText.Content tagName="h4" value={title} />
					<RichText.Content tagName="span" value={discount} />
          		</div>
          		<div className="maintenance-packages__inner_box--content-discription">
            		<RichText.Content tagName="p" value={discription} />
          		</div>
        	</div>

        	<hr></hr>

        	<div className="maintenance-packages__inner_box--list">
          		<ul>
            		{items.map((item, index) => (
              			<li key={index}>{item.list}</li>
            		))}
          		</ul>
        	</div>

        	<div className="maintenance-packages__inner_box--button">
          		<a
            		href={buttonURL}
            		target="_self"
            		rel="noopener noreferrer"
            		className="button-general"
          		>
            		<RichText.Content
              			tagName="span"
              			className="button-text"
              			value={buttonText}
            		/>
          		</a>
        	</div>

      	</div>
    </div>
  );
}
