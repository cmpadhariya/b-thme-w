<?php
/**
 * This code creates a Team custom post type and its category for a team_category.
 */
function qrolic_team_custom_post_type() {
	$labels = array(
		'name'              => __( 'Teams Categories', 'qrolic' ),
		'singular_name'     => __( 'Teams Category', 'qrolic' ),
		'search_items'      => __( 'Search Teams Categories', 'qrolic' ),
		'all_items'         => __( 'All Teams Categories', 'qrolic' ),
		'parent_item'       => __( 'Parent Teams Category', 'qrolic' ),
		'parent_item_colon' => __( 'Parent Teams Category:', 'qrolic' ),
		'edit_item'         => __( 'Edit Teams Category', 'qrolic' ),
		'update_item'       => __( 'Update Teams Category', 'qrolic' ),
		'add_new_item'      => __( 'Add New Teams Category', 'qrolic' ),
		'new_item_name'     => __( 'New Teams Category Name', 'qrolic' ),
		'menu_name'         => __( 'Teams Categories', 'qrolic' ),
	);
	// This code register_taxonomy for a Team custom post type .
	register_taxonomy(
		'teams_category',
		array( 'teams' ),
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
		'name'                  => _x( 'Teams', 'Post Type General Name' ),
		'singular_name'         => _x( 'Teams', 'Post Type Singular Name' ),
		'menu_name'             => __( 'Teams' ),
		'name_admin_bar'        => __( 'Teams', 'qrolic' ),
		'archives'              => __( 'teams Archives', 'qrolic' ),
		'attributes'            => __( 'Teams Attributes', 'qrolic' ),
		'parent_item_colon'     => __( 'Parent Teams:', 'qrolic' ),
		'all_items'             => __( 'All Teams', 'qrolic' ),
		'add_new_item'          => __( 'Add New Teams', 'qrolic' ),
		'add_new'               => __( 'Add New Teams', 'qrolic' ),
		'new_item'              => __( 'New Teams', 'qrolic' ),
		'edit_item'             => __( 'Edit Teams', 'qrolic' ),
		'update_item'           => __( 'Update Teams', 'qrolic' ),
		'view_item'             => __( 'View Teams', 'qrolic' ),
		'view_items'            => __( 'View Teams', 'qrolic' ),
		'search_items'          => __( 'Search Teams', 'qrolic' ),
		'not_found'             => __( 'Not found', 'qrolic' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'qrolic' ),
		'featured_image'        => __( 'Featured Image', 'qrolic' ),
		'set_featured_image'    => __( 'Set featured image', 'qrolic' ),
		'remove_featured_image' => __( 'Remove featured image', 'qrolic' ),
		'use_featured_image'    => __( 'Use as featured image', 'qrolic' ),
		'insert_into_item'      => __( 'Insert into Teams', 'qrolic' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Teams', 'qrolic' ),
		'items_list'            => __( 'Teams list', 'qrolic' ),
		'items_list_navigation' => __( 'Teams list navigation', 'qrolic' ),
		'filter_items_list'     => __( 'Filter Teams list', 'qrolic' ),
	);
	$rewrite = array(
		'slug'         => 'teams',
		'with_front'   => true,
		'hierarchical' => false,
	);

	// Set other options for Custom Post Type.
	$args = array(
		'label'               => __( 'Teams' ),
		'description'         => __( 'Teams and Reviews' ),
		'labels'              => $labels,
		// Features this CPT supports in Post Editor.
		'supports'            => array( 'title', 'editor', 'excerpt', 'post-formats', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', 'trackbacks' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'menu_position'       => 5,
		'can_export'          => true,
		'has_archive'         => 'teams',
		'show_in_rest'        => true,
		'taxonomies'          => array(),
		'show_in_menu'        => true,
		'menu_icon'           => 'dashicons-admin-multisite',
		'show_in_admin_bar'   => true,
		'show_in_nav_menus'   => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => false,
		'capability_type'     => 'post',
		'rewrite'             => $rewrite,
		'map_meta_cap'        => true,
	);
	// Registering your Custom Post Type.
	register_post_type( 'teams', $args );
	add_theme_support( 'post-thumbnails' );
}
add_action( 'init', 'qrolic_team_custom_post_type', 1 );
