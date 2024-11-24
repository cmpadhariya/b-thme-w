<?php
/**
 * Plugin Name:       Why Qrolic Testimonial V2
 * Description:       This block is a Why Qrolic page Testimonials section block. It retrieves data from Qrolic services to showcase client satisfaction and happiness with our team's work.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       why-qrolic-testimonial-v2
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Render callback for the Why Qrolic Testimonials V2 block.
 *
 * @param array $attributes Block attributes.
 * @return string Rendered block content.
 */
function why_qrolic_testimonials_v2_render_post_content( $attributes ) {
	ob_start();

	$selected_post_id = isset( $attributes['selectedPostId'] ) ? (int) $attributes['selectedPostId'] : 0;

	if ( $selected_post_id ) {
		$post = get_post( $selected_post_id );

		if ( $post ) {
			$client_position = get_post_meta( $selected_post_id, 'client_position', true );
			$client_quotes   = get_post_meta( $selected_post_id, 'client_quotes', true );
			$featured_image  = get_the_post_thumbnail( $selected_post_id, 'full', array( 'class' => 'why-qrolic-testimonials__image' ) );

			?>
			<div class="why-qrolic-testimonials__inner_block">
				<?php if ( $client_quotes ) : ?>
					<p class="client-quotes"><?php echo esc_html( $client_quotes ); ?></p>
				<?php endif; ?>

				<div class="why-qrolic-testimonials__inner_block--content">
					<?php if ( $featured_image ) : ?>
						<?php echo wp_kses_post( $featured_image ); ?>
					<?php endif; ?>

					<div class="why-qrolic-testimonials__inner_block--content-details">
						<h3><?php echo esc_html( $post->post_title ); ?></h3>
						<?php if ( $client_position ) : ?>
							<p class="subtitle"><?php echo esc_html( $client_position ); ?></p>
						<?php endif; ?>
					</div>
				</div>
			</div>
			<?php
		} else {
			echo '<p>' . esc_html__( 'Testimonial not found', 'why-qrolic-testimonial-v2' ) . '</p>';
		}
	} else {
		echo '<p>' . esc_html__( 'No testimonials selected', 'why-qrolic-testimonial-v2' ) . '</p>';
	}

	return ob_get_clean();
}

/**
 * Registers the Why Qrolic Testimonial V2 block.
 */
function create_block_why_qrolic_testimonial_v2_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'why_qrolic_testimonials_v2_render_post_content',
		)
	);
}
add_action( 'init', 'create_block_why_qrolic_testimonial_v2_block_init' );
