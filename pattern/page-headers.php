<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Page Headers section.
 */
register_block_pattern(
	'qrolic/page-headers-pattern',
	array(
		'title'       => __( 'Page Headers', 'qrolic' ),
		'description' => _x( 'This pattern include main section title and main section description in contact related content.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"page-headers section-padding"} -->
		<div class="wp-block-group page-headers section-padding"><!-- wp:group {"className":"container p-0"} -->
		<div class="wp-block-group container p-0"><!-- wp:group {"className":"row"} -->
		<div class="wp-block-group row"><!-- wp:group {"className":"col-lg-12"} -->
		<div class="wp-block-group col-lg-12"><!-- wp:heading {"textAlign":"center","className":"title"} -->
		<h2 class="wp-block-heading has-text-align-center title"></h2>
		<!-- /wp:heading -->
		
		<!-- wp:group {"className":"page-headers__discription","layout":{"type":"default"}} -->
		<div class="wp-block-group page-headers__discription"><!-- wp:paragraph {"align":"center","className":"description-primary"} -->
		<p class="has-text-align-center description-primary"></p>
		<!-- /wp:paragraph --></div>
		<!-- /wp:group --></div>
		<!-- /wp:group --></div>
		<!-- /wp:group --></div>
		<!-- /wp:group --></div>
		<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
