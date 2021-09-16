export const COLORS = {
    background: '#F9FAFB',
    primary: '#000',
    white: '#FFFFFF',
    text: '#192024',
};

export const SIZES = {
    // global sizes
    base: 8,
    radius: 8,

    // font sizes
    header: '44px',
    big: '16px',
    small: '14px',


    headerWeight: 900,
    normalWeight: 'bold',
    smallWeight: '',


    paddingHorizontal: '94px',
    paddingConstant: '16px',

    gapConstant: 16,
    gap6: 6,
    gap67: 67,
    gap73: 73,
    gap56: 56,

    noPadding: 0,
};


export const FONTS = {
    header: { fontFamily: "HelveticaNeue", fontSize: SIZES.header},
    big:  { fontFamily: "HelveticaNeue", fontSize: SIZES.big},
    small:  { fontFamily: "HelveticaNeue", fontSize: SIZES.small},

};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
