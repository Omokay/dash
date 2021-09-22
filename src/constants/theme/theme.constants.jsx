export const COLORS = {
    background: '#F9FAFB',
    black: '#000',
    primary: '#192024',
    white: '#FFFFFF',
    text: '#192024',
    lightText: '#5a6872',
};

export const CARDS = {
    border: 'solid 1px #363f45',
    shadow: '0 -1px 4px 0 rgba(25, 32, 36, 0.04), 0 3px 6px 0 rgba(25, 32, 36, 0.16)',

};

export const SIZES = {
    // global sizes
    base: 8,
    radius: 8,
    checkbox: 4,

    // font sizes
    header: '44px',
    big: '16px',
    small: '14px',

    // font weight
    headerWeight: 'bolder',
    bold: 'bold',
    regular: 400,

    // padding & margin numbers
    paddingHorizontal: '6.5%',
    paddingConstant: '16px',

    gapConstant: '16px',
    gap6: 6,
    gap67: 67,
    gap73: 73,
    gap56: 56,
    gap10: 40,
    noPadding: 0,

    padding10: 10,
    padding100: 100,

    // grid layout
    // gridWrapper: '1264px',
    gridWrapper: '87%',

    formLabelMargin: '8px',

};


export const FONTS = {
    header: { fontFamily: "HelveticaNeue", fontSize: SIZES.header, color: COLORS.black},
    big:  { fontFamily: "HelveticaNeue", fontSize: SIZES.big, color: COLORS.primary},
    small:  { fontFamily: "HelveticaNeue", fontSize: SIZES.small, color: COLORS.primary},

};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
