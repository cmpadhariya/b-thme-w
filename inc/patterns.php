<?php
/**
 * This file to display gutenberg pattern register category function.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern category for Get in Touch section.
 */
function qrolic_register_block_pattern_category() {
	register_block_pattern_category(
		'qrolic-patterns', // Replace with your desired category slug.
		array( 'label' => 'Qrolic Patterns' ) // Replace with your desired category label.
	);
}
add_action( 'init', 'qrolic_register_block_pattern_category' );
