<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Services faq v2 section.
 */
register_block_pattern(
	'qrolic/services-faq-v2-pattern',
	array(
		'title'       => __( 'Services faq v2', 'qrolic' ),
		'description' => _x( 'This pattern include Services faq.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"services-faq-v2","layout":{"type":"constrained"}} -->
<div class="wp-block-group services-faq-v2"><!-- wp:group {"className":"page-header-section","layout":{"type":"default"}} -->
<div class="wp-block-group page-header-section"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
<div class="wp-block-group row"><!-- wp:group {"className":"col-12 col-md-10 col-lg-9 col-xl-10 mx-auto","layout":{"type":"default"}} -->
<div class="wp-block-group col-12 col-md-10 col-lg-9 col-xl-10 mx-auto"><!-- wp:group {"className":"page-header-section__inner","layout":{"type":"default"}} -->
<div class="wp-block-group page-header-section__inner"><!-- wp:group {"className":"page-header-section__inner\u002d\u002dheading","layout":{"type":"default"}} -->
<div class="wp-block-group page-header-section__inner--heading"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center qt-v2"></h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"description-primary  page-header-section__inner\u002d\u002dtext ","layout":{"type":"default"}} -->
<div class="wp-block-group description-primary  page-header-section__inner--text"><!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"container p-0","layout":{"type":"constrained"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"services-faq-v2__inner ","layout":{"type":"constrained"}} -->
<div class="wp-block-group services-faq-v2__inner"><!-- wp:group {"className":"row","layout":{"type":"constrained"}} -->
<div class="wp-block-group row"><!-- wp:group {"className":"col-lg-7 col-md-12 col-12","layout":{"type":"constrained"}} -->
<div class="wp-block-group col-lg-7 col-md-12 col-12"><!-- wp:rank-math/faq-block {"questions":[{"id":"faq-question-1719637770907","title":"","content":"","visible":true},{"id":"faq-question-1719639295220","title":"","content":"","visible":true},{"id":"faq-question-1719650690550","title":"","content":"","visible":true}],"titleCssClasses":"services-question","contentCssClasses":"services-answer","className":"services-rank-math-v2"} -->
<div class="wp-block-rank-math-faq-block services-rank-math-v2"></div>
<!-- /wp:rank-math/faq-block --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-lg-5 col-md-12 col-12","layout":{"type":"constrained"}} -->
<div class="wp-block-group col-lg-5 col-md-12 col-12"><!-- wp:group {"className":"services-faq-card","layout":{"type":"constrained"}} -->
<div class="wp-block-group services-faq-card"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"></h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"subtitle"} -->
<p class="subtitle"></p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"common-button-pattern","layout":{"type":"default"}} -->
<div class="wp-block-group common-button-pattern"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"layout":{"type":"default"}} -->
<div class="wp-block-group"><!-- wp:buttons {"className":"common-button-pattern__inner_btn","layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"top","justifyContent":"left","orientation":"horizontal"}} -->
<div class="wp-block-buttons common-button-pattern__inner_btn"><!-- wp:button {"className":"common-button-pattern__inner_btn\u002d\u002dlink"} -->
<div class="wp-block-button common-button-pattern__inner_btn--link"><a class="wp-block-button__link wp-element-button">Contact Us</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
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
