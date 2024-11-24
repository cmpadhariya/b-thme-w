<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Career Post Content.
 */
register_block_pattern(
	'qrolic/career-post-content-pattern',
	array(
		'title'       => __( 'Career Post Content', 'qrolic' ),
		'description' => _x( 'This pattern include Career Post Content.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"career__post-content","layout":{"type":"default"}} -->
        <div class="wp-block-group career__post-content"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"career__post-content_inner","layout":{"type":"default"}} -->
        <div class="wp-block-group career__post-content_inner"><!-- wp:paragraph -->
        <p><strong>Description</strong></p>
        <!-- /wp:paragraph -->
        
        <!-- wp:list -->
        <ul><!-- wp:list-item -->
        <li>Should have knowledge of&nbsp;<strong>Bootstrap 4, SCSS/CSS, HTML5, jQuery/JavaScript</strong>and other front end CSS frameworks.</li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li>Understanding of server-side&nbsp;<strong>CSS pre-processing platforms</strong>, such as&nbsp;<strong>LESS and SASS</strong>.</li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li>Good understanding of&nbsp;<strong>cross-browser compatibility issues</strong>&nbsp;and ways to work around them.</li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li>Understanding of code versioning tools, such as Git, Gitlab.</li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li>Candidates with basic PHP, WordPress knowledge would be more preferable.</li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li>Basic understanding of design tools like a sketch, photoshop will be plus.</li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li>Develop code and provide support of our templates</li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li>Good communication skills</li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li>Ability to learn &amp; adopt quickly.</li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li>Collaborate with other team members</li>
        <!-- /wp:list-item --></ul>
        <!-- /wp:list -->
        
        <!-- wp:paragraph -->
        <p><strong>Benefits</strong></p>
        <!-- /wp:paragraph -->
        
        <!-- wp:list -->
        <ul><!-- wp:list-item -->
        <li>Competitive Salary</li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li>Start-up environment which allows for creativity and fun</li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li>A pleasant working environment with enthusiastic and friendly teams</li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li>Possibility of personal growth and to take over responsibilities</li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li>Flexible work hours.</li>
        <!-- /wp:list-item -->
        
        <!-- wp:list-item -->
        <li>Employee referral bonus program</li>
        <!-- /wp:list-item --></ul>
        <!-- /wp:list --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
