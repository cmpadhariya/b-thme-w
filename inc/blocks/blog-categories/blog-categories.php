<?php
/**
 * Plugin Name:       Blog Categories
 * Description:       This block displays qrolic's blog category list which is shown on the blog archive page.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blog-categories
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function qrolic_blog_categories( $attributes ) {

	// Query the list of categories
	$categories = get_terms(
		array(
			'taxonomy'   => 'blog-category',
			'hide_empty' => true,
		)
	);

	$selectedCategoryIds = $attributes['selectedCategories'] ?? array();

	$current_term = get_queried_object();

	ob_start();
	?>
	<div class="blog-categories">
		<div class="container p-0">
			<div class="row">
				<div class="blog-categories__list">
					<ul>
						<li><a href="<?php echo esc_url( get_post_type_archive_link( 'blog' ) ); ?>" class="<?php echo ( empty( $current_term ) || is_post_type_archive( 'blog' ) ) ? 'active-categories' : ''; ?>">
						   <?php _e( 'All', 'category-blog' ); ?>
						</a></li>
					<?php
						// Iterate through selected category IDs and retrieve corresponding terms
					foreach ( $selectedCategoryIds as $selectedCategory ) {
						// Extract the term ID
						$categoryId      = $selectedCategory['id'];
						$category_active = '';
						// Retrieve the term object using the term ID
						$category = get_term( $categoryId, 'blog-category' );
						if ( $current_term && is_a( $current_term, 'WP_Term' ) && $current_term->term_id === $category->term_id ) {
							$category_active = ' active-categories';
						}
						if ( $category ) {
							echo '<li><a href="' . esc_url( get_term_link( $category ) ) . '" class="' . $category_active . '">'
								. esc_html( $category->name ) .
								'</a></li>';
						} else {
							echo '<li>No term found for ID: ' . $categoryId . '</li>';
						}
					}
					?>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<?php
	return ob_get_clean();
}

function qrolic_blog_categories_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'qrolic_blog_categories',
		)
	);
}
add_action( 'init', 'qrolic_blog_categories_block_init' );
