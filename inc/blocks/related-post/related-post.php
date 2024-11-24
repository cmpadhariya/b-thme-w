<?php
/**
 * Plugin Name:       Related Post
 * Description:       This block is used to display services related blogs in service single page. In this block you can display blogs by selecting a category.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       related-post
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

function author_box_author_plugin_render_author_content( $attr ) {
	ob_start();
	$title            = isset( $attr['Title'] ) ? esc_html( $attr['Title'] ) : '';
	$sectionPadding   = isset( $attr['SectionPadding'] ) ? esc_html( $attr['SectionPadding'] ) : '';
	$displayThumbnail = $attr['displayThumbnail'];
	$numberOfItems    = $attr['numberOfItems'];
	$selectedCategory = $attr['selectedCategory'];
	$buttonUrl        = isset( $attr['buttonURL'] ) ? esc_url( $attr['buttonURL'] ) : '';
	$buttonText       = isset( $attr['buttonText'] ) ? esc_html( $attr['buttonText'] ) : '';

	$args = array(
		'post_type'      => 'blog',
		'posts_per_page' => $numberOfItems,
		'orderby'        => 'date',
		'order'          => 'DESC',
	);

	if ( $selectedCategory ) {
		$args['tax_query'] = array(
			array(
				'taxonomy' => 'blog-category',
				'field'    => 'id',
				'terms'    => $selectedCategory,
			),
		);
		$cache_key         = 'related_posts_' . md5( wp_json_encode( $args ) );

		$related_data = wp_cache_get( $cache_key, 'related_posts_group' );

		if ( empty( $related_data ) ) {
			$related_data = new WP_Query( $args );
			wp_cache_set( $cache_key, $related_data, 'related_posts_group', 86400 ); // 86400 is one day
		}
		$posts = $related_data;
		if ( $posts->have_posts() ) :
			?>
		<div class="related-service-blog <?php echo esc_html( $sectionPadding ); ?>">
			<div class="container p-0">
				<?php if ( ! empty( $title ) ) : ?>
					<h2><?php echo esc_html( $title ); ?></h2>
				<?php endif; ?>
				<div class="related-service-blog__inner">
					<div class="row">
						<?php
						while ( $posts->have_posts() ) :
							$posts->the_post();
							$post_categories = get_the_terms( get_the_ID(), 'blog-category' );
							$img_id          = get_post_thumbnail_id( get_the_ID() );
							$alt_text        = get_post_meta( $img_id, '_wp_attachment_image_alt', true );
							?>
							<div class="col-lg-6 col-md-6 col-sm-12 col-12 m-bottom">
								<div class="related-service-blog__inner_box">
									<div class="description">
										<h3 class="title">
											<a href="<?php the_permalink(); ?>">
												<?php the_title(); ?>
											</a>
										</h3>
										<?php if ( $attr['displayDate'] ) { ?>
											<span datetime='<?php echo esc_attr( get_the_date() ); ?>'><?php echo esc_html( get_the_date() ); ?></span>
										<?php } ?>
										<?php if ( get_the_excerpt() && $attr['displayExcerpt'] ) { ?>
											<p class="post-excerpt description-primary"><?php echo get_the_excerpt(); ?></p>
										<?php } ?>
									</div>
								</div>
							</div>
						<?php endwhile; ?>
					</div>
					<div class="related-service-blog__inner_button">
							<?php if ( ! empty( $buttonText ) && ! empty( $buttonText ) ) : ?>
							<a href="<?php echo esc_html( $buttonUrl ); ?>" class="button-general">
								<?php echo esc_html( $buttonText ); ?>
							</a>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
			<?php
			wp_reset_postdata();
	endif;

	} else {
		$args      = array(
			'posts_per_page' => 4, /* how many post you need to display */
			'offset'         => 0,
			'orderby'        => 'post_date',
			'order'          => 'DESC',
			'post_type'      => 'blog', /* your post type name */
			'post_status'    => 'publish',
		);
		$cache_key = 'latest_posts_' . md5( wp_json_encode( $args ) );

		$data = wp_cache_get( $cache_key, 'latest_posts_group' );

		if ( empty( $data ) ) {
			$data = new WP_Query( $args );
			wp_cache_set( $cache_key, $data, 'latest_posts_group', 86400 ); // 86400 is one day
		}
		$query = $data;
		if ( $query->have_posts() ) :
			?>
			<div class="related-service-blog latest-blog-posts <?php echo esc_html( $sectionPadding ); ?>">
			<div class="container p-0">
				<?php if ( ! empty( $title ) ) : ?>
					<h2><?php echo esc_html( $title ); ?></h2>
				<?php endif; ?>
				<div class="related-service-blog__inner">
					<div class="row">
						<?php
						while ( $query->have_posts() ) :
							$query->the_post();
							?>
							<div class="col-lg-6 col-md-6 col-sm-12 col-12 m-bottom">
								<div class="related-service-blog__inner_box">
									<div class="description">
										<h3 class="title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
										<span><?php echo esc_html( get_the_date() ); ?></span>
										<p class="post-excerpt description-primary"><?php echo esc_html( get_the_excerpt() ); ?></p>
									</div>
								</div>
							</div>
							<?php
						endwhile;
						?>
					</div>
				</div>
			</div>
			</div>
			<?php
		endif;
	}

	return ob_get_clean();
}
function create_block_related_post_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'author_box_author_plugin_render_author_content',
		)
	);
}
add_action( 'init', 'create_block_related_post_block_init' );
