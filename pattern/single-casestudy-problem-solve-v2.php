<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Single Case Study Problem Solve V2 section for Single Case Study page.
 */
register_block_pattern(
	'qrolic/single-casestudy-problem-solve-v2',
	array(
		'title'       => __( 'Single Case Study Problem Solve V2', 'qrolic' ),
		'description' => _x( 'This pattern include Single Case Study Our Approach to solve problem section and in this section include title, discription and image.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"casestudy-problem-solve ","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-problem-solve"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"casestudy-problem-solve__inner","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-problem-solve__inner"><!-- wp:heading -->
<h2 class="wp-block-heading"></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"description-primary"} -->
<p class="description-primary"></p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"casestudy-problem-solve__inner_items","layout":{"type":"default"}} -->
<div class="wp-block-group casestudy-problem-solve__inner_items"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"></h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:image -->
<figure class="wp-block-image"><img alt=""/></figure>
<!-- /wp:image --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);