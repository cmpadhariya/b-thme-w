<?php
// add costom blocks category.
add_filter(
	'block_categories_all',
	function( $categories ) {
		// Adding a new category.
		$categories[] = array(
			'slug'  => 'qrolic',
			'title' => 'Qrolic',
		);
		return $categories;
	}
);
