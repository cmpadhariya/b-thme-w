<?php
/**
 * Plugin Name:       Single Testimonial Image V2
 * Description:       This block is a Single testimonial image block, It's a simple section that highlights the testimonial.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       single-testimonial-image-v2
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
function create_block_single_testimonial_image_v2_block_init() {
    register_block_type(
        __DIR__ . '/build',
        array(
            'render_callback' => 'render_block_single_testimonial_image_v2_content',
        )
    );
}
add_action( 'init', 'create_block_single_testimonial_image_v2_block_init' );

/**
 * Render callback for the Single Testimonial Image block.
 *
 * @param array $attributes Block attributes.
 * @return string Block content.
 */
function render_block_single_testimonial_image_v2_content( $attributes ) {
    $selected_post_id = isset( $attributes['selectedPostId'] ) ? intval( $attributes['selectedPostId'] ) : 0;
    $icon_class       = isset( $attributes['positionIcon'] ) ? sanitize_html_class( $attributes['positionIcon'] ) : '';

    if ( $selected_post_id ) {
        $post = get_post( $selected_post_id );

        if ( $post ) {
            $content         = apply_filters( 'the_content', $post->post_content );
            $title           = esc_html( $post->post_title );
            $excerpt         = esc_html( $post->post_excerpt );
            $client_position = get_post_meta( $selected_post_id, 'client_position', true );
            $client_quotes   = get_post_meta( $selected_post_id, 'client_quotes', true );
            $thumbnail       = get_the_post_thumbnail( $selected_post_id, 'full' ); // Retrieve the featured image.

            ob_start();
            ?>
            <div class="single-testimonial-image section-padding">
                <div class="container p-0">
                    <div class="single-testimonial-image__inner">
                        <div class="row">
                            <?php if ( $thumbnail ) : ?>
                                <div class="col-lg-3 col-md-4 col-12">
                                    <div class="single-testimonial-image__inner_thumbnail">
                                        <?php echo $thumbnail; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                                    </div>
                                </div>
                            <?php endif; ?>
                            <div class="col-lg-9 col-md-8 col-12 content-center">
                                <?php if ( $client_quotes ) : ?>
                                    <div class="single-testimonial-image__inner_heading">
                                        <h2><?php echo esc_html( $client_quotes ); ?></h2>
                                    </div>
                                <?php endif; ?>
                                <?php if ( $excerpt ) : ?>
                                    <div class="single-testimonial-image__inner_content">
                                        <p><?php echo wp_kses_post( $excerpt ); ?></p>
                                    </div>
                                <?php endif; ?>
                                <div class="single-testimonial-image__inner_title">
                                    <h3><?php echo esc_html( $title ); ?></h3>
                                    <div class="single-testimonial-image__inner_title-position">
                                        <?php if ( $client_position ) : ?>
                                            <p><?php echo esc_html( $client_position ); ?></p>
                                        <?php endif; ?>
                                        <?php if ( $icon_class ) : ?>
                                            <i class="<?php echo esc_attr( $icon_class ); ?>"></i>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php
            return ob_get_clean();
        }
    }

    // Output a message if no post is selected or no images are added.
    return '<p>' . esc_html__( 'No testimonial selected or no images added.', 'single-testimonial-image-v2' ) . '</p>';
}
?>
