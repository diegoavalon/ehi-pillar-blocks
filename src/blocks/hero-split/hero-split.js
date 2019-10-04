const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType('ehi-pillar-blocks/hero-split', {
    title: __('Hero Split'),
    icon: 'smiley',
    category: 'widgets',

    edit() {
        return (
            <div>
                <hero-split
                    title="is this working?"
                    subtitle="how about this"
                >

                </hero-split>
            </div>
        )
    },
    save() {
        return (
            <div>
                <h2>This is a simple block (front end)</h2>
            </div>
        )
    }
});
