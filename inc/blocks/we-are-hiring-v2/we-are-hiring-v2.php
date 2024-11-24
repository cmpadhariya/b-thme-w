<?php
/**
 * Plugin Name:       We Are Hiring V2
 * Description:       This block allows you to dynamically select and display posts from the 'Career' custom post type with customizable attributes like subtitle, heading, description, button text and icon. It provides an intuitive interface to add, remove and rearrange selected posts, ensuring tailored performance on the front end.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       we-are-hiring-v2
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function qrolic_we_are_hiring_v2_render_block_content( $attributes ) {
    $output = '';

    // Get block attributes
    $heading         = isset( $attributes['heading'] ) ? $attributes['heading'] : '';
    $subtitle        = isset( $attributes['subtitle'] ) ? $attributes['subtitle'] : '';
    $description     = isset( $attributes['description'] ) ? $attributes['description'] : '';
    $selected_posts  = isset( $attributes['selectedPosts'] ) ? $attributes['selectedPosts'] : array();
    $button_text     = isset( $attributes['buttonText'] ) ? $attributes['buttonText'] : '';
    $icon            = isset( $attributes['icon'] ) ? $attributes['icon'] : '';
    $section_padding = isset( $attributes['SectionPadding'] ) ? $attributes['SectionPadding'] : '';

    // Query for the selected posts
    $args = array(
        'post_type'      => 'careers',
        'post__in'       => $selected_posts,
        'orderby'        => 'post__in',
        'posts_per_page' => -1,
    );
    $career_query = new WP_Query( $args );

    // Output block content
    $output .= '<div class="we-are-hiring ' . esc_attr( $section_padding ) . '">';
    $output .= '<div class="container p-0">';
    $output .= '<div class="we-are-hiring__inner">';
    $output .= '<div class="row">';
    $output .= '<div class="col-lg-10 col-md-12 col-12 mx-auto">';

    // Add Heading, Subtitle, Description, and Icon
    if ( ! empty( $subtitle ) ) {
        $output .= '<div class="we-are-hiring__subtitle">';
        $output .= '<p class="we-are-hiring__subtitle_content qt-color-green">' . esc_html( $subtitle ) . '</p>';
        $output .= '</div>';
    }

    if ( ! empty( $heading ) ) {
        $output .= '<div class="we-are-hiring__title">';
        $output .= '<h2 class="we-are-hiring__heading">' . esc_html( $heading ) . '</h2>';
        $output .= '</div>';
    }

    if ( ! empty( $description ) ) {
        $output .= '<div class="we-are-hiring__description">';
        $output .= '<p class="description-primary">' . esc_html( $description ) . '</p>';
        $output .= '</div>';
    }

    $output .= '</div>';
    $output .= '</div>';
    $output .= '<div class="we-are-hiring__box">';
    $output .= '<div class="row gx-5 gy-5">';

    // Display the selected posts
    if ( $career_query->have_posts() ) {
        while ( $career_query->have_posts() ) {
            $career_query->the_post();
            $output .= '<div class="col-lg-6 col-md-12 col-sm-12 col-12 ">';
            $output .= '<div class="we-are-hiring__item">';
            $output .= '<div class="row g-0">';
            $output .= '<div class="col-lg-9 col-md-8 col-sm-8 col-12">';
            $output .= '<div class="we-are-hiring__item_text">';
            $output .= '<h3 class="description-primary"><a href="' . get_permalink() . '">' . get_the_title() . '</a></h3>';
            $output .= '<p class="description-secondary">' . get_the_excerpt() . '</p>';
            $output .= '</div>';
            $output .= '</div>';
            $output .= '<div class="col-lg-3 col-md-4 col-sm-4 col-12 g-0">';
            $output .= '<div class="we-are-hiring__item_button">';
            $output .= '<a href="' . esc_url( get_permalink() ) . '" class="button-view-post-service description-secondary">';
            $output .= esc_html( $button_text );
            if ( ! empty( $icon ) ) {
                $output .= '<i class="icon ' . esc_attr( $icon ) . '" aria-hidden="true"></i>';
            }
            $output .= '</a>';
            $output .= '</div>';
            $output .= '</div>';
            $output .= '</div>';
            $output .= '</div>';
            $output .= '</div>';
        }
        wp_reset_postdata();
    } else {
        $output .= '<strong>' . esc_html__( 'No career posts found.', 'qrolic' ) . '</strong>';
    }

    $output .= '</div>';
    $output .= '</div>';
    $output .= '</div>';
    $output .= '</div>';
    $output .= '</div>';

    return $output;
}

function qrolic_create_block_we_are_hiring_v2_block_init()
{
    register_block_type(
        __DIR__ . '/build',
        array(
            'render_callback' => 'qrolic_we_are_hiring_v2_render_block_content',
        )
    );
}
add_action( 'init', 'qrolic_create_block_we_are_hiring_v2_block_init' );
