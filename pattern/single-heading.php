<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Single Heading section.
 */
register_block_pattern(
	'qrolic/single-heading-pattern',
	array(
		'title'       => __( 'Single Heading', 'qrolic' ),
		'description' => _x( 'This pattern include one title and page related breadcrumbs.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"single-heading ","layout":{"type":"default"}} -->
        <div class="wp-block-group single-heading"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"single-heading__banner ","layout":{"type":"default"}} -->
        <div class="wp-block-group single-heading__banner"><!-- wp:group {"className":"single-heading__banner_inner","layout":{"type":"default"}} -->
        <div class="wp-block-group single-heading__banner_inner"><!-- wp:post-title {"level":1} /-->
        
        <!-- wp:shortcode -->
        [breadcrumb]
        <!-- /wp:shortcode -->
        
        <!-- wp:shortcode -->
        [rank_math_breadcrumb]
        <!-- /wp:shortcode --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
