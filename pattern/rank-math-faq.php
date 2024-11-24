<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for rank-math-faq section.
 */
register_block_pattern(
	'qrolic/qrolic-rank-math-faq-pattern',
	array(
		'title'       => __( 'rank-math-faq', 'qrolic' ),
		'description' => _x( 'This pattern include a rank-math-faq. Two simple texts are used in this block, one for the question and one for the answer related content.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"rank-math-faq section-padding","layout":{"type":"default"}} -->
        <div class="wp-block-group rank-math-faq section-padding"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:heading {"textAlign":"center","className":"rank-math-faq-heading"} -->
        <h2 class="wp-block-heading has-text-align-center rank-math-faq-heading">Frequently Asked Questions</h2>
        <!-- /wp:heading -->
        
        <!-- wp:group {"layout":{"type":"default"}} -->
        <div class="wp-block-group"><!-- wp:rank-math/faq-block {"titleWrapper":"p","questions":[{"id":"faq-question-1704438529669","title":"","content":"","visible":true},{"id":"faq-question-1704438604610","title":"","content":"","visible":true},{"id":"faq-question-1704438622732","title":"","content":"","visible":true}]} -->
        <div class="wp-block-rank-math-faq-block"></div>
        <!-- /wp:rank-math/faq-block --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);

