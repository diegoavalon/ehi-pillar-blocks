<?php

/**
 *  Plugin Name: eHealth Pillar Blocks 
 *  Description: Gutenberg blocks for IFP Landing Pages
 *  Text Domain: ehi-pillar-blocks
 *  Version: 0.1.0
 */

//  Prevent direct access
defined( 'ABSPATH' ) || exit;

add_action('plugins_loaded', 'ehi_pillar_blocks_loader');
function ehi_pillar_blocks_loader() {
    // Load blocks
    require_once plugin_dir_path(__FILE__) . 'dist/init.php';
}