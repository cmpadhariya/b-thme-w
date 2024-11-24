<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Page Headers section.
 */
register_block_pattern(
	'qrolic/page-headers-section-v2',
	array(
		'title'       => __( 'Page Headers section v2', 'qrolic' ),
		'description' => _x( 'This pattern include main section title and main section description in contact related content.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"page-header-section  section-padding section-pb-0 page-banner-bg ","layout":{"type":"default"}} -->
<div class="wp-block-group page-header-section section-padding section-pb-0 page-banner-bg"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
<div class="wp-block-group row"><!-- wp:group {"className":"col-12 col-md-10 col-lg-9 col-xl-10 mx-auto","layout":{"type":"default"}} -->
<div class="wp-block-group col-12 col-md-10 col-lg-9 col-xl-10 mx-auto"><!-- wp:group {"className":"page-header-section__inner ","layout":{"type":"default"}} -->
<div class="wp-block-group page-header-section__inner"><!-- wp:group {"className":"page-header-section__inner\u002d\u002dsubtitle  subtitle","layout":{"type":"default"}} -->
<div class="wp-block-group page-header-section__inner--subtitle subtitle"><!-- wp:paragraph {"align":"center","className":"subtitle blog-icon"} -->
<p class="has-text-align-center subtitle blog-icon"></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"page-header-section__inner\u002d\u002dheading","layout":{"type":"default"}} -->
<div class="wp-block-group page-header-section__inner--heading"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center"></h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:post-terms {"term":"blog-category","className":"taxonomy-blog-category-heading"} /-->

<!-- wp:group {"className":"description-primary page-header-section__inner\u002d\u002dtext ","layout":{"type":"default"}} -->
<div class="wp-block-group description-primary page-header-section__inner--text"><!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
