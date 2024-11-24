<?php
/**
 * Plugin Name:       Services Hero Section
 * Description:       This block is the Hero section of Services which provides some information related to the Services, including title, description, contact button and image.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       services-hero-section
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
function services_hero_section_services_hero_section_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'services_hero_section_services_hero_section_block_init' );
