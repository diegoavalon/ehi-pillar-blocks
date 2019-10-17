const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { SelectControl } = wp.components;
const { InnerBlocks, InspectorControls } = wp.editor;

const validAlignments = ['full'];

registerBlockType('ehi-pillar-blocks/section', {
    title: __('Section'),
    icon: 'editor-insertmore',
    category: 'ehi-pillar-blocks',
    attributes: {
        align: {
            type: 'string',
            default: 'full'
        },
        color: {
            type: 'string',
            default: 'green'
        }
    },

    getEditWrapperProps(attributes) {
        const { align } = attributes;
        if (-1 !== validAlignments.indexOf(align)) {
            return { 'data-align': align };
        }
    },

    edit({ attributes }) {
        const { color, className } = attributes;

        return [
            <InspectorControls>
                <SelectControl
                    label="Color"
                    value={color}
                    onChange={newValue => setAttributes({ color: newValue })}
                    options={[
                        { value: 'white', label: 'White' },
                        { value: 'red', label: 'Red' },
                        { value: 'blue', label: 'Blue' },
                        { value: 'orange', label: 'Orange' },
                        { value: 'green', label: 'Green' },
                        { value: 'gray', label: 'Gray' }
                    ]}
                />
            </InspectorControls>,

            <section-simple color={color} additional-classes={className}>
                <InnerBlocks />
            </section-simple>
        ];
    },

    save({ attributes }) {
        const { color, className } = attributes;

        return (
            <section-simple color={color} additional-classes={className}>
                <InnerBlocks.Content />
            </section-simple>
        );
    }
});
