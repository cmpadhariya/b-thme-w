<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Services List section.
 */
register_block_pattern(
	'qrolic/services-list-pattern',
	array(
		'title'       => __( 'Services List', 'qrolic' ),
		'description' => _x( 'This pattern include Services List Title and Block.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"services-list","layout":{"type":"default"}} -->
        <div class="wp-block-group services-list"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"services-list__inner","layout":{"type":"default"}} -->
        <div class="wp-block-group services-list__inner"><!-- wp:group {"className":"services-list__inner_heading coman-padding section-pt-0 section-padding-rl-0","layout":{"type":"default"}} -->
        <div class="wp-block-group services-list__inner_heading coman-padding section-pt-0 section-padding-rl-0"><!-- wp:heading {"textAlign":"center"} -->
        <h2 class="wp-block-heading has-text-align-center">Our Quality WordPress Services</h2>
        <!-- /wp:heading --></div>
        <!-- /wp:group -->
        
        <!-- wp:group {"className":"row","layout":{"type":"default"}} -->
        <div class="wp-block-group row"><!-- wp:create-block/services-list {"subheadinglink":"#"} -->
        <div class="col-lg-6 col-md-6 col-sm-12 col-12"><div class="services-list__inner_text"><h3 class="services-list__inner_text--subheading"><a href="#">WordPress Migration<div class="services-list__inner_text--arrow icon-right-1"></div></a></h3><div class="services-list__inner_text--discription"><p class="description-primary">– We are migration experts and can help with any type of migration, including Shopify to WordPress, custom-developed sites to WordPress, etc.</p></div></div></div>
        <!-- /wp:create-block/services-list -->
        
        <!-- wp:create-block/services-list {"subheadinglink":"#"} -->
        <div class="col-lg-6 col-md-6 col-sm-12 col-12"><div class="services-list__inner_text"><h3 class="services-list__inner_text--subheading"><a href="#">WordPress Migration<div class="services-list__inner_text--arrow icon-right-1"></div></a></h3><div class="services-list__inner_text--discription"><p class="description-primary">– We are migration experts and can help with any type of migration, including Shopify to WordPress, custom-developed sites to WordPress, etc.</p></div></div></div>
        <!-- /wp:create-block/services-list -->
        
        <!-- wp:create-block/services-list -->
        <div class="col-lg-6 col-md-6 col-sm-12 col-12"><div class="services-list__inner_text"><h3 class="services-list__inner_text--subheading"><a href="Add service link">WordPress Migration<div class="services-list__inner_text--arrow icon-right-1"></div></a></h3><div class="services-list__inner_text--discription"><p class="description-primary">– We are migration experts and can help with any type of migration, including Shopify to WordPress, custom-developed sites to WordPress, etc.</p></div></div></div>
        <!-- /wp:create-block/services-list -->
        
        <!-- wp:create-block/services-list -->
        <div class="col-lg-6 col-md-6 col-sm-12 col-12"><div class="services-list__inner_text"><h3 class="services-list__inner_text--subheading"><a href="Add service link">WordPress Migration<div class="services-list__inner_text--arrow icon-right-1"></div></a></h3><div class="services-list__inner_text--discription"><p class="description-primary">– We are migration experts and can help with any type of migration, including Shopify to WordPress, custom-developed sites to WordPress, etc.</p></div></div></div>
        <!-- /wp:create-block/services-list -->
        
        <!-- wp:create-block/services-list -->
        <div class="col-lg-6 col-md-6 col-sm-12 col-12"><div class="services-list__inner_text"><h3 class="services-list__inner_text--subheading"><a href="Add service link">WordPress Migration<div class="services-list__inner_text--arrow icon-right-1"></div></a></h3><div class="services-list__inner_text--discription"><p class="description-primary">– We are migration experts and can help with any type of migration, including Shopify to WordPress, custom-developed sites to WordPress, etc.</p></div></div></div>
        <!-- /wp:create-block/services-list -->
        
        <!-- wp:create-block/services-list -->
        <div class="col-lg-6 col-md-6 col-sm-12 col-12"><div class="services-list__inner_text"><h3 class="services-list__inner_text--subheading"><a href="Add service link">WordPress Migration<div class="services-list__inner_text--arrow icon-right-1"></div></a></h3><div class="services-list__inner_text--discription"><p class="description-primary">– We are migration experts and can help with any type of migration, including Shopify to WordPress, custom-developed sites to WordPress, etc.</p></div></div></div>
        <!-- /wp:create-block/services-list -->
        
        <!-- wp:create-block/services-list -->
        <div class="col-lg-6 col-md-6 col-sm-12 col-12"><div class="services-list__inner_text"><h3 class="services-list__inner_text--subheading"><a href="Add service link">WordPress Migration<div class="services-list__inner_text--arrow icon-right-1"></div></a></h3><div class="services-list__inner_text--discription"><p class="description-primary">– We are migration experts and can help with any type of migration, including Shopify to WordPress, custom-developed sites to WordPress, etc.</p></div></div></div>
        <!-- /wp:create-block/services-list -->
        
        <!-- wp:create-block/services-list -->
        <div class="col-lg-6 col-md-6 col-sm-12 col-12"><div class="services-list__inner_text"><h3 class="services-list__inner_text--subheading"><a href="Add service link">WordPress Migration<div class="services-list__inner_text--arrow icon-right-1"></div></a></h3><div class="services-list__inner_text--discription"><p class="description-primary">– We are migration experts and can help with any type of migration, including Shopify to WordPress, custom-developed sites to WordPress, etc.</p></div></div></div>
        <!-- /wp:create-block/services-list -->
        
        <!-- wp:create-block/services-list -->
        <div class="col-lg-6 col-md-6 col-sm-12 col-12"><div class="services-list__inner_text"><h3 class="services-list__inner_text--subheading"><a href="Add service link">WordPress Migration<div class="services-list__inner_text--arrow icon-right-1"></div></a></h3><div class="services-list__inner_text--discription"><p class="description-primary">– We are migration experts and can help with any type of migration, including Shopify to WordPress, custom-developed sites to WordPress, etc.</p></div></div></div>
        <!-- /wp:create-block/services-list -->
        
        <!-- wp:create-block/services-list -->
        <div class="col-lg-6 col-md-6 col-sm-12 col-12"><div class="services-list__inner_text"><h3 class="services-list__inner_text--subheading"><a href="Add service link">WordPress Migration<div class="services-list__inner_text--arrow icon-right-1"></div></a></h3><div class="services-list__inner_text--discription"><p class="description-primary">– We are migration experts and can help with any type of migration, including Shopify to WordPress, custom-developed sites to WordPress, etc.</p></div></div></div>
        <!-- /wp:create-block/services-list --></div>
        <!-- /wp:group -->
        
        <!-- wp:group {"className":"portfolio-post ","layout":{"type":"default"}} -->
        <div class="wp-block-group portfolio-post"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"portfolio-post__inner","layout":{"type":"default"}} -->
        <div class="wp-block-group portfolio-post__inner"><!-- wp:group {"className":"portfolio-post__inner coman-padding section-pb-0","layout":{"type":"default"}} -->
        <div class="wp-block-group portfolio-post__inner coman-padding section-pb-0"><!-- wp:buttons {"className":"portfolio-post__inner_btn","layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center"}} -->
        <div class="wp-block-buttons portfolio-post__inner_btn"><!-- wp:button -->
        <div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="#contact-us">Get in Touch</a></div>
        <!-- /wp:button --></div>
        <!-- /wp:buttons --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
