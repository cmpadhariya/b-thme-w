<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for qrolic internship programs page headings.
 */
register_block_pattern(
	'qrolic/internship-headings-pattern',
	array(
		'title'       => __( 'Internship Headings', 'qrolic' ),
		'description' => _x( 'This pattern include company internship program title and description.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"internship","layout":{"type":"default"}} -->
        <div class="wp-block-group internship"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
        <div class="wp-block-group row"><!-- wp:group {"className":"col-lg-12 col-md-12 col-12","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-12 col-md-12 col-12"><!-- wp:group {"className":"internship__top","layout":{"type":"default"}} -->
        <div class="wp-block-group internship__top"><!-- wp:heading {"level":3} -->
        <h3 class="wp-block-heading"></h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p></p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->
        ',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
