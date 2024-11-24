<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Services Single page section.
 */
register_block_pattern(
	'qrolic/services-single-page-pattern',
	array(
		'title'       => __( 'Services Single page', 'qrolic' ),
		'description' => _x( 'This pattern include services single page related discription.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"services-content section-padding","layout":{"type":"default"}} -->
        <div class="wp-block-group services-content section-padding"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"services-content__inner","layout":{"type":"default"}} -->
        <div class="wp-block-group services-content__inner"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
        <div class="wp-block-group row"><!-- wp:group {"className":"col-12","layout":{"type":"default"}} -->
        <div class="wp-block-group col-12"><!-- wp:paragraph -->
        <p></p>
        <!-- /wp:paragraph -->
        
        <!-- wp:group {"className":"services-content__inner_text","layout":{"type":"default"}} -->
        <div class="wp-block-group services-content__inner_text"><!-- wp:heading {"level":4} -->
        <h4 class="wp-block-heading"></h4>
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
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li></li>
        <!-- /wp:list-item --></ul>
        <!-- /wp:list -->
        
        <!-- wp:heading {"level":4} -->
        <h4 class="wp-block-heading"></h4>
        <!-- /wp:heading -->
        
        <!-- wp:list -->
        <ul><!-- wp:list-item -->
        <li><!-- wp:list -->
        <ul><!-- wp:list-item -->
        <li></li>
        <!-- /wp:list-item --></ul>
        <!-- /wp:list --></li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li><!-- wp:list -->
        <ul><!-- wp:list-item -->
        <li></li>
        <!-- /wp:list-item --></ul>
        <!-- /wp:list --></li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li><!-- wp:list -->
        <ul><!-- wp:list-item -->
        <li></li>
        <!-- /wp:list-item --></ul>
        <!-- /wp:list --></li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li><!-- wp:list -->
        <ul><!-- wp:list-item -->
        <li></li>
        <!-- /wp:list-item --></ul>
        <!-- /wp:list --></li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li><!-- wp:list -->
        <ul><!-- wp:list-item -->
        <li></li>
        <!-- /wp:list-item --></ul>
        <!-- /wp:list --></li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li><!-- wp:list -->
        <ul><!-- wp:list-item -->
        <li></li>
        <!-- /wp:list-item --></ul>
        <!-- /wp:list --></li>
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
