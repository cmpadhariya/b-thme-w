<?php
/**
 * This code creates a Testimonial custom post type and its category for a Testimonial single page.
 */
function qrolic_testimonial_custom_post_type() {
	// Set UI labels for Custom Post Type.
	$labels = array(
		'name'                  => _x( 'Testimonial', 'qrolic' ),
		'singular_name'         => _x( 'Testimonial', 'qrolic' ),
		'menu_name'             => __( 'Testimonial' ),
		'name_admin_bar'        => __( 'Testimonial', 'qrolic' ),
		'archives'              => __( 'Testimonial Archives', 'qrolic' ),
		'attributes'            => __( 'Testimonial Attributes', 'qrolic' ),
		'parent_item_colon'     => __( 'Parent Testimonial:', 'qrolic' ),
		'all_items'             => __( 'All Testimonial', 'qrolic' ),
		'add_new_item'          => __( 'Add New Testimonial', 'qrolic' ),
		'add_new'               => __( 'Add New Testimonial', 'qrolic' ),
		'new_item'              => __( 'New Testimonial', 'qrolic' ),
		'edit_item'             => __( 'Edit Testimonial', 'qrolic' ),
		'update_item'           => __( 'Update Testimonial', 'qrolic' ),
		'view_item'             => __( 'View Testimonial', 'qrolic' ),
		'view_items'            => __( 'View Testimonial', 'qrolic' ),
		'search_items'          => __( 'Search Testimonial', 'qrolic' ),
		'not_found'             => __( 'Not found', 'qrolic' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'qrolic' ),
		'featured_image'        => __( 'Featured Image', 'qrolic' ),
		'set_featured_image'    => __( 'Set featured image', 'qrolic' ),
		'remove_featured_image' => __( 'Remove featured image', 'qrolic' ),
		'use_featured_image'    => __( 'Use as featured image', 'qrolic' ),
		'insert_into_item'      => __( 'Insert into Testimonial', 'qrolic' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Testimonial', 'qrolic' ),
		'items_list'            => __( 'Testimonial list', 'qrolic' ),
		'items_list_navigation' => __( 'Testimonial list navigation', 'qrolic' ),
		'filter_items_list'     => __( 'Filter Testimonial list', 'qrolic' ),
	);

	$rewrite = array(
		'slug'         => 'testimonial',
		'with_front'   => true,
		'hierarchical' => true,
	);

	// Set other options for Custom Post Type.
	$args = array(
		'label'               => __( 'Testimonial' ),
		'description'         => __( 'Testimonial and Reviews' ),
		'labels'              => $labels,
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
	register_post_type( 'testimonial', $args );
	add_theme_support( 'post-thumbnails' );
}
add_action( 'init', 'qrolic_testimonial_custom_post_type', 1 );
