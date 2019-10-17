const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

const validAlignments = ['full'];

registerBlockType('ehi-pillar-blocks/section', {
    title: __('Section'),
    icon: 'editor-insertmore',
    category: 'ehi-pillar-blocks',
    attributes: {
        align: {
            type: 'string',
            default: 'full'
        }
    },

    getEditWrapperProps(attributes) {
        const { align } = attributes;
        if (-1 !== validAlignments.indexOf(align)) {
            return { 'data-align': align };
        }
    },

    edit({ attributes }) {
        const { className } = attributes;

        return (
            <section className={className}>
                <InnerBlocks />
            </section>
        );
    },

    save({ attributes }) {
        const { className } = attributes;

        return (
            <section className={className}>
                <InnerBlocks.Content />
            </section>
        );
    }
});
