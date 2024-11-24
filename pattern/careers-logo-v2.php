<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Career logo section.
 */
register_block_pattern(
    'qrolic/careers-logo-pattern',
    array(
        'title' => __('Careers logo section', 'qrolic'),
        'description' => _x('A block pattern showcasing a section for displaying career logos.', 'qrolic'),
        'content' => '<!-- wp:group {"className":"careers-logo","layout":{"type":"constrained"}} -->
<div class="wp-block-group careers-logo"><!-- wp:group {"className":"container p-0","layout":{"type":"constrained"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"careers-logo__inner","layout":{"type":"constrained"}} -->
<div class="wp-block-group careers-logo__inner"><!-- wp:group {"className":"row","layout":{"type":"constrained"}} -->
<div class="wp-block-group row"><!-- wp:group {"className":"col-lg-4 col-md-4 col-sm-6 col-12","layout":{"type":"constrained"}} -->
<div class="wp-block-group col-lg-4 col-md-4 col-sm-6 col-12"><!-- wp:image -->
<figure class="wp-block-image"><img alt=""/></figure>
<!-- /wp:image --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-lg-4 col-md-4 col-sm-6 col-12","layout":{"type":"constrained"}} -->
<div class="wp-block-group col-lg-4 col-md-4 col-sm-6 col-12"><!-- wp:image -->
<figure class="wp-block-image"><img alt=""/></figure>
<!-- /wp:image --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-lg-4 col-md-4 col-sm-6 col-12","layout":{"type":"constrained"}} -->
<div class="wp-block-group col-lg-4 col-md-4 col-sm-6 col-12"><!-- wp:image -->
<figure class="wp-block-image"><img alt=""/></figure>
<!-- /wp:image --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
        'categories' => array('qrolic-patterns'),
    )
);
