<?php
/**
 * Plugin Name:       Call To Action Sidebar Section V2
 * Description:      This block is designed to be displayed on a blog single post, ideally in the sidebar, showcasing a heading and a call-to-action section. It includes customizable options for various text fields and button attributes, enhancing user engagement and interaction.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       call-to-action-sidebar-section-v2
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Render the Call To Action Sidebar Section V2 block.
 *
 * @param array $attributes The block attributes.
 * @since 2.0.0
 * @return string The block HTML.
 */
function qrolic_render_call_to_action_sidebar_section_v2( $attributes ) {
	global $post;

	// Retrieve the Call to Action Sidebar Section Heading value.
	$heading     = get_post_meta( $post->ID, '_qrolic_sidebar_section_heading', true );
	$description = get_post_meta( $post->ID, 'qrolic_sidebar_section_description', true );

	// Extract block attributes with defaults.
	$callheading         = $attributes['callheading'] ?? '';
	$calldescription     = $attributes['calldescription'] ?? '';
	$callbutton          = $attributes['callbutton'] ?? '';
	$button_url          = $attributes['buttonURL'] ?? '';
	$icon_name           = $attributes['iconName'] ?? '';
	$attributesClassName = $attributes['className'] ?? '';
	ob_start();
	?>
	<div class="call-to-action-sidebar-section-v2 <?php echo esc_attr( $attributesClassName ); ?>">
		<div class="call-to-action-sidebar-section-v2__inner">
			<div class="call-to-action-sidebar-section-v2__inner_heading">
			<h3 class="description-primary contact-call-sidebar-heading"><?php echo $heading ? esc_html( $heading ) : esc_html( $callheading ); ?></h3>
				<p class="description-secondary contact-call-sidebar-description"><?php echo $description ? esc_html( $description ) : esc_attr( wp_strip_all_tags( $calldescription ) ); ?></p>
			</div>
			<div class="call-to-action-sidebar-section-v2__inner_button">
				<a href="<?php echo esc_url( $button_url ); ?>" class="button button-primary button-large" target="_blank" rel="noopener">
					<?php echo esc_html( $callbutton ); ?>
				</a>
				<i class="<?php echo esc_attr( $icon_name ); ?>"></i>
			</div>
		</div>
	</div>
	<?php
	// Return the buffered content.
	return ob_get_clean();
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function qrolic_create_block_call_to_action_sidebar_section_v2_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'qrolic_render_call_to_action_sidebar_section_v2',
		)
	);
}
add_action( 'init', 'qrolic_create_block_call_to_action_sidebar_section_v2_block_init' );
