<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for careers faq v2 section.
 */
register_block_pattern(
	'qrolic/careers-faq-v2-pattern',
	array(
		'title'       => __( 'Careers faq v2', 'qrolic' ),
		'description' => _x( 'This pattern includes questions and answers in careers FAQ section.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"services-faq-v2 careers-faq","layout":{"type":"constrained"}} -->
<div class="wp-block-group services-faq-v2 careers-faq"><!-- wp:group {"className":"container p-0","layout":{"type":"constrained"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"services-faq-v2__inner careers-faq__inner ","layout":{"type":"constrained"}} -->
<div class="wp-block-group services-faq-v2__inner careers-faq__inner"><!-- wp:group {"className":"row","layout":{"type":"constrained"}} -->
<div class="wp-block-group row"><!-- wp:group {"className":"col-lg-5 col-md-12 col-12 p-0","layout":{"type":"constrained"}} -->
<div class="wp-block-group col-lg-5 col-md-12 col-12 p-0"><!-- wp:group {"className":"page-header-section","layout":{"type":"default"}} -->
<div class="wp-block-group page-header-section"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
<div class="wp-block-group row"><!-- wp:group {"className":"col-12 col-md-10 col-lg-9 col-xl-10","layout":{"type":"default"}} -->
<div class="wp-block-group col-12 col-md-10 col-lg-9 col-xl-10"><!-- wp:group {"className":"page-header-section__inner","layout":{"type":"default"}} -->
<div class="wp-block-group page-header-section__inner"><!-- wp:group {"className":"page-header-section__inner\u002d\u002dheading","layout":{"type":"default"}} -->
<div class="wp-block-group page-header-section__inner--heading"><!-- wp:heading {"textAlign":"left","className":"qt-v2"} -->
<h2 class="wp-block-heading has-text-align-left qt-v2"></h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"description-secondary  page-header-section__inner\u002d\u002dtext ","layout":{"type":"default"}} -->
<div class="wp-block-group description-secondary  page-header-section__inner--text"><!-- wp:paragraph {"align":"left"} -->
<p class="has-text-align-left"></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-lg-7 col-md-12 col-12 p-0","layout":{"type":"constrained"}} -->
<div class="wp-block-group col-lg-7 col-md-12 col-12 p-0"><!-- wp:rank-math/faq-block {"questions":[{"id":"faq-question-1719637770907","title":"","content":"","visible":true},{"id":"faq-question-1719639295220","title":"","content":"","visible":true},{"id":"faq-question-1719650690550","title":"","content":"","visible":true}],"titleCssClasses":"services-question","contentCssClasses":"services-answer","className":"services-rank-math-v2"} -->
<div class="wp-block-rank-math-faq-block services-rank-math-v2"></div>
<!-- /wp:rank-math/faq-block --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
