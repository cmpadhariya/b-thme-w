<?php
/**
 * Plugin Name:       Other Zigzag Section
 * Description:       This other zigzag section is used in the plugins archive page in our site. Title, description, image and two buttons have been added in this section.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       other-zigzag-section
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function other_zigzag_section_other_zigzag_section_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'other_zigzag_section_other_zigzag_section_block_init' );
