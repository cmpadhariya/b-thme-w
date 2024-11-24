<?php
/**
 * Plugin Name:       Our Process Section V2
 * Description:       This block shows the process of how we work and within this block shows the title, description, and different stages of the process with an icon, title, and description.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       our-process-section-v2
 *
 * @package CreateBlock
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
function create_block_our_process_section_v2_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_our_process_section_v2_block_init' );
