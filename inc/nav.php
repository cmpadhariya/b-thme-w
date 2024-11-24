<?php
/**
 *  Header menu.
 *
 *  Register custom header menu
 */
function qrolic_header_menu() {
	register_nav_menu( 'qrolic-header-menu', __( 'qrolic header Menu' ) );
}
add_action( 'init', 'qrolic_header_menu' );


/**
 *  Footer menu.
 *
 *  Register custom footer menu
 */
function qrolic_footer_menu() {
	register_nav_menus(
		array(
			'footer-menu-our-services' => __( 'Our Services', 'qrolic' ),
			'footer-menu'              => __( 'Footer Menu', 'qrolic' ),
		)
	);
}
add_action( 'init', 'qrolic_footer_menu' );
