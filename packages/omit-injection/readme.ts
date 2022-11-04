/*
 * 色板类型一共4种目前 primary success warning danger
 * 每个人类型对应的值都有10个颜色
 * 氛围light/dark两种模式
 * */

// ThemePalette 两套色板值  light/dark两种模式 1~10
const ThemePalette = {
  light: {
    primary: { p1: '', p10: '' },
    success: { g1: '', g10: '' },
    warning: { w1: '', w10: '' },
    danger: { r1: '', r10: '' },
  },
  dark: {
    primary: { p1: '', p10: '' },
    success: { g1: '', g10: '' },
    warning: { w1: '', w10: '' },
    danger: { r1: '', r10: '' },
  },
};
// font色板  d1 ~ d14
const FontPalette = { d1: '', d14: '' };

const DefaultMode = 'light';
const DefaultPrefix = 'omit';
