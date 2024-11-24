<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * This is the block pattern we use in the homepage. With the help of this pattern we get the case study.
 */
register_block_pattern(
	'qrolic/casestudy-home-v2-pattern',
	array(
		'title'       => __( 'Casestudy home v2', 'qrolic' ),
		'description' => _x( 'This is the block pattern we use in the homepage. With the help of this pattern we get the case study.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"casestudy-home","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-home"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"casestudy-home__inner","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-home__inner"><!-- wp:group {"className":"casestudy-home__inner\u002d\u002dtop","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-home__inner--top"><!-- wp:paragraph {"className":"subtitle subtitle-heading"} -->
<p class="subtitle subtitle-heading"></p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"row","layout":{"type":"default"}} -->
<div class="wp-block-group row"><!-- wp:heading -->
<h2 class="wp-block-heading"></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"description-primary "} -->
<p class="description-primary"></p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button /--></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"casestudy-home__inner\u002d\u002dpost","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-home__inner--post"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
<div class="wp-block-group row"><!-- wp:group {"className":"col-lg-6 col-md-6 col-12","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-6 col-md-6 col-12"><!-- wp:group {"className":"casestudy-home__inner\u002d\u002dpost-box","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-home__inner--post-box"><!-- wp:heading {"level":3,"className":"description-primary"} -->
<h3 class="wp-block-heading description-primary"></h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-lg-6 col-md-6 col-12","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-6 col-md-6 col-12"><!-- wp:group {"className":"casestudy-home__inner\u002d\u002dpost-box","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-home__inner--post-box"><!-- wp:heading {"level":3,"className":"description-primary"} -->
<h3 class="wp-block-heading description-primary"></h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph --></div>
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
