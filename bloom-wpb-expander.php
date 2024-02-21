<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/**
 * Plugin Name: BLOOM - Basic WP-Bakery Expander
 * Plugin URI: https://github.com/patrickstecker/bloom-wpb-expander
 * Description: This Plugin adds expander functionality to a button and any content.
 * Version: 1.1.0
 * Author: Bloom Web Agency LLC
 * Author URI: https://bloomwebagency.com/
 */

function expand_button_toggler_enqueue_scripts() {
    wp_enqueue_script( 'expand-button-toggler', plugin_dir_url( __FILE__ ) . 'expand-button-toggler.js', array( 'jquery' ), '1.0', true );
    wp_enqueue_style( 'expand-button-toggler', plugin_dir_url( __FILE__ ) . 'expand-button-toggler.css', array(), '1.0' );
}

add_action( 'wp_enqueue_scripts', 'expand_button_toggler_enqueue_scripts' );
