const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { SelectControl, TextControl } = wp.components;
const { InspectorControls } = wp.editor;

registerBlockType('ehi-pillar-blocks/button', {
    title: __('Button'),
    icon: 'migrate',
    category: 'ehi-pillar-blocks',
    attributes: {
        role: {
            type: 'string',
            default: 'primary'
        },
        text: {
            type: 'string',
            default: 'Find Health Plans'
        },
        url: {
            type: 'string',
            default: 'https://ehealth.com'
        }
    },
    supports: {
        align: true
    },

    edit({ attributes, setAttributes }) {
        const { role, className, text, url } = attributes;

        return [
            <InspectorControls>
                <SelectControl
                    label="Role"
                    value={role}
                    onChange={newValue => setAttributes({ role: newValue })}
                    options={[
                        { value: 'primary', label: 'Primary' },
                        { value: 'secondary', label: 'Secondary' },
                        { value: 'tertiary', label: 'Tertiary' }
                    ]}
                />
                <TextControl
                    label="Button Text"
                    value={text}
                    onChange={newValue => setAttributes({ text: newValue })}
                />
                <TextControl
                    label="Button Url"
                    value={url}
                    onChange={newValue => setAttributes({ url: newValue })}
                />
            </InspectorControls>,

            <element-button
                role={role}
                text={text}
                url={url}
                additional-classes={className}
            ></element-button>
        ];
    },

    save({ attributes }) {
        const { role, className, text, url } = attributes;

        return (
            <element-button
                role={role}
                text={text}
                url={url}
                additional-classes={className}
            ></element-button>
        );
    }
});
