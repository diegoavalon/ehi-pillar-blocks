const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl, SelectControl } = wp.components;
const { InspectorControls } = wp.editor;

registerBlockType("ehi-pillar-blocks/alert", {
    title: __("Alert"),
    icon: "warning",
    category: "ehi-pillar-blocks",
    attributes: {
        title: {
            type: "string",
            default: "Notice"
        },
        message: {
            type: "string",
            default: "eHealth has delivered over 5 million health plans"
        },
        color: {
            type: "string",
            default: "green"
        }
    },

    edit({ attributes, setAttributes }) {
        const { title, message, color } = attributes;

        return [
            <InspectorControls>
                <TextControl
                    label="Title"
                    value={title}
                    onChange={newValue => setAttributes({ title: newValue })}
                />
                <TextControl
                    label="Message"
                    value={message}
                    onChange={newValue => setAttributes({ message: newValue })}
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
                        { value: "gray", label: "Gray" }
                    ]}
                />
            </InspectorControls>,
            <element-alert
                color={color}
                alert-title={title}
                alert-message={message}
            ></element-alert>
        ];
    },

    save({ attributes }) {
        const { title, message, color } = attributes;

        return (
            <element-alert
                color={color}
                alert-title={title}
                alert-message={message}
            ></element-alert>
        );
    }
});
