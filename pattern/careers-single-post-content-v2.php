<?php

/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Careers single post content section.
 */
register_block_pattern(
	'qrolic/careers-single-post-content-v2',
	array(
		'title'       => __( 'Careers single post content v2', 'qrolic' ),
		'description' => _x( 'This block pattern is for the post content in the single careers page and this block pattern consists of a list, heading and paragraph', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"single-careers-content","layout":{"type":"default"}} -->
<div class="wp-block-group single-careers-content"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"single-careers-content__inner","layout":{"type":"default"}} -->
<div class="wp-block-group single-careers-content__inner"><!-- wp:group {"className":"row justify-content-between","layout":{"type":"default"}} -->
<div class="wp-block-group row justify-content-between"><!-- wp:group {"className":"col-xl-7 col-lg-7 col-md-12","layout":{"type":"default"}} -->
<div class="wp-block-group col-xl-7 col-lg-7 col-md-12"><!-- wp:group {"className":"single-careers-content__inner_content","layout":{"type":"default"}} -->
<div class="wp-block-group single-careers-content__inner_content"><!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"single-careers-content__inner_content\u002d\u002dbox","layout":{"type":"default"}} -->
<div class="wp-block-group single-careers-content__inner_content--box"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"></h3>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true,"start":1} -->
<ol start="1"><!-- wp:list-item -->
<li></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"single-careers-content__inner_content\u002d\u002dbox","layout":{"type":"default"}} -->
<div class="wp-block-group single-careers-content__inner_content--box"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"></h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-xl-5 col-lg-5 col-md-12","layout":{"type":"default"}} -->
<div class="wp-block-group col-xl-5 col-lg-5 col-md-12"><!-- wp:create-block/careers-single-sidebar-v2 {"summaryItems":[{"title":"Location","description":"Rajkot","className":"icon-clock"},{"title":"Job Type","description":"Full-time","className":"icon-our-vision"},{"title":"Vacancy","description":"01","className":"icon-newspaper-1"},{"title":"Working Hours","description":"9:00-6:00","className":"icon-benefits-users"},{"title":"Experience","description":"01+ Year Experience Required","className":"icon-newspaper"}],"benefitsItems":[{"title":"Competitive Salary","description":"","className":"icon-money"},{"title":"Start-up environment which allows for creativity and fun","description":"","className":"icon-clock"},{"title":"Free exercises file \u0026amp; downloadable resources","description":"","className":"icon-newspaper-1"},{"title":"A pleasant working environment with enthusiastic and friendly teams","description":"","className":"icon-staff-augmentation"},{"title":"Possibility of personal growth and to take over responsibilities","description":"","className":"icon-desktop"},{"title":"Flexible work hours.","description":"","className":"icon-newspaper"},{"title":"Employee referral bonus program","description":"","className":"icon-docs"}],"shareItems":[{"link":"/","className":"icon-facebook"},{"link":"/","className":"icon-twitter-v2"},{"link":"/","className":"icon-whatsapp"},{"link":"/","className":"icon-mail"}],"summaryTitle":"Job Summary:","benefitTitle":"Benefits:","buttonText":"Apply Now","buttonLink":"/","shareTitle":"Share this job:","shareItemsCopy":"Copy link"} -->
<section class="wp-block-create-block-careers-single-sidebar-v2"><div class="careers-single-sidebar"><hr/><div class="careers-single-sidebar_summary"><h4>Job Summary:</h4><ul><li><i class="icon-clock"></i><p><span class="summary-title">Location</span><span class="summary-discription">Rajkot</span></p></li><li><i class="icon-our-vision"></i><p><span class="summary-title">Job Type</span><span class="summary-discription">Full-time</span></p></li><li><i class="icon-newspaper-1"></i><p><span class="summary-title">Vacancy</span><span class="summary-discription">01</span></p></li><li><i class="icon-benefits-users"></i><p><span class="summary-title">Working Hours</span><span class="summary-discription">9:00-6:00</span></p></li><li><i class="icon-newspaper"></i><p><span class="summary-title">Experience</span><span class="summary-discription">01+ Year Experience Required</span></p></li></ul></div><hr/><div class="careers-single-sidebar_benefits"><h4>Benefits:</h4><ul><li><i class="icon-money"></i><p><span class="benefits-title">Competitive Salary</span></p></li><li><i class="icon-clock"></i><p><span class="benefits-title">Start-up environment which allows for creativity and fun</span></p></li><li><i class="icon-newspaper-1"></i><p><span class="benefits-title">Free exercises file &amp; downloadable resources</span></p></li><li><i class="icon-staff-augmentation"></i><p><span class="benefits-title">A pleasant working environment with enthusiastic and friendly teams</span></p></li><li><i class="icon-desktop"></i><p><span class="benefits-title">Possibility of personal growth and to take over responsibilities</span></p></li><li><i class="icon-newspaper"></i><p><span class="benefits-title">Flexible work hours.</span></p></li><li><i class="icon-docs"></i><p><span class="benefits-title">Employee referral bonus program</span></p></li></ul></div><hr/><div class="careers-single-sidebar_btn"><a href="/" target="_self" rel="noreferrer noopener">Apply Now</a></div><div class="careers-single-sidebar_share"><h4>Share this job:</h4><ul><li><button id="share-copy-link" class="share-copy-link">Copy link</button></li><li><a href="/" class="icon-facebook" target="_blank" rel="noreferrer noopener"></a></li><li><a href="/" class="icon-twitter-v2" target="_blank" rel="noreferrer noopener"></a></li><li><a href="/" class="icon-whatsapp" target="_blank" rel="noreferrer noopener"></a></li><li><a href="/" class="icon-mail" target="_blank" rel="noreferrer noopener"></a></li></ul></div></div></section>
<!-- /wp:create-block/careers-single-sidebar-v2 --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
