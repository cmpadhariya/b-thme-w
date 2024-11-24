<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for blog social media.
 */
register_block_pattern(
	'qrolic/blog-social-media-v2',
	array(
		'title'       => __( 'blog social media', 'qrolic' ),
		'description' => _x( 'We use this pattern in a single blog page. With the help of this pattern we can be redirected in our social media platform.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"blog-social-media common-padding","layout":{"type":"constrained","justifyContent":"center"}} -->
<div class="wp-block-group blog-social-media common-padding"><!-- wp:group {"className":"container p-0","layout":{"type":"constrained","justifyContent":"left"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"blog-social-media__inner","layout":{"type":"constrained","justifyContent":"left"}} -->
<div class="wp-block-group blog-social-media__inner"><!-- wp:group {"className":"row","layout":{"type":"constrained","justifyContent":"left"}} -->
<div class="wp-block-group row"><!-- wp:group {"className":"col-lg-6 col-md-6 col-12","layout":{"type":"constrained"}} -->
<div class="wp-block-group col-lg-6 col-md-6 col-12"><!-- wp:paragraph -->
<p>Like what you see? Share with a friend.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-lg-6 col-md-6 col-12","layout":{"type":"constrained"}} -->
<div class="wp-block-group col-lg-6 col-md-6 col-12"><!-- wp:group {"className":"blog-social-media__inner_icon","layout":{"type":"constrained"}} -->
<div class="wp-block-group blog-social-media__inner_icon"><!-- wp:navigation {"ref":6710,"overlayMenu":"never","layout":{"type":"flex","justifyContent":"right"}} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
