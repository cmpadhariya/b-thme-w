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
	'qrolic/author-post-pattern',
	array(
		'title'       => __( 'Author Post', 'qrolic' ),
		'description' => _x( 'This pattern is used to display the current authors post in the author single page.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"author-post","layout":{"type":"default"}} -->
        <div class="wp-block-group author-post"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:heading -->
        <h2 class="wp-block-heading">Author Post</h2>
        <!-- /wp:heading -->
        
        <!-- wp:query {"queryId":8,"query":{"perPage":"3","pages":0,"offset":0,"postType":"blog","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false,"parents":[]},"displayLayout":{"type":"flex","columns":3}} -->
        <div class="wp-block-query"><!-- wp:post-template -->
        <!-- wp:post-featured-image /-->
        
        <!-- wp:group {"className":"content","layout":{"type":"default"}} -->
        <div class="wp-block-group content"><!-- wp:post-date /-->
        
        <!-- wp:post-title /-->
        
        <!-- wp:post-excerpt {"showMoreOnNewLine":false} /--></div>
        <!-- /wp:group -->
        <!-- /wp:post-template -->
        
        <!-- wp:query-pagination {"className":"blog__inner_pagination","layout":{"type":"flex","flexWrap":"wrap","justifyContent":"center","orientation":"horizontal"}} -->
        <!-- wp:query-pagination-previous {"className":"blog__inner_previous"} /-->
        
        <!-- wp:query-pagination-numbers {"className":"blog__inner_number"} /-->
        
        <!-- wp:query-pagination-next {"className":"blog__inner_next"} /-->
        <!-- /wp:query-pagination --></div>
        <!-- /wp:query --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
