<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for qrolic internship programs page internship qualification.
 */
register_block_pattern(
	'qrolic/internship-qualification-pattern',
	array(
		'title'       => __( 'Internship Qualification', 'qrolic' ),
		'description' => _x( 'This pattern include company internship qualification title,required qualification.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"internship-qualification","layout":{"type":"default"}} -->
        <div id="Internship-Qualification" class="wp-block-group internship-qualification"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
        <div class="wp-block-group row"><!-- wp:group {"className":"col-lg-2 col-md-2 col-sm-12 col-12","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-2 col-md-2 col-sm-12 col-12"><!-- wp:group {"className":"internship-qualification__number","layout":{"type":"default"}} -->
        <div class="wp-block-group internship-qualification__number"><!-- wp:heading {"level":3} -->
        <h3 class="wp-block-heading"></h3>
        <!-- /wp:heading --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->
        
        <!-- wp:group {"className":"col-lg-8 col-md-10 col-sm-12 col-12","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-8 col-md-10 col-sm-12 col-12"><!-- wp:group {"className":"internship-qualification__content","layout":{"type":"default"}} -->
        <div class="wp-block-group internship-qualification__content"><!-- wp:heading {"level":4} -->
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
        <!-- /wp:list --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
