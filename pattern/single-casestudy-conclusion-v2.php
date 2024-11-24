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
    'qrolic/single-casestudy-conclusion-v2',
    array(
        'title' => __( 'Single Case Study Conclusion V2', 'qrolic' ),
        'description' => _x( 'This pattern include Single Case Study page for The Conclusion section provides a summary of the key findings and insights gained from the case study. It should highlight the main takeaways, lessons learned, and the significance of the study. this section include title, discription and list.', 'qrolic' ),
        'content' => '<!-- wp:group {"className":"single-casestudy-conclusion-v2 ","layout":{"type":"default"}} -->
<div class="wp-block-group single-casestudy-conclusion-v2"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"single-casestudy-conclusion-v2__inner","layout":{"type":"default"}} -->
<div class="wp-block-group single-casestudy-conclusion-v2__inner"><!-- wp:group {"className":"row align-items-center justify-content-center","layout":{"type":"default"}} -->
<div class="wp-block-group row align-items-center justify-content-center"><!-- wp:group {"className":"col-lg-11 col-md-10 col-sm-11 col-12","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-11 col-md-10 col-sm-11 col-12"><!-- wp:group {"className":"single-casestudy-conclusion-v2__inner_title","layout":{"type":"default"}} -->
<div class="wp-block-group single-casestudy-conclusion-v2__inner_title"><!-- wp:heading -->
<h2 class="wp-block-heading"></h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"single-casestudy-conclusion-v2__inner_contant","layout":{"type":"default"}} -->
<div class="wp-block-group single-casestudy-conclusion-v2__inner_contant"><!-- wp:paragraph {"className":"description-primary"} -->
<p class="description-primary"></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"single-casestudy-conclusion-v2__inner_list","layout":{"type":"default"}} -->
<div class="wp-block-group single-casestudy-conclusion-v2__inner_list"><!-- wp:paragraph {"className":"description-primary"} -->
<p class="description-primary"></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"description-primary"} -->
<p class="description-primary"></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
        'categories' => array( 'qrolic-patterns' ),
    )
);