<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Single Case Study Banner V2 section for Single Case Study page.
 */
register_block_pattern(
	'qrolic/single-casestudy-banner-v2',
	array(
		'title'       => __( 'Single Case Study Banner V2', 'qrolic' ),
		'description' => _x( 'This pattern include Single Case Study Banner section and in this section include title, image and breadcrumbs.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"qt-casestudy-banner common-padding pb-0 pt-0","layout":{"type":"default"}} -->
		<div class="wp-block-group qt-casestudy-banner common-padding pb-0 pt-0"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
		<div class="wp-block-group container p-0"><!-- wp:group {"className":"qt-casestudy-banner__inner","layout":{"type":"default"}} -->
		<div class="wp-block-group qt-casestudy-banner__inner"><!-- wp:group {"className":"qt-breadcrumb qt-padding-30 section-pb-0 section-padding-rl-0","layout":{"type":"default"}} -->
		<div class="wp-block-group qt-breadcrumb qt-padding-30 section-pb-0 section-padding-rl-0"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
		<div class="wp-block-group container p-0"><!-- wp:shortcode -->
		[rank_math_breadcrumb]
		<!-- /wp:shortcode -->

		<!-- wp:shortcode -->
		[breadcrumb]
		<!-- /wp:shortcode --></div>
		<!-- /wp:group --></div>
		<!-- /wp:group -->

		<!-- wp:group {"className":"qt-casestudy-banner__inner_title","layout":{"type":"default"}} -->
		<div class="wp-block-group qt-casestudy-banner__inner_title"><!-- wp:post-title {"level":1} /--></div>
		<!-- /wp:group -->

		<!-- wp:group {"className":"qt-casestudy-banner__inner_img","layout":{"type":"default"}} -->
		<div class="wp-block-group qt-casestudy-banner__inner_img"><!-- wp:post-featured-image /--></div>
		<!-- /wp:group --></div>
		<!-- /wp:group --></div>
		<!-- /wp:group --></div>
		<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
