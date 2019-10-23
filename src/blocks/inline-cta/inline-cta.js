const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl, SelectControl } = wp.components;
const { InspectorControls } = wp.editor;

registerBlockType('ehi-pillar-blocks/inline-cta', {
    title: __('Inline CTA'),
    icon: 'cart',
    category: 'ehi-pillar-blocks',
    attributes: {
        color: {
            type: 'string',
            default: 'white'
        },
        headline: {
            type: 'string',
            default: 'Compare and find affordable health insurance.'
        },
        subtitle: {
            type: 'string',
            default:
                'Over 5 million customers have found a health plan through our marketplace.'
        },
        actionType: {
            type: 'string',
            default: 'form'
        },
        ctaText: {
            type: 'string',
            default: 'Find Plans'
        },
        ctaUrl: {
            type: 'string',
            default: 'https://ehealth.com'
        },
        censusPage: {
            type: 'string',
            default: 'Individuals and Families'
        }
    },

    edit({ attributes, setAttributes }) {
        const {
            color,
            headline,
            subtitle,
            actionType,
            ctaText,
            ctaUrl,
            censusPage,
            className
        } = attributes;

        return [
            <InspectorControls>
                <SelectControl
                    label="color"
                    value={color}
                    onChange={newValue => setAttributes({ color: newValue })}
                    options={[
                        { value: 'white', label: 'White' },
                        { value: 'red', label: 'Red' },
                        { value: 'blue', label: 'Blue' },
                        { value: 'orange', label: 'Orange' },
                        { value: 'green', label: 'Green' },
                        { value: 'gray', label: 'Gray' },
                        { value: 'red-inverted', label: 'Red Inverted' },
                        { value: 'blue-inverted', label: 'Blue Inverted' },
                        { value: 'orange-inverted', label: 'Orange Inverted' },
                        { value: 'green-inverted', label: 'Green Inverted' },
                        { value: 'gray-inverted', label: 'Gray Inverted' }
                    ]}
                />
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
                    label="Action Type"
                    value={actionType}
                    onChange={newValue =>
                        setAttributes({ actionType: newValue })
                    }
                    options={[
                        { value: 'form', label: 'Form' },
                        { value: 'button', label: 'Button' }
                    ]}
                />

                {actionType === 'button' && [
                    <TextControl
                        label="CTA Text"
                        value={ctaText}
                        onChange={newValue =>
                            setAttributes({ ctaText: newValue })
                        }
                    />,
                    <TextControl
                        label="CTA Url"
                        value={ctaUrl}
                        onChange={newValue =>
                            setAttributes({ ctaUrl: newValue })
                        }
                    />
                ]}
                {actionType === 'form' && [
                    <TextControl
                        label="CTA Text"
                        value={ctaText}
                        onChange={newValue =>
                            setAttributes({ ctaText: newValue })
                        }
                    />,
                    <SelectControl
                        label="Select the product census page"
                        value={censusPage}
                        onChange={newValue =>
                            setAttributes({ censusPage: newValue })
                        }
                        options={[
                            {
                                value: 'Individuals and Families',
                                label: 'Individuals and Families'
                            },
                            { value: 'Small Business', label: 'Small Business' }
                        ]}
                    />
                ]}
            </InspectorControls>,
            <cta-block
                action-type={actionType}
                cta-url={ctaUrl}
                cta-text={ctaText}
                message={subtitle}
                headline={headline}
                census-page={censusPage}
                color={color}
                additional-classes={className}
            ></cta-block>
        ];
    },
    save({ attributes }) {
        const {
            color,
            headline,
            subtitle,
            actionType,
            ctaText,
            ctaUrl,
            censusPage,
            className
        } = attributes;

        return (
            <cta-block
                action-type={actionType}
                cta-url={ctaUrl}
                cta-text={ctaText}
                message={subtitle}
                headline={headline}
                census-page={censusPage}
                color={color}
                additional-classes={className}
            ></cta-block>
        );
    }
});
