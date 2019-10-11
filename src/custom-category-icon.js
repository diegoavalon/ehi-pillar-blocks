const { updateCategory } = wp.blocks;
const { Path, SVG, G } = wp.components;

updateCategory("ehi-pillar-blocks", {
    icon: (
        <SVG viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <G fill="none" fill-rule="evenodd">
                <Path fill="#7AB642" d="M0 0h120v120H0z" />

                <Path
                    d="M42.16216 56.08642c.15725-1.10685.3759-2.19049.64978-3.23545.34607-1.32892.79894-2.62626 1.35405-3.8788.53875-1.20805 1.1652-2.37324 1.87418-3.4862.67716-1.05303 1.4404-2.0461 2.28154-2.96825h.00692c.81325-.8896 1.712-1.69411 2.68275-2.40096.96124-.70395 1.99021-1.30669 3.07096-1.79855 2.17185-.995 4.50481-1.49105 6.98351-1.49105 1.4461 0 2.80615.13473 4.0676.40064 1.2665.26979 2.45113.66817 3.54948 1.19839 1.0857.52216 2.11515 1.1581 3.0719 1.89717.93589.7262 1.79308 1.5523 2.55702 2.46446.78576.93183 1.48554 1.93553 2.0905 2.99854.62424 1.10137 1.16125 2.25205 1.60565 3.44077.4621 1.23062.83474 2.49411 1.11541 3.78017a28.3895 28.3895 0 01.51173 3.07912H42.16216zm45.92552-7.92269a33.7363 33.7363 0 00-2.37449-5.62257 28.668 28.668 0 00-3.29284-4.85966 27.03282 27.03282 0 00-4.17605-4.01276 28.15156 28.15156 0 00-5.01785-3.06822C69.59695 28.86686 65.4893 28 60.91161 28c-2.16122 0-4.24859.20644-6.24839.63375a27.44203 27.44203 0 00-5.7618 1.90357 29.4882 29.4882 0 00-5.11598 3.00194 28.86113 28.86113 0 00-4.36133 3.94578 30.79073 30.79073 0 00-3.53734 4.78967 34.57073 34.57073 0 00-2.66537 5.55825C31.74478 51.80448 31 56.02549 31 60.496c0 2.38793.21018 4.6861.61837 6.89955a31.9824 31.9824 0 001.85358 6.31771 33.1543 33.1543 0 002.89765 5.5752 29.65537 29.65537 0 003.78634 4.72031 29.4925 29.4925 0 004.58142 3.7986 30.19094 30.19094 0 005.30334 2.83357C53.81945 92.21323 57.83426 93 62.08897 93c2.9432 0 5.6628-.26581 8.14553-.79901 2.49622-.53163 4.7565-1.34131 6.78428-2.41147a36.793 36.793 0 005.65822-3.70445h.00785a39.84659 39.84659 0 004.99871-4.74605l.54593-.617-.61307-.55453-5.6256-5.04042-.59299-.53477-.55816.57274c-2.4341 2.51315-5.117 4.53076-8.05279 6.05974-1.43824.74786-3.02834 1.3115-4.76465 1.6903-1.74572.37-3.64864.56363-5.70403.56363-1.28168 0-2.53365-.1089-3.7544-.32544a20.4082 20.4082 0 01-3.57311-.97099c-1.15553-.42524-2.2691-.9597-3.32641-1.5905a20.7574 20.7574 0 01-2.9852-2.18174 18.77898 18.77898 0 01-2.55345-2.75354c-.7661-1.00237-1.4492-2.11773-2.0569-3.33193a21.19689 21.19689 0 01-1.47433-3.86168 25.73423 25.73423 0 01-.6869-3.49952h47.89452l.08-.74033c.03954-.36121.0684-.70298.08817-1.01775.01695-.3358.02981-.633.02981-.8897V60.9683c0-2.26397-.15468-4.46768-.47596-6.60204a39.23704 39.23704 0 00-1.43636-6.20254z"
                    fill="#FFF"
                    fill-rule="nonzero"
                />
            </G>
        </SVG>
    )
});