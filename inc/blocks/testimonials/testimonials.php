<?php
/**
 * Plugin Name:       Testimonials
 * Description:       This block is a Testimonials section block, this blog gets data from qrolic service to client best satisfaction and happy to our team with work.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       testimonials
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
function testimonials_render_block_content( $attributes ) {
	$output  = "<div class='testimonial section-padding'> <div class='container p-0'>";
	$output .= ! empty( $attributes['Heading'] ) ? "<h2 class='testimonial___heading'>{$attributes['Heading']}</h2></div>" : '';

	$args         = array(
		'post_type'      => 'testimonial',
		'posts_per_page' => $attributes['numberOfItems'],
	);
	$testimonials = new WP_Query( $args );

	if ( $testimonials->have_posts() ) {
		$output .= '<div class="splide"><div class="container p-0">';
		$output .= '<div class="splide__track"><ul class="splide__list">';
		while ( $testimonials->have_posts() ) {
			$testimonials->the_post();
			$output .= '<li class="splide__slide">';
			$output .= '<div class="testimonial__inner">';
			$output .= '<p class="testimonial__inner_heading description-primary">' . get_the_content() . '</p>';
			$output .= '<span class="testimonial__inner_name">' . get_the_title() . '</span>';
			$output .= '<p class="testimonial__inner_location description-primary">' . get_the_excerpt() . '</p>';
			$output .= '</div> ';
			$output .= '</li>';
		}
		$output .= '</ul></div>';
		$output .= '</div></div>';
		wp_reset_postdata();
	} else {
		$output .= '<strong>No testimonials found.</strong>';
	}
	$output .= '</div>';

	return $output;
}
function create_block_testimonials_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'testimonials_render_block_content',
		)
	);
}
add_action( 'init', 'create_block_testimonials_block_init' );
