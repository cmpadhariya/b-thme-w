<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Single Plugins Page pattern.
 */
register_block_pattern(
	'qrolic/single-plugins-page-pattern',
	array(
		'title'       => __( 'Single Plugins Page', 'qrolic' ),
		'description' => _x( 'This pattern is used to display content in a single plugins page.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"single-post coman-padding section-pt-0","layout":{"type":"default"}} -->
        <div class="wp-block-group single-post coman-padding section-pt-0"><!-- wp:group {"className":"single-post__inner","layout":{"type":"default"}} -->
        <div class="wp-block-group single-post__inner"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"row justify-content-center post-main","layout":{"type":"default"}} -->
        <div class="wp-block-group row justify-content-center post-main"><!-- wp:group {"className":"col-lg-12 col-md-12 col-sm-12 col-12 post-leftbar","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-12 col-md-12 col-sm-12 col-12 post-leftbar"><!-- wp:group {"className":"single-post__inner_left","layout":{"type":"default"}} -->
        <div class="wp-block-group single-post__inner_left"><!-- wp:post-featured-image /-->
        
        <!-- wp:post-content /--></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
