<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for FAQ Section section.
 */
register_block_pattern(
	'qrolic/qrolic-faq-section-pattern',
	array(
		'title'       => __( 'FAQ Section', 'qrolic' ),
		'description' => _x( 'This pattern include a FAQ section block. Two simple texts are used in this block, one for the question and one for the answer related content.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"faq-section","layout":{"type":"default"}} -->
        <div class="wp-block-group faq-section"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"faq-section__inner","layout":{"type":"default"}} -->
        <div class="wp-block-group faq-section__inner"><!-- wp:group {"className":"faq-section__inner_heading","layout":{"type":"default"}} -->
        <div class="wp-block-group faq-section__inner_heading"><!-- wp:heading -->
        <h2 class="wp-block-heading">Frequently Asked Questions</h2>
        <!-- /wp:heading --></div>
        <!-- /wp:group -->
        
        <!-- wp:create-block/faq-section -->
        <div class="faq-section__inner_text"><div class="faq-section__question faq-section__toggle"><p class="wp-block-create-block-faq-section">Add New Question</p></div><div class="faq-section__answer faq-section__toggle"><p class="faq-section__toggle_answer">Add New Answer</p></div></div>
        <!-- /wp:create-block/faq-section --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);

