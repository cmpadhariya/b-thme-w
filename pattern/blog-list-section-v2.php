<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Blog list section.
 */
register_block_pattern(
	'qrolic/blog-list-section-pattern',
	array(
		'title'       => __( 'Blog List Section v2', 'qrolic' ),
		'description' => _x( 'This blog list pattern is used to display the our recent blog post list in the blog archive page.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"blog-list","layout":{"type":"default"}} -->
            <div class="wp-block-group blog-list"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
            <div class="wp-block-group container p-0"><!-- wp:group {"className":"blog-list__inner","layout":{"type":"default"}} -->
            <div class="wp-block-group blog-list__inner"><!-- wp:heading -->
            <h2 class="wp-block-heading"></h2>
            <!-- /wp:heading -->

            <!-- wp:query {"queryId":14,"query":{"perPage":"9","pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"displayLayout":{"type":"list"}} -->
            <div class="wp-block-query"><!-- wp:post-template -->
            <!-- wp:post-featured-image {"isLink":true} /-->

            <!-- wp:group {"className":"blog-list__inner\u002d\u002dmeta-top","layout":{"type":"default"}} -->
            <div class="wp-block-group blog-list__inner--meta-top"><!-- wp:post-date {"format":"j F Y"} /-->

            <!-- wp:post-author-name {"isLink":true} /--></div>
            <!-- /wp:group -->

            <!-- wp:post-title {"level":3,"isLink":true} /-->

            <!-- wp:post-excerpt {"showMoreOnNewLine":false} /-->

            <!-- wp:group {"className":"blog-list__inner\u002d\u002dmeta","layout":{"type":"default"}} -->
            <div class="wp-block-group blog-list__inner--meta"><!-- wp:post-terms {"term":"blog-category","className":"description-secondary"} /-->

            <!-- wp:shortcode -->
            [blog_reading_time]
            <!-- /wp:shortcode --></div>
            <!-- /wp:group -->
            <!-- /wp:post-template -->

            <!-- wp:query-pagination {"layout":{"type":"flex","flexWrap":"wrap"}} -->
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
            <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
