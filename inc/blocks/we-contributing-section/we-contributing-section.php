<?php
/**
 * Plugin Name:       We Contributing Section
 * Description:       This block is a How are we contributing, this block display services list title, sub title and description.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       we-contributing-section
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function we_contributing_section_we_contributing_section_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'we_contributing_section_we_contributing_section_block_init' );
