<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Apply now form.
 */
register_block_pattern(
	'qrolic/career-form-v2-pattern',
	array(
		'title'       => __( 'career Form v2', 'qrolic' ),
		'description' => _x( 'This pattern include apply now form to employee apply for job.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"career-form-v2 ","layout":{"type":"default"}} -->
<div class="wp-block-group career-form-v2"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"career-form-v2__inner","layout":{"type":"default"}} -->
<div class="wp-block-group career-form-v2__inner"><!-- wp:group {"className":"row justify-content-center","layout":{"type":"default"}} -->
<div class="wp-block-group row justify-content-center"><!-- wp:group {"className":"col-lg-10 col-md-11 col-12 mx-auto","layout":{"type":"default"}} -->
<div class="wp-block-group col-lg-10 col-md-11 col-12 mx-auto"><!-- wp:group {"className":"career-form-v2__inner_heading","layout":{"type":"default"}} -->
<div class="wp-block-group career-form-v2__inner_heading"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center"></h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"career-form-v2__inner_description","layout":{"type":"default"}} -->
<div class="wp-block-group career-form-v2__inner_description"><!-- wp:paragraph {"align":"center","className":"description-primary"} -->
<p class="has-text-align-center description-primary"></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"career-form-v2__inner_form","layout":{"type":"default"}} -->
<div class="wp-block-group career-form-v2__inner_form"><!-- wp:contact-form-7/contact-form-selector {"id":11291,"title":"Careers Form V2"} -->
<div class="wp-block-contact-form-7-contact-form-selector">[contact-form-7 id="11291" title="Careers Form V2"]</div>
<!-- /wp:contact-form-7/contact-form-selector --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
