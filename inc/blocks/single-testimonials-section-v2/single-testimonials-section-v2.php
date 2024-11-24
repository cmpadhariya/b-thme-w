<?php
/**
 * Plugin Name:       Single Testimonials Section
 * Description:       This block is a Single testimonial Section block, It's a simple section that highlights the testimonial.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       single-testimonials-section
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
function create_block_single_testimonials_section_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'render_testimonial_single_section_content',
		)
	);
}
add_action( 'init', 'create_block_single_testimonials_section_block_init' );
function render_testimonial_single_section_content( $attributes ) {
	 $selected_post_id = isset( $attributes['selectedPostId'] ) ? intval( $attributes['selectedPostId'] ) : 0;

	if ( $selected_post_id ) {
		$post = get_post( $selected_post_id );

		if ( $post ) {
			$content         = apply_filters( 'the_content', $post->post_content );
			$title           = esc_html( $post->post_title );
			$excerpt         = esc_html( $post->post_excerpt );
			$client_position = get_post_meta( $selected_post_id, 'client_position', true );

			ob_start();
			?>
			<div class="testimonial_single-section section-padding">
				<div class="container p-0">
					<div class="testimonial_single-section_inner">
						<div class="testimonial_single-section_inner__heading">
							<p><?php echo wp_kses_post( $excerpt ); ?></p>
						</div>

						<div class="testimonial_single-section_inner__title">
							<h4><?php echo esc_html( $title ); ?></h4>
						</div>
						<div class="testimonial_single-section_inner__location">
							<?php if ( $client_position ) : ?>
								<p><?php echo esc_html( $client_position ); ?></p>
							<?php endif; ?>
						</div>
					</div>
				</div>
			</div>
			<?php
			return ob_get_clean();
		}
	}

	// Output a message if no post is selected or no images are added.
	return '<p>' . esc_html__( 'No testimonial selected or no images added.', 'qrolic' ) . '</p>';
}
