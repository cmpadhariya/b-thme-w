<?php
/**
 * This code creates a Case studies custom post type and register category for a Case studies.
 */
function qrolic_casestudies_custom_post_type() {
	$labels = array(
		'name'              => __( 'Case Studies Categories', 'qrolic' ),
		'singular_name'     => __( 'Case Studies Category', 'qrolic' ),
		'search_items'      => __( 'Search Case Studies Categories', 'qrolic' ),
		'all_items'         => __( 'All Case Studies Categories', 'qrolic' ),
		'parent_item'       => __( 'Parent Case Studies Category', 'qrolic' ),
		'parent_item_colon' => __( 'Parent Case Studies Category:', 'qrolic' ),
		'edit_item'         => __( 'Edit Case Studies Category', 'qrolic' ),
		'update_item'       => __( 'Update Case Studies Category', 'qrolic' ),
		'add_new_item'      => __( 'Add New Case Studies Category', 'qrolic' ),
		'new_item_name'     => __( 'New Case Studies Category Name', 'qrolic' ),
		'menu_name'         => __( 'Case Studies Categories', 'qrolic' ),
	);
	// This code register_taxonomy for a Case studies custom post type .
	register_taxonomy(
		'case-studies_category',
		array( 'case-studies' ),
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
		'name'                  => _x( 'Case Studies', 'Post Type General Name' ),
		'singular_name'         => _x( 'Case Studies', 'Post Type Singular Name' ),
		'menu_name'             => __( 'Case Studies' ),
		'name_admin_bar'        => __( 'Case Studies', 'qrolic' ),
		'archives'              => __( 'Case Studies Archives', 'qrolic' ),
		'attributes'            => __( 'Case Studies Attributes', 'qrolic' ),
		'parent_item_colon'     => __( 'Parent Case Studies:', 'qrolic' ),
		'all_items'             => __( 'All Case Studies', 'qrolic' ),
		'add_new_item'          => __( 'Add New Case Studies', 'qrolic' ),
		'add_new'               => __( 'Add New Case Studies', 'qrolic' ),
		'new_item'              => __( 'New Case Studies', 'qrolic' ),
		'edit_item'             => __( 'Edit Case Studies', 'qrolic' ),
		'update_item'           => __( 'Update Case Studies', 'qrolic' ),
		'view_item'             => __( 'View Case Studies', 'qrolic' ),
		'view_items'            => __( 'View Case Studies', 'qrolic' ),
		'search_items'          => __( 'Search Case Studies', 'qrolic' ),
		'not_found'             => __( 'Not found', 'qrolic' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'qrolic' ),
		'featured_image'        => __( 'Featured Image', 'qrolic' ),
		'set_featured_image'    => __( 'Set featured image', 'qrolic' ),
		'remove_featured_image' => __( 'Remove featured image', 'qrolic' ),
		'use_featured_image'    => __( 'Use as featured image', 'qrolic' ),
		'insert_into_item'      => __( 'Insert into Case Studies', 'qrolic' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Case Studies', 'qrolic' ),
		'items_list'            => __( 'Case Studies list', 'qrolic' ),
		'items_list_navigation' => __( 'Case Studies list navigation', 'qrolic' ),
		'filter_items_list'     => __( 'Filter Case Studies list', 'qrolic' ),
	);
	$rewrite = array(
		'slug'         => 'case-studies',
		'with_front'   => true,
		'hierarchical' => false,
	);

	// Set other options for Custom Post Type.
	$args = array(
		'label'               => __( 'Case Studies' ),
		'description'         => __( 'Case Studies and Reviews' ),
		'labels'              => $labels,
		// Features this CPT supports in Post Editor.
		'supports'            => array( 'title', 'editor', 'excerpt', 'post-formats', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', 'trackbacks' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'menu_position'       => 5,
		'can_export'          => true,
		'has_archive'         => 'case-studies',
		'show_in_rest'        => true,
		'taxonomies'          => array(),
		'show_in_menu'        => true,
		'menu_icon'           => 'dashicons-media-spreadsheet',
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
	register_post_type( 'case-studies', $args );
	add_theme_support( 'post-thumbnails' );
}
add_action( 'init', 'qrolic_casestudies_custom_post_type', 1 );
