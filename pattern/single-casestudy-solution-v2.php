<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Single Case Study Solution V2 section for Single Case Study page.
 */
register_block_pattern(
	'qrolic/single-casestudy-solution-v2',
	array(
		'title'       => __( 'Single Case Study Solution V2', 'qrolic' ),
		'description' => _x( 'This pattern include Single Case Study Solution section and in this section include title, discription and image.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"casestudy-solution page-banner-bg","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-solution page-banner-bg"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"casestudy-solution__inner","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-solution__inner"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
<div class="wp-block-group row"><!-- wp:group {"className":"col-lg-7","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-7"><!-- wp:group {"className":"casestudy-solution__inner_content","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-solution__inner_content"><!-- wp:heading {"className":"casestudy-solution__inner_content\u002d\u002dtitle"} -->
<h2 class="wp-block-heading casestudy-solution__inner_content--title"></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":" description-primary"} -->
<p class="description-primary"></p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"casestudy-solution__inner_content\u002d\u002ditems","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-solution__inner_content--items"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-lg-5","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-5"><!-- wp:group {"className":"casestudy-solution__inner_image","layout":{"type":"constrained"}} -->
<div class="wp-block-group casestudy-solution__inner_image"><!-- wp:image -->
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
