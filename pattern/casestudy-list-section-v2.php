<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Case Study list section.
 */
register_block_pattern(
	'qrolic/casestudy-list-section-pattern',
	array(
		'title'       => __( 'Case Study List Section v2', 'qrolic' ),
		'description' => _x( 'This case study list pattern is used to display the our recent case studies list in the case study archive page.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"casestudy-list","layout":{"type":"default"}} -->
                  <div class="wp-block-group casestudy-list"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
                  <div class="wp-block-group container p-0"><!-- wp:group {"className":"casestudy-list__inner","layout":{"type":"default"}} -->
                  <div class="wp-block-group casestudy-list__inner"><!-- wp:heading -->
                  <h2 class="wp-block-heading"></h2>
                  <!-- /wp:heading -->

                  <!-- wp:query {"queryId":14,"query":{"perPage":"4","pages":0,"offset":0,"postType":"case-studies","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false,"parents":[]},"displayLayout":{"type":"list"}} -->
                  <div class="wp-block-query"><!-- wp:post-template -->
                  <!-- wp:post-featured-image {"isLink":true} /-->

                  <!-- wp:post-title {"level":3,"isLink":true} /-->

                  <!-- wp:post-terms {"term":"case-studies_category"} /-->

                  <!-- wp:read-more {"content":"Read Case Study"} /-->
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
