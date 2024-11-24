<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Author Details section.
 */
register_block_pattern(
    'qrolic/author-details-section-v2-pattern',
    array(
        'title' => __( 'Author details section v2', 'qrolic' ),
        'description' => _x( 'This pattern is used to add author details in a single author page including author image, name and description.', 'qrolic' ),
        'content' => '<!-- wp:group {"className":"author-v2","layout":{"type":"default"}} -->
        <div class="wp-block-group author-v2"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"author-v2__inner","layout":{"type":"default"}} -->
        <div class="wp-block-group author-v2__inner"><!-- wp:post-author {"avatarSize":96,"showBio":true} /--></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
        'categories' => array( 'qrolic-patterns' ),
    )
);
