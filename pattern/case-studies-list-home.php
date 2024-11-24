<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for case-studies list section to display case study post list in home page.
 */
register_block_pattern(
	'qrolic/case-studies-list-home-pattern',
	array(
		'title'       => __( 'Case Studies List Home', 'qrolic' ),
		'description' => _x( 'This pattern include case-studies list section to display case study post list in home page.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"case-studies-list","layout":{"type":"default"}} -->
        <div class="wp-block-group case-studies-list"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"case-studies-list__top","layout":{"type":"default"}} -->
        <div class="wp-block-group case-studies-list__top"><!-- wp:heading -->
        <h2 class="wp-block-heading"></h2>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p><a href="http://localhost/Qrolic-Technologies/case-studies/" data-type="URL" data-id="http://localhost/Qrolic-Technologies/case-studies/">View All</a></p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:group -->
        
        <!-- wp:query {"queryId":11,"query":{"perPage":"2","pages":0,"offset":0,"postType":"case-studies","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false,"parents":[]},"displayLayout":{"type":"list"},"className":"case-studies-list__inner"} -->
        <div class="wp-block-query case-studies-list__inner"><!-- wp:post-template {"className":"case-studies-list__inner_loop"} -->
        <!-- wp:post-title {"level":4,"isLink":true,"className":"case-studies-list__inner_loop\u002d\u002dtitle"} /-->
        
        <!-- wp:post-excerpt {"moreText":"Keep Reading","className":"case-studies-list__inner_loop\u002d\u002dexcerpt"} /-->
        <!-- /wp:post-template --></div>
        <!-- /wp:query --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
