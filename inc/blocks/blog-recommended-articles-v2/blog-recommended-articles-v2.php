<?php
/**
 * Plugin Name:       Blog Recommended Articles V2
 * Description:       A dynamic block to display recommended blog articles within a some category of blog posts.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blog-recommended-articles-v2
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Renders the block.
 *
 * @param array $attributes Block attributes.
 * @return string Block content.
 */
function qrolic_render_blog_recommended_articles_v2( $attributes ) {
	$title           = isset( $attributes['Title'] ) ? esc_html( $attributes['Title'] ) : '';
	$number_of_items = isset( $attributes['numberOfItems'] ) ? intval( $attributes['numberOfItems'] ) : 2;
	$section_padding = isset( $attributes['SectionPadding'] ) ? esc_html( $attributes['SectionPadding'] ) : '';

	ob_start();

	$post_id  = get_the_ID();
	$term_ids = array();
	$terms    = get_the_terms( $post_id, 'blog-category' );

	if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
		foreach ( $terms as $term ) {
			$term_ids[] = $term->term_id;
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
			'posts_per_page' => $number_of_items,
			'embed'          => true,
		);

		$related_cats_post = new WP_Query( $query_args );

		if ( $related_cats_post->have_posts() ) {
			echo '<div class="blog-recommended-articles ' . esc_attr( $section_padding ) . '">';
			echo '<div class="container p-0">';
			echo '<div class="blog-recommended-articles__inner">';
			echo '<h2>' . esc_html( $title ) . '</h2>';
			echo '</div>';

			echo '<div class="row">';

			while ( $related_cats_post->have_posts() ) {

				$related_cats_post->the_post();
				$post_author     = get_the_author_meta( 'display_name' );
				$post_categories = get_the_terms( get_the_ID(), 'blog-category' );
				$category_names  = wp_list_pluck( $post_categories, 'name' );
				$reading_time    = do_shortcode( '[blog_reading_time]' );

				echo '<div class="col-lg-4 col-md-6 col-sm-12 col-12 content-width">';
				echo '<div class="blog-recommended-articles__list">';

				if ( has_post_thumbnail() ) {
					echo '<div class="blog-recommended-articles__list_image">';
					echo '<div class="post-thumbnail">' . get_the_post_thumbnail() . '</div>';
					echo '</div>';
				}

				if ( get_the_date() ) {
					echo '<div class="blog-recommended-articles__list_date">';
					echo '<span>' . esc_html( get_the_date() ) . '</span>';
					if ( $post_author ) {
						$author_link = get_author_posts_url( get_the_author_meta( 'ID' ) );	
						echo '<div class="blog-recommended-articles__list__author">';
						echo '<div class="post-author"><a href="' . esc_url( $author_link ) . '" class="author-name">' . esc_html( $post_author ) . '</a></div>';
						echo '</div>';
					}
					echo '</div>';
				}

				echo '<div class="blog-recommended-articles__list_title">';
				echo '<h3><a href="' . esc_url( get_permalink() ) . '">' . esc_html( get_the_title() ) . '</a></h3>';
				echo '</div>';

				echo '<div class="blog-recommended-articles__list_details">';
				if ( $category_names ) {
					echo '<div class="blog-recommended-articles__list_details--catagory">';
					echo '<ul>';
					foreach ( $post_categories as $category ) {
						$category_link = get_term_link( $category->term_id, 'blog-category' );
						if ( ! is_wp_error( $category_link ) ) {
							echo '<li class="description-secondary"><a href="' . esc_url( $category_link ) . '">' . esc_html( $category->name ) . '</a></li>';
						}
					}
					echo '</ul>';
					echo '</div>';
				}

				echo '<div class="blog-reading-time">' . esc_html( $reading_time ) . '</div>';
				echo '</div>';
				echo '</div>';
				echo '</div>';
			}
			wp_reset_postdata();
			echo '</div>';
			echo '</div>';
			echo '</div>';
		}
	}

	return ob_get_clean();
}

/**
 * Registers the block using the metadata loaded from the block.json file.
 */
function qrolic_create_block_blog_recommended_articles_v2_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'qrolic_render_blog_recommended_articles_v2',
		)
	);
}
add_action( 'init', 'qrolic_create_block_blog_recommended_articles_v2_block_init' );

