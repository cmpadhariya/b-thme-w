<?php
/**
 * Plugin Name:       Single Testimonial
 * Description:       This block is a Single testimonial Section block, It's a simple section that highlights the testimonial.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       single-testimonial
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_single_testimonial_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'render_testimonial_single_block_content',
		)
	);
}
add_action( 'init', 'create_block_single_testimonial_block_init' );

function render_testimonial_single_block_content($attributes) {
    if (isset($attributes['selectedPostId']) && !empty($attributes['selectedPostId'])) {
        $selectedPostId = $attributes['selectedPostId'];

        $post = get_post($selectedPostId);

        if ($post) {
            $content = apply_filters('the_content', $post->post_content);
            $title = esc_html($post->post_title);
            $excerpt = esc_html($post->post_excerpt);

            ob_start();
            ?>
			<div class="testimonial_single section-padding">
				<div class="container p-0">
					<div class="testimonial_single_inner">
						<div class="testimonial_single_inner__heading">
							<?php echo $content; ?>
						</div>
						<div class="testimonial_single_inner__title">
							<p><?php echo $title; ?></p>
						</div>
						<div class="testimonial_single_inner__location">
							<p><?php echo $excerpt; ?></p>
						</div>
					</div>
				</div>
			</div>
			<?php
            return ob_get_clean();
        }
    }

    // Output a message if no post is selected
    return '<p>No testimonial selected.</p>';
}