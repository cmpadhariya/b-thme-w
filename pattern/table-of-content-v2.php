<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Table Of Content section.
 */
register_block_pattern(
	'qrolic/table-of-content-v2',
	array(
		'title'       => __( 'Table Of Content v2', 'qrolic' ),
		'description' => _x( 'We use this pattern in the single blog page of our site. With the help of this pattern we can show Table Of Content section.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"qt-table-of-content","layout":{"type":"default"}} -->
<div class="wp-block-group qt-table-of-content"><!-- wp:heading {"level":3,"className":"qt-table-of-content__title"} -->
<h3 class="wp-block-heading qt-table-of-content__title"></h3>
<!-- /wp:heading -->

<!-- wp:shortcode -->
[toc]
<!-- /wp:shortcode --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
