<?php
/**
 * Plugin Name:       Career Related Posts
 * Description:       This block stores the related post of the career custom post type in the career single page.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       career-related-posts
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


function career_render_block_content( $attributes ) {
	$output        = '';
	$categories    = wp_get_post_terms( get_the_ID(), 'careers_category' ); // Get the categories of the current post.
	$related_args  = array(
		'post_type'      => 'careers',
		'tax_query'      => array(
			array(
				'taxonomy' => 'careers_category',
				'field'    => 'slug',
				'terms'    => wp_list_pluck( $categories, 'slug' ),
			),
		),
		'post__not_in'   => array( get_the_ID() ), // Exclude the current post from the results.
		'posts_per_page' => 5, // Adjust the number of related posts to display.
	);
	$related_query = new WP_Query( $related_args );
	$output       .= '<div class="cs-related-post section-padding">';
	$output       .= '<div class="container p-0">';
	$output       .= '<div class="cs-related-post__inner">';
	$output       .= '<div class="cs-related-post__inner_heading">';
	$output       .= "<h2> {$attributes['Heading']}</h2>";
	$output       .= '</div> ';
	$output       .= '<div class="row">';
	if ( $related_query->have_posts() ) {
		while ( $related_query->have_posts() ) {
			$related_query->the_post();
			$output .= '<div class="col-lg-4 col-md-4 col-12">';
			$output .= '<div class="cs-related-post__inner_content">';
			$output         .= '<h3>';
			$output         .= '<a href="' . get_the_permalink() . '">'. get_the_title() .'</a>';
			$output         .= '</h3>';

			$output         .= "<p> {$attributes['location']}</p>";
			$post_categories = wp_get_post_terms( get_the_ID(), 'careers_category' );
			foreach ( $post_categories as $category ) {
				$output .= '<span>' . $category->slug . '</span>';
			}
				$output .= '<a href="' . get_the_permalink() . '" class= "button-view-post" >';
				$output .= "{$attributes['buttonText']}";
				$output .= '</a>';
			$output     .= '</div> ';
			$output     .= '</div> ';
		}
		wp_reset_postdata();
	} else {
		$output .= '<strong>No careers found.</strong>';
	}
	$output .= '</div> ';
	$output .= '</div> ';
	$output .= '</div> ';
	$output .= '</div> ';
	return $output;
}


function create_block_career_related_posts_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'career_render_block_content',
		)
	);
}
add_action( 'init', 'create_block_career_related_posts_block_init' );
