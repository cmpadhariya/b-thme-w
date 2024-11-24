<?php

/**
 * This file is display all enqueue function in site.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Frontend side script and style enqueue.
 */
function qrolic_frontend_theme_scripts() {
	wp_enqueue_style( 'global-v2', get_template_directory_uri() . '/dist/assets/css/core/global-v2.bundle.css', array(), '1.5.0', 'all' );

	wp_enqueue_style( 'v2-style', get_template_directory_uri() . '/dist/assets/css/main-v2.bundle.css', array( 'global-v2' ), '1.5.0', 'all' );
	if ( is_single() && 'blog' === get_post_type() || is_post_type_archive( 'blog' ) || is_tax( 'blog-category' ) ) {
		wp_dequeue_style( 'v2-style' );
		wp_enqueue_style( 'blog-style', get_template_directory_uri() . '/dist/assets/css/blog-style-v2.bundle.css', array(), '1.5.0', 'all' );
	}

	wp_enqueue_style( 'font-icon', get_template_directory_uri() . '/dist/assets/fonts/fontello/css/fontello.bundle.css', array(), '1.5.0', 'all' );
	// wp_enqueue_style( 'bootstrap-css', get_template_directory_uri() . '/assets/css/bootstrap-grid.min.css', array(), 'all' );
	// wp_enqueue_style( 'splide-slider-css', get_template_directory_uri() . '/assets/css/library/splide.min.css', array(), 'all' );
	// wp_enqueue_script( 'splide-slide-js', get_template_directory_uri() . '/dist/assets/js/splide.min.js', array( 'jquery' ), 1.1, true );
	wp_enqueue_script( 'runtime-bundle', get_template_directory_uri() . '/dist/runtime.bundle.js', array(), 1.3, true );
	$dep = array(
		'runtime-bundle'
	);

	if ( is_plugin_active( 'malina/malina.php' ) || is_admin_bar_showing() ) {
		$dep[] = 'jquery';
	}

	wp_enqueue_script( 'script', get_template_directory_uri() . '/dist/assets/js/script.bundle.js', $dep, 1.3, true );
	if ( is_single() && 'post' === get_post_type() ) {
		wp_enqueue_script( 'blog-single', get_template_directory_uri() . '/dist/assets/js/blog-single.bundle.js', $dep, 1.3, true );
	}
		wp_enqueue_style( 'iconsmind-icon', get_template_directory_uri() . '/dist/assets/css/library/iconsmind.bundle.css', array(), '1.5.0', 'all' );
}
add_action( 'wp_enqueue_scripts', 'qrolic_frontend_theme_scripts' );

/**
 * Frontend side script and style dequeue for AMP pages.
 */
function qrolic_dequeue_scripts_on_amp_pages() {
	// Check if the current page is an AMP page.
	if ( function_exists( 'is_amp_endpoint' ) && is_amp_endpoint() ) {

		// wp_dequeue_script( 'splide-slide-js', get_template_directory_uri() . '/dist/assets/js/splide.min.js', array( 'jquery' ), 1.1, true );
		wp_dequeue_script( 'script', get_template_directory_uri() . '/dist/assets/js/script.bundle.js', array( 'jquery' ), 1.3, true );
		wp_dequeue_script( 'blog-single', get_template_directory_uri() . '/dist/assets/js/blog-single.bundle.js', array( 'jquery' ), 1.3, true );
	}
}
add_action( 'wp_enqueue_scripts', 'qrolic_dequeue_scripts_on_amp_pages', 999 );

/**
 * Backend side css files
 * This function use for add site multiple backend enqueue file
 */
function qrolic_editor_style_setup() {
	// Enqueue styles for the block editor.
	wp_enqueue_style( 'qrolic-admin-style-v2', get_template_directory_uri() . '/assets/css/admin/admin-v2.css', array(), '1.0' );

	// Enqueue script for the block editor.
	wp_enqueue_script( 'qrolic-admin-script', get_template_directory_uri() . '/dist/assets/js/script.bundle.js', array( 'jquery' ), '1.3', true );
	if ( is_single() && 'post' == get_post_type() ) {
		wp_enqueue_script( 'qrolic-admin-blog-single', get_template_directory_uri() . '/dist/assets/js/blog-single.bundle.js', array( 'jquery' ), '1.3', true );
	}
}

