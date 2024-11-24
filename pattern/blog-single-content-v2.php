<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for blog single content.
 */
register_block_pattern(
	'qrolic/blog-single-content-v2',
	array(
		'title'       => __( 'blog single content v2', 'qrolic' ),
		'description' => _x( 'We use this pattern in the single blog page of our site. With the help of this pattern we can show the data of a single blog post.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"blog-single-content","layout":{"type":"constrained"}} -->
			<div class="wp-block-group blog-single-content"><!-- wp:group {"className":"blog-single-content__inner","layout":{"type":"default"}} -->
			<div class="wp-block-group blog-single-content__inner"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
			<div class="wp-block-group container p-0"><!-- wp:group {"className":"row ","layout":{"type":"default"}} -->
			<div class="wp-block-group row"><!-- wp:group {"className":"col-lg-8 col-md-12 col-12","layout":{"type":"default"}} -->
			<div class="wp-block-group col-lg-8 col-md-12 col-12"><!-- wp:group {"className":"post-content","layout":{"type":"default"}} -->
			<div class="wp-block-group post-content"><!-- wp:group {"className":"qt-breadcrumb ","layout":{"type":"default"}} -->
			<div class="wp-block-group qt-breadcrumb"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
			<div class="wp-block-group container p-0"><!-- wp:shortcode -->
			[rank_math_breadcrumb]
			<!-- /wp:shortcode -->

			<!-- wp:shortcode -->
			[breadcrumb]
			<!-- /wp:shortcode --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group -->

			<!-- wp:post-featured-image {"width":"","height":""} /-->

			<!-- wp:group {"className":"post-top","layout":{"type":"default"}} -->
			<div class="wp-block-group post-top"><!-- wp:post-title {"level":1} /-->

			<!-- wp:group {"className":"date-time","layout":{"type":"default"}} -->
			<div class="wp-block-group date-time"><!-- wp:post-date /-->

			<!-- wp:post-terms {"term":"category"} /--></div>
			<!-- /wp:group --></div>
			<!-- /wp:group -->

			<!-- wp:post-content {"layout":{"type":"default"}} /--></div>
			<!-- /wp:group --></div>
			<!-- /wp:group -->

			<!-- wp:group {"className":"col-lg-4 col-md-12 col-12","layout":{"type":"constrained"}} -->
			<div class="wp-block-group col-lg-4 col-md-12 col-12"><!-- wp:group {"className":"blog-single-content__sidebar","layout":{"type":"default"}} -->
			<div class="wp-block-group blog-single-content__sidebar"></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
