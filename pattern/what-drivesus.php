<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for What Drives us section.
 */
register_block_pattern(
	'qrolic/qrolic-what-drivesus-pattern',
	array(
		'title'       => __( 'What Drives us', 'qrolic' ),
		'description' => _x( 'This pattern include main section title and main section description in contact related content.', 'qrolic' ),
		'content'     => '<!-- wp:create-block/what-drivesus {"heading":"","subheading":"","discription":"","subheading2":"","discription2":"","subheading3":"","discription3":""} -->
		<div class="what-drivesus section-padding"><div class="container p-0"><div class="what-drivesus__inner"><div class="what-drivesus__inner_heading"><h2 class="wp-block-create-block-what-drivesus"></h2></div><div class="what-drivesus__inner_content"><div class="row"><div class="col-lg-4 col-md-4 col-12"><div class="what-drivesus__inner_content--text"><h4 class="wp-block-create-block-what-drivesus"></h4><p class="description-primary"></p></div></div><div class="col-lg-4 col-md-4 col-12"><div class="what-drivesus__inner_content--text"><h4 class="wp-block-create-block-what-drivesus"></h4><p class="description-primary"></p></div></div><div class="col-lg-4 col-md-4 col-12"><div class="what-drivesus__inner_content--text"><h4 class="wp-block-create-block-what-drivesus"></h4><p class="description-primary"></p></div></div></div></div></div></div></div>
		<!-- /wp:create-block/what-drivesus -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);


