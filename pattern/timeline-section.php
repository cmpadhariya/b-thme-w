<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for timeline section.
 */
register_block_pattern(
	'qrolic/timeline-section-pattern',
	array(
		'title'       => __( 'Timeline section', 'qrolic' ),
		'description' => _x( 'This pattern is used by us to define company year wise growth and includes year, title and short description.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"timeline","layout":{"type":"default"}} -->
        <div class="wp-block-group timeline"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:create-block/timeline-section {"year":"","title":"","description":"","alignment":"right"} -->
        <div class="timeline__inner"><div class="timeline__year"><h3></h3></div><div class="timeline__description alignright"><h4></h4><p class="description-primary"></p></div></div>
        <!-- /wp:create-block/timeline-section -->
        
        <!-- wp:create-block/timeline-section {"year":"","title":"","description":""} -->
        <div class="timeline__inner"><div class="timeline__year"><h3></h3></div><div class="timeline__description alignleft"><h4></h4><p class="description-primary"></p></div></div>
        <!-- /wp:create-block/timeline-section -->
        
        <!-- wp:create-block/timeline-section {"year":"","title":"","description":"","alignment":"right"} -->
        <div class="timeline__inner"><div class="timeline__year"><h3></h3></div><div class="timeline__description alignright"><h4></h4><p class="description-primary"></p></div></div>
        <!-- /wp:create-block/timeline-section -->
        
        <!-- wp:create-block/timeline-section {"year":"","title":"","description":""} -->
        <div class="timeline__inner"><div class="timeline__year"><h3></h3></div><div class="timeline__description alignleft"><h4></h4><p class="description-primary"></p></div></div>
        <!-- /wp:create-block/timeline-section --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);


