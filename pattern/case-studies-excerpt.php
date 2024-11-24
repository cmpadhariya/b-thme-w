<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern Case Studies Excerpt section.
 */
register_block_pattern(
	'qrolic/case-studies-excerpt-pattern',
	array(
		'title'       => __( 'Case Studies Excerpt', 'qrolic' ),
		'description' => _x( 'This pattern includes a block and In this block, you add Case Studies Excerpt and title, and button.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"casestudy-single section-padding section-bg","layout":{"type":"default"}} -->
        <div class="wp-block-group casestudy-single section-padding section-bg"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"casestudy-single__inner ","layout":{"type":"default"}} -->
        <div class="wp-block-group casestudy-single__inner"><!-- wp:group {"className":"casestudy-single__inner_heading coman-padding section-pt-0 section-padding-rl-0","layout":{"type":"default"}} -->
        <div class="wp-block-group casestudy-single__inner_heading coman-padding section-pt-0 section-padding-rl-0"><!-- wp:heading -->
        <h2 class="wp-block-heading">Case Study</h2>
        <!-- /wp:heading --></div>
        <!-- /wp:group -->
        
        <!-- wp:create-block/single-case-study {"selectedPost":"8096","className":"section-padding"} /--></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
