<?php
/**
 * Plugin Name:       Latest Blog Posts
 * Description:       This block is used to display the author latest post in a single blog post.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       latest-blog-posts
 *
 * @package           create-block
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

function qrolic_latest_post( $attributes ) {
	$title = isset( $attributes['Title'] ) ? esc_html( $attributes['Title'] ) : '';
	ob_start();

	$args = array(
		'posts_per_page' => 2, /* how many post you need to display */
		'offset'         => 0,
		'post__not_in'   => array( get_the_ID() ),
		'orderby'        => 'post_date',
		'order'          => 'DESC',
		'post_type'      => 'blog', /* your post type name */
		'post_status'    => 'publish',
	);

	$cache_key = 'blog_posts_' . md5( wp_json_encode( $args ) );

	$data = wp_cache_get( $cache_key, 'blog_posts_group' );

	if ( ! empty( $data ) ) {
		return $data;
	}

	$query = new WP_Query( $args );
	if ( $query->have_posts() ) : ?>
		<div class="latest-post">
			<h2><?php echo esc_html( $title ); ?></h2>
			<div class="row">
				<?php
				while ( $query->have_posts() ) :
					$query->the_post();

					?>
					<div class="col-lg-6 col-md-6 col-12 m-bottom">
						<div class="latest-post__inner">
							<a href="<?php the_permalink(); ?>" aria-label="<?php the_title(); ?>"><?php echo get_the_post_thumbnail(); ?></a>
							<div class="description">
								<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
								<span><?php echo esc_html( get_the_date() ); ?></span>
								<p><?php echo esc_html( get_the_excerpt() ); ?></p>
							</div>
						</div>
					</div>
					<?php
				endwhile;
				?>
			</div>
		</div>
		<?php
	endif;

	$data = ob_get_clean();

	wp_reset_postdata();

	wp_cache_set( $cache_key, $data, 'blog_posts_group', 86400 ); // 86400 is one day

	return $data;
}
function qrolic_latest_blog_posts_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'qrolic_latest_post',
		)
	);
}
add_action( 'init', 'qrolic_latest_blog_posts_block_init' );