// Hook into the admin enqueue scripts action.
add_action( 'enqueue_block_editor_assets', 'qrolic_editor_style_setup', 50 );


/**
 * Backend side css files
 * This function use for add site multiple backend enqueue file
 */
function qrolic_backend_editor_style() {
	add_theme_support( 'editor-style' );
	add_editor_style( 'dist/assets/css/core/global-v2.bundle.css' );
	add_editor_style( 'assets/css/admin/admin-v2.css' );
	// add_editor_style( 'assets/css/admin/admin.css' );
	add_editor_style( 'assets/css/bootstrap-grid.min.css' );
	add_editor_style( '/assets/fonts/fontello/css/fontello.css' );
}
add_action( 'after_setup_theme', 'qrolic_backend_editor_style' );

// set needed page only show page js file.
function qrolic_page_remove_contact_form_7_scripts() {
	if ( ! is_page( array( 'contact-us', 'apply-now' ) ) ) {
		// Dequeue Contact Form 7 JavaScript.
		wp_dequeue_script( 'contact-form-7' );

		if ( ! is_front_page() ) {
			wp_dequeue_script( 'google-recaptcha' );

			wp_dequeue_script( 'wpcf7-recaptcha' );
		}

		// Dequeue WP polyfill scripts.
		// wp_dequeue_script( 'wpcf7-recaptcha' );
		// wp_dequeue_script( 'wpcf7-recaptcha-3' );
		wp_dequeue_script( 'wpcf7-recaptcha-2' );

		// Dequeue Contact Form 7 styles.
		wp_dequeue_style( 'contact-form-7' );

		// Dequeue Contact Form 7 reCAPTCHA styles (if used).
		wp_dequeue_style( 'wpcf7-recaptcha' );

		// Dequeue Contact Form 7 reCAPTCHA v3 styles (if used).
		wp_dequeue_style( 'wpcf7-recaptcha-3' );
		wp_dequeue_style( 'wpcf7-recaptcha-2' );
	}
}

add_action( 'wp_enqueue_scripts', 'qrolic_page_remove_contact_form_7_scripts', 20 );

function add_defer_attribute_to_script( $tag, $handle ) {
	$script_to_defer = array(
		'autoptimize-toolbar',
		'jquery-core',
		'jquery-migrate',
		'wp-polyfill-inert',
		'regenerator-runtime',
		'wp-polyfill',
		'runtime-bundle',
		'script',
		'rank-math',
		'sib-front-js',
	);

	if ( ! is_admin() ) {
		if ( in_array( $handle, $script_to_defer, true ) ) {
			$tag = str_replace( ' src', ' defer src', $tag );
		}
	}

	return $tag;
}

add_filter( 'script_loader_tag', 'add_defer_attribute_to_script', 10, 2 );

function add_defer_attribute_to_style( $tag, $handle ) {
	$styles_to_defer = array(
		'wp-block-navigation',
		'wp-block-image',
		'wp-block-library',
		'wp-block-button',
		'combined-block-styles',
		'global-v2',
		'font-icon',
		'iconsmind-icon',
	);

	if ( ! is_admin() ) {
		if ( in_array( $handle, $styles_to_defer, true ) || str_starts_with( $handle, 'create-block-' ) ) {
			$tag = str_replace( 'rel=\'stylesheet\'', 'rel=\'preload\' as=\'style\' onload="this.onload=null;this.rel=\'stylesheet\'"', $tag );
		}
	}

	return $tag;
}

add_filter( 'style_loader_tag', 'add_defer_attribute_to_style', 10, 2 );

