<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Career Benefits section.
 */
register_block_pattern(
	'qrolic/career-benefits-pattern',
	array(
		'title'       => __( 'Career Benefits', 'qrolic' ),
		'description' => _x( 'This pattern includes a block and In this block, you add an image or icon, title, and description that shows the career benefit-related content.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"career-benefits","layout":{"type":"default"}} -->
		<div class="wp-block-group career-benefits"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
		<div class="wp-block-group container p-0"><!-- wp:group {"className":"career-benefits__inner","layout":{"type":"default"}} -->
		<div class="wp-block-group career-benefits__inner"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
		<div class="wp-block-group row"><!-- wp:create-block/career-benefits {"subheading":"Festival Birthday Celebration"} -->
		<div class="col-lg-3 col-md-6 col-sm-6 col-12"><div class="career-benefits__inner_text"><div class="career-benefits__inner_text--img"></div><div class="career-benefits__inner_text--icon"></div><div class="career-benefits__inner_text--subheading"><h4 class="wp-block-create-block-career-benefits">Festival Birthday Celebration</h4></div><div class="career-benefits__inner_text--discription"><p class="description-primary"></p></div></div></div>
		<!-- /wp:create-block/career-benefits -->
		
		<!-- wp:create-block/career-benefits {"subheading":"Training \u0026amp; Learning Sessions"} -->
		<div class="col-lg-3 col-md-6 col-sm-6 col-12"><div class="career-benefits__inner_text"><div class="career-benefits__inner_text--img"></div><div class="career-benefits__inner_text--icon"></div><div class="career-benefits__inner_text--subheading"><h4 class="wp-block-create-block-career-benefits">Training &amp; Learning Sessions</h4></div><div class="career-benefits__inner_text--discription"><p class="description-primary"></p></div></div></div>
		<!-- /wp:create-block/career-benefits -->
		
		<!-- wp:create-block/career-benefits {"subheading":"Collaborative \u0026amp; Inclusive Culture"} -->
		<div class="col-lg-3 col-md-6 col-sm-6 col-12"><div class="career-benefits__inner_text"><div class="career-benefits__inner_text--img"></div><div class="career-benefits__inner_text--icon"></div><div class="career-benefits__inner_text--subheading"><h4 class="wp-block-create-block-career-benefits">Collaborative &amp; Inclusive Culture</h4></div><div class="career-benefits__inner_text--discription"><p class="description-primary"></p></div></div></div>
		<!-- /wp:create-block/career-benefits -->
		
		<!-- wp:create-block/career-benefits {"subheading":"Awesome Experience"} -->
		<div class="col-lg-3 col-md-6 col-sm-6 col-12"><div class="career-benefits__inner_text"><div class="career-benefits__inner_text--img"></div><div class="career-benefits__inner_text--icon"></div><div class="career-benefits__inner_text--subheading"><h4 class="wp-block-create-block-career-benefits">Awesome Experience</h4></div><div class="career-benefits__inner_text--discription"><p class="description-primary"></p></div></div></div>
		<!-- /wp:create-block/career-benefits --></div>
		<!-- /wp:group --></div>
		<!-- /wp:group --></div>
		<!-- /wp:group --></div>
		<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
