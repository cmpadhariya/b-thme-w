<?php
/**
 * Plugin Name: Related Portfolio Section
 * Description: This block is used to display portfolio related posts of the main post in a related section, display image, title, and description in related posts.
 * Requires at least: 6.1
 * Requires PHP: 7.0
 * Version: 0.1.0
 * Author: The WordPress Contributors
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: related-portfolio-section
 *
 * @package create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_related_portfolio_section_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'related_portfolio_section_frontend',
		)
	);
}
add_action( 'init', 'create_block_related_portfolio_section_block_init' );

/**
 * Callback function to render the Related Portfolio Section content.
 */
function related_portfolio_section_frontend( $attributes ) {
	ob_start();

	$numberOfItems    = $attributes['numberOfItems'];
	$displayThumbnail = $attributes['displayThumbnail'];
	$selectedCategory = $attributes['selectedCategory'];
	$heading          = isset( $attributes['Heading'] ) ? esc_html( $attributes['Heading'] ) : '';
	$btnUrl           = isset( $attributes['buttonURL'] ) ? esc_url( $attributes['buttonURL'] ) : '';
	$btnText          = isset( $attributes['ButtonText'] ) ? esc_html( $attributes['ButtonText'] ) : '';

	$args = array(
		'post_type'      => 'portfolio',
		'posts_per_page' => $numberOfItems,
		'orderby'        => 'date',
		'order'          => 'DESC',
	);

	if ( $selectedCategory ) {
		$args['tax_query'] = array(
			array(
				'taxonomy' => 'portfolio_category',
				'field'    => 'id',
				'terms'    => $selectedCategory,
			),
		);
	}

	$posts = new WP_Query( $args );

	if ( $posts->have_posts() ) :
		?>
		<div class="related-portfolio section-padding">
			<div class="container p-0">
				<?php if ( ! empty( $heading ) ) : ?>
					<div class="related-portfolio__heading">
						<h2><?php echo esc_html( $heading ); ?></h2>
					</div>
				<?php endif; ?>
				<hr>
				<div class="related-portfolio__inner">
					<div class="row">
						<?php
						while ( $posts->have_posts() ) :
							$posts->the_post();
							$post_categories = get_the_terms( get_the_ID(), 'portfolio_category' );
							$img_id          = get_post_thumbnail_id( get_the_ID() );
							$alt_text        = get_post_meta( $img_id, '_wp_attachment_image_alt', true );
							?>
							<div class="col-lg-4 col-md-6 col-sm-6 col-12">
								<div class="related-portfolio__inner_box">
									<?php if ( $displayThumbnail && has_post_thumbnail() ) : ?>
										<div class="related-portfolio__inner_box--image">
											<img class="related-portfolio__inner_box--image-post"
												 src="<?php echo esc_url( get_the_post_thumbnail_url() ); ?>"
												 alt="<?php echo $alt_text; ?>">
										</div>
									<?php endif; ?>
									<div class="related-portfolio__inner_box--description">
										<h3 class="wp-block-author-box-author-plugin__post-title">
											<a href="<?php the_permalink(); ?>">
												<?php the_title(); ?>
											</a>
										</h3>
										<p class="description-secondary">
											<?php
											if ( $post_categories && ! is_wp_error( $post_categories ) ) {
												$category_names = array();
												foreach ( $post_categories as $category ) {
													$category_names[] = esc_html( $category->name );
												}
												echo implode( ', ', $category_names );
											}
											?>
										</p>
									</div>
									
								</div>
							</div>
						<?php endwhile; ?>
					</div>
				</div>
				<div class="related-portfolio__button">
					<?php if ( ! empty( $btnText ) && ! empty( $btnText ) ) : ?>
						<a href="<?php echo $btnUrl; ?>" class="button-general">
							<?php echo $btnText; ?>
						</a>
					<?php endif; ?>
				</div>
			</div>
		</div>
		<?php
		wp_reset_postdata();
	endif;

	return ob_get_clean();
}
