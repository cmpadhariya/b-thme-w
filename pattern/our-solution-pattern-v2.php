<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for our solution pattern v2.
 */
register_block_pattern(
	'qrolic/our-solution-pattern-v2',
	array(
		'title'       => __( 'our solution pattern v2', 'qrolic' ),
		'description' => _x( 'This pattern include our solution pattern v2', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"our-expertise-v2 section-padding section-bg","layout":{"type":"constrained"}} -->
			<div class="wp-block-group our-expertise-v2 section-padding section-bg"><!-- wp:group {"className":"our-expertise-v2__inner","layout":{"type":"constrained"}} -->
			<div class="wp-block-group our-expertise-v2__inner"><!-- wp:group {"className":"page-header-section","layout":{"type":"default"}} -->
			<div class="wp-block-group page-header-section"><!-- wp:group {"className":"page-header-section__inner pb-0 ","layout":{"type":"default"}} -->
			<div class="wp-block-group page-header-section__inner pb-0"><!-- wp:group {"className":"page-header-section__inner\u002d\u002dsubtitle","layout":{"type":"default"}} -->
			<div class="wp-block-group page-header-section__inner--subtitle"><!-- wp:paragraph {"align":"center","className":"subtitle qt-color-green"} -->
			<p class="has-text-align-center subtitle qt-color-green"></p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {"className":"page-header-section__inner\u002d\u002dheading","layout":{"type":"default"}} -->
			<div class="wp-block-group page-header-section__inner--heading"><!-- wp:heading {"textAlign":"center","className":"qt-v2"} -->
			<h2 class="wp-block-heading has-text-align-center qt-v2"></h2>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {"className":"page-header-section__inner\u002d\u002dtext common-padding pt-0","layout":{"type":"default"}} -->
			<div class="wp-block-group page-header-section__inner--text common-padding pt-0"><!-- wp:paragraph {"align":"center"} -->
			<p class="has-text-align-center"></p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group -->

			<!-- wp:create-block/our-solution-section-v2 {"items":[{"imageUrl":"https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/Frame.png","heading":"","description":""},{"imageUrl":"https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/Frame.png","heading":"","description":""},{"imageUrl":"https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/Frame.png","heading":"","description":""},{"imageUrl":"https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/Frame.png","heading":"","description":""}]} -->
			<section class="wp-block-create-block-our-solution-section-v2"><div class="our-solution"><div class="container"><div class="our-solution__inner row"><div class="col-lg-6 col-md-6 col-12 right-width"><div class="our-solution__inner_box row"><div class="col-4"><div class="our-solution__inner_box-img"><img src="https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/Frame.png" alt="" width="167" height="167"/></div></div><div class="col-8"><div class="our-solution__inner_box-content"><h3></h3><p class="description-secondary"></p></div></div></div></div><div class="col-lg-6 col-md-6 col-12 right-width"><div class="our-solution__inner_box row"><div class="col-4"><div class="our-solution__inner_box-img"><img src="https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/Frame.png" alt="" width="167" height="167"/></div></div><div class="col-8"><div class="our-solution__inner_box-content"><h3></h3><p class="description-secondary"></p></div></div></div></div><div class="col-lg-6 col-md-6 col-12 right-width"><div class="our-solution__inner_box row"><div class="col-4"><div class="our-solution__inner_box-img"><img src="https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/Frame.png" alt="" width="167" height="167"/></div></div><div class="col-8"><div class="our-solution__inner_box-content"><h3></h3><p class="description-secondary"></p></div></div></div></div><div class="col-lg-6 col-md-6 col-12 right-width"><div class="our-solution__inner_box row"><div class="col-4"><div class="our-solution__inner_box-img"><img src="https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/Frame.png" alt="" width="167" height="167"/></div></div><div class="col-8"><div class="our-solution__inner_box-content"><h3></h3><p class="description-secondary"></p></div></div></div></div></div></div></div></section>
			<!-- /wp:create-block/our-solution-section-v2 -->

			<!-- wp:group {"className":"common-button-pattern common-padding section-pb-0","layout":{"type":"default"}} -->
			<div class="wp-block-group common-button-pattern common-padding section-pb-0"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
			<div class="wp-block-group container p-0"><!-- wp:group {"className":"common-button-pattern__inner","layout":{"type":"default"}} -->
			<div class="wp-block-group common-button-pattern__inner"><!-- wp:buttons {"className":"common-button-pattern__inner_btn","layout":{"type":"flex","flexWrap":"nowrap"}} -->
			<div class="wp-block-buttons common-button-pattern__inner_btn"><!-- wp:button {"className":"common-button-pattern__inner_btn\u002d\u002dlink"} -->
			<div class="wp-block-button common-button-pattern__inner_btn--link"><a class="wp-block-button__link wp-element-button">Ready to Get Started?</a></div>
			<!-- /wp:button --></div>
			<!-- /wp:buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
