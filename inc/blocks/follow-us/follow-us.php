<?php
/**
 * Plugin Name:       Follow Us
 * Description:       Social icons have been added to this block, the purpose of this block is to allow people to follow our social accounts with these icons..
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       follow-us
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
function follow_us_follow_us_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'follow_us_follow_us_block_init' );
