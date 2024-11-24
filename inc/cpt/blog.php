<?php
/**
 * Registers the 'blog' custom post type and 'blog-category' custom taxonomy, and adds a meta box for the Call to Action Sidebar Section Heading.
 *
 * @since 1.0.0
 */
function qrolic_blog_custom_post_type() {
    // Register custom taxonomy
    $labels = array(
        'name'              => __( 'Blog Categories', 'qrolic' ),
        'singular_name'     => __( 'Blog Category', 'qrolic' ),
        'search_items'      => __( 'Search Blog Categories', 'qrolic' ),
        'all_items'         => __( 'All Blog Categories', 'qrolic' ),
        'parent_item'       => __( 'Parent Blog Category', 'qrolic' ),
        'parent_item_colon' => __( 'Parent Blog Category:', 'qrolic' ),
        'edit_item'         => __( 'Edit Blog Category', 'qrolic' ),
        'update_item'       => __( 'Update Blog Category', 'qrolic' ),
        'add_new_item'      => __( 'Add New Blog Category', 'qrolic' ),
        'new_item_name'     => __( 'New Blog Category Name', 'qrolic' ),
        'menu_name'         => __( 'Blog Categories', 'qrolic' ),
    );

    register_taxonomy(
        'blog-category',
        array( 'blog' ),
        array(
            'hierarchical'      => true,
            'labels'            => $labels,
            'show_ui'           => true,
            'show_admin_column' => true,
            'query_var'         => true,
            'rewrite'           => array( 'slug' => 'blog-category' ), 
            'show_in_rest'      => true,
        )
    );

    // Set UI labels for Custom Post Type.
    $labels = array(
        'name'                  => _x( 'Blog', 'Post Type General Name', 'qrolic' ),
        'singular_name'         => _x( 'Blog', 'Post Type Singular Name', 'qrolic' ),
        'menu_name'             => __( 'Blog', 'qrolic' ),
        'name_admin_bar'        => __( 'Blog', 'qrolic' ),
        'archives'              => __( 'Blog Archives', 'qrolic' ),
        'attributes'            => __( 'Blog Attributes', 'qrolic' ),
        'parent_item_colon'     => __( 'Parent Blog:', 'qrolic' ),
        'all_items'             => __( 'All Blogs', 'qrolic' ),
        'add_new_item'          => __( 'Add New Blog', 'qrolic' ),
        'add_new'               => __( 'Add New', 'qrolic' ),
        'new_item'              => __( 'New Blog', 'qrolic' ),
        'edit_item'             => __( 'Edit Blog', 'qrolic' ),
        'update_item'           => __( 'Update Blog', 'qrolic' ),
        'view_item'             => __( 'View Blog', 'qrolic' ),
        'view_items'            => __( 'View Blogs', 'qrolic' ),
        'search_items'          => __( 'Search Blogs', 'qrolic' ),
        'not_found'             => __( 'Not found', 'qrolic' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'qrolic' ),
        'featured_image'        => __( 'Featured Image', 'qrolic' ),
        'set_featured_image'    => __( 'Set featured image', 'qrolic' ),
        'remove_featured_image' => __( 'Remove featured image', 'qrolic' ),
        'use_featured_image'    => __( 'Use as featured image', 'qrolic' ),
        'insert_into_item'      => __( 'Insert into Blog', 'qrolic' ),
        'uploaded_to_this_item' => __( 'Uploaded to this Blog', 'qrolic' ),
        'items_list'            => __( 'Blogs list', 'qrolic' ),
        'items_list_navigation' => __( 'Blogs list navigation', 'qrolic' ),
        'filter_items_list'     => __( 'Filter Blogs list', 'qrolic' ),
    );

    $rewrite = array(
        'slug'         => 'blog',
        'with_front'   => true,
        'hierarchical' => true,
    );

    // Set other options for Custom Post Type.
    $args = array(
        'label'               => __( 'Blog', 'qrolic' ),
        'description'         => __( 'Blog and Reviews', 'qrolic' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'excerpt', 'post-formats', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', 'trackbacks' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => 'blog',
        'show_in_rest'        => true,
        'taxonomies'          => array( 'blog-category' ),
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
    register_post_type( 'blog', $args );

    // Add meta box for sidebar heading
    add_action( 'add_meta_boxes', 'qrolic_add_sidebar_heading_meta_box' );

    // Ensure post thumbnails are supported
    add_theme_support( 'post-thumbnails' );
}

add_action( 'init', 'qrolic_blog_custom_post_type', 1 );
