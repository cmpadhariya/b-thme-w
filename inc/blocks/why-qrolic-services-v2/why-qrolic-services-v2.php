<?php
/**
 * Plugin Name:       Why Qrolic Services V2
 * Description:       This section (block) highlights Qrolic Technology as your one-stop-shop for comprehensive digital services, and the icon, services title and description have been added within this services block.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       why-qrolic-services-v2
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
function create_block_why_qrolic_services_v2_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_why_qrolic_services_v2_block_init' );
