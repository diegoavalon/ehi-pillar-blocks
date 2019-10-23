const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl, SelectControl } = wp.components;
const { InspectorControls } = wp.editor;

registerBlockType('ehi-pillar-blocks/quote-form', {
    title: __('Quote Form'),
    icon: 'cart',
    category: 'ehi-pillar-blocks',
    attributes: {
        ctaText: {
            type: 'string',
            default: 'Find Plans'
        },
        censusPage: {
            type: 'string',
            default: 'Individuals and Families'
        }
    },

    edit({ attributes, setAttributes }) {
        const { ctaText, censusPage, className } = attributes;

        return [
            <InspectorControls>
                <TextControl
                    label="CTA Text"
                    value={ctaText}
                    onChange={newValue => setAttributes({ ctaText: newValue })}
                />
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
            </InspectorControls>,
            <quote-form
                cta-text={ctaText}
                census-page={censusPage}
                additional-classes={className}
            ></quote-form>
        ];
    },
    save({ attributes }) {
        const { ctaText, censusPage, className } = attributes;

        return (
            <quote-form
                cta-text={ctaText}
                census-page={censusPage}
                additional-classes={className}
            ></quote-form>
        );
    }
});
