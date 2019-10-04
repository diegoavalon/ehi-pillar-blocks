<?php

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'ehi_pillar_blocks_block_editor_assets' );
function ehi_pillar_blocks_editor_assets() {
    wp_enqueue_style( 'ehi-pillar-components-styles', 'https://unpkg.com/ehi-pillar-components@0.0.7/dist/collection/styles/main.css' );
    wp_enqueue_script( 'ehi-pillar-components-loader', 'https://unpkg.com/ehi-pillar-components@0.0.7/dist/ehi-landing-components.js', array(), 'null', false );
    
    wp_enqueue_style( 
        'ehi-pillar-blocks-editor-styles',
        plugins_url( 'editor.build.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . '
            editor.build.css' )
    );

    wp_enqueue_script(
        'ehi-pillar-blocks-editor-script',
        plugins_url( 'blocks.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-i18n', 'wp-editor', 'wp-components' ),
        filemtime( plugin_dir_path( __FILE__ ) . '
            blocks.build.js' )
    );
}

add_action( 'enqueue_block_assets', 'ehi_pillar_blocks_enqueue_assets' );
function ehi_pillar_blocks_enqueue_assets() {
    wp_enqueue_style( 'ehi-pillar-components-styles', 'https://unpkg.com/ehi-pillar-components@0.0.7/dist/collection/styles/main.css' );
    wp_enqueue_script( 'ehi-pillar-components-loader', 'https://unpkg.com/ehi-pillar-components@0.0.7/dist/ehi-landing-components.js', array(), 'null', false );
}