<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Subscribe Form Sidebar Pattern.
 */
register_block_pattern(
	'qrolic/subscribe-form-sidebar-pattern',
	array(
		'title'       => __( 'Subscribe Form Sidebar', 'qrolic' ),
		'description' => _x( 'This pattern is used to show subscribe form in sidebar of blog or other post single page which includes title, description and form.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"subscribe-form__sidebar","layout":{"type":"default"}} -->
        <div class="wp-block-group subscribe-form__sidebar"><!-- wp:heading {"level":4} -->
        <h4 class="wp-block-heading"></h4>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p></p>
        <!-- /wp:paragraph -->
        
        <!-- wp:shortcode /--></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);


