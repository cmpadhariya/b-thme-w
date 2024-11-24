<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Maintenance Package section.
 */
register_block_pattern(
	'qrolic/qrolic-maintenance-package',
	array(
		'title'       => __( 'maintenance-package', 'qrolic' ),
		'description' => _x( 'This pattern includes a maintenance package-related custom pattern, which creates a package-related block and adds a maintenance package-related title, description, and list to that block.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"maintenance-packages section-padding","layout":{"type":"default"}} -->
        <div class="wp-block-group maintenance-packages section-padding"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"maintenance-packages__inner","layout":{"type":"default"}} -->
        <div class="wp-block-group maintenance-packages__inner"><!-- wp:group {"className":"row","layout":{"type":"constrained"}} -->
        <div class="wp-block-group row"><!-- wp:create-block/maintenance-package-block {"title":"$150/mo","heading":"BASIC PACK","discription":"Suitable for potential super-startups and brand revamps for companies.","items":[{"list":"5 pages WordPress website"},{"list":"E-commerce functionality"},{"list":"No Product"},{"list":"Functional Website"},{"list":"Design Customization"},{"list":"Content Upload"},{"list":"Responsive Design"},{"list":"5 Pages"},{"list":"2 Plugins Installation"},{"list":"Unlimited Revisions"},{"list":"4 Days Delivery Time"}],"buttonURL":"http://localhost/Qrolic-Technologies/","className":"col-lg-4 col-md-4 col-sm-12 col-12"} -->
        <div class="wp-block-create-block-maintenance-package-block col-lg-4 col-md-4 col-sm-12 col-12"><p class="most-popular__text"></p><div class="maintenance-packages__inner_box"><div class="maintenance-packages__inner_box--content"><h3>BASIC PACK</h3><h4>$150/mo</h4><p>Suitable for potential super-startups and brand revamps for companies.</p></div><hr/><div class="maintenance-packages__inner_box--list"><ul><li>5 pages WordPress website</li><li>E-commerce functionality</li><li>No Product</li><li>Functional Website</li><li>Design Customization</li><li>Content Upload</li><li>Responsive Design</li><li>5 Pages</li><li>2 Plugins Installation</li><li>Unlimited Revisions</li><li>4 Days Delivery Time</li></ul></div><div class="maintenance-packages__inner_box--button"><a href="http://localhost/Qrolic-Technologies/" target="_self" rel="noopener noreferrer" class="button-general"><span class="button-text">Place Your Order</span></a></div></div></div>
        <!-- /wp:create-block/maintenance-package-block -->
        
        <!-- wp:create-block/maintenance-package-block {"title":"$300/mo","heading":"STANDARD PACK","discription":"Suitable for mid-level startups and organizations and brand revamps for existing companies.","items":[{"list":"10 pages WordPress website"},{"list":"E-commerce functionality"},{"list":"No Product"},{"list":"Functional Website"},{"list":"Design Customization"},{"list":"Content Upload"},{"list":"Responsive Design"},{"list":"10 Pages"},{"list":"5 Plugins Installation"},{"list":"Unlimited Revisions"},{"list":"6 Days Delivery Time"}],"buttonURL":"http://localhost/Qrolic-Technologies/","mostpopular":"Most\u003cbr\u003ePopular","className":"col-lg-4 col-md-4 col-sm-12 col-12 most-popular"} -->
        <div class="wp-block-create-block-maintenance-package-block col-lg-4 col-md-4 col-sm-12 col-12 most-popular"><p class="most-popular__text">Most<br>Popular</p><div class="maintenance-packages__inner_box"><div class="maintenance-packages__inner_box--content"><h3>STANDARD PACK</h3><h4>$300/mo</h4><p>Suitable for mid-level startups and organizations and brand revamps for existing companies.</p></div><hr/><div class="maintenance-packages__inner_box--list"><ul><li>10 pages WordPress website</li><li>E-commerce functionality</li><li>No Product</li><li>Functional Website</li><li>Design Customization</li><li>Content Upload</li><li>Responsive Design</li><li>10 Pages</li><li>5 Plugins Installation</li><li>Unlimited Revisions</li><li>6 Days Delivery Time</li></ul></div><div class="maintenance-packages__inner_box--button"><a href="http://localhost/Qrolic-Technologies/" target="_self" rel="noopener noreferrer" class="button-general"><span class="button-text">Place Your Order</span></a></div></div></div>
        <!-- /wp:create-block/maintenance-package-block -->
        
        <!-- wp:create-block/maintenance-package-block {"title":"$400/mo","heading":"PREMIUM PACK","discription":"Suitable for potential super-startups and brand revamps for existing companies","items":[{"list":"15 pages WordPress website"},{"list":"E-commerce functionality"},{"list":"10 Products"},{"list":"Functional Website"},{"list":"Design Customization"},{"list":"Content Upload"},{"list":"Responsive Design"},{"list":"15 Pages"},{"list":"7 Plugins Installation"},{"list":"Unlimited Revisions"},{"list":"10 Days Delivery Time"}],"buttonURL":"http://localhost/Qrolic-Technologies/http://localhost/Qrolic-Technologies/","className":"col-lg-4 col-md-4 col-sm-12 col-12"} -->
        <div class="wp-block-create-block-maintenance-package-block col-lg-4 col-md-4 col-sm-12 col-12"><p class="most-popular__text"></p><div class="maintenance-packages__inner_box"><div class="maintenance-packages__inner_box--content"><h3>PREMIUM PACK</h3><h4>$400/mo</h4><p>Suitable for potential super-startups and brand revamps for existing companies</p></div><hr/><div class="maintenance-packages__inner_box--list"><ul><li>15 pages WordPress website</li><li>E-commerce functionality</li><li>10 Products</li><li>Functional Website</li><li>Design Customization</li><li>Content Upload</li><li>Responsive Design</li><li>15 Pages</li><li>7 Plugins Installation</li><li>Unlimited Revisions</li><li>10 Days Delivery Time</li></ul></div><div class="maintenance-packages__inner_box--button"><a href="http://localhost/Qrolic-Technologies/http://localhost/Qrolic-Technologies/" target="_self" rel="noopener noreferrer" class="button-general"><span class="button-text">Place Your Order</span></a></div></div></div>
        <!-- /wp:create-block/maintenance-package-block --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);

