<?php
/**
 * Plugin Name:       Partner Hero Section
 * Description:       This section is used as hero section in partner page. This page consists of a heading, description and a partner request form.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       partner-hero-section
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
function partner_hero_section_partner_hero_section_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'partner_hero_section_partner_hero_section_block_init' );
