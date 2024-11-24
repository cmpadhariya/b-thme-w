<?php
/**
 * Plugin Name:       Career List
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       career-list
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

function careerlist_render_block_content( $attributes ) {
	$output     = '';
	$categories = wp_get_post_terms( get_the_ID(), 'careers_category' ); // Get the categories of the current post.
	$args       = array(
		'post_type'      => 'careers',
		'posts_per_page' => $attributes['numberOfItems'],
	);
	$career     = new WP_Query( $args );
	$output    .= '<div class="career-list">';
	$output    .= '<div class="container p-0">';
	$output    .= '<div class="career-list__inner">';
	$output    .= '<div class="row">';
	if ( $career->have_posts() ) {
		while ( $career->have_posts() ) {
			$career->the_post();
			$output         .= '<div class="col-lg-4 col-md-6 col-sm-6 col-12">';
			$output         .= '<div class="career-list__inner_content">';
			$output         .= '<h3>';
			$output         .= '<a href="' . get_the_permalink() . '">'. get_the_title() .'</a>';
			$output         .= '</h3>';
			$output         .= "<p> {$attributes['location']}</p>";
			$post_categories = wp_get_post_terms( get_the_ID(), 'careers_category' );
			foreach ( $post_categories as $category ) {
				$output .= '<span>' . $category->slug . '</span>';
			}
				$output .= '<a href="' . get_the_permalink() . '" class= "button-view-post-service" >';
				$output .= "{$attributes['buttonText']}";
				$output .= '</a>';
			$output     .= '</div> ';
			$output     .= '</div> ';
		}
		wp_reset_postdata();
	} else {
		$output .= '<strong>No career post found.</strong>';
	}
	$output .= '</div> ';
	$output .= '</div> ';
	$output .= '</div> ';
	$output .= '</div> ';
	return $output;
}


function create_block_career_list_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'careerlist_render_block_content',
		)
	);
}
add_action( 'init', 'create_block_career_list_block_init' );



