<?php
/**
 * Plugin Name:       Why Qrolic Partner Satisfaction V2
 * Description:       A customizable block designed to highlight the value of partnering with Qrolic, focusing on quality, customer satisfaction, and proven results.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       why-qrolic-partner-satisfaction-v2
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
function create_block_why_qrolic_partner_satisfaction_v2_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_why_qrolic_partner_satisfaction_v2_block_init' );
