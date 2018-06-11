<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     Google_Map_Block
 * @author      Julien Melissas (@julienmelissas)
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: Google Maps Gutenberg Block
 * Plugin URI:  https://github.com/JulienMelissas/google-map-gutenberg-block
 * Description: A plugin with a Gutenberg Block to create interactive Google Maps. Built for the WordCamp Europe 2018 workshop with Zac Gordon.
 * Version:     1.0.0
 * Author:      Julien Melissas (@julienmelissas)
 * Author URI:  https://twitter.com/julienmelissas
 * Text Domain: googlemapblock
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

namespace Google_Map_Block;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  1.0.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  1.0.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS
include __DIR__ . '/lib/enqueue-scripts.php';

// Register meta boxes
include __DIR__ . '/lib/meta-boxes.php';

// Block Templates
include __DIR__ . '/lib/block-templates.php';
