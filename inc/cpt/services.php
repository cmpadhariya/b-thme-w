<?php
/**
 * This code creates a Services custom post type and its category for a Services single page.
 */
function qrolic_services_custom_post_type() {
	$labels = array(
		'name'              => __( 'Services Categories', 'qrolic' ),
		'singular_name'     => __( 'Services Category', 'qrolic' ),
		'search_items'      => __( 'Search Services Categories', 'qrolic' ),
		'all_items'         => __( 'All Services Categories', 'qrolic' ),
		'parent_item'       => __( 'Parent Services Category', 'qrolic' ),
		'parent_item_colon' => __( 'Parent Services Category:', 'qrolic' ),
		'edit_item'         => __( 'Edit Services Category', 'qrolic' ),
		'update_item'       => __( 'Update Services Category', 'qrolic' ),
		'add_new_item'      => __( 'Add New Services Category', 'qrolic' ),
		'new_item_name'     => __( 'New Services Category Name', 'qrolic' ),
		'menu_name'         => __( 'Services Categories', 'qrolic' ),
	);
	// This code register_taxonomy for a Services custom post type .
	register_taxonomy(
		'services_category',
		array( 'services' ),
		array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => true,
		)
	);
	// Set UI labels for Custom Post Type.
	$labels  = array(
		'name'                  => _x( 'Services', 'Post Type General Name' ),
		'singular_name'         => _x( 'Services', 'Post Type Singular Name' ),
		'menu_name'             => __( 'Services' ),
		'name_admin_bar'        => __( 'Services', 'qrolic' ),
		'archives'              => __( 'Services Archives', 'qrolic' ),
		'attributes'            => __( 'Services Attributes', 'qrolic' ),
		'parent_item_colon'     => __( 'Parent Services:', 'qrolic' ),
		'all_items'             => __( 'All Services', 'qrolic' ),
		'add_new_item'          => __( 'Add New Services', 'qrolic' ),
		'add_new'               => __( 'Add New Services', 'qrolic' ),
		'new_item'              => __( 'New Services', 'qrolic' ),
		'edit_item'             => __( 'Edit Services', 'qrolic' ),
		'update_item'           => __( 'Update Services', 'qrolic' ),
		'view_item'             => __( 'View Services', 'qrolic' ),
		'view_items'            => __( 'View Services', 'qrolic' ),
		'search_items'          => __( 'Search Services', 'qrolic' ),
		'not_found'             => __( 'Not found', 'qrolic' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'qrolic' ),
		'featured_image'        => __( 'Featured Image', 'qrolic' ),
		'set_featured_image'    => __( 'Set featured image', 'qrolic' ),
		'remove_featured_image' => __( 'Remove featured image', 'qrolic' ),
		'use_featured_image'    => __( 'Use as featured image', 'qrolic' ),
		'insert_into_item'      => __( 'Insert into Services', 'qrolic' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Services', 'qrolic' ),
		'items_list'            => __( 'Services list', 'qrolic' ),
		'items_list_navigation' => __( 'Services list navigation', 'qrolic' ),
		'filter_items_list'     => __( 'Filter Services list', 'qrolic' ),
	);
	$rewrite = array(
		'slug'         => 'services',
		'with_front'   => true,
		'hierarchical' => false,
	);

	// Set other options for Custom Post Type.
	$args = array(
		'label'               => __( 'Services' ),
		'description'         => __( 'Services and Reviews' ),
		'labels'              => $labels,
		// Features this CPT supports in Post Editor.
		'supports'            => array( 'title', 'editor', 'excerpt', 'post-formats', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', 'trackbacks' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'menu_position'       => 5,
		'can_export'          => true,
		'has_archive'         => false,
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
		'capability_type'     => 'post',
		'map_meta_cap'        => true,
	);
	// Registering your Custom Post Type.
	register_post_type( 'services', $args );
	add_theme_support( 'post-thumbnails' );
}
add_action( 'init', 'qrolic_services_custom_post_type', 1 );
