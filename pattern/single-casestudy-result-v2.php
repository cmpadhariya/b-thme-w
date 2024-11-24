<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Single Case Study Result V2 section for Single Case Study page.
 */
register_block_pattern(
	'qrolic/single-casestudy-result-v2',
	array(
		'title'       => __( 'Single Case Study Result V2', 'qrolic' ),
		'description' => _x( 'This pattern include Single Case Study Result section and in this section include title, discription, list and image.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"casestudy-result","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-result"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"casestudy-result__inner","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-result__inner"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
<div class="wp-block-group row"><!-- wp:group {"className":"col-lg-6","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-6"><!-- wp:group {"className":"casestudy-result__inner_content","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-result__inner_content"><!-- wp:heading {"className":"casestudy-result__inner_content\u002d\u002dtitle"} -->
<h2 class="wp-block-heading casestudy-result__inner_content--title"></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":" description-primary"} -->
<p class="description-primary"></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":" description-primary"} -->
<p class="description-primary"></p>
<!-- /wp:paragraph -->

<!-- wp:list {"className":"casestudy-result__inner_content\u002d\u002dlist"} -->
<ul class="casestudy-result__inner_content--list"><!-- wp:list-item {"className":"description-primary"} -->
<li class="description-primary"></li>
<!-- /wp:list-item -->

<!-- wp:list-item {"className":"description-primary"} -->
<li class="description-primary"></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-lg-6","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-6"><!-- wp:group {"className":"casestudy-result__inner_video","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-result__inner_video"><!-- wp:video -->
<figure class="wp-block-video"></figure>
<!-- /wp:video --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
