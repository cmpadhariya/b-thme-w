<?php

/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Services Submenu Section V2 for Services Submenu showing in Header.
 */
register_block_pattern(
    'qrolic/services-submenu-v2',
    array(
        'title' => __( 'Services Submenu Section V2', 'qrolic' ),
        'description' => _x( 'This pattern shows a submenu of the service menu in header section.', 'qrolic' ),
        'content' => '<!-- wp:group {"className":"services-submenu","layout":{"type":"default"}} -->
<div class="wp-block-group services-submenu"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"services-submenu__inner","layout":{"type":"default"}} -->
<div class="wp-block-group services-submenu__inner"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
<div class="wp-block-group row"><!-- wp:group {"className":"col col-md-9","layout":{"type":"default"}} -->
<div class="wp-block-group col col-md-9"><!-- wp:group {"className":"services-submenu__inner_navigation","layout":{"type":"default"}} -->
<div class="wp-block-group services-submenu__inner_navigation"><!-- wp:paragraph {"className":"services-submenu__inner_description"} -->
<p class="services-submenu__inner_description">Services<strong> We Love to Deliver</strong></p>
<!-- /wp:paragraph -->

<!-- wp:navigation {"ref":11986,"overlayMenu":"never"} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col col-md-3","layout":{"type":"default"}} -->
<div class="wp-block-group col col-md-3"><!-- wp:group {"className":"services-submenu__inner_content","layout":{"type":"default"}} -->
<div class="wp-block-group services-submenu__inner_content"><!-- wp:paragraph {"className":"services-submenu__inner_description"} -->
<p class="services-submenu__inner_description">A quick hello from our CEO</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img alt=""/></figure>
<!-- /wp:image -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>Discover us in 60 seconds.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>how we can support You</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph {"className":"services-submenu__inner_btn"} -->
<p class="services-submenu__inner_btn"><a href="/">Watch a Video</a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
        'categories' => array('qrolic-patterns'),
    )
);
