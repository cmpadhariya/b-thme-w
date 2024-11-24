<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for Problem Section V2.
 */
register_block_pattern(
	'qrolic/problem-section-pattern-v2',
	array(
		'title'       => __( 'Problem Section V2', 'qrolic' ),
		'description' => _x( 'This pattern include problem section block and It has an image and a list of what we serve you.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"problems-section qt-padding-30 section-pt-0","layout":{"type":"default"}} -->
<div class="wp-block-group problems-section qt-padding-30 section-pt-0"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
<div class="wp-block-group container p-0"><!-- wp:group {"className":"problems-section__inner","layout":{"type":"default"}} -->
<div class="wp-block-group problems-section__inner"><!-- wp:group {"className":"row problems-section__custom-row","layout":{"type":"default"}} -->
<div class="wp-block-group row problems-section__custom-row"><!-- wp:group {"className":"col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12","layout":{"type":"default"}} -->
<div class="wp-block-group col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12"><!-- wp:group {"className":"problems-section__inner_blocks","layout":{"type":"default"}} -->
<div class="wp-block-group problems-section__inner_blocks"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
<div class="wp-block-group row"><!-- wp:create-block/problems-section-v2 {"processes":[{"imageUrl":"https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/problem-icon2.webp","iconclass":"","height":"60px","width":"60px","title":"Your Code is Complex","listItems":["Messy or very old code: hard to understand and maintain.","Your Code/Logic is Too Complex:","Difficult to debug and extend."]}],"className":"col-lg-6 col-md-6 col-sm-12 col-12"} -->
<section class="wp-block-create-block-problems-section-v2 col-lg-6 col-md-6 col-sm-12 col-12"><div class="problem-section__block-content"><div class="problem-section__block-content_inner"><div class="problem-section__block-content_inner--img"><img src="https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/problem-icon2.webp" alt="Your Code is Complex" height="60px" width="60px"/></div><div class="problem-section__block-content_inner--list"><h3>Your Code is Complex</h3><ul><li>Messy or very old code: hard to understand and maintain.</li><li>Your Code/Logic is Too Complex:</li><li>Difficult to debug and extend.</li></ul></div></div></div></section>
<!-- /wp:create-block/problems-section-v2 -->

<!-- wp:create-block/problems-section-v2 {"processes":[{"imageUrl":"https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/problem-icon4.webp","height":"60px","width":"60px","title":"Your Current Team is Not Efficient in WordPress","listItems":["Frequent New Errors When Implementing Changes","Increased time and cost to fix errors."],"iconclass":"icon-people"}],"className":"col-lg-6 col-md-6 col-sm-12 col-12"} -->
<section class="wp-block-create-block-problems-section-v2 col-lg-6 col-md-6 col-sm-12 col-12"><div class="problem-section__block-content"><div class="problem-section__block-content_inner"><div class="problem-section__block-content_inner--img"><img src="https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/problem-icon4.webp" alt="Your Current Team is Not Efficient in WordPress" height="60px" width="60px"/></div><div class="problem-section__block-content_inner--list"><h3>Your Current Team is Not Efficient in WordPress</h3><ul><li>Frequent New Errors When Implementing Changes</li><li>Increased time and cost to fix errors.</li></ul></div></div></div></section>
<!-- /wp:create-block/problems-section-v2 -->

<!-- wp:create-block/problems-section-v2 {"processes":[{"iconclass":"","title":"\u003cstrong\u003eYour Website is Not Performing\u003c/strong\u003e","listItems":["Slow loading times.","Poor user experience and lower search engine rankings.","Bad Core Web Vitals (CWV) score"],"imageUrl":"https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/problem-icon1.webp","height":"60px","width":"60px"}],"className":"col-lg-6 col-md-6 col-sm-12 col-12"} -->
<section class="wp-block-create-block-problems-section-v2 col-lg-6 col-md-6 col-sm-12 col-12"><div class="problem-section__block-content"><div class="problem-section__block-content_inner"><div class="problem-section__block-content_inner--img"><img src="https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/problem-icon1.webp" alt="<strong&gt;Your Website is Not Performing</strong&gt;" height="60px" width="60px"/></div><div class="problem-section__block-content_inner--list"><h3><strong>Your Website is Not Performing</strong></h3><ul><li>Slow loading times.</li><li>Poor user experience and lower search engine rankings.</li><li>Bad Core Web Vitals (CWV) score</li></ul></div></div></div></section>
<!-- /wp:create-block/problems-section-v2 -->

<!-- wp:create-block/problems-section-v2 {"processes":[{"imageUrl":"https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/problem-icon3.webp","height":"60px","width":"60px","title":"Not Able to Scale Your Website","listItems":["Website crashes or slows down during peak traffic.","Loss of potential customers due to poor performance.","Your Website is Not Able to Handle Concurrent Users:"]}],"className":"col-lg-6 col-md-6 col-sm-12 col-12"} -->
<section class="wp-block-create-block-problems-section-v2 col-lg-6 col-md-6 col-sm-12 col-12"><div class="problem-section__block-content"><div class="problem-section__block-content_inner"><div class="problem-section__block-content_inner--img"><img src="https://demo.qrolic.com/qrolic/wp-content/uploads/2024/06/problem-icon3.webp" alt="Not Able to Scale Your Website" height="60px" width="60px"/></div><div class="problem-section__block-content_inner--list"><h3>Not Able to Scale Your Website</h3><ul><li>Website crashes or slows down during peak traffic.</li><li>Loss of potential customers due to poor performance.</li><li>Your Website is Not Able to Handle Concurrent Users:</li></ul></div></div></div></section>
<!-- /wp:create-block/problems-section-v2 --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12","layout":{"type":"default"}} -->
<div class="wp-block-group col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12"><!-- wp:group {"className":"problems-section__inner_img","layout":{"type":"default"}} -->
<div class="wp-block-group problems-section__inner_img"><!-- wp:image {"id":10610,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="http://localhost/Qrolic-Technologies/wp-content/uploads/2024/06/Frame-1116606704-1.webp" alt="" class="wp-image-10610"/></figure>
<!-- /wp:image --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
