<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Portfolio archive post section.
 */
register_block_pattern(
	'qrolic/portfolio-archive-post-pattern',
	array(
		'title'       => __( 'Portfolio archive post', 'qrolic' ),
		'description' => _x( 'This pattern include Portfolio archive post and Categories list .', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"portfolio-post section-padding section-bg","layout":{"type":"default"}} -->
        <div class="wp-block-group portfolio-post section-padding section-bg"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"portfolio-post__inner","layout":{"type":"default"}} -->
        <div class="wp-block-group portfolio-post__inner"><!-- wp:group {"className":"portfolio-post__inner_heading","layout":{"type":"default"}} -->
        <div class="wp-block-group portfolio-post__inner_heading"><!-- wp:heading {"textAlign":"center"} -->
        <h2 class="wp-block-heading has-text-align-center">Our Awesome&nbsp;Works</h2>
        <!-- /wp:heading --></div>
        <!-- /wp:group -->
        
        <!-- wp:query {"queryId":16,"query":{"perPage":3,"pages":0,"offset":0,"postType":"portfolio","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false,"parents":[]},"displayLayout":{"type":"list","columns":3}} -->
        <div class="wp-block-query"><!-- wp:post-template {"className":"portfolio-post__inner_box"} -->
        <!-- wp:group {"className":"portfolio-post__inner_box\u002d\u002dimg","layout":{"type":"default"}} -->
        <div class="wp-block-group portfolio-post__inner_box--img"><!-- wp:post-featured-image {"isLink":true} /--></div>
        <!-- /wp:group -->
        
        <!-- wp:group {"className":"portfolio-post__inner_box\u002d\u002dcontent","layout":{"type":"default"}} -->
        <div class="wp-block-group portfolio-post__inner_box--content"><!-- wp:post-title {"level":4,"isLink":true} /--></div>
        <!-- /wp:group -->
        <!-- /wp:post-template --></div>
        <!-- /wp:query -->
        
        <!-- wp:group {"className":"portfolio-post__inner_btn","layout":{"type":"default"}} -->
        <div class="wp-block-group portfolio-post__inner_btn"><!-- wp:heading {"textAlign":"center","level":6,"className":"button-general"} -->
        <h6 class="wp-block-heading has-text-align-center button-general"><a href="http://localhost/Qrolic-Technologies/portfolio/">View More Project</a></h6>
        <!-- /wp:heading --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
