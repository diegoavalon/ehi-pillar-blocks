const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl, ToggleControl, SelectControl } = wp.components;
const { RichText, InspectorControls } = wp.editor;

const validAlignments = ["full"];

registerBlockType("ehi-pillar-blocks/hero-split", {
    title: __("Hero Split"),
    icon: "align-right",
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
        ctaType: {
            type: "string",
            default: "button"
        },
        ctaText: {
            type: "string",
            default: "Find Health Plans"
        },
        ctaUrl: {
            type: "string",
            default: "https://ehealth.com"
        },
        imgSrc: {
            type: "string",
            default:
                "https://ik.imagekit.io/ehealth/ifp-dad__cropped__1__V8A-d_PQm.png"
        },
        color: {
            type: "string",
            default: "green"
        },
        featureContent: {
            type: "string",
            default: "equal"
        },
        isReverse: {
            type: "boolean",
            default: false
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
            className,
            headline,
            subtitle,
            ctaType,
            ctaText,
            ctaUrl,
            imgSrc,
            color,
            featureContent,
            isReverse,
            useBottomDivider,
            bottomDividerColor,
            blockSpacing
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
                    label="CTA Type"
                    value={ctaType}
                    onChange={newValue => setAttributes({ ctaType: newValue })}
                    options={[
                        { value: "button", label: "Button" },
                        { value: "email", label: "Email" }
                    ]}
                />
                <TextControl
                    label="CTA Text"
                    value={ctaText}
                    onChange={newValue => setAttributes({ ctaText: newValue })}
                />
                <TextControl
                    label="CTA Url"
                    value={ctaUrl}
                    onChange={newValue => setAttributes({ ctaUrl: newValue })}
                />
                <TextControl
                    label="Image source url"
                    value={imgSrc}
                    onChange={newValue => setAttributes({ imgSrc: newValue })}
                />
                <SelectControl
                    label="Color"
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
                <SelectControl
                    label="What should be most featured?"
                    value={featureContent}
                    onChange={newValue =>
                        setAttributes({ featureContent: newValue })
                    }
                    options={[
                        { value: "image", label: "Image" },
                        { value: "content", label: "Content" },
                        { value: "equal", label: "Equal" }
                    ]}
                />
                <ToggleControl
                    label="Reverse the layout?"
                    checked={isReverse}
                    onChange={newValue =>
                        setAttributes({ isReverse: newValue })
                    }
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
            </InspectorControls>,
            <hero-split
                headline={headline}
                subtitle={subtitle}
                cta-type={ctaType}
                cta-text={ctaText}
                cta-url={ctaUrl}
                img-src={imgSrc}
                color={color}
                feature-content={featureContent}
                is-reverse={isReverse}
                use-bottom-divider={useBottomDivider}
                bottom-divider-color={bottomDividerColor}
                additional-classes={className}
            ></hero-split>
        ];
    },
    save({ attributes }) {
        const {
            className,
            headline,
            subtitle,
            ctaType,
            ctaText,
            ctaUrl,
            imgSrc,
            color,
            featureContent,
            isReverse,
            useBottomDivider,
            bottomDividerColor,
            blockSpacing
        } = attributes;

        return (
            <hero-split
                headline={headline}
                subtitle={subtitle}
                cta-type={ctaType}
                cta-text={ctaText}
                cta-url={ctaUrl}
                img-src={imgSrc}
                color={color}
                feature-content={featureContent}
                is-reverse={isReverse}
                use-bottom-divider={useBottomDivider}
                bottom-divider-color={bottomDividerColor}
                additional-classes={className}
            ></hero-split>
        );
    }
});
