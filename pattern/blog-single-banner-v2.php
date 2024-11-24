<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for blog single banner.
 */
register_block_pattern(
    'qrolic/blog-single-banner-v2',
    array(
        'title' => __( 'blog single banner v2', 'qrolic' ),
        'description' => _x( 'We use this pattern in the single blog page of our site. With the help of this pattern we can show the data of a single blog post.', 'qrolic' ),
        'content' => '<!-- wp:group {"className":"blog-single-banner common-padding pt-0 pb-0","layout":{"type":"constrained"}} -->
<div class="wp-block-group blog-single-banner common-padding pt-0 pb-0"><!-- wp:group {"className":"container p-0","layout":{"type":"constrained"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"blog-single-banner__inner","layout":{"type":"constrained"}} -->
<div class="wp-block-group blog-single-banner__inner"><!-- wp:group {"className":"col-12","layout":{"type":"default"}} -->
<div class="wp-block-group col-12"><!-- wp:group {"className":"qt-breadcrumb qt-padding-20 section-pb-0","layout":{"type":"default"}} -->
<div class="wp-block-group qt-breadcrumb qt-padding-20 section-pb-0"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:shortcode -->
[rank_math_breadcrumb]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[breadcrumb]
<!-- /wp:shortcode --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:post-title {"level":1,"className":"common-padding"} /-->

<!-- wp:post-featured-image {"width":"","height":""} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
        'categories' => array( 'qrolic-patterns' ),
    )
);
