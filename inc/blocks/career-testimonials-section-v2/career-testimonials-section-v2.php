<?php
/**
 * Plugin Name:       Career Testimonials Section V2
 * Description:       This block is a career page Testimonials section block, this block gets data from Qrolic service to ensure client satisfaction and team happiness with their work.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       career-testimonials-section-v2
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Render the post content for the block.
 *
 * @param array $attributes Block attributes.
 * @return string Block content.
 */
function career_testimonials_v2_render_post_content( $attributes ) {
	ob_start();

	$title               = isset( $attributes['title'] ) ? esc_html( $attributes['title'] ) : '';
	$description         = isset( $attributes['description'] ) ? esc_html( $attributes['description'] ) : '';
	$section_padding     = isset( $attributes['SectionPadding'] ) ? esc_html( $attributes['SectionPadding'] ) : '';
	$selected_post_ids   = isset( $attributes['selectedPostIds'] ) ? $attributes['selectedPostIds'] : array();
	$section_description = isset( $attributes['sectionDescription'] ) ? esc_html( $attributes['sectionDescription'] ) : '';
	$icon                = isset( $attributes['icon'] ) ? esc_html( $attributes['icon'] ) : '';

	?>
	<div class='career_testimonials <?php echo esc_html( $section_padding ); ?>'>
		<div class='container p-0'>
			<div class='career_testimonials__top'>
				<div class='row'>
					<div class='col-lg-8 col-md-12 col-12 mx-auto'>
						<h2><?php echo esc_html( $title ); ?></h2>
						<p class="description-primary"><?php echo esc_html( $description ); ?></p>
					</div>
				</div>
			</div>
			<div class='career_testimonials__inner'>
				<div class='row'>
					<?php
					if ( ! empty( $selected_post_ids ) ) {
						foreach ( $selected_post_ids as $post_id ) {
							$post = get_post( $post_id );

							if ( $post ) {
								$content         = esc_html( $post->post_content );
								$excerpt         = esc_html( $post->post_excerpt );
								$title           = esc_html( $post->post_title );
								$client_position = get_post_meta( $post_id, 'client_position', true );
								$thumbnail_url   = get_the_post_thumbnail_url( $post_id, 'full' );

								?>
								<div class="col-lg-4 col-md-6 col-12 m-bottom">
									<div class="career_testimonials__inner_box">
										<div class="career_testimonials__inner_box--image">
											<?php if ( $thumbnail_url ) : ?>
												<img src="<?php echo esc_url( $thumbnail_url ); ?>" alt="client image" width="113" height="113" loading="lazy">
											<?php endif; ?>
										</div>
										<div class='career_testimonials__inner_box--content'>
											<ul>
												<li class="icon-star"></li>
												<li class="icon-star"></li>
												<li class="icon-star"></li>
												<li class="icon-star"></li>
												<li class="icon-star"></li>
											</ul>
											<p class="career_testimonials__inner_box--content-text">
												<?php echo esc_html( $content ); ?>
											</p>

											<div class="post-meta">
												<h3><?php echo esc_html( $title ); ?></h3>
												<?php if ( $client_position ) : ?>
													<p class="client-position"><?php echo esc_html( $client_position ); ?></p>
												<?php endif; ?>

												<p class="career_testimonials__inner_box--content-position">
													<?php
													$excerpt_without_tags = wp_strip_all_tags( $excerpt );
													echo esc_html( $excerpt_without_tags );
													?>
												</p>
												<p class="career_testimonials__inner_box--content-bottom-heading">
													<?php if ( $icon ) : ?>
														<i class="<?php echo esc_attr( $icon ); ?>"></i>
													<?php endif; ?>
													<?php echo esc_html( $section_description ); ?>
												</p>
											</div>
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

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_career_testimonials_section_v2_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'career_testimonials_v2_render_post_content',
		)
	);
}
add_action( 'init', 'create_block_career_testimonials_section_v2_block_init' );
