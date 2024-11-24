<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Common Button Pattern V2.
 */
register_block_pattern(
	'qrolic/common-button-pattern-v2',
	array(
		'title'       => __( 'Common Button Pattern V2', 'qrolic' ),
		'description' => _x( 'This pattern include Common Button designs.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"common-button-pattern section-padding section-pt-0","layout":{"type":"default"}} -->
<div class="wp-block-group common-button-pattern section-padding section-pt-0"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"common-button-pattern__inner","layout":{"type":"default"}} -->
<div class="wp-block-group common-button-pattern__inner"><!-- wp:buttons {"className":"common-button-pattern__inner_btn","layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-buttons common-button-pattern__inner_btn"><!-- wp:button {"className":"common-button-pattern__inner_btn\u002d\u002dlink"} -->
<div class="wp-block-button common-button-pattern__inner_btn--link"><a class="wp-block-button__link wp-element-button">Discover Solution</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:buttons {"className":"common-button-pattern__inner_btn ","layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-buttons common-button-pattern__inner_btn"><!-- wp:button {"className":"common-button-pattern__inner_btn\u002d\u002dlink button-color-gray"} -->
<div class="wp-block-button common-button-pattern__inner_btn--link button-color-gray"><a class="wp-block-button__link wp-element-button">Discover Solution</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
