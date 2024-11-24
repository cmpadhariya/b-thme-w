<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Single Blog Author Details V2 section for Single blog page.
 */
register_block_pattern(
    'qrolic/single-blog-author-details-v2',
    array(
        'title' => __( 'Single Blog Author Details V2', 'qrolic' ),
        'description' => _x( 'This pattern include Single blog page for The Auther detail section provides a author name, author description.', 'qrolic' ),
        'content' => '<!-- wp:group {"className":"single-blog-author-details","layout":{"type":"default"}} -->
<div class="wp-block-group single-blog-author-details"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"single-blog-author-details__inner","layout":{"type":"default"}} -->
<div class="wp-block-group single-blog-author-details__inner"><!-- wp:post-author {"avatarSize":96,"showBio":true} /-->

<!-- wp:shortcode -->
[blog_reading_time]
<!-- /wp:shortcode -->

<!-- wp:post-terms {"term":"blog-category"} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
        'categories' => array( 'qrolic-patterns' ),
    )
);