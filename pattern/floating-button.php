<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for FAQ Section section.
 */
register_block_pattern(
	'qrolic/qrolic-floating-button',
	array(
		'title'       => __( 'floating-button', 'qrolic' ),
		'description' => _x( 'This pattern include a floating-button releted costom pattarn', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"floating-button","layout":{"type":"default"}} -->
		<div class="wp-block-group floating-button"><!-- wp:group {"layout":{"type":"constrained"}} -->
		<div class="wp-block-group"><!-- wp:paragraph -->
		<p><a rel="sponsored" href="https://web.whatsapp.com/send?phone=+919537843839" data-type="URL" data-id="https://web.whatsapp.com/send?phone=+919537843839" target="_blank">Follow WhatsApp Channel for career updates</a></p>
		<!-- /wp:paragraph --></div>
		<!-- /wp:group --></div>
		<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);

