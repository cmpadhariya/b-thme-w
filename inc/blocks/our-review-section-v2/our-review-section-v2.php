<?php
/**
 * Plugin Name:       Our Review Section V2
 * Description:       This block is a Our Review section block, this blog get data qrolic service to client best satisfaction and happy to our team with work.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       our-review-section-v2
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
function our_review_section_v2_render_post_content( $attributes ) {
	ob_start();
	$title               = isset( $attributes['title'] ) ? esc_html( $attributes['title'] ) : '';
	$sectionPadding      = isset( $attributes['SectionPadding'] ) ? esc_html( $attributes['SectionPadding'] ) : '';
	$selected_review_ids = isset( $attributes['selectedReviewIds'] ) ? $attributes['selectedReviewIds'] : array();

	?>
	<div class='our-review-section <?php echo esc_html( $sectionPadding ); ?>'>
		<div class='container p-0'>
			<div class='our-review-section__top'>
				<h2><?php echo esc_html( $title ); ?></h2>
			</div>
			<div class='our-review-section__inner'>
				<div class='row'>
					<?php if ( ! empty( $selected_review_ids ) ) { ?>
						<?php foreach ( $selected_review_ids as $post_id ) { ?>
							<?php $post = get_post( $post_id ); ?>
							<?php
							if ( $post ) {
								$excerpt = esc_html( $post->post_excerpt );
								$title   = esc_html( $post->post_title );
								?>
								<div class="col-lg-4 col-md-6 col-12">
									<div class='our-review-section__inner--content'>
										<ul>
											<li class="icon-star"></li>
											<li class="icon-star"></li>
											<li class="icon-star"></li>
											<li class="icon-star"></li>
											<li class="icon-star"></li>
										</ul>
										<p class="description-secondary">
											<?php
												echo esc_html( $excerpt );
											?>
										</p>
										<h3>- <?php echo esc_html( $title ); ?></h3>
									</div>
								</div>
							<?php } ?>
							<?php } ?>
						<?php wp_reset_postdata(); ?>
					<?php } else { ?>
						<strong><?php _e( 'No review found.', 'our-review-section-v2' ); ?></strong>
					<?php } ?>
				</div>
			</div>
		</div>
	</div>
	<?php
	return ob_get_clean();
}

function create_block_our_review_section_v2_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'our_review_section_v2_render_post_content',
		)
	);
}
add_action( 'init', 'create_block_our_review_section_v2_block_init' );
