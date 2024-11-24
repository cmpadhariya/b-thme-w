<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package qrolic
 * @since 1.0.0
 */
function qrolic_theme_setup() {
	// Add support for menus.
	add_theme_support( 'menus' );
	// Enable support for wide and full-aligned blocks.
	add_theme_support( 'align-wide' );
	// Enable support for responsive embedded content.
	add_theme_support( 'responsive-embeds' );
	// Enable support for custom line-height controls.
	add_theme_support( 'custom-line-height' );
	// Enable support for custom block styles.
	// add_theme_support( 'wp-block-styles' );
	// Enable support for custom editor styles.
	add_theme_support( 'editor-styles' );
	// Enable support for wide images in the editor.
	add_theme_support( 'align-wide' );
	// Enable support for post-thumbnails (featured images).
	add_theme_support( 'post-thumbnails' );
	// Enable support for HTML5 features.
	add_theme_support(
		'html5',
		array(
			'comment-list',
			'comment-form',
			'search-form',
			'gallery',
			'caption',
		)
	);
	// Enable support for post formats (example: aside, gallery, video, audio, etc.
	add_theme_support(
		'post-formats',
		array(
			'aside',
			'gallery',
			'video',
			'audio',
		)
	);
	// editor styles add.
	add_editor_style( 'editor-style.css' );
}
add_action( 'after_setup_theme', 'qrolic_theme_setup' );

add_action(
	'wp_head',
	function () {
		?>
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link rel="dns-prefetch" href="https://fonts.gstatic.com">
		<link rel="preload" href="<?php echo get_template_directory_uri() . '/dist/fonts/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2'; ?>" as="font" type="font/woff2" crossorigin="anonymous">
		<?php
	},
	10
);
function modify_image_block_output( $block_content, $block ) {
	if ( 'core/site-logo' === $block['blockName'] ) {
		if ( strpos( $block_content, 'width' ) === false ) {
			if ( isset( $block['attrs']['className'] ) && strpos( $block['attrs']['className'], 'header__inner_logo' ) !== false ) {
				$width         = $block['attrs']['width'] ?? 150;
				$height        = $block['attrs']['height'] ?? 40;
				$block_content = str_replace( ' src=', " width={$width} height={$height} src=", $block_content );
			} else {
				$width         = $block['attrs']['width'] ?? 120;
				$height        = $block['attrs']['height'] ?? 32;
				$block_content = str_replace( ' src=', " width={$width} height={$height} src=", $block_content );
			}
		}
	}

	if ( 'core/image' === $block['blockName'] || 'core/video' === $block['blockName'] ) {
		$block_content = str_replace( ' src=', ' loading="lazy" data-src=', $block_content );
	}

	return $block_content;
}
add_filter( 'render_block', 'modify_image_block_output', 10, 2 );

function minify_html( $html ) {
	// Remove comments
    $html = preg_replace( '/<!--(?!<!)[^\[>].*?-->/', '', $html );
    // Remove whitespace
    $html = preg_replace( '/>\s+</', '><', $html );
    $html = preg_replace( '/\s+\/>/', '/>', $html );
    $html = preg_replace( '/\s*([{}])\s*/', '$1', $html );
    $html = preg_replace( '/\s*([=])\s*/', '$1', $html );
    $html = preg_replace( '/\s+/', ' ', $html );
    return $html;
}

function output_minified_html() {
	// Start output buffering
	ob_start( 'minify_html' );
}

if ( ! is_admin() ) {
	add_action( 'template_redirect', 'output_minified_html', 0 );
}

function optimize_database() {
	$files = glob( get_template_directory() . '/assets/css/page/*' );
	foreach ( $files as $file ) {
		if ( is_file( $file ) ) {
			unlink( $file );
		}
	}

	global $wpdb;

	$tables = $wpdb->get_col( 'SHOW TABLES' );
	foreach ( $tables as $table ) {
		$wpdb->query( $wpdb->prepare( "OPTIMIZE TABLE {$table}" ) );
	}
}
add_action( 'wp_scheduled_delete', 'optimize_database' );

remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
add_filter( 'emoji_svg_url', '__return_false' );
/**
 * Import all custom blocks here.
 */
require_once 'inc/blocks/call-to-action-section/call-to-action-section.php';
require_once 'inc/blocks/career-related-posts/career-related-posts.php';
require_once 'inc/blocks/apply-now-heading/apply-now-heading.php';
require_once 'inc/blocks/zigzag-section/zigzag-section.php';
require_once 'inc/blocks/images-slider/images-slider.php';
require_once 'inc/blocks/services-headings/services-headings.php';
require_once 'inc/blocks/apply-now-heading/apply-now-heading.php';
require_once 'inc/blocks/related-post/related-post.php';
require_once 'inc/blocks/map-section/map-section.php';
require_once 'inc/blocks/what-drivesus/what-drivesus.php';
require_once 'inc/blocks/contact-info/contact-info.php';
require_once 'inc/blocks/single-service-section/single-service-section.php';
require_once 'inc/blocks/contact-info/contact-info.php';
require_once 'inc/blocks/faq-section/faq-section.php';
require_once 'inc/blocks/testimonials/testimonials.php';
require_once 'inc/blocks/career-list/career-list.php';
require_once 'inc/blocks/related-portfolio-section/related-portfolio-section.php';
require_once 'inc/blocks/single-service-block/single-service-block.php';
require_once 'inc/blocks/casestudies-related-posts/casestudies-related-posts.php';
require_once 'inc/blocks/services-list/services-list.php';
require_once 'inc/blocks/services-section-home/services-section-home.php';
require_once 'inc/blocks/internship-types/internship-types.php';
require_once 'inc/blocks/career-benefits/career-benefits.php';
require_once 'inc/blocks/home-hero-section/home-hero-section.php';
require_once 'inc/blocks/category-portfolio/category-portfolio.php';
require_once 'inc/blocks/single-case-study/single-case-study.php';
require_once 'inc/blocks/single-testimonial/single-testimonial.php';
require_once 'inc/blocks/blog-social-buttons/blog-social-buttons.php';
require_once 'inc/blocks/our-process-section/our-process-section.php';
require_once 'inc/blocks/services-hero-section/services-hero-section.php';
require_once 'inc/blocks/timeline-section/timeline-section.php';
require_once 'inc/blocks/partner-hero-section/partner-hero-section.php';
require_once 'inc/blocks/we-contributing-section/we-contributing-section.php';
require_once 'inc/blocks/maintenance-package-block/maintenance-package-block.php';
require_once 'inc/blocks/subscribe-now-section/subscribe-now-section.php';
require_once 'inc/blocks/icon-text-section/icon-text-section.php';
require_once 'inc/blocks/top-bar-section/top-bar-section.php';
require_once 'inc/blocks/follow-us/follow-us.php';
require_once 'inc/blocks/related-blog-post/related-blog-post.php';
require_once 'inc/blocks/latest-blog-posts/latest-blog-posts.php';
// require_once 'inc/blocks/blog-categories/blog-categories.php';
require_once 'inc/blocks/other-zigzag-section/other-zigzag-section.php';


/**
 * V2 Blocks
 * Import all custom blocks here.
 */
