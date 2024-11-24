<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Our mission and vision section.
 */
register_block_pattern(
	'qrolic/qrolic-mission-vision-pattern',
	array(
		'title'       => __( 'Mission and Vision', 'qrolic' ),
		'description' => _x( 'This section defines the mission and vision of the company. This section includes the image, title and short description.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"mission-vision","layout":{"type":"default"}} -->
        <div class="wp-block-group mission-vision"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"mission-vision__inner","layout":{"type":"default"}} -->
        <div class="wp-block-group mission-vision__inner"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
        <div class="wp-block-group row"><!-- wp:group {"className":"col-lg-6 col-md-6 col-12","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-6 col-md-6 col-12"><!-- wp:group {"className":"mission-vision__content","layout":{"type":"default"}} -->
        <div class="wp-block-group mission-vision__content"><!-- wp:image {"id":8565,"sizeSlug":"full","linkDestination":"none"} -->
        <figure class="wp-block-image size-full"><img src="" alt="" class="wp-image-8565"/></figure>
        <!-- /wp:image -->
        
        <!-- wp:heading {"level":3} -->
        <h3 class="wp-block-heading"></h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p></p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->
        
        <!-- wp:group {"className":"col-lg-6 col-md-6 col-12","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-6 col-md-6 col-12"><!-- wp:group {"className":"mission-vision__content","layout":{"type":"default"}} -->
        <div class="wp-block-group mission-vision__content"><!-- wp:image {"id":8566,"sizeSlug":"full","linkDestination":"none"} -->
        <figure class="wp-block-image size-full"><img src="" alt="" class="wp-image-8566"/></figure>
        <!-- /wp:image -->
        
        <!-- wp:heading {"level":3} -->
        <h3 class="wp-block-heading"></h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p></p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        ',
		'categories'  => array( 'qrolic-patterns' ),
	)
);


