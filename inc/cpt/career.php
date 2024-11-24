<?php
/**
 * This code creates a Career custom post type and its category for a Career single page.
 */
function qrolic_career_custom_post_type() {
	$labels = array(
		'name'              => __( 'Careers Categories', 'qrolic' ),
		'singular_name'     => __( 'Careers Category', 'qrolic' ),
		'search_items'      => __( 'Search Careers Categories', 'qrolic' ),
		'all_items'         => __( 'All Careers Categories', 'qrolic' ),
		'parent_item'       => __( 'Parent Careers Category', 'qrolic' ),
		'parent_item_colon' => __( 'Parent Careers Category:', 'qrolic' ),
		'edit_item'         => __( 'Edit Careers Category', 'qrolic' ),
		'update_item'       => __( 'Update Careers Category', 'qrolic' ),
		'add_new_item'      => __( 'Add New Careers Category', 'qrolic' ),
		'new_item_name'     => __( 'New Careers Category Name', 'qrolic' ),
		'menu_name'         => __( 'Careers Categories', 'qrolic' ),
	);
	// This code register_taxonomy for a Career custom post type .
	register_taxonomy(
		'careers_category',
		array( 'careers' ),
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
		'name'                  => _x( 'Careers', 'Post Type General Name' ),
		'singular_name'         => _x( 'Careers', 'Post Type Singular Name' ),
		'menu_name'             => __( 'Careers' ),
		'name_admin_bar'        => __( 'Careers', 'qrolic' ),
		'archives'              => __( 'careers Archives', 'qrolic' ),
		'attributes'            => __( 'Careers Attributes', 'qrolic' ),
		'parent_item_colon'     => __( 'Parent Careers:', 'qrolic' ),
		'all_items'             => __( 'All Careers', 'qrolic' ),
		'add_new_item'          => __( 'Add New Careers', 'qrolic' ),
		'add_new'               => __( 'Add New Careers', 'qrolic' ),
		'new_item'              => __( 'New Careers', 'qrolic' ),
		'edit_item'             => __( 'Edit Careers', 'qrolic' ),
		'update_item'           => __( 'Update Careers', 'qrolic' ),
		'view_item'             => __( 'View Careers', 'qrolic' ),
		'view_items'            => __( 'View Careers', 'qrolic' ),
		'search_items'          => __( 'Search Careers', 'qrolic' ),
		'not_found'             => __( 'Not found', 'qrolic' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'qrolic' ),
		'featured_image'        => __( 'Featured Image', 'qrolic' ),
		'set_featured_image'    => __( 'Set featured image', 'qrolic' ),
		'remove_featured_image' => __( 'Remove featured image', 'qrolic' ),
		'use_featured_image'    => __( 'Use as featured image', 'qrolic' ),
		'insert_into_item'      => __( 'Insert into Careers', 'qrolic' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Careers', 'qrolic' ),
		'items_list'            => __( 'Careers list', 'qrolic' ),
		'items_list_navigation' => __( 'Careers list navigation', 'qrolic' ),
		'filter_items_list'     => __( 'Filter Careers list', 'qrolic' ),
	);
	$rewrite = array(
		'slug'         => 'careers',
		'with_front'   => true,
		'hierarchical' => false,
	);

	// Set other options for Custom Post Type.
	$args = array(
		'label'               => __( 'Careers' ),
		'description'         => __( 'Careers and Reviews' ),
		'labels'              => $labels,
		// Features this CPT supports in Post Editor.
		'supports'            => array( 'title', 'editor', 'excerpt', 'post-formats', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', 'trackbacks' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'menu_position'       => 5,
		'can_export'          => true,
		'has_archive'         => 'careers',
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
	register_post_type( 'careers', $args );
	add_theme_support( 'post-thumbnails' );
}
add_action( 'init', 'qrolic_career_custom_post_type', 1 );





