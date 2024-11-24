<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Project Details section.
 */
register_block_pattern(
	'qrolic/qrolic-custom-pattern',
	array(
		'title'       => __( 'Project Details', 'qrolic' ),
		'description' => _x( 'This pattern include main section title and main section description in contact related content.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"project-details section-padding","layout":{"type":"default"}} -->
        <div class="wp-block-group project-details section-padding"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"project-details__inner","layout":{"type":"default"}} -->
        <div class="wp-block-group project-details__inner"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
        <div class="wp-block-group row"><!-- wp:group {"className":"col-lg-4 col-md-3 col-sm-6 col-12 project-type","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-4 col-md-3 col-sm-6 col-12 project-type"><!-- wp:group {"className":"project-details__inner_box","layout":{"type":"default"}} -->
        <div class="wp-block-group project-details__inner_box"><!-- wp:heading {"level":4} -->
        <h4 class="wp-block-heading">Project Link:</h4>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p><a href="#">View</a></p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group -->
        
        <!-- wp:group {"className":"project-details__inner_box","layout":{"type":"default"}} -->
        <div class="wp-block-group project-details__inner_box"><!-- wp:heading {"level":4} -->
        <h4 class="wp-block-heading">Project Type</h4>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p>Web Design</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->
        
        <!-- wp:group {"className":"col-lg-5 col-md-5 col-sm-12 col-12 project-Technogelogies","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-5 col-md-5 col-sm-12 col-12 project-Technogelogies"><!-- wp:group {"className":"project-details__inner_box","layout":{"type":"default"}} -->
        <div class="wp-block-group project-details__inner_box"><!-- wp:heading {"level":4} -->
        <h4 class="wp-block-heading">Technogelogies</h4>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p></p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->
        
        <!-- wp:group {"className":"col-lg-3 col-md-4 col-sm-6 col-12","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-3 col-md-4 col-sm-6 col-12"><!-- wp:group {"className":"project-details__inner_box","layout":{"type":"default"}} -->
        <div class="wp-block-group project-details__inner_box"><!-- wp:heading {"level":4} -->
        <h4 class="wp-block-heading">Services Rendered:</h4>
        <!-- /wp:heading -->
        
        <!-- wp:list -->
        <ul><!-- wp:list-item -->
        <li></li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li></li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li></li>
        <!-- /wp:list-item --></ul>
        <!-- /wp:list --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);


