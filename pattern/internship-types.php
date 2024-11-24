<?php
/**
 * This file to display content for gutenberg block register pattern.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Register block pattern for qrolic internship programs page display internship types that the company provides.
 */
register_block_pattern(
	'qrolic/internship-types-pattern',
	array(
		'title'       => __( 'Internship Types', 'qrolic' ),
		'description' => _x( 'This pattern include internship types that the company provides.', 'qrolic' ),
		'content'     => '<!-- wp:group {"className":"internship-types__inner section-padding section-pt-0","layout":{"type":"default"}} -->
        <div class="wp-block-group internship-types__inner section-padding section-pt-0"><!-- wp:group {"className":"container p-0","layout":{"type":"default"}} -->
        <div class="wp-block-group container p-0"><!-- wp:group {"className":"internship-types__inner_top","layout":{"type":"default"}} -->
        <div class="wp-block-group internship-types__inner_top"><!-- wp:heading {"level":3} -->
        <h3 class="wp-block-heading">Internship Types</h3>
        <!-- /wp:heading --></div>
        <!-- /wp:group -->
        
        <!-- wp:group {"className":"row","layout":{"type":"default"}} -->
        <div class="wp-block-group row"><!-- wp:create-block/internship-types {"heading":"Web Designing","items":[{"id":1694434682500,"text":"Html","link":"","description":"In this HTML tutorial, you will find more than 200 examples. With our online \u0022Try it Yourself\u0022 editor, you can edit and test each example yourself!","title":"Html"},{"id":1694490956420,"text":"CSS","link":"","description":"Learn from over 300 examples! With our editor, you can edit the CSS, and click on a button to view the result.","title":"Css"}]} -->
        <div class="col-lg-6 col-md-6 col-12 m-bottom"><div class="internship-types__inner_box"><h4 class="blue bottom">Web Designing</h4><div class="content"><h5>Html</h5><p class="description-primary">In this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!</p></div><div class="content"><h5>Css</h5><p class="description-primary">Learn from over 300 examples! With our editor, you can edit the CSS, and click on a button to view the result.</p></div></div></div>
        <!-- /wp:create-block/internship-types -->
        
        <!-- wp:create-block/internship-types {"heading":"Web Devlopment","items":[{"id":1694491021354,"text":"PHP","link":"","description":"With PHP you are not limited to output HTML. You can output images or PDF files. You can also output any text, such as XHTML and XML.","title":"Php"}]} -->
        <div class="col-lg-6 col-md-6 col-12 m-bottom"><div class="internship-types__inner_box"><h4 class="blue bottom">Web Devlopment</h4><div class="content"><h5>Php</h5><p class="description-primary">With PHP you are not limited to output HTML. You can output images or PDF files. You can also output any text, such as XHTML and XML.</p></div></div></div>
        <!-- /wp:create-block/internship-types --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group --></div>
        <!-- /wp:group -->',
		'categories'  => array( 'qrolic-patterns' ),
	)
);
