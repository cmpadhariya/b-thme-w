<?php
/**
 * Plugin Name:       Casestudy Related Section V2
 * Description:       A dynamic block to display related Case Study articles within a category of Case Study posts.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       casestudy-related-section-v2
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Render callback for the Casestudy Related Section V2 block.
 *
 * @param array $attributes Block attributes.
 * @return string HTML markup.
 */
function qrolic_register_casestudy_related_articles_v2( $attributes ) {
	$title           = isset( $attributes['Title'] ) ? esc_html( $attributes['Title'] ) : '';
	$read_more       = isset( $attributes['readMore'] ) ? esc_html( $attributes['readMore'] ) : 'Read Case Study';
	$number_of_items = isset( $attributes['numberOfItems'] ) ? intval( $attributes['numberOfItems'] ) : 2;
	$section_padding = isset( $attributes['SectionPadding'] ) ? esc_html( $attributes['SectionPadding'] ) : '';

	ob_start();

	$post_id  = get_the_ID();
	$term_ids = array();
	$terms    = get_the_terms( $post_id, 'case-studies_category' );

	if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
		foreach ( $terms as $term ) {
			$term_ids[] = $term->term_id;
		}

		$current_post_type = get_post_type( $post_id );

		$query_args = array(
			'tax_query'      => array(
				array(
					'taxonomy' => 'case-studies_category',
					'field'    => 'term_id',
					'terms'    => $term_ids,
				),
			),
			'post_type'      => $current_post_type,
			'post__not_in'   => array( $post_id ),
			'posts_per_page' => $number_of_items,
		);

		$related_cats_post = new WP_Query( $query_args );

		if ( $related_cats_post->have_posts() ) {
			echo '<div class="casestudy-related ' . esc_attr( $section_padding ) . '">';
			echo '<div class="container p-0">';
			echo '<div class="casestudy-related__inner">';
			echo '<h2>' . esc_html( $title ) . '</h2>';
			echo '</div>';
			echo '<div class="row">';
			while ( $related_cats_post->have_posts() ) {
				$related_cats_post->the_post();
				$post_categories = get_the_terms( get_the_ID(), 'case-studies_category' );
				$category_names  = wp_list_pluck( $post_categories, 'name' );
				$post_image      = get_the_post_thumbnail_url( get_the_ID(), 'full' );
				echo '<div class="col-lg-6 col-md-6 col-sm-12 col-12">';
				echo '<div class="casestudy-related__list">';
				if ( $post_image ) {
					echo '<div class="post-thumbnail casestudy-related__list_image">';
					echo '<a href="' . esc_url( get_the_permalink() ) . '">';
					echo '<img loading="lazy" data-src="' . esc_url( $post_image ) . '" alt="' . esc_attr( get_the_title() ) . '" height="193" wight="494">';
					echo '</a>';
					echo '</div>';
				}
				echo '<div class="casestudy-related__list_title">';
				echo '<h3><a href="' . esc_url( get_the_permalink() ) . '">' . esc_html( get_the_title() ) . '</a></h3>';
				echo '</div>';
				if ( ! empty( $category_names ) ) {
					echo '<ul class="post-categories casestudy-related__list_category">';
					foreach ( $category_names as $category_name ) {
						echo '<li>' . esc_html( $category_name ) . '</li>';
					}
					echo '</ul>';
				}
				echo '<a href="' . esc_url( get_the_permalink() ) . '" class="subtitle casestudy-related__list_readmore"><span>' . esc_html( $read_more ) . '</span></a>';
				echo '</div>';
				echo '</div>';
			}
			echo '</div>';
			echo '</div>';
			echo '</div>';
		}
		wp_reset_postdata();
	}

	return ob_get_clean();
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_casestudy_related_section_v2_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'qrolic_register_casestudy_related_articles_v2',
		)
	);
}
add_action( 'init', 'create_block_casestudy_related_section_v2_block_init' );
