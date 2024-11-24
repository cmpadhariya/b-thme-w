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
	'qrolic/apply-now-form-pattern',
	array(
		'title'       => __( 'Apply Now Form', 'qrolic' ),
		'description' => _x( 'This pattern include apply now form to employee apply for job.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"apply-form","layout":{"type":"default"}} -->
        <div class="wp-block-group apply-form" id="contact-us"><!-- wp:group {"className":"apply-form__inner","layout":{"type":"default"}} -->
        <div class="wp-block-group apply-form__inner"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"row justify-content-center","layout":{"type":"default"}} -->
        <div class="wp-block-group row justify-content-center"><!-- wp:group {"className":"col-lg-6 col-md-8 col-12","layout":{"type":"default"}} -->
        <div class="wp-block-group col-lg-6 col-md-8 col-12"><!-- wp:contact-form-7/contact-form-selector -->
        <div class="wp-block-contact-form-7-contact-form-selector">[contact-form-7 id="20" title="Career Form"]</div>
        <!-- /wp:contact-form-7/contact-form-selector --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
