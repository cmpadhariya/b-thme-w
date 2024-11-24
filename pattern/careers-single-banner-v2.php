<?php

/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Career Single Page Banner section.
 */
register_block_pattern(
	'qrolic/careers-single-banner-pattern-v2',
	array(
		'title'       => __( 'Careers single banner section v2', 'qrolic' ),
		'description' => _x( 'This block pattern is for the banner section in the single careers page and this block pattern consists of a post title, description, image and two buttons.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"careers-single-banner","layout":{"type":"default"}} -->
<div class="wp-block-group careers-single-banner"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"careers-single-banner__inner position-hero-bg top-left-right-radius","layout":{"type":"default"}} -->
<div class="wp-block-group careers-single-banner__inner position-hero-bg top-left-right-radius"><!-- wp:group {"className":"row justify-content-center","layout":{"type":"default"}} -->
<div class="wp-block-group row justify-content-center"><!-- wp:group {"className":"col-lg-6 col-sm-10 col-12","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-6 col-sm-10 col-12"><!-- wp:group {"className":"careers-single-banner__inner_text section-padding","layout":{"type":"default"}} -->
<div class="wp-block-group careers-single-banner__inner_text section-padding"><!-- wp:post-title {"level":1,"className":"careers-single-banner__inner_text\u002d\u002dtitle"} /-->

<!-- wp:paragraph {"className":"careers-single-banner__inner_text\u002d\u002ddiscription description-secondary"} -->
<p class="careers-single-banner__inner_text--discription description-secondary">This is a golden opportunity for you. Come, be part of the generation next!</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"className":"careers-single-banner__inner_text\u002d\u002dbuttons","layout":{"type":"flex","flexWrap":"wrap"}} -->
<div class="wp-block-buttons careers-single-banner__inner_text--buttons"><!-- wp:button {"className":"white-button"} -->
<div class="wp-block-button white-button"><a class="wp-block-button__link wp-element-button" href="https://qrolic.com/apply-now/" rel="">Apply Now</a></div>
<!-- /wp:button -->

<!-- wp:button {"className":"black-button"} -->
<div class="wp-block-button black-button"><a class="wp-block-button__link wp-element-button" href="https://qrolic.com/careers/">Open Position</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-lg-4 col-sm-10 col-12 d-lg-block d-none","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-4 col-sm-10 col-12 d-lg-block d-none"><!-- wp:group {"className":"careers-single-banner__inner_img","layout":{"type":"default"}} -->
<div class="wp-block-group careers-single-banner__inner_img"><!-- wp:image -->
<figure class="wp-block-image"><img alt=""/></figure>
<!-- /wp:image --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
