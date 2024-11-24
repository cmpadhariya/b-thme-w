<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for schedule for call section.
 */
register_block_pattern(
	'qrolic/schedule-for-call',
	array(
		'title'       => __( 'schedule for call v2', 'qrolic' ),
		'description' => _x( 'This block pattern allows users to schedule a call by displaying a section with a background image, a heading, a brief description, and a call-to-action button.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"schedule-for-call","layout":{"type":"constrained"}} -->
<div class="wp-block-group schedule-for-call"><!-- wp:group {"className":"container p-0","layout":{"type":"constrained"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"schedule-for-call__inner","layout":{"type":"constrained"}} -->
<div class="wp-block-group schedule-for-call__inner"><!-- wp:group {"className":"background-image","layout":{"type":"constrained"}} -->
<div class="wp-block-group background-image"></div>
<!-- /wp:group -->

<!-- wp:image -->
<figure class="wp-block-image"><img alt=""/></figure>
<!-- /wp:image -->

<!-- wp:group {"className":"schedule-for-call__inner_content","layout":{"type":"constrained"}} -->
<div class="wp-block-group schedule-for-call__inner_content"><!-- wp:heading -->
<h2 class="wp-block-heading">Want to jump on a call?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"description-primary"} -->
<p class="description-primary">Book a 30 minute call</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:buttons {"className":"schedule-for-call__inner_btn","layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"center"}} -->
<div class="wp-block-buttons schedule-for-call__inner_btn"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">BOOK A CALL</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
