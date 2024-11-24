<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for qrolic internship programs page display company internship benefits.
 */
register_block_pattern(
	'qrolic/internship-benefits-pattern',
	array(
		'title'       => __( 'Internship Benefits', 'qrolic' ),
		'description' => _x( 'This pattern includes a list of benefits of a company internship.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"internship-benefits","layout":{"type":"default"}} -->
        <div class="wp-block-group internship-benefits"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
        <div class="wp-block-group row"><!-- wp:group {"className":"col-lg-12 col-md-12 col-12","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-12 col-md-12 col-12"><!-- wp:group {"className":"internship-benefits__top","layout":{"type":"default"}} -->
        <div class="wp-block-group internship-benefits__top"><!-- wp:heading {"level":3} -->
        <h3 class="wp-block-heading">Internship Benefits</h3>
        <!-- /wp:heading --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->
        
        <!-- wp:list {"className":"internship-benefits__list"} -->
        <ul class="internship-benefits__list"><!-- wp:list-item -->
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
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
