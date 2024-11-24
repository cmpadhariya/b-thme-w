<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Author Post section.
 */
register_block_pattern(
	'qrolic/author-post-v2-pattern',
	array(
		'title'       => __( 'Author Post V2', 'qrolic' ),
		'description' => _x( 'This pattern is used to display the current authors post in the author single page in v2.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"author-post-v2 ","layout":{"type":"default"}} -->
        <div class="wp-block-group author-post-v2"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"author-post-v2__inner qt-padding-30 ","layout":{"type":"default"}} -->
        <div class="wp-block-group author-post-v2__inner qt-padding-30"><!-- wp:paragraph {"className":"author-name-heading"} -->
        <p class="author-name-heading"></p>
        <!-- /wp:paragraph -->

        <!-- wp:post-author-name {"className":"author-name-heading"} /-->

        <!-- wp:query {"queryId":8,"query":{"perPage":"3","pages":0,"offset":0,"postType":"blog","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true,"parents":[]},"displayLayout":{"type":"list"}} -->
        <div class="wp-block-query"><!-- wp:post-template -->
        <!-- wp:post-featured-image {"isLink":true,"width":"","height":""} /-->

        <!-- wp:group {"className":"author-post-v2__inner\u002d\u002dmeta-top","layout":{"type":"default"}} -->
        <div class="wp-block-group author-post-v2__inner--meta-top"><!-- wp:post-date {"format":"j F Y"} /-->

        <!-- wp:post-author-name {"className":"author-name"} /--></div>
        <!-- /wp:group -->

        <!-- wp:post-title {"level":3,"isLink":true} /-->

        <!-- wp:post-excerpt {"showMoreOnNewLine":false} /-->

        <!-- wp:group {"className":"author-post-v2__inner\u002d\u002dmeta","layout":{"type":"default"}} -->
        <div class="wp-block-group author-post-v2__inner--meta"><!-- wp:post-terms {"term":"blog-category","className":"description-secondary"} /-->

        <!-- wp:shortcode -->
        [blog_reading_time]
        <!-- /wp:shortcode --></div>
        <!-- /wp:group -->
        <!-- /wp:post-template -->

        <!-- wp:query-pagination {"className":"pagination-top-border   qt-padding-30  pb-0","layout":{"type":"flex","flexWrap":"wrap"}} -->
        <!-- wp:query-pagination-previous {"label":"Previous"} /-->

        <!-- wp:query-pagination-numbers /-->

        <!-- wp:query-pagination-next {"label":"Next"} /-->
        <!-- /wp:query-pagination -->

        <!-- wp:query-no-results -->
        <!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} -->
        <p></p>
        <!-- /wp:paragraph -->
        <!-- /wp:query-no-results --></div>
        <!-- /wp:query --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->' ,
		'categories'  => array( 'qrolic-patterns' ),
	)
);