<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Why Qrolic Benefits V2 Section.
 */
register_block_pattern(
	'qrolic/why-qrolic-benefits-v2-pattern',
	array(
		'title'       => __( 'Why Qrolic Benefits V2', 'qrolic' ),
		'description' => _x( 'This pattern features key benefits of partnering with Qrolic, And In this pattern include why-qrolic-benefits-v2 blocks', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"why-qt-benefits section-padding pt-0 section-bg","layout":{"type":"default"}} -->
<div class="wp-block-group why-qt-benefits section-padding pt-0 section-bg"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"why-qt-benefits__inner","layout":{"type":"default"}} -->
<div class="wp-block-group why-qt-benefits__inner"><!-- wp:create-block/why-qrolic-benefits-v2 {"items":[{"text":"","icon":""}],"buttonURL1":"/","buttonURL2":"http://localhost/Qrolic-Technologies/services/","showButtons":false,"className":"why-qt-benefits__inner_box qt-benefits-color-blue"} -->
<div class="wp-block-create-block-why-qrolic-benefits-v2 why-qt-benefits__inner_box qt-benefits-color-blue"><div class="row"><div class="col-lg-8"><div class="why-qt-benefits__inner_text"><div class="why-qt-benefits__inner_text--heading"><h2></h2><p class="description-primary"></p></div><ul class="why-qt-benefits__inner_text--list"><li><i class=""></i><span></span></li></ul></div></div><div class="col-lg-4"><div class="why-qt-benefits__inner_image"></div></div></div></div>
<!-- /wp:create-block/why-qrolic-benefits-v2 -->

<!-- wp:create-block/why-qrolic-benefits-v2 {"items":[{"text":"","icon":""},{"text":"","icon":""}],"buttonURL1":"/","buttonURL2":"http://localhost/Qrolic-Technologies/services/","showButtons":false,"className":"why-qt-benefits__inner_box qt-benefits-color-lightblue"} -->
<div class="wp-block-create-block-why-qrolic-benefits-v2 why-qt-benefits__inner_box qt-benefits-color-lightblue"><div class="row"><div class="col-lg-8"><div class="why-qt-benefits__inner_text"><div class="why-qt-benefits__inner_text--heading"><h2></h2><p class="description-primary"></p></div><ul class="why-qt-benefits__inner_text--list"><li><i class=""></i><span></span></li><li><i class=""></i><span></span></li></ul></div></div><div class="col-lg-4"><div class="why-qt-benefits__inner_image"></div></div></div></div>
<!-- /wp:create-block/why-qrolic-benefits-v2 -->

<!-- wp:create-block/why-qrolic-benefits-v2 {"items":[{"text":"","icon":""},{"text":"","icon":""}],"buttonURL1":"/","buttonURL2":"http://localhost/Qrolic-Technologies/services/","showButtons":false,"className":"why-qt-benefits__inner_box qt-benefits-color-darkgreen"} -->
<div class="wp-block-create-block-why-qrolic-benefits-v2 why-qt-benefits__inner_box qt-benefits-color-darkgreen"><div class="row"><div class="col-lg-8"><div class="why-qt-benefits__inner_text"><div class="why-qt-benefits__inner_text--heading"><h2></h2><p class="description-primary"></p></div><ul class="why-qt-benefits__inner_text--list"><li><i class=""></i><span></span></li><li><i class=""></i><span></span></li></ul></div></div><div class="col-lg-4"><div class="why-qt-benefits__inner_image"></div></div></div></div>
<!-- /wp:create-block/why-qrolic-benefits-v2 -->

<!-- wp:create-block/why-qrolic-benefits-v2 {"items":[{"text":"Efficient Code: Fast and smooth operations."},{"text":"Quick Load Times: Better user experience and SEO."}],"buttonURL1":"/","buttonURL2":"http://localhost/Qrolic-Technologies/services/","showList":false,"className":"why-qt-benefits__inner_box qt-benefits-color-green"} -->
<div class="wp-block-create-block-why-qrolic-benefits-v2 why-qt-benefits__inner_box qt-benefits-color-green"><div class="row"><div class="col-lg-8"><div class="why-qt-benefits__inner_text"><div class="why-qt-benefits__inner_text--heading"><h2></h2><p class="description-primary"></p></div><div class="why-qt-benefits__inner_text--button"><a href="/" class="why-qt-benefits__btnwhite" target="_blank" rel="noopener noreferrer"></a><a href="http://localhost/Qrolic-Technologies/services/" class="why-qt-benefits__btnlink" target="_self" rel="noopener noreferrer"></a></div></div></div><div class="col-lg-4"><div class="why-qt-benefits__inner_image"></div></div></div></div>
<!-- /wp:create-block/why-qrolic-benefits-v2 --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
