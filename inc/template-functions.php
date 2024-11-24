<?php

/**
 * This file to display Generate breadcrumbs.
 *
 * @package qrolic
 * @since 1.0.0
 */

/**
 * Generate breadcrumbs
 */
function qrolic_get_breadcrumb()
{
	ob_start();
	echo '<div class="qt-breadcrumbs">';
	echo '<a href="' . home_url() . '">Home</a>  ';

	if (is_post_type_archive() || is_single()) {
		echo '&nbsp;&nbsp;&#187;&nbsp;&nbsp;';
		echo '<a href="' . get_post_type_archive_link(get_post_type()) . '">' . get_post_type() . '</a>';
		if (is_single()) {
			echo ' &nbsp;&nbsp;&#187;&nbsp;&nbsp; ';
			the_title();
		}
	} elseif (is_page()) {
		echo '&nbsp;&nbsp;&#187;&nbsp;&nbsp;';
		echo esc_html(get_the_title());
	} elseif (is_search()) {
		echo '&nbsp;&nbsp;&#187;&nbsp;&nbsp;Search Results for... ';
		echo '"<em>' . esc_html(get_search_query()) . '</em>"';
	} else {
		echo '&nbsp;&nbsp;&#187;&nbsp;&nbsp;';
		echo '<a href="' . get_permalink() . '">' . get_post_type() . '</a>  ';
	}

	echo '</div>';
	return ob_get_clean();
}

if (!function_exists('is_plugin_active')) {
	include_once ABSPATH . 'wp-admin/includes/plugin.php';
}

if (!is_plugin_active('seo-by-rank-math/rank-math.php')) {
	function register_custom_shortcode()
	{
		add_shortcode('breadcrumb', 'qrolic_get_breadcrumb');
	}
	add_action('init', 'register_custom_shortcode');
}



// Blog page excerpt set contant.
function qrolic_blog_custom_excerpt_length($length)
{
	return 20;
}
add_filter('excerpt_length', 'qrolic_blog_custom_excerpt_length', 999);
// blog page remove excerpt [].
function qrolic_blog_custom_excerpt_more($more)
{
	return '...';
}
add_filter('excerpt_more', 'qrolic_blog_custom_excerpt_more');

// Error : Element style not allowed as child of element body in this context. (Suppressing further errors from this subtree.).
// To solve this error the following function has been removed from the theme-template.php file.
remove_action('wp_footer', 'the_block_template_skip_link');


/**
 * The code you've provided is using the wp_get_attachment_image_attributes filter to modify the alt text of images when displaying them in WordPress.
 * This code snippet is designed to get the post thumbnail's ID, retrieve its alt text, and set it as the alt attribute of the image.
 */
function qrolic_custom_filter_image_alt_text($attr, $attachment)
{
	$thumbnail_id = get_post_thumbnail_id(get_the_ID());
	$alt_text     = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
	if (!empty($alt_text)) {
		$attr['alt'] = $alt_text;
	}
	return $attr;
}

add_filter('wp_get_attachment_image_attributes', 'qrolic_custom_filter_image_alt_text', 10, 2);

/**
 * Adding this code to the theme's PHP file to enable SVG uploads.
 */