function remove_css_js_version( $src ) {
	if ( strpos( $src, '?ver=' ) ) {
		$src = remove_query_arg( 'ver', $src );
	} elseif ( strpos( $src, '?v=' ) ) {
		$src = remove_query_arg( 'v', $src );
	}
	return $src;
}
// add_filter( 'style_loader_src', 'remove_css_js_version', 10, 2 );
// add_filter( 'script_loader_src', 'remove_css_js_version', 10, 2 );

function combine_block_styles() {
	global $wp_styles;

	if ( is_user_logged_in() ) {
		return;
	}

	if ( defined( 'WP_ENV' ) && WP_ENV === 'production' ) {
		return;
	}

	// Get the current page ID
	$page_id = get_the_ID();
	if ( ! $page_id ) {
		return; // No page ID, exit early
	}

	$css_files    = array();
	$combined_css = '';
	$file_mtimes  = array();

	// Check if there are any enqueued styles
	if ( ! empty( $wp_styles->queue ) ) {
		foreach ( $wp_styles->queue as $handle ) {
			// Get the style object
			$style = $wp_styles->registered[ $handle ];

			// Check if the style object exists, has a source, and is a block style
			if ( isset( $style->src ) && str_starts_with( $handle, 'create-block-' ) ) {
				$css_files[] = $style->src;

				// Store the file modification time
				$file_path = str_replace( home_url( '/' ), ABSPATH, $style->src );
				if ( file_exists( $file_path ) ) {
					$file_mtimes[ $file_path ] = filemtime( $file_path );
				}

				// Deregister the individual style
				wp_deregister_style( $handle );
			}
		}

		$directory         = get_template_directory() . '/assets/css/page/';
		$combined_css_path = $directory . 'combined-styles-' . $page_id . '.css';
		$combined_mtime    = file_exists( $combined_css_path ) ? filemtime( $combined_css_path ) : 0;

		if ( ! file_exists( $directory ) ) {
			wp_mkdir_p( $directory );
		}
		chmod( $directory, 0755 );

		// Check if any CSS files have been modified
		$should_update = false;
		foreach ( $file_mtimes as $file_path => $mtime ) {
			if ( $mtime > $combined_mtime ) {
				$should_update = true;
				break;
			}
		}

		if ( ! $should_update ) {
			wp_enqueue_style( 'combined-block-styles', get_template_directory_uri() . '/assets/css/page/combined-styles-' . $page_id . '.css', array(), null );
			return;
		}

		// Combine CSS files
		foreach ( $css_files as $file_url ) {
			$file_path = str_replace( home_url( '/' ), ABSPATH, $file_url ); // Convert URL to file path
			if ( file_exists( $file_path ) ) {
				$combined_css .= file_get_contents( $file_path );
			}
		}

		// Path to the combined CSS file
		$combined_css_path = get_template_directory() . '/assets/css/page/combined-styles-' . $page_id . '.css';

		if ( ! empty( $combined_css ) ) {
			file_put_contents( $combined_css_path, $combined_css );
		}

		// Enqueue the combined CSS file
		wp_enqueue_style( 'combined-block-styles', get_template_directory_uri() . '/assets/css/page/combined-styles-' . $page_id . '.css', array(), false );
	} else {
		error_log( 'No block styles are enqueued.' );
	}
}

// add_action( 'wp_enqueue_scripts', 'combine_block_styles', PHP_INT_MAX );

function delete_combined_css_on_save( $post_id ) {
	// Check if it's a revision or autosave
	if ( wp_is_post_revision( $post_id ) || wp_is_post_autosave( $post_id ) ) {
		return;
	}

	// Path to the combined CSS file
	$directory         = get_template_directory() . '/assets/css/page/';
	$combined_css_path = $directory . 'combined-styles-' . $post_id . '.css';

	// Check if the file exists and delete it
	if ( file_exists( $combined_css_path ) ) {
		unlink( $combined_css_path );
	}
}
add_action( 'save_post', 'delete_combined_css_on_save' );
