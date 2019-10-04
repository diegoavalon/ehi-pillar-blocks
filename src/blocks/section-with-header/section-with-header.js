const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl, ToggleControl, SelectControl } = wp.components;
const { InspectorControls, InnerBlocks } = wp.editor;

const validAlignments = ["full"];

registerBlockType("ehi-pillar-blocks/section-with-header", {
    title: __("Section with Header"),
    icon: "editor-insertmore",
    category: "ehi-pillar-blocks",
    attributes: {
        align: {
            type: "string",
            default: "full"
        },
        headline: {
            type: "string",
            default: "Compare and find affordable health insurance."
        },
        subtitle: {
            type: "string",
            default:
                "Over 4 million customers have found a health plan through our marketplace."
        },
        color: {
            type: "string",
            default: "green"
        },
        useBottomDivider: {
            type: "boolean",
            default: false
        },
        bottomDividerColor: {
            type: "string",
            default: "blue"
        },
        blockSpacing: {
            type: "string",
            default: ""
        }
    },

    getEditWrapperProps(attributes) {
        const { align } = attributes;
        if (-1 !== validAlignments.indexOf(align)) {
            return { "data-align": align };
        }
    },

    edit({ attributes, setAttributes }) {
        const {
            headline,
            subtitle,
            useBottomDivider,
            bottomDividerColor,
            blockSpacing,
            color
        } = attributes;

        return [
            <InspectorControls>
                <TextControl
                    label="Headline"
                    value={headline}
                    onChange={newValue => setAttributes({ headline: newValue })}
                />
                <TextControl
                    label="Subtitle"
                    value={subtitle}
                    onChange={newValue => setAttributes({ subtitle: newValue })}
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
                <ToggleControl
                    label="Add a bottom divider?"
                    checked={useBottomDivider}
                    onChange={newValue =>
                        setAttributes({ useBottomDivider: newValue })
                    }
                />
                {useBottomDivider && (
                    <SelectControl
                        label="bottomDividerColor"
                        value={bottomDividerColor}
                        onChange={newValue =>
                            setAttributes({ bottomDividerColor: newValue })
                        }
                        options={[
                            { value: "white", label: "White" },
                            { value: "red", label: "Red" },
                            { value: "blue", label: "Blue" },
                            { value: "orange", label: "Orange" },
                            { value: "green", label: "Green" },
                            { value: "gray", label: "Gray" }
                        ]}
                    />
                )}
                <TextControl
                    label="Wrapper CSS classes"
                    value={blockSpacing}
                    onChange={newValue =>
                        setAttributes({ blockSpacing: newValue })
                    }
                />
            </InspectorControls>,
            <section-with-header
                headline={headline}
                subtitle={subtitle}
                color={color}
                use-bottom-divider={useBottomDivider}
                bottom-divider-color={bottomDividerColor}
                block-spacing={blockSpacing}
            >
                <InnerBlocks />
            </section-with-header>
        ];
    },

    save({ attributes }) {
        const {
            headline,
            subtitle,
            color,
            useBottomDivider,
            bottomDividerColor,
            blockSpacing
        } = attributes;

        return (
            <section-with-header
                headline={headline}
                subtitle={subtitle}
                color={color}
                use-bottom-divider={useBottomDivider}
                bottom-divider-color={bottomDividerColor}
                block-spacing={blockSpacing}
            >
                <InnerBlocks.Content />
            </section-with-header>
        );
    }
});
