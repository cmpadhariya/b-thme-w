<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Single Case Study Problem V2 section for Single Case Study page.
 */
register_block_pattern(
	'qrolic/single-casestudy-problem-v2',
	array(
		'title'       => __( 'Single Case Study Problem V2', 'qrolic' ),
		'description' => _x( 'This pattern include Single Case Study Problem section and in this section include title, discription and image.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"casestudy-problem","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-problem"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"casestudy-problem__inner","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-problem__inner"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
<div class="wp-block-group row"><!-- wp:group {"className":"col-lg-7","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-7"><!-- wp:group {"className":"casestudy-problem__inner_content","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-problem__inner_content"><!-- wp:heading {"className":"casestudy-problem__inner_content\u002d\u002dtitle"} -->
<h2 class="wp-block-heading casestudy-problem__inner_content--title"></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"casestudy-problem__inner_content\u002d\u002ddiscription description-primary"} -->
<p class="casestudy-problem__inner_content--discription description-primary"></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"casestudy-problem__inner_content\u002d\u002ddiscription description-primary"} -->
<p class="casestudy-problem__inner_content--discription description-primary"></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-lg-5","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-5"><!-- wp:group {"className":"casestudy-problem__inner_image","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-problem__inner_image"><!-- wp:image -->
<figure class="wp-block-image"><img alt=""/></figure>
<!-- /wp:image --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
