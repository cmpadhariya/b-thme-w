<?php
/**
 * Plugin Name:       Casestudies Related Posts
 * Description:       This block is used to display the post related to the case study, which includes the title, description and post link.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       casestudies-related-posts
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
function casestudies_related_post( $attr ) {
	ob_start();
	$title = isset( $attr['Title'] ) ? esc_html( $attr['Title'] ) : '';
	global $post;
	$backup  = $post;
	$current = $post->ID; // current page ID.

	$thisPost = get_post_type(); // current custom post.
	$myposts  = get_posts(
		'numberposts=2&orderby=ID&post_type=' . $thisPost .
		'&exclude=' . $current
	);

	$check = count( $myposts );
	if ( $check > 1 ) { ?>
		<div class="casestudies-related-posts section-padding">
			<div class="container p-0">
					<?php echo '<h2>' . esc_html( $title ) . '</h2>'; ?>
					<div class="row">
						<?php
						foreach ( $myposts as $post ) :
							setup_postdata( $post );
							?>
							<div class="col-lg-6 col-md-6 col-12">
								<div class="casestudies-related-posts__inner">
									<div class="description">
										<h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
										<p><?php the_excerpt(); ?></p>
										<a href="<?php the_permalink(); ?>" class="readmore">Keep Reading</a>
									</div>
								</div>
							</div>
					
						<?php endforeach; ?>
					</div>
			</div>
		</div>
		<?php
	}

	// restore original post data
	wp_reset_postdata();
	return ob_get_clean();
}
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function related_posts() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'casestudies_related_post',
		)
	);
}
add_action( 'init', 'related_posts' );