require_once 'inc/blocks/subscribe-section-v2/subscribe-section-v2.php';
require_once 'inc/blocks/mission-vission-v2/mission-vission-v2.php';
require_once 'inc/blocks/problems-section-v2/problems-section-v2.php';
require_once 'inc/blocks/subscribe-section-v2/subscribe-section-v2.php';
require_once 'inc/blocks/our-expertise-v2/our-expertise-v2.php';
require_once 'inc/blocks/call-to-action-v2/call-to-action-v2.php';
require_once 'inc/blocks/single-testimonials-section-v2/single-testimonials-section-v2.php';
require_once 'inc/blocks/testimonials-v2/testimonials-v2.php';
require_once 'inc/blocks/our-solution-section-v2/our-solution-section-v2.php';
require_once 'inc/blocks/hero-section-v2/hero-section-v2.php';
require_once 'inc/blocks/footer-icon-section-v2/footer-icon-section-v2.php';
require_once 'inc/blocks/our-journey-v2/our-journey-v2.php';
require_once 'inc/blocks/giving-back-community-v2/giving-back-community-v2.php';
require_once 'inc/blocks/our-review-section-v2/our-review-section-v2.php';
require_once 'inc/blocks/page-banner-v2/page-banner-v2.php';
require_once 'inc/blocks/image-slider-section-v2/image-slider-section-v2.php';
require_once 'inc/blocks/our-team-v2/our-team-v2.php';
require_once 'inc/blocks/our-wordpress-services-v2/our-wordpress-services-v2.php';
require_once 'inc/blocks/our-partner-v2/our-partner-v2.php';
require_once 'inc/blocks/position-hero-section-v2/position-hero-section-v2.php';
require_once 'inc/blocks/contact-us-v2/contact-us-v2.php';
require_once 'inc/blocks/careers-activities-v2/careers-activities-v2.php';
require_once 'inc/blocks/careers-advantage-v2/careers-advantage-v2.php';
require_once 'inc/blocks/careers-benefits-v2/careers-benefits-v2.php';
require_once 'inc/blocks/careers-images-slider-v2/careers-images-slider-v2.php';
require_once 'inc/blocks/career-testimonials-section-v2/career-testimonials-section-v2.php';
require_once 'inc/blocks/single-testimonial-image-v2/single-testimonial-image-v2.php';
require_once 'inc/blocks/we-are-hiring-v2/we-are-hiring-v2.php';
require_once 'inc/blocks/career-testimonial-editable-v2/career-testimonial-editable-v2.php';
require_once 'inc/blocks/single-testimonials-image-editable-v2/single-testimonials-image-editable-v2.php';
require_once 'inc/blocks/carrers-single-sidebar-v2/carrers-single-sidebar-v2.php';
require_once 'inc/blocks/blog-recommended-articles-v2/blog-recommended-articles-v2.php';
require_once 'inc/blocks/single-service-section-v2/single-service-section-v2.php';
require_once 'inc/blocks/services-benefits-section-v2/services-benefits-section-v2.php';
require_once 'inc/blocks/our-process-section-v2/our-process-section-v2.php';
require_once 'inc/blocks/blog-categories-v2/blog-categories-v2.php';
require_once 'inc/blocks/why-choose-section-v2/why-choose-section-v2.php';
require_once 'inc/blocks/our-expert-solution-v2/our-expert-solution-v2.php';
require_once 'inc/blocks/testimonial-image-editable-v2/testimonial-image-editable-v2.php';
require_once 'inc/blocks/casestudy-related-section-v2/casestudy-related-section-v2.php';
require_once 'inc/blocks/call-to-action-sidebar-section-v2/call-to-action-sidebar-section-v2.php';
require_once 'inc/blocks/blog-social-media-v2/blog-social-media-v2.php';
require_once 'inc/blocks/testimonial-editable-v2/testimonial-editable-v2.php';
require_once 'inc/blocks/why-choose-qrolic-v2/why-choose-qrolic-v2.php';
require_once 'inc/blocks/why-qrolic-hero-section-v2/why-qrolic-hero-section-v2.php';
require_once 'inc/blocks/why-qrolic-partner-satisfaction-v2/why-qrolic-partner-satisfaction-v2.php';
require_once 'inc/blocks/why-qrolic-services-v2/why-qrolic-services-v2.php';
require_once 'inc/blocks/why-qrolic-benefits-v2/why-qrolic-benefits-v2.php';
require_once 'inc/blocks/why-qrolic-testimonial-v2/why-qrolic-testimonial-v2.php';

/**
 * This import file in enqueue file for include inside this file add enqueue function for site.
 */
require_once 'inc/enqueue.php';

/**
 * This import file in enqueue file for include inside this file add nav function for site.
 */
require_once 'inc/nav.php';

/**
 * Import all block pattern register category.
 */
require_once 'inc/patterns.php';

/**
 * Import all block pattern here.
 */
