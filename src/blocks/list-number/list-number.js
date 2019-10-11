const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl, SelectControl } = wp.components;
const { InspectorControls, InnerBlocks } = wp.editor;

registerBlockType("ehi-pillar-blocks/list-number", {
    title: __("Number List"),
    icon: "editor-ol",
    category: "ehi-pillar-blocks",
    attributes: {
        number: {
            type: "string",
            default: "1"
        },
        color: {
            type: "string",
            default: "green"
        }
    },

    edit({ attributes, setAttributes }) {
        const { number, color } = attributes;

        return [
            <InspectorControls>
                <TextControl
                    label="Number"
                    value={number}
                    onChange={newValue => setAttributes({ number: newValue })}
                />
                <SelectControl
                    label="color"
                    value={color}
                    onChange={newValue => setAttributes({ color: newValue })}
                    options={[
                        { value: "white", label: "White" },
                        { value: "red", label: "Red" },
                        { value: "blue", label: "Blue" },
                        { value: "orange", label: "Orange" },
                        { value: "green", label: "Green" },
                        { value: "gray", label: "Gray" },
                        { value: "red-inverted", label: "Red Inverted" },
                        { value: "blue-inverted", label: "Blue Inverted" },
                        { value: "orange-inverted", label: "Orange Inverted" },
                        { value: "green-inverted", label: "Green Inverted" },
                        { value: "gray-inverted", label: "Gray Inverted" }
                    ]}
                />
            </InspectorControls>,
            <element-list-number color={color} number-text={number}>
                <InnerBlocks />
            </element-list-number>
        ];
    },

    save({ attributes }) {
        const { number, color } = attributes;

        return (
            <element-list-number color={color} number-text={number}>
                <InnerBlocks.Content />
            </element-list-number>
        );
    }
});
