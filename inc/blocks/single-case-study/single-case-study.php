<?php
/**
 * Plugin Name:       Single Case Study
 * Description:       This block is used to display a single case study post. In which the post is selected from the editor side and the data of that post is displayed.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       single-case-study
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
function create_block_single_case_study_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'render_casestudies_single_block_content',
		)
	);
}
add_action( 'init', 'create_block_single_case_study_block_init' );

function render_casestudies_single_block_content( $attributes ) {
	$linktext            = isset( $attributes['Linktext'] ) ? esc_html( $attributes['Linktext'] ) : '';
	$text_align          = isset( $attributes['textAlign'] ) ? esc_attr( $attributes['textAlign'] ) : 'left';
	$customexcerpt       = isset( $attributes['customExcerpt'] ) ? esc_html( $attributes['customExcerpt'] ) : '';
	$show_custom_excerpt = isset( $attributes['showCustomExcerpt'] ) ? esc_html( $attributes['showCustomExcerpt'] ) : '';

	if ( isset( $attributes['selectedPost'] ) && ! empty( $attributes['selectedPost'] ) ) {
		$selectedPost = $attributes['selectedPost'];

		$post = get_post( $selectedPost );

		if ( $post ) {
			$title   = esc_html( $post->post_title );
			$content = apply_filters( 'the_content', $post->post_content );
			$excerpt = esc_html( $post->post_excerpt ); // Get the post excerpt.

			// Apply text alignment style.
			$alignment_class = '';
			if ( 'center' === $text_align ) {
				$alignment_class = 'text-center';
			}

			ob_start();
			?>

			<div class="casestudy-single__inner_block <?php echo esc_attr( $alignment_class ); ?>">
				<h3><a href="<?php echo esc_url( get_permalink( $post ) ); ?>"><?php echo esc_html( $title ); ?></a></h3> <!-- Display the post excerpt -->
				<?php if ( $show_custom_excerpt ) : ?>
					<p><?php echo esc_html( $customexcerpt ); ?></p>
				<?php else : ?>
					<p><?php echo esc_html_e( $excerpt ); ?></p>
				<?php endif; ?>
				<a href="<?php echo esc_url( get_permalink( $post ) ); ?>"><?php echo esc_html( $linktext ); ?></a>
			</div>

			<?php
			return ob_get_clean();
		}
	}

	// Output a message if no post is selected.
	return '<p>No Case Study selected.</p>';
}
