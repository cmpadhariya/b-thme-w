<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Single Case Study Project Details V2 section for Single Case Study page.
 */
register_block_pattern(
	'qrolic/single-casestudy-project-details-v2',
	array(
		'title'       => __( 'Single Case Study Project Details V2', 'qrolic' ),
		'description' => _x( 'This pattern include Single Case Study Project Details and Project Summary section and in this section include title, discription list and other Project details.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"casestudy-details","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-details"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"casestudy-details__inner","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-details__inner"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
<div class="wp-block-group row"><!-- wp:group {"className":"col-lg-7","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-7"><!-- wp:group {"className":"casestudy-details__inner_summary","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-details__inner_summary"><!-- wp:heading {"className":"casestudy-details__inner_content\u002d\u002dtitle"} -->
<h2 class="wp-block-heading casestudy-details__inner_content--title"></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":" description-primary"} -->
<p class="description-primary"></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":" description-primary"} -->
<p class="description-primary"></p>
<!-- /wp:paragraph -->

<!-- wp:list {"className":"casestudy-details__inner_summary\u002d\u002dlist"} -->
<ul class="casestudy-details__inner_summary--list"><!-- wp:list-item -->
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
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-lg-5","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-5"><!-- wp:group {"className":"casestudy-details__inner_details","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-details__inner_details"><!-- wp:heading {"className":"casestudy-details__inner_content\u002d\u002dtitle"} -->
<h2 class="wp-block-heading casestudy-details__inner_content--title"></h2>
<!-- /wp:heading -->

<!-- wp:group {"className":"casestudy-details__inner_details\u002d\u002dbox","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-details__inner_details--box"><!-- wp:group {"className":"casestudy-details__inner_details\u002d\u002dbox-item","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-details__inner_details--box-item"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"casestudy-details__inner_details\u002d\u002dbox-item","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-details__inner_details--box-item"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"casestudy-details__inner_details\u002d\u002dbox-item","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-details__inner_details--box-item"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"casestudy-details__inner_details\u002d\u002dbox-item","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-details__inner_details--box-item"><!-- wp:heading {"level":3} -->
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
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
