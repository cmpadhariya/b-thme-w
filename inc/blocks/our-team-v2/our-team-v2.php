<?php
/**
 * Plugin Name:       Our Team V2
 * Description:       This section shows data from our successful team at qrolic technologies. It includes the team member's name, photo and the position the team member works in the company.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       our-team-v2
 *
 * @package CreateBlock
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

/**
 * Render callback for the block.
 */
function qrolic_team_v2_render_my_custom_block( $attributes ) {
	$title           = isset( $attributes['title'] ) ? esc_html( $attributes['title'] ) : '';
	$subtitle        = isset( $attributes['subtitle'] ) ? esc_html( $attributes['subtitle'] ) : '';
	$description     = isset( $attributes['description'] ) ? esc_html( $attributes['description'] ) : '';
	$button_text     = isset( $attributes['buttonText'] ) ? esc_html( $attributes['buttonText'] ) : '';
	$button_url      = isset( $attributes['buttonURL'] ) ? esc_url( $attributes['buttonURL'] ) : '';
	$number_of_items = isset( $attributes['numberOfItems'] ) ? absint( $attributes['numberOfItems'] ) : 3;

	$args = array(
		'post_type'      => 'teams',
		'posts_per_page' => $number_of_items,
		'fields'         => 'ids',
	);

	$team_posts = get_posts( $args );
	ob_start();
	?>

	<section class="our-team section-padding section-bg">
		<div class="our-team__heading">
			<div class="container p-0">
				<div class="our-team__heading_inner">
					<div class="row justify-content-center">
						<div class="col-xl-8 col-lg-9">
							<div class="our-team__heading_inner--text">
								<div class="our-team__heading_inner--text-subheading">
									<p class="description-secondary qt-subtitle-gray"><?php echo esc_html( $subtitle ); ?></p>
								</div>
								<div class="our-team__heading_inner--text-title">
									<h2><?php echo esc_html( $title ); ?></h2>
								</div>
								<div class="our-team__heading_inner--text-description">
									<p class="description-primary"><?php echo esc_html( $description ); ?></p>
								</div>
								<div class="our-team__heading_inner--text-btn">
									<a href="<?php echo esc_url( $button_url ); ?>" class="btn1" target="_self" rel="noopener noreferrer"><?php echo esc_html( $button_text ); ?></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="our-team__post">
			<div class="container p-0">
				<div class="our-team__post_inner">
					<div class="row">
					<?php
					if ( ! empty( $team_posts ) ) :
						usort(
							$team_posts,
							function ( $a, $b ) {
								$order_a = get_post_meta( $a, 'team_order', true );
								$order_b = get_post_meta( $b, 'team_order', true );

								// Convert to integer for numeric comparison.
								$order_a = $order_a !== '' ? intval( $order_a ) : PHP_INT_MAX;
								$order_b = $order_b !== '' ? intval( $order_b ) : PHP_INT_MAX;

								return $order_a - $order_b;
							}
						);

						foreach ( $team_posts as $post_id ) :
							$team_position = get_post_meta( $post_id, 'team_position', true );
							?>
							<div class="col-lg-3 col-md-4 col-sm-6 col-6 our-team__custom-col">
								<div class="our-team__post_inner--content">
									<div class="our-team__post_inner--content-img">
										<?php if ( has_post_thumbnail( $post_id ) ) : ?>
											<img class="team-post-image"
												src="<?php echo esc_url( get_the_post_thumbnail_url( $post_id ) ); ?>"
												alt="<?php echo esc_attr( get_the_title( $post_id ) ); ?>"
												height="343"
												width="242"
												loading="lazy"
											/>	
										<?php endif; ?>
										<div class="our-team__post_inner--content-img-text">
											<h3><?php echo get_the_title( $post_id ); ?></h3>
											<?php if ( $team_position ) : ?>
												<p class="team-position"><?php echo esc_html( $team_position ); ?></p>
											<?php endif; ?>
										</div>
									</div>
								</div>
							</div>
							<?php
						endforeach;
						wp_reset_postdata();
					else :
						?>
						<div class="col-lg-12">
							<p><?php _e( 'No team members found.', 'our-team-v2' ); ?></p>
						</div>
						<?php
					endif;
					?>
					</div>
				</div>
			</div>
		</div>
	</section>

	<?php
	return ob_get_clean();
}

/**
 * Registers the block.
 */
function create_block_our_team_v2_block_init() {
	register_block_type(
		( __DIR__ . '/build' ), // Adjust block name as per your actual implementation
		array(
			'render_callback' => 'qrolic_team_v2_render_my_custom_block',
		)
	);
}
add_action( 'init', 'create_block_our_team_v2_block_init' );


