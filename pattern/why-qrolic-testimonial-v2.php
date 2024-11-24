<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Why Qrolic Testimonial V2 Section.
 */
register_block_pattern(
	'qrolic/why-qrolic-testimonial-v2-pattern',
	array(
		'title'       => __( 'Why Qrolic Testimonial V2', 'qrolic' ),
		'description' => _x( 'This pattern features Why Qrolic Testimonials v2 block, this blog get data qrolic service to client best satisfaction and happy to our team with work.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"why-qrolic-testimonials","layout":{"type":"default"}} -->
<div class="wp-block-group why-qrolic-testimonials"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"why-qrolic-testimonials__inner","layout":{"type":"default"}} -->
<div class="wp-block-group why-qrolic-testimonials__inner"><!-- wp:group {"className":"why-qrolic-testimonials__inner_heading","layout":{"type":"default"}} -->
<div class="wp-block-group why-qrolic-testimonials__inner_heading"><!-- wp:paragraph {"className":"subtitle"} -->
<p class="subtitle"></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"></h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"row","layout":{"type":"default"}} -->
<div class="wp-block-group row"><!-- wp:group {"className":"col-lg-4 col-md-6","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-4 col-md-6"><!-- wp:create-block/why-qrolic-testimonial-v2 {"selectedPostId":11914} /--></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-lg-4 col-md-6","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-4 col-md-6"><!-- wp:create-block/why-qrolic-testimonial-v2 {"selectedPostId":11914} /--></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-lg-4 col-md-6","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-4 col-md-6"><!-- wp:create-block/why-qrolic-testimonial-v2 {"selectedPostId":11914} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
