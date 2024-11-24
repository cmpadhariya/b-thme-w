<?php
/**
 * This code creates a Portfolio custom post type and its category for a Portfolio single page.
 */
function qrolic_portfolio_custom_post_type() {
    $labels = array(
        'name'              => __( 'Portfolio Categories', 'qrolic' ),
        'singular_name'     => __( 'Portfolio Category', 'qrolic' ),
        'search_items'      => __( 'Search Portfolio Categories', 'qrolic' ),
        'all_items'         => __( 'All Portfolio Categories', 'qrolic' ),
        'parent_item'       => __( 'Parent Portfolio Category', 'qrolic' ),
        'parent_item_colon' => __( 'Parent Portfolio Category:', 'qrolic' ),
        'edit_item'         => __( 'Edit Portfolio Category', 'qrolic' ),
        'update_item'       => __( 'Update Portfolio Category', 'qrolic' ),
        'add_new_item'      => __( 'Add New Portfolio Category', 'qrolic' ),
        'new_item_name'     => __( 'New Portfolio Category Name', 'qrolic' ),
        'menu_name'         => __( 'Portfolio Categories', 'qrolic' ),
    );

    // This code registers taxonomy for a Portfolio custom post type.
    register_taxonomy(
        'portfolio_category',
        array( 'portfolio' ),
        array(
            'hierarchical'      => true,
            'labels'            => $labels,
            'show_ui'           => true,
            'show_admin_column' => true,
            'query_var'         => true,
            'rewrite'           => true,
            'show_in_rest'      => true,
        )
    );

    // Set UI labels for Custom Post Type.
    $custom_post_type_labels = array(
        'name'                  => _x( 'Portfolio', 'Post Type General Name' ),
        'singular_name'         => _x( 'Portfolio', 'Post Type Singular Name' ),
        'menu_name'             => __( 'Portfolio' ),
        'name_admin_bar'        => __( 'Portfolio', 'qrolic' ),
        'archives'              => __( 'Portfolio Archives', 'qrolic' ),
        'attributes'            => __( 'Portfolio Attributes', 'qrolic' ),
        'parent_item_colon'     => __( 'Parent Portfolio:', 'qrolic' ),
        'all_items'             => __( 'All Portfolio', 'qrolic' ),
        'add_new_item'          => __( 'Add New Portfolio', 'qrolic' ),
        'add_new'               => __( 'Add New Portfolio', 'qrolic' ),
        'new_item'              => __( 'New Portfolio', 'qrolic' ),
        'edit_item'             => __( 'Edit Portfolio', 'qrolic' ),
        'update_item'           => __( 'Update Portfolio', 'qrolic' ),
        'view_item'             => __( 'View Portfolio', 'qrolic' ),
        'view_items'            => __( 'View Portfolio', 'qrolic' ),
        'search_items'          => __( 'Search Portfolio', 'qrolic' ),
        'not_found'             => __( 'Not found', 'qrolic' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'qrolic' ),
        'featured_image'        => __( 'Featured Image', 'qrolic' ),
        'set_featured_image'    => __( 'Set featured image', 'qrolic' ),
        'remove_featured_image' => __( 'Remove featured image', 'qrolic' ),
        'use_featured_image'    => __( 'Use as featured image', 'qrolic' ),
        'insert_into_item'      => __( 'Insert into Portfolio', 'qrolic' ),
        'uploaded_to_this_item' => __( 'Uploaded to this Portfolio', 'qrolic' ),
        'items_list'            => __( 'Portfolio list', 'qrolic' ),
        'items_list_navigation' => __( 'Portfolio list navigation', 'qrolic' ),
        'filter_items_list'     => __( 'Filter Portfolio list', 'qrolic' ),
    );

    $rewrite = array(
        'slug'         => 'portfolio',
        'with_front'   => true,
        'hierarchical' => true,
    );

    // Set other options for Custom Post Type.
    $args = array(
        'label'               => __( 'Portfolio' ),
        'description'         => __( 'Portfolio and Reviews' ),
        'labels'              => $custom_post_type_labels,
        'supports'            => array( 'title', 'editor', 'excerpt', 'post-formats', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', 'trackbacks' ),
        'hierarchical'        => false,
        'public'              => false,
        'show_ui'             => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => 'portfolio',
        'show_in_rest'        => true,
        'taxonomies'          => array(),
        'show_in_menu'        => true,
        'menu_icon'           => 'dashicons-admin-multisite',
        'show_in_admin_bar'   => true,
        'show_in_nav_menus'   => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
        'rewrite'             => $rewrite,
        'map_meta_cap'        => true,
    );

    // Registering your Custom Post Type.
    register_post_type( 'portfolio', $args );
    add_theme_support( 'post-thumbnails' );
}
add_action( 'init', 'qrolic_portfolio_custom_post_type', 1 );

// Remove portfolio content single page
function qrolic_remove_portfolio_single_page() {
    if ( is_singular( 'testimonial' ) ) {
        global $wp_query;
        $wp_query->set_404();
        status_header( 404 );
    }
}
add_action( 'template_redirect', 'qrolic_remove_portfolio_single_page' );
