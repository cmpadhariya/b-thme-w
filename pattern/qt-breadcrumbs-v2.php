<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for all page breadcrumbs section.
 */
register_block_pattern(
    'qrolic/qt-breadcrumbs-v2-pattern',
    array(
        'title' => __( 'Qt Breadcrumbs v2', 'qrolic' ),
        'description' => _x( 'We use this pattern to display all the breadcrumbs that come in the pages.', 'qrolic' ),
        'content' => '<!-- wp:group {"className":"qt-breadcrumb ","layout":{"type":"default"}} -->
            <div class="wp-block-group qt-breadcrumb"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
            <div class="wp-block-group container p-0"><!-- wp:shortcode -->
            [rank_math_breadcrumb]
            <!-- /wp:shortcode -->

            <!-- wp:shortcode -->
            [breadcrumb]
            <!-- /wp:shortcode --></div>
            <!-- /wp:group --></div>
            <!-- /wp:group -->',
        'categories' => array( 'qrolic-patterns' ),
    )
);
