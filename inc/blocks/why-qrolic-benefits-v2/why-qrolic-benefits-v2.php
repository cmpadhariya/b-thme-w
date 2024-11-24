<?php
/**
 * Plugin Name:       Why Qrolic Benefits V2
 * Description:       This section showcases the key benefits of partnering with Qrolic, emphasizing our commitment to quality, transparency, and continuous support. And A block to display benefits with a title, description, list, and buttons.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       why-qrolic-benefits-v2
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
function create_block_why_qrolic_benefits_v2_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_why_qrolic_benefits_v2_block_init' );
