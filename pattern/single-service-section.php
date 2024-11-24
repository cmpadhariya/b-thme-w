<?php
// Register a block pattern
function qrolic_register_block_pattern() {
	register_block_pattern(
		'qrolic-patterns/single-service-section',
		array(
			'title'       => __( 'single service section', 'qrolic-patterns' ),
			'description' => __( 'A custom service section pattern.', 'qrolic-patterns' ),
			'content'     => '<!-- wp:group {"className":"service-single","layout":{"type":"default"}} -->
            <div class="wp-block-group service-single"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
            <div class="wp-block-group container p-0"><!-- wp:group {"className":"service-single__inner","layout":{"type":"default"}} -->
            <div class="wp-block-group service-single__inner"><!-- wp:group {"className":"row","layout":{"type":"default"}} -->
            <div class="wp-block-group row"><!-- wp:heading {"textAlign":"center","className":"mb-5"} -->
            <h2 class="wp-block-heading has-text-align-center service-single__inner_heading"></h2>
            <!-- /wp:heading -->
            
            <!-- wp:group {"className":"col-lg-3 col-md-6 col-sm-6 ","layout":{"type":"default"}} -->
            <div class="wp-block-group col-lg-3 col-md-6 col-sm-6"><!-- wp:create-block/single-service-section {"iconClass":"icon-Mail-3"} -->
            <div class="service-single__inner_box--details"><div class="service-single__inner_box--details-image"></div><div class="service-single__inner_box--details-icon"><i class="icon-Mail-3"></i></div><div class="service-single__inner_box--details-title"><h2></h2></div><div class="service-single__inner_box--details-details"><p>Every designing code will be written using SASS based modular programming.</p></div></div>
            <!-- /wp:create-block/single-service-section --></div>
            <!-- /wp:group -->
            
            <!-- wp:group {"className":"col-lg-3 col-md-6 col-sm-6 ","layout":{"type":"default"}} -->
            <div class="wp-block-group col-lg-3 col-md-6 col-sm-6"><!-- wp:create-block/single-service-section {"iconClass":"icon-Orientation-3"} -->
            <div class="service-single__inner_box--details"><div class="service-single__inner_box--details-image"></div><div class="service-single__inner_box--details-icon"><i class="icon-Orientation-3"></i></div><div class="service-single__inner_box--details-title"><h2></h2></div><div class="service-single__inner_box--details-details"><p>We designs any website by thinking mobile first design only.</p></div></div>
            <!-- /wp:create-block/single-service-section --></div>
            <!-- /wp:group -->
            
            <!-- wp:group {"className":"col-lg-3 col-md-6 col-sm-6 ","layout":{"type":"default"}} -->
            <div class="wp-block-group col-lg-3 col-md-6 col-sm-6"><!-- wp:create-block/single-service-section {"iconClass":"icon-Coding"} -->
            <div class="service-single__inner_box--details"><div class="service-single__inner_box--details-image"></div><div class="service-single__inner_box--details-icon"><i class="icon-Coding"></i></div><div class="service-single__inner_box--details-title"><h2></h2></div><div class="service-single__inner_box--details-details"><p>Our commented code will be easy for the further development.</p></div></div>
            <!-- /wp:create-block/single-service-section --></div>
            <!-- /wp:group -->
            
            <!-- wp:group {"className":"col-lg-3 col-md-6 col-sm-6 ","layout":{"type":"default"}} -->
            <div class="wp-block-group col-lg-3 col-md-6 col-sm-6"><!-- wp:create-block/single-service-section {"iconClass":"icon-Settings-Window"} -->
            <div class="service-single__inner_box--details"><div class="service-single__inner_box--details-image"></div><div class="service-single__inner_box--details-icon"><i class="icon-Settings-Window"></i></div><div class="service-single__inner_box--details-title"><h2></h2></div><div class="service-single__inner_box--details-details"><p>All code will be supported by almost all modern browsers.</p></div></div>
            <!-- /wp:create-block/single-service-section --></div>
            <!-- /wp:group --></div>
            <!-- /wp:group --></div>
            <!-- /wp:group --></div>
            <!-- /wp:group --></div>
            <!-- /wp:group -->
            ',
			'categories'  => array( 'qrolic-patterns' ),
		)
	);
}
add_action( 'init', 'qrolic_register_block_pattern' );