function qrolic_allow_svg_upload($mimes)
{
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter('upload_mimes', 'qrolic_allow_svg_upload');

/**
 * We use this code in the author page, when the current author's post is fetched, this code will fetch the post from the blog post instead of the default post.
 */
function qrolic_get_only_author_blog_articles($query)
{
	if ($query->is_author()) {
		$query->set('post_type', array('blog'));
	}
}
add_action('pre_get_posts', 'qrolic_get_only_author_blog_articles');

/**
 * Below code we use to allow post comments in blog post.
 */
function qrolic_blog_post_comments_open($open, $post_id)
{

	$post = get_post($post_id);

	if ('blog' == $post->post_type) {
		$open = true;
	}

	return $open;
}
add_filter('comments_open', 'qrolic_blog_post_comments_open', 10, 2);


/**
 * Google reCAPTCHA: Add widget before the submit button
 */
function qrolic_add_google_recaptcha($submit_field)
{
	$submit_field['submit_field'] = '<div class="g-recaptcha" data-sitekey="6LdyuFUpAAAAAOhAGZsLGEZjRfEUfwtCf6Gmcr-x"></div>' . $submit_field['submit_field'];

	return $submit_field;
}

if (!is_user_logged_in()) {
	add_filter(
		'comment_form_defaults',
		function ($defaults) {
			return qrolic_add_google_recaptcha($defaults, 'commentform', 'submit');
		}
	);
}

/**
 * Google reCAPTCHA: verify response and validate comment submission
 */
function qrolic_is_valid_captcha_response($captcha)
{
	$captcha_postdata = http_build_query(
		array(
			'secret'   => '6LdyuFUpAAAAAHRvSRTPS9vj5hsDBXHjk5OhMjwq',
			'response' => $captcha,
			'remoteip' => $_SERVER['REMOTE_ADDR'],
		)
	);
	$captcha_opts     = array(
		'http' => array(
			'method'  => 'POST',
			'header'  => 'Content-type: application/x-www-form-urlencoded',
			'content' => $captcha_postdata,
		),
	);
	$captcha_context  = stream_context_create($captcha_opts);
	$captcha_response = json_decode(file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $captcha_context), true);
	if (!empty($captcha_response['success'])) {
		return true;
	} else {
		return false;
	}
}

function qrolic_verify_google_recaptcha()
{
	$recaptcha = $_POST['g-recaptcha-response'];
	if (empty($recaptcha)) {
		wp_die(__("<b>ERROR: </b><b>Please select captcha checkbox.</b><p><a href='javascript:history.back()'>« Back</a></p>"));
	} elseif (!qrolic_is_valid_captcha_response($recaptcha)) {
		wp_die(__('<b>Sorry, spam detected!</b>'));
	}
}

if (!is_user_logged_in()) {
	add_action('pre_comment_on_post', 'qrolic_verify_google_recaptcha');
}


/**
 * This function is used for register testimonials post type metabox.
 */
function qrolic_testimonial_metabox()
{
	add_meta_box(
		'client_position',       // Unique ID for the metabox
		'Client Position',       // Title of the metabox
		'qrolic_testimonial_metabox_callback', // Callback function
		'testimonial',                  // Post type (change to your custom post type)
		'normal',                // Context (where to show the box)
		'high'                   // Priority (high, core, default, low)
	);
}
add_action('add_meta_boxes', 'qrolic_testimonial_metabox');

/**
 * This function is used for testimonials post type metabox callback function.
 */
function qrolic_testimonial_metabox_callback($post)
{
	// Add a nonce field for security
	wp_nonce_field('save_testimonial_text_metabox', 'testimonial_metabox_nonce');

	// Retrieve the current value of the meta field
	$value = get_post_meta($post->ID, 'client_position', true);

	// Display the form field
	echo '<label for="testimonial_text_metabox_field">Enter text here:</label>';
	echo '<input type="text" id="testimonial_text_metabox_field" name="testimonial_text_metabox_field" value="' . esc_attr($value) . '" size="25" />';
}
add_action('save_post', 'qrolic_save_testimonial_metabox');

/**
 * This function is used for save testimonials post type metabox.
 */
function qrolic_save_testimonial_metabox($post_id)
{
	// Verify nonce
	$nonce = filter_input(INPUT_POST, 'testimonial_metabox_nonce', FILTER_SANITIZE_STRING);
	if (!$nonce || !wp_verify_nonce($nonce, 'save_testimonial_text_metabox')) {
		return;
	}

	// Check the user's permissions
	if (!current_user_can('edit_post', $post_id)) {
		return;
	}

	// Check if the field is set and save/update the data
	$testimonial_text = filter_input(INPUT_POST, 'testimonial_text_metabox_field', FILTER_SANITIZE_STRING);
	if (null !== $testimonial_text) {
		update_post_meta($post_id, 'client_position', $testimonial_text);
	} else {
		delete_post_meta($post_id, 'client_position');
	}
}


