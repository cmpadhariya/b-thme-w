<?php
/**
 * Plugin Name:       Blog Categories V2
 * Description:       This block displays qrolic's blog category list which is shown on the blog archive and blog categories page.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blog-categories-v2
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Renders the block content.
 *
 * @param array $attributes Block attributes.
 * @return string Block HTML.
 */
function qrolic_blog_categories( $attributes ) {
	$categories_to_show = isset( $attributes['categoriesToShow'] ) ? intval( $attributes['categoriesToShow'] ) : 4;
	$button_text        = isset( $attributes['buttonText'] ) ? sanitize_text_field( $attributes['buttonText'] ) : '';
	$ordered_categories = isset( $attributes['orderedCategories'] ) ? array_map( 'intval', $attributes['orderedCategories'] ) : array();
	$blogpost_class     = isset( $attributes['blogpostClass'] ) ? esc_attr( $attributes['blogpostClass'] ) : '';

	$categories = get_terms(
		array(
			'taxonomy'   => 'blog-category',
			'hide_empty' => true,
			'include'    => $ordered_categories,
			'orderby'    => 'include',
			'order'      => 'ASC',
		)
	);

	$current_term = get_queried_object();

	ob_start();
	?>
	<div class="blogpost-categories <?php echo esc_attr( $blogpost_class ); ?>">
		<div class="container p-0">
			<div class="blogpost-categories__list">
				<ul>
                    <?php
                    $archive_link_active = ( empty( $current_term ) || is_post_type_archive( 'blog' ) ) ? 'active-categories' : '';
                    ?>
                    <li>
                        <a href="<?php echo esc_url( get_post_type_archive_link( 'blog' ) ); ?>" class="description-secondary <?php echo esc_attr( $archive_link_active ); ?>">
                            <?php _e( 'All', 'category-blog' ); ?>
                        </a>
                    </li>
                    <?php
					$categories_count = 0;
					foreach ( $categories as $category ) {
						$categories_count++;
						$category_active = '';
						$show_hide_class = ( $categories_count <= $categories_to_show ) ? '' : ' hidden-category';
						if ( $current_term && is_a( $current_term, 'WP_Term' ) && $current_term->term_id === $category->term_id ) {
							$category_active = ' active-categories';
						}
						echo '<li class="' . esc_attr( $show_hide_class ) . '"><a href="' . esc_url( get_term_link( $category ) ) . '" class="' . esc_attr( $category_active ) . ' description-secondary">'
							. esc_html( $category->name ) .
							'</a></li>';
					}
					?>
					<li>
						<button id="blog-category-show-btn" class="blog-category-show-btn button-general">
							<?php echo esc_html( $button_text ); ?>
						</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<?php
	return ob_get_clean();
}

/**
 * Registers the block type and associates the render callback.
 */
function qrolic_blog_categories_v2_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'qrolic_blog_categories',
		)
	);
}
add_action( 'init', 'qrolic_blog_categories_v2_block_init' );
