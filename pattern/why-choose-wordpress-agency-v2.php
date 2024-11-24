<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Why Choose Qrolic as Your WordPress Agency.
 */
register_block_pattern(
	'qrolic/why-choose-wordpress-agency-v2-pattern',
	array(
		'title'       => __( 'Why Choose WordPress Agency V2', 'qrolic' ),
		'description' => _x( 'This pattern features a dynamic video showcasing Qrolic Technologies WordPress expertise, client success stories, and commitment to ongoing support.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"qt-wordpress-agency","layout":{"type":"default"}} -->
<div class="wp-block-group qt-wordpress-agency"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"qt-wordpress-agency__inner section-padding","layout":{"type":"default"}} -->
<div class="wp-block-group qt-wordpress-agency__inner section-padding"><!-- wp:group {"className":"qt-wordpress-agency__inner_heading common-padding pt-0 section-padding-rl-0","layout":{"type":"default"}} -->
<div class="wp-block-group qt-wordpress-agency__inner_heading common-padding pt-0 section-padding-rl-0"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center"></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","className":"description-primary"} -->
<p class="has-text-align-center description-primary"></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"qt-wordpress-agency__inner_video","layout":{"type":"default"}} -->
<div class="wp-block-group qt-wordpress-agency__inner_video"><!-- wp:video -->
<figure class="wp-block-video"></figure>
<!-- /wp:video --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