require_once 'pattern/page-headers.php';
require_once 'pattern/apply-now-form.php';
require_once 'pattern/single-service-section.php';
require_once 'pattern/what-drivesus.php';
require_once 'pattern/project-details.php';
require_once 'pattern/faq-section.php';
require_once 'pattern/single-heading.php';
require_once 'pattern/archive-heading.php';
require_once 'pattern/case-studies-single.php';
require_once 'pattern/services-list.php';
require_once 'pattern/portfolio-archive-post.php';
require_once 'pattern/case-studies-archive.php';
require_once 'pattern/case-studies-list-home.php';
require_once 'pattern/internship-headings.php';
require_once 'pattern/internship-types.php';
require_once 'pattern/internship-benefits.php';
require_once 'pattern/internship-qualification.php';
require_once 'pattern/career-benefits.php';
require_once 'pattern/services-single-page.php';
require_once 'pattern/floating-button.php';
require_once 'pattern/mission-vision-section.php';
require_once 'pattern/timeline-section.php';
require_once 'pattern/maintenance-package.php';
require_once 'pattern/categories-heading.php';
require_once 'pattern/case-studies-excerpt.php';
require_once 'pattern/career-post-content.php';
require_once 'pattern/author-details.php';
require_once 'pattern/author-post.php';
require_once 'pattern/rank-math-faq.php';
require_once 'pattern/subscribe-form-sidebar.php';
require_once 'pattern/single-plugins-page.php';

/**
 * V2 Patterns.
 * Import all block pattern here.
 */
require_once 'pattern/why-choose-home-v2.php';
require_once 'pattern/casestudy-home-v2.php';
require_once 'pattern/logos-section-v2.php';
require_once 'pattern/common-button-pattern-v2.php';
require_once 'pattern/problems-section-v2.php';
require_once 'pattern/page-header-section-v2.php';
require_once 'pattern/our-solution-pattern-v2.php';
require_once 'pattern/careers-logo-v2.php';
require_once 'pattern/careers-faq-v2.php';
require_once 'pattern/blog-list-section-v2.php';
require_once 'pattern/casestudy-list-section-v2.php';
require_once 'pattern/careers-single-banner-v2.php';
require_once 'pattern/career-form-v2.php';
require_once 'pattern/careers-single-post-content-v2.php';
require_once 'pattern/services-faq-v2.php';
require_once 'pattern/blog-social-media-v2.php';
require_once 'pattern/blog-single-content-v2.php';
require_once 'pattern/schedule-for-call-v2.php';
require_once 'pattern/single-casestudy-problem-v2.php';
require_once 'pattern/single-casestudy-problem-solve-v2.php';
require_once 'pattern/single-casestudy-solution-v2.php';
require_once 'pattern/author-details-section-v2.php';
require_once 'pattern/single-casestudy-project-details-v2.php';
require_once 'pattern/single-casestudy-conclusion-v2.php';
require_once 'pattern/single-casestudy-result-v2.php';
require_once 'pattern/single-casestudy-banner-v2.php';
require_once 'pattern/single-blog-author-details-v2.php';
require_once 'pattern/author-post-v2.php';
require_once 'pattern/table-of-content-v2.php';
require_once 'pattern/qt-breadcrumbs-v2.php';
require_once 'pattern/blog-single-banner-v2.php';
require_once 'pattern/why-choose-wordpress-agency-v2.php';
require_once 'pattern/why-qrolic-benefits-v2.php';
require_once 'pattern/why-qrolic-testimonial-v2.php';
require_once 'pattern/services-submenu-v2.php';

/**
 * This import file in enqueue file for include inside this file add block function for site.
 */
require_once 'inc/block.php';
/**
 * This file imports all the custom post type.
 */
require_once 'inc/cpt/career.php';
require_once 'inc/cpt/portfolio.php';
require_once 'inc/cpt/services.php';
require_once 'inc/cpt/testimonial.php';
require_once 'inc/cpt/case-studies.php';
require_once 'inc/cpt/blog.php';
require_once 'inc/cpt/plugins.php';
require_once 'inc/cpt/team.php';
/**
 * Generate breadcrumbs & Generate Portfolio category list
 */
require_once 'inc/template-functions.php';