/**
 * Register the team_position and team_order meta fields with REST API support.
 * These meta boxes are registered for team posts.
 * These are created to set the order in the team post and to set the position of the team member.
 */
function qrolic_register_team_meta_fields()
{
	register_post_meta(
		'teams',
		'team_position',
		array(
			'type'              => 'string',
			'single'            => true,
			'show_in_rest'      => true,
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	register_post_meta(
		'teams',
		'team_order',
		array(
			'type'              => 'number',
			'single'            => true,
			'show_in_rest'      => true,
			'sanitize_callback' => 'sanitize_number_int',
		)
	);
}
add_action('init', 'qrolic_register_team_meta_fields');

/**
 * Register and display the Team Position metabox.
 */
function qrolic_team_position_metabox()
{
	add_meta_box(
		'team_position',
		__('Team Position', 'our-team-v2'),
		'qrolic_team_metabox_callback',
		'teams',
		'normal',
		'high'
	);
}
add_action('add_meta_boxes', 'qrolic_team_position_metabox');

function qrolic_team_metabox_callback($post)
{
	wp_nonce_field('save_team_text_metabox', 'team_metabox_nonce');
	$value = get_post_meta($post->ID, 'team_position', true);
	echo '<label for="team_text_metabox_field">' . esc_html__('Enter text here:', 'our-team-v2') . '</label>';
	echo '<input type="text" id="team_text_metabox_field" name="team_text_metabox_field" value="' . esc_attr($value) . '" size="25" />';
}

function qrolic_save_team_metabox($post_id)
{
	if (!isset($_POST['team_metabox_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['team_metabox_nonce'])), 'save_team_text_metabox')) {
		return;
	}
	if (!current_user_can('edit_post', $post_id)) {
		return;
	}

	$team_text = filter_input(INPUT_POST, 'team_text_metabox_field', FILTER_SANITIZE_STRING);
	if ($team_text !== null) {
		update_post_meta($post_id, 'team_position', $team_text);
	} else {
		delete_post_meta($post_id, 'team_position');
	}
}
add_action('save_post', 'qrolic_save_team_metabox');

/**
 * Register and display the Team Order metabox.
 */
function qrolic_team_order_custom_meta_box()
{
	add_meta_box(
		'team_order_meta_box',
		__('Team Order', 'our-team-v2'),
		'qrolic_display_order_meta_box',
		'teams',
		'side',
		'high'
	);
}
add_action('add_meta_boxes', 'qrolic_team_order_custom_meta_box');

function qrolic_display_order_meta_box($post)
{
	$order = get_post_meta($post->ID, 'team_order', true);
	echo '<label for="team_order">' . esc_html__('Order:', 'our-team-v2') . '</label>';
	echo '<input type="number" name="team_order" id="team_order" value="' . esc_attr($order) . '" />';
}

function qrolic_save_team_order_meta_box($post_id)
{
	if (!isset($_POST['team_metabox_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['team_metabox_nonce'])), 'save_team_text_metabox')) {
		return;
	}
	if (!current_user_can('edit_post', $post_id)) {
		return;
	}

	$team_order = filter_input(INPUT_POST, 'team_order', FILTER_SANITIZE_NUMBER_INT);
	if ($team_order !== null) {
		update_post_meta($post_id, 'team_order', $team_order);
	}
}
add_action('save_post', 'qrolic_save_team_order_meta_box');

function qrolic_register_testimonials_client_position_meta()
{
	register_post_meta(
		'testimonial',
		'client_position',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);
}
add_action('init', 'qrolic_register_testimonials_client_position_meta');


/**
 * Registers the 'client_quotes' meta field for the 'testimonial' post type.
 *
 * @since 1.0.0
 */
function qrolic_register_testimonials_client_quotes_meta()
{
	register_post_meta(
		'testimonial',
		'client_quotes',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);
}
add_action('init', 'qrolic_register_testimonials_client_quotes_meta');


/**
 * Adds a metabox for the client_quotes meta field.
 *
 * @since 1.0.0
 */
function qrolic_testimonial_client_quotes_metabox()
{
	add_meta_box(
		'client_quotes',
		'Client Quotes',
		'qrolic_testimonial_client_quotes_callback',
		'testimonial',
		'normal',
		'high'
	);
}
add_action('add_meta_boxes', 'qrolic_testimonial_client_quotes_metabox');


/**
 * Callback function to render the content of the client quotes metabox.
 *
 * @param WP_Post $post The post object.
 * @since 1.0.0
 */
function qrolic_testimonial_client_quotes_callback($post)
{

	wp_nonce_field('save_client_quotes_metabox', 'client_quotes_metabox_nonce');

	$value = get_post_meta($post->ID, 'client_quotes', true);

	echo '<label for="client_quotes_metabox_field">' . esc_html__('Enter quotes here:', 'qrolic') . '</label>';
	echo '<input type="text" id="client_quotes_metabox_field" name="client_quotes_metabox_field" value="' . esc_attr($value) . '" size="50" />';
}

/**
 * Save the meta field value.
 */
function qrolic_save_testimonial_client_quotes_metabox($post_id)
{
	$nonce = filter_input(INPUT_POST, 'client_quotes_metabox_nonce', FILTER_SANITIZE_STRING);
	if (!$nonce || !wp_verify_nonce($nonce, 'save_client_quotes_metabox')) {
		return;
	}

	if (!current_user_can('edit_post', $post_id)) {
		return;
	}

	$client_quotes = filter_input(INPUT_POST, 'client_quotes_metabox_field', FILTER_SANITIZE_STRING);
	if (null !== $client_quotes) {
		update_post_meta($post_id, 'client_quotes', $client_quotes);
	} else {
		delete_post_meta($post_id, 'client_quotes');
	}
}
add_action('save_post', 'qrolic_save_testimonial_client_quotes_metabox');

/**
 * This function is used to display reading time of blog post in blog archive(list) page.
 *
 * @since 2.0.0
 */
function qrolic_blog_post_reading_time($atts)
{

	$conteudo        = get_the_content();
	$numero_palavras = str_word_count($conteudo);
	$tempo_leitura   = ceil($numero_palavras / 100);

	if ($tempo_leitura < 1) {
		$tempo_leitura = 'min read';
	} else {
		$tempo_leitura = $tempo_leitura . ' min read';
	}

	return $tempo_leitura;
}
add_shortcode('blog_reading_time', 'qrolic_blog_post_reading_time');

/**
 * Adds a meta box for the Call to Action Sidebar Section Heading meta field.
 *
 * @since 1.0.0
 */
function qrolic_add_sidebar_heading_meta_box() {
	add_meta_box(
		'qrolic_sidebar_heading_meta_box',
		'Call to Action Sidebar Section',
		'qrolic_sidebar_heading_meta_box_html',
		'blog',
		'side',
		'default'
	);
}

/**
 * Displays the HTML for the Call to Action Sidebar Section Heading meta box.
 *
 * @param WP_Post $post The current post object.
 *
 * @since 1.0.0
 */
function qrolic_sidebar_heading_meta_box_html( $post ) {
    // Retrieve current meta value
    $heading     = get_post_meta( $post->ID, '_qrolic_sidebar_section_heading', true );
	$description = get_post_meta( $post->ID, 'qrolic_sidebar_section_description', true );

    // Display the form field
    ?>
	<hr>
    <label for="qrolic_sidebar_section_heading"><?php echo __( 'Call to Action Sidebar Section Heading', 'qrolic' ); ?></label>
    <input type="text" id="qrolic_sidebar_section_heading" name="qrolic_sidebar_section_heading" value="<?php echo esc_attr( $heading ); ?>" />
	</br>
	<hr>
	<label for="qrolic_sidebar_section_description"><?php echo __( 'Call to Action Sidebar Section Description', 'qrolic' ); ?></label>
    <input type="text" id="qrolic_sidebar_section_description" name="qrolic_sidebar_section_description" value="<?php echo esc_attr( $description ); ?>" />
    <?php
}

/**
 * Saves the Call to Action Sidebar Section Heading meta field data.
 *
 * @param int $post_id The ID of the post being saved.
 *
 * @since 1.0.0
 */
function qrolic_save_sidebar_heading_meta_box_data( $post_id ) {

	// Check the user's permissions.
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	// Sanitize and save the input.
	if ( isset( $_POST['qrolic_sidebar_section_description'] ) ) {
		$description = sanitize_text_field( $_POST['qrolic_sidebar_section_description'] );
		update_post_meta( $post_id, 'qrolic_sidebar_section_description', $description );
	}

	if ( isset( $_POST['qrolic_sidebar_section_heading'] ) ) {
		$heading = sanitize_text_field( $_POST['qrolic_sidebar_section_heading'] );
		update_post_meta( $post_id, '_qrolic_sidebar_section_heading', $heading );
	}
}
add_action( 'save_post', 'qrolic_save_sidebar_heading_meta_box_data' );

add_filter('the_content', 'qrolic_add_ids_to_headings', 1, 1);

/**
 * Adds IDs to headings in the content.
 *
 * @param string $content The content to process.
 * @return string The processed content with IDs added to headings.
 */
function qrolic_add_ids_to_headings($content) {
    if (is_single() && in_the_loop() && is_main_query()) {
        $content = qrolic_add_ids_to_headings_in_content($content);
    }

    return $content;
}

/**
 * Adds IDs to headings in the given content.
 *
 * @param string $content The content to process.
 * @return string The processed content with IDs added to headings.
 */
function qrolic_add_ids_to_headings_in_content($content) {
    // Define a callback function to process each heading tag
    $callback = function($matches) {
        // Get the heading text and generate an ID using sanitize_title
        $heading_text = $matches[3];
        $id = sanitize_title($heading_text);

        // If the heading tag doesn't have an ID, add it
        if (!preg_match('/id="[^"]*"/', $matches[1])) {
            return sprintf('<%s id="%s"%s>%s</%s>', $matches[1], $id, $matches[2], $heading_text, $matches[1]);
        }

        return $matches[0]; // Return the original tag if it already has an ID
    };

    // Use regex to find and process all heading tags (h1 to h6)
    $content = preg_replace_callback('/<(h[1-6])(.*?)>(.*?)<\/\1>/', $callback, $content);

    return $content;
}

/**
 * Generates a Table of Contents based on headings in the post content.
 *
 * @param array $atts Shortcode attributes.
 * @return string The generated Table of Contents.
 */
function qrolic_generate_toc($atts) {
    global $post;
    $content = $post->post_content;
    if (!$content) {
        return '';
    }

    // Modify the content to add IDs to headings
    $content = qrolic_add_ids_to_headings_in_content($content);

    preg_match_all('/<h([1-6])[^>]*id="([^"]*)".*?>(.*?)<\/h\1>/s', $content, $matches);

    if (empty($matches[0])) {
        return '';
    }

    $toc = '<ul>';
    foreach ($matches[2] as $index => $id) {
        $heading_text = strip_tags($matches[3][$index]);
        $toc .= '<li class="qt-toc-heading-' . $matches[1][$index] . '"><a href="#' . $id . '">' . $heading_text . '</a></li>';
    }
    $toc .= '</ul>';

    return $toc;
}

/**
 * Registers the Table of Contents shortcode.
 */
function qrolic_register_toc_shortcode() {
    add_shortcode('toc', 'qrolic_generate_toc');
}
add_action('init', 'qrolic_register_toc_shortcode');

/**
 * This code is used if the user is logged in to the site then the site is accessed.
 */
add_action(
	'init',
	function () {
		if ( 'https://demo.qrolic.com/qrolic' === site_url() && ! is_user_logged_in() ) {
			$request_uri = $_SERVER['REQUEST_URI'];

			if ( strpos( $request_uri, 'wp-login.php' ) === false &&
				strpos( $request_uri, 'wp-admin' ) === false &&
				strpos( $request_uri, 'wp-login.php?action=register' ) === false ) {
				wp_redirect( 'https://qrolic.com' );
				exit;
			}
		}
	}
);
