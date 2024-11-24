<?php
/**
 * Plugin Name:       Related Blog Post
 * Description:       We use this block to display related blog posts in the sidebar of a single blog page.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       related-blog-post
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

function qrolic_related_blog_post_content( $attributes ) {
	$title = isset( $attributes['Title'] ) ? esc_html( $attributes['Title'] ) : '';
	ob_start();

	$post_id  = get_the_ID();
	$term_ids = array();
	$terms    = get_the_terms( $post_id, 'blog-category' );

	if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) :
		foreach ( $terms as $term ) {
			array_push( $term_ids, $term->term_id );
		}

		$current_post_type = get_post_type( $post_id );

		$query_args = array(
			'tax_query'      => array(
				array(
					'taxonomy' => 'blog-category',
					'field'    => 'term_id',
					'terms'    => $term_ids,
				),
			),
			'post_type'      => $current_post_type,
			'post__not_in'   => array( $post_id ),
			'posts_per_page' => 3,
		);

		$related_cats_post = new WP_Query( $query_args );

		if ( $related_cats_post->have_posts() ) :

			echo '<div class="related-blog">';
			echo '<h4>' . esc_html( $title ) . '</h4>';
			echo '<div class="related-blog__inner">';

			$counter = 0;

			while ( $related_cats_post->have_posts() && $counter < 3 ) :
				$related_cats_post->the_post();

				echo '<div class="related-blog__inner_content"><div class="description"><h5><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></h5><span>' . get_the_date() . '</span></div></div>';
				$counter++;
				endwhile;

			echo '</div>';
			echo '</div>';

			endif;
		endif;

		return ob_get_clean();
}
function qrolic_related_blog_post_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'qrolic_related_blog_post_content',
		)
	);
}
add_action( 'init', 'qrolic_related_blog_post_block_init' );
