<?php
/**
 * Plugin Name:       Category Portfolio
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       category-portfolio
 *
 * @package create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_category_portfolio_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'qrolic_category_portfolio',
		)
	);
}
add_action( 'init', 'create_block_category_portfolio_block_init' );

/**
 * Callback function to render the Related Portfolio Section content.
 */
/**
 * Callback function to render the Related Portfolio Section content.
 */
/**
 * Callback function to render the Related Portfolio Section content.
 */
function qrolic_category_portfolio($attributes) {
    // Retrieve attributes
    $numberOfItems = $attributes['numberOfItems'];

    // Query the list of categories
    $categories = get_terms(array(
        'taxonomy' => 'portfolio_category',
        'hide_empty' => true,
    ));

    $post_id = get_the_ID(); // Get the current post's ID
    $categories_current = get_the_category($post_id);
    $current_term = get_queried_object();

    ob_start();
    ?>
    <div class="category-portfolio">
        <div class="container p-0">
            <div class="row">
                <div class="category-portfolio-list">
                    <p>
                        <a href="<?php echo esc_url(get_post_type_archive_link('portfolio')); ?>" class="<?php echo (empty($current_term) || is_post_type_archive('portfolio')) ? 'category-active' : ''; ?>">
                            <?php _e('All', 'category-portfolio'); ?>
                        </a>
                        <?php foreach ($categories as $category) :
                            $term_link = get_term_link($category->term_id);
                            $category_active = '';

                            // Check if the current category is the active one
                            if ($current_term && is_a($current_term, 'WP_Term') && $current_term->term_id === $category->term_id) {
                                $category_active = 'category-active';
                            }

                            echo '<a href="' . esc_url($term_link) . '" class="' . $category_active . '">'
                                . esc_html($category->name) .
                                '</a>';
                        endforeach; ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <?php
    return ob_get_clean();
}
