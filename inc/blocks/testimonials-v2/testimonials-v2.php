<?php
/**
 * Plugin Name:       Testimonials V2
 * Description:       This block is a Testimonials section block, this blog get data qrolic service to client best satisfaction and happy to our team with work.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       testimonials-v2
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

function testimonials_v2_render_post_content( $attributes ) {
	ob_start();
	$subtitle          = isset( $attributes['subtitle'] ) ? esc_html( $attributes['subtitle'] ) : '';
	$title             = isset( $attributes['title'] ) ? esc_html( $attributes['title'] ) : '';
	$description       = isset( $attributes['description'] ) ? esc_html( $attributes['description'] ) : '';
	$sectionPadding    = isset( $attributes['SectionPadding'] ) ? esc_html( $attributes['SectionPadding'] ) : '';
	$selected_post_ids = isset( $attributes['selectedPostIds'] ) ? $attributes['selectedPostIds'] : array();

	?>
	<div class='testimonials <?php echo esc_html( $sectionPadding ); ?>'>
		<div class='container p-0'>
			<div class='testimonials__top'>
				<p class="subtitle subtitle-heading"><?php echo esc_html( $subtitle ); ?></p>
				<div class="row align-items-center">
					<div class="col-lg-6 col-md-6 col-12">
						<h2><?php echo esc_html( $title ); ?></h2>
					</div>
					<div class="col-lg-6 col-md-6 col-12">
						<p class="description-primary"><?php echo esc_html( $description ); ?></p>
					</div>
				</div>
			</div>
			<div class='testimonials__inner'>
				<div class='row'>
					<?php
					if ( ! empty( $selected_post_ids ) ) {
						foreach ( $selected_post_ids as $post_id ) {
							$post = get_post( $post_id );
							if ( $post ) {
								$excerpt         = esc_html( $post->post_excerpt );
								$title           = esc_html( $post->post_title );
								$client_position = get_post_meta( $post_id, 'client_position', true );
								?>
								<div class="col-lg-4 col-md-6 col-12 m-bottom">
									<div class='testimonials__inner--content'>
										<ul>
											<li class="icon-star"></li>
											<li class="icon-star"></li>
											<li class="icon-star"></li>
											<li class="icon-star"></li>
											<li class="icon-star"></li>
										</ul>
										<p class="description-secondary">
											<?php
												$excerpt = preg_replace( array( '/<p class="description-secondary">/', '/<\/p>/' ), '', $excerpt, 1 );
												echo esc_html( $excerpt );
											?>
										</p>
										<div class="post-meta">
											<h3><?php echo esc_html( $title ); ?></h3>
											<?php if ( $client_position ) : ?>
												<p class="client-position"><?php echo esc_html( $client_position ); ?></p>
											<?php endif; ?>
										</div>
									</div>
								</div>
								<?php
							}
						}
					} else {
						echo '<p>' . esc_html__( 'No testimonials selected', 'qrolic' ) . '</p>';
					}
					?>
				</div>
			</div>
		</div>
	</div>
	<?php
	return ob_get_clean();
}
function create_block_testimonials_v2_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'testimonials_v2_render_post_content',
		)
	);
}
add_action( 'init', 'create_block_testimonials_v2_block_init' );
