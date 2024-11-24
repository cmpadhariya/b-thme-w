<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Categories Heading section.
 */
register_block_pattern(
	'qrolic/categories-heading-pattern',
	array(
		'title'       => __( 'Categories Heading', 'qrolic' ),
		'description' => _x( 'This pattern include career categories page title and breadcrumb.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"single-heading ","layout":{"type":"default"}} -->
        <div class="wp-block-group single-heading"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"single-heading__banner ","layout":{"type":"default"}} -->
        <div class="wp-block-group single-heading__banner"><!-- wp:group {"className":"single-heading__banner_inner","layout":{"type":"default"}} -->
        <div class="wp-block-group single-heading__banner_inner"><!-- wp:group {"className":"single-heading__banner_inner\u002d\u002dtitle","layout":{"type":"default"}} -->
        <div class="wp-block-group single-heading__banner_inner--title"><!-- wp:post-terms {"term":"blog-category"} /-->
        
        <!-- wp:heading -->
        <h2 class="wp-block-heading"> Blog</h2>
        <!-- /wp:heading --></div>
        <!-- /wp:group -->
        
        <!-- wp:group {"className":"single-heading__banner_inner\u002d\u002dbreadcrumb","layout":{"type":"default"}} -->
        <div class="wp-block-group single-heading__banner_inner--breadcrumb"><!-- wp:shortcode -->
        [rank_math_breadcrumb]
        <!-- /wp:shortcode -->
        
        <!-- wp:shortcode -->
        [breadcrumb]
        <!-- /wp:shortcode --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
