<?php
/**
 * Plugin Name:       Social Blog Media V2
 * Description:       This block is used to display social sharing buttons in a blog single page, including Facebook, Twitter and linkedin buttons that share the current blog post.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blog-social-media-v2
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Renders the social sharing buttons block.
 *
 * @param array $attributes Block attributes.
 * @return string Rendered HTML.
 */
function blog_social_buttons( $attributes ) {
	$heading  = isset( $attributes['heading'] ) ? esc_html( $attributes['heading'] ) : '';
	$boxwidth = isset( $attributes['boxwidth'] ) ? esc_html( $attributes['boxwidth'] ) : '';

	// Get the current URL.
	if ( isset( $_SERVER['HTTPS'] ) && 'on' === $_SERVER['HTTPS'] ) {
		$url = 'https://';
	} else {
		$url = 'http://';
	}
	$url .= $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

	ob_start();
	?>
	<div class="blog-social-media-block <?php echo esc_attr( $attributes['className'] ); ?>">
		<div class="container p-0">
			<div class="blog-social-media-block__inner" style="width: <?php echo esc_attr( $boxwidth ); ?>;">
				<div class="blog-social-media-block__inner_heading">
					<p class="description-secondary heading-color"><?php echo esc_html( $heading ); ?></p>
				</div>
				<div class="blog-social-media-block__inner_icon">
					<ul>
						<li>
							<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo esc_url( $url ); ?>" target="_blank">
								<i class="icon-facebook-v2"></i>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/share?url=<?php echo esc_url( $url ); ?>" target="_blank">
								<i class="icon-twitter-v2"></i>
							</a>
						</li>
						<li>
							<a href="https://linkedin.com/share?url=<?php echo esc_url( $url ); ?>" target="_blank">
								<i class="icon-linked-in"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<?php

	return ob_get_clean();
}

/**
 * Registers the Social Blog Media V2 block.
 */
function create_block_social_blog_media_v2_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'blog_social_buttons',
		)
	);
}
add_action( 'init', 'create_block_social_blog_media_v2_block_init' );
