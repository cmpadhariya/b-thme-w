<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for logos-section V2 (Companies Logos).
 */
register_block_pattern(
	'qrolic/logos-section-v2-pattern',
	array(
		'title'       => __( 'Logos Section V2', 'qrolic' ),
		'description' => _x( 'This pattern can be customized by adding the logos of the companies that trust your agency.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"logos-section gray-logos-section section-padding section-bg","layout":{"type":"default"}} -->
<div class="wp-block-group logos-section gray-logos-section section-padding section-bg"><!-- wp:group {"className":"container p-0 ","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"logos-section__inner","layout":{"type":"default"}} -->
<div class="wp-block-group logos-section__inner"><!-- wp:group {"className":"logos-section__inner_discription","layout":{"type":"default"}} -->
<div class="wp-block-group logos-section__inner_discription"><!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">Our Agency is trusted by these companies</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"logos-section__inner_img","layout":{"type":"default"}} -->
<div class="wp-block-group logos-section__inner_img"><!-- wp:image {"id":10346,"width":241,"height":38,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full is-resized"><img src="http://localhost/Qrolic-Technologies/wp-content/uploads/2024/06/financer.webp" alt="financer logo" class="wp-image-10346" width="241" height="38" title="financer-company-logo"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10347,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="http://localhost/Qrolic-Technologies/wp-content/uploads/2024/06/91mobile.webp" alt="91mobile-company-logo" class="wp-image-10347"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10348,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="http://localhost/Qrolic-Technologies/wp-content/uploads/2024/06/vic-tec.webp" alt="vic-tec-company-logo" class="wp-image-10348"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10349,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="http://localhost/Qrolic-Technologies/wp-content/uploads/2024/06/staggering.webp" alt="staggering--company-logo" class="wp-image-10349"/></figure>
<!-- /wp:image --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
