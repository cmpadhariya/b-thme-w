<?php
/**
 * This code creates a Plugins custom post type and its category for a Plugins single page.
 */
function qrolic_plugins_custom_post_type() {
    $labels = array(
        'name'              => __( 'Plugins Categories', 'qrolic' ),
        'singular_name'     => __( 'Plugin Category', 'qrolic' ),
        'search_items'      => __( 'Search Plugins Categories', 'qrolic' ),
        'all_items'         => __( 'All Plugins Categories', 'qrolic' ),
        'parent_item'       => __( 'Parent Plugin Category', 'qrolic' ),
        'parent_item_colon' => __( 'Parent Plugin Category:', 'qrolic' ),
        'edit_item'         => __( 'Edit Plugin Category', 'qrolic' ),
        'update_item'       => __( 'Update Plugin Category', 'qrolic' ),
        'add_new_item'      => __( 'Add New Plugin Category', 'qrolic' ),
        'new_item_name'     => __( 'New Plugin Category Name', 'qrolic' ),
        'menu_name'         => __( 'Plugins Categories', 'qrolic' ),
    );
    // Register taxonomy for a Plugins custom post type.
    register_taxonomy(
        'plugins_category',
        array( 'plugins' ),
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
    $labels  = array(
        'name'                  => _x( 'Plugins', 'Post Type General Name' ),
        'singular_name'         => _x( 'Plugin', 'Post Type Singular Name' ),
        'menu_name'             => __( 'Plugins' ),
        'name_admin_bar'        => __( 'Plugins', 'qrolic' ),
        'archives'              => __( 'Plugins Archives', 'qrolic' ),
        'attributes'            => __( 'Plugins Attributes', 'qrolic' ),
        'parent_item_colon'     => __( 'Parent Plugins:', 'qrolic' ),
        'all_items'             => __( 'All Plugins', 'qrolic' ),
        'add_new_item'          => __( 'Add New Plugins', 'qrolic' ),
        'add_new'               => __( 'Add New Plugins', 'qrolic' ),
        'new_item'              => __( 'New Plugin', 'qrolic' ),
        'edit_item'             => __( 'Edit Plugin', 'qrolic' ),
        'update_item'           => __( 'Update Plugin', 'qrolic' ),
        'view_item'             => __( 'View Plugin', 'qrolic' ),
        'view_items'            => __( 'View Plugins', 'qrolic' ),
        'search_items'          => __( 'Search Plugins', 'qrolic' ),
        'not_found'             => __( 'Not found', 'qrolic' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'qrolic' ),
        'featured_image'        => __( 'Featured Image', 'qrolic' ),
        'set_featured_image'    => __( 'Set featured image', 'qrolic' ),
        'remove_featured_image' => __( 'Remove featured image', 'qrolic' ),
        'use_featured_image'    => __( 'Use as featured image', 'qrolic' ),
        'insert_into_item'      => __( 'Insert into Plugin', 'qrolic' ),
        'uploaded_to_this_item' => __( 'Uploaded to this Plugin', 'qrolic' ),
        'items_list'            => __( 'Plugins list', 'qrolic' ),
        'items_list_navigation' => __( 'Plugins list navigation', 'qrolic' ),
        'filter_items_list'     => __( 'Filter Plugins list', 'qrolic' ),
    );
    $rewrite = array(
        'slug'         => 'plugins',
        'with_front'   => true,
        'hierarchical' => false,
    );

    // Set other options for Custom Post Type.
    $args = array(
        'label'               => __( 'Plugins' ),
        'description'         => __( 'Plugins and Reviews' ),
        'labels'              => $labels,
        // Features this CPT supports in Post Editor.
        'supports'            => array( 'title', 'editor', 'excerpt', 'post-formats', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', 'trackbacks' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => 'plugins',
        'show_in_rest'        => true,
        'taxonomies'          => array( 'plugins_category' ),
        'show_in_menu'        => true,
        'menu_icon'           => 'dashicons-admin-multisite',
        'show_in_admin_bar'   => true,
        'show_in_nav_menus'   => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
        'rewrite'             => $rewrite,
        'capability_type'     => 'post',
        'map_meta_cap'        => true,
    );
    // Registering your Custom Post Type.
    register_post_type( 'plugins', $args );
    add_theme_support( 'post-thumbnails' );
}
add_action( 'init', 'qrolic_plugins_custom_post_type', 1 );
