<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern is used to display the data of a single post of the case studies post type.
 */
register_block_pattern(
	'qrolic/case-studies-single-pattern',
	array(
		'title'       => __( 'Case Studies Single', 'qrolic' ),
		'description' => _x( 'This pattern is used to display the data of a single post of the case studies post type.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"casestudies-post__inner","layout":{"type":"default"}} -->
        <div class="wp-block-group casestudies-post__inner"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"row justify-content-center","layout":{"type":"default"}} -->
        <div class="wp-block-group row justify-content-center"><!-- wp:group {"className":"col-lg-12 col-md-12 col-sm-12 col-12","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-12 col-md-12 col-sm-12 col-12"><!-- wp:group {"className":"post-top","layout":{"type":"default"}} -->
        <div class="wp-block-group post-top"><!-- wp:group {"layout":{"type":"constrained"}} -->
        <div class="wp-block-group"></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->
        
        <!-- wp:group {"className":"project-info","layout":{"type":"default"}} -->
        <div class="wp-block-group project-info"><!-- wp:group {"className":"row ","layout":{"type":"default"}} -->
        <div class="wp-block-group row"><!-- wp:group {"className":"col-lg-6 col-md-6 col-sm-12 col-12","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-6 col-md-6 col-sm-12 col-12"><!-- wp:heading -->
        <h2 class="wp-block-heading"></h2>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p></p>
        <!-- /wp:paragraph -->
        
        <!-- wp:heading {"level":3} -->
        <h3 class="wp-block-heading"></h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p></p>
        <!-- /wp:paragraph -->
        
        <!-- wp:heading {"level":3} -->
        <h3 class="wp-block-heading"></h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p></p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group -->
        
        <!-- wp:group {"className":"col-lg-6 col-md-6 col-sm-12 col-12","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-6 col-md-6 col-sm-12 col-12"><!-- wp:image {"id":7051,"sizeSlug":"full","linkDestination":"none"} -->
        <figure class="wp-block-image size-full"><img src="http://localhost/Qrolic-Technologies/wp-content/uploads/2023/09/istockphoto-1133851849-612x612-2.webp" alt="" class="wp-image-7051"/></figure>
        <!-- /wp:image --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->
        
        <!-- wp:group {"className":"project-challenge","layout":{"type":"default"}} -->
        <div class="wp-block-group project-challenge"><!-- wp:group {"className":"row justify-content-center","layout":{"type":"default"}} -->
        <div class="wp-block-group row justify-content-center"><!-- wp:group {"className":"col-lg-12 col-md-12 col-sm-12 col-12","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-12 col-md-12 col-sm-12 col-12"><!-- wp:heading -->
        <h2 class="wp-block-heading"></h2>
        <!-- /wp:heading -->
        
        <!-- wp:heading {"level":3} -->
        <h3 class="wp-block-heading"></h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p></p>
        <!-- /wp:paragraph -->
        
        <!-- wp:heading {"level":3} -->
        <h3 class="wp-block-heading"></h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p></p>
        <!-- /wp:paragraph -->
        
        <!-- wp:heading {"level":3} -->
        <h3 class="wp-block-heading"></h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p></p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->
        
        <!-- wp:group {"className":"project-solution","layout":{"type":"default"}} -->
        <div class="wp-block-group project-solution"><!-- wp:group {"className":"row justify-content-center","layout":{"type":"default"}} -->
        <div class="wp-block-group row justify-content-center"><!-- wp:group {"className":"col-lg-12 col-md-12 col-sm-12 col-12","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-12 col-md-12 col-sm-12 col-12"><!-- wp:heading -->
        <h2 class="wp-block-heading"></h2>
        <!-- /wp:heading -->
        
        <!-- wp:heading {"level":3} -->
        <h3 class="wp-block-heading"></h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p></p>
        <!-- /wp:paragraph -->
        
        <!-- wp:heading {"level":3} -->
        <h3 class="wp-block-heading"></h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p></p>
        <!-- /wp:paragraph -->
        
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
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
