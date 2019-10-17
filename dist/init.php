<?php

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'ehi_pillar_blocks_editor_assets' );
function ehi_pillar_blocks_editor_assets() {
    wp_enqueue_style( 'ehi-pillar-components-styles', 'https://unpkg.com/ehi-pillar-components/dist/collection/styles/main.css' );
    wp_enqueue_script( 'ehi-pillar-components-loader', 'https://unpkg.com/ehi-pillar-components/dist/ehi-landing-components.js', array(), 'null', false );
    
    wp_enqueue_style( 
        'ehi-pillar-blocks-editor-styles',
        plugins_url( 'editor.build.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'editor.build.css' )
    );

    wp_enqueue_script(
        'ehi-pillar-blocks-editor-script',
        plugins_url( 'ehi-pillar-blocks.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-i18n', 'wp-editor', 'wp-components' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'ehi-pillar-blocks.build.js' )
    );
}

add_action( 'enqueue_block_assets', 'ehi_pillar_blocks_enqueue_assets' );
function ehi_pillar_blocks_enqueue_assets() {
    wp_enqueue_style( 'ehi-pillar-components-styles', 'https://unpkg.com/ehi-pillar-components/dist/collection/styles/main.css' );
	wp_enqueue_script( 'ehi-pillar-components-loader', 'https://unpkg.com/ehi-pillar-components/dist/ehi-landing-components.js', array(), 'null', false );
	
	wp_enqueue_style( 
        'ehi-pillar-blocks-styles',
        plugins_url( 'styles.build.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'styles.build.css' )
    );
}

function ehi_pillar_blocks_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'ehi-pillar-blocks',
				'title' => __( 'eHealth Pillar Blocks', 'ehi-pillar-blocks' ),
			),
		)
	);
}
add_filter( 'block_categories', 'ehi_pillar_blocks_category', 10, 2);