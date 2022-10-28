import {OmitPaletteColorTypes, OmitPaletteTypes, OmitPaletteModeTypes} from "../types/palette";

// light
const primary_light = {
    p1: '#ecf2fe',
    p2: '#d4e3fc',
    p3: '#bbd3fb',
    p4: '#96bbf8',
    p5: '#699ef5',
    p6: '#4787f0',
    p7: '#266fe8',
    p8: '#0052d9',
    p9: '#0034b5',
    p10: '#001f97',
}
const success_light = {
    g1: '#e8f8f2',
    g2: '#bcebdc',
    g3: '#85dbbe',
    g4: '#48c79c',
    g5: '#00a870',
    g6: '#078d5c',
    g7: '#067945',
    g8: '#056334',
    g9: '#044f2a',
    g10: '#033017',
}
const warning_light = {
    o1: '#fef3e6',
    o2: '#f9e0c7',
    o3: '#f7c797',
    o4: '#f2995f',
    o5: '#ed7b2f',
    o6: '#d35a21',
    o7: '#ba431b',
    o8: '#9e3610',
    o9: '#842b0b',
    o10: '#5a1907',
}
const danger_light = {
    r1: '#fdecee',
    r2: '#f9d7d9',
    r3: '#f8b9be',
    r4: '#f78d94',
    r5: '#f36d78',
    r6: '#e34d59',
    r7: '#c9353f',
    r8: '#b11f26',
    r9: '#951114',
    r10: '#680506',
}
const base_light = {
    d1: '#f3f3f3',
    d2: '#eeeeee',
    d3: '#e7e7e7',
    d4: '#dcdcdc',
    d5: '#c5c5c5',
    d6: '#a6a6a6',
    d7: '#8b8b8b',
    d8: '#777777',
    d9: '#5e5e5e',
    d10: '#4b4b4b',
    d11: '#383838',
    d12: '#2c2c2c',
    d13: '#242424',
    d14: '#181818',
}
// dark
const primary_dark = {
    p1: '#1E2C60',
    p2: '#062E9A',
    p3: '#073AB5',
    p4: '#084DCD',
    p5: '#0957D9',
    p6: '#2174FF',
    p7: '#478DFF',
    p8: '#69A1FF',
    p9: '#8CB8FF',
    p10: '#ABCAFF',
}
const success_dark = {
    g1: '#034116',
    g2: '#035428',
    g3: '#046939',
    g4: '#057E4C',
    g5: '#06935F',
    g6: '#07A872',
    g7: '#37BF8E',
    g8: '#71D5AE',
    g9: '#B3E8D1',
    g10: '#E8F7F1',
}
const warning_dark = {
    o1: '#692204',
    o2: '#873105',
    o3: '#A24006',
    o4: '#C25110',
    o5: '#D66724',
    o6: '#ED8139',
    o7: '#FF9852',
    o8: '#FFB97D',
    o9: '#FFD8AD',
    o10: '#FFF4E5',
}
const danger_dark = {
    r1: '#730524',
    r2: '#960627',
    r3: '#B01C37',
    r4: '#C9384A',
    r5: '#E35661',
    r6: '#FB6E77',
    r7: '#FF9195',
    r8: '#FFB5B8',
    r9: '#FFD6D9',
    r10: '#FFF2F2',
}

const LightPalette: OmitPaletteColorTypes = {
    primary: primary_light,
    success: success_light,
    warning: warning_light,
    danger: danger_light,
    base: base_light,
}
const DarkPalette: OmitPaletteColorTypes = {
    primary: primary_dark,
    success: success_dark,
    warning: warning_dark,
    danger: danger_dark,
    base: base_light,
}

export const OmitPalette: OmitPaletteTypes = {
    light: LightPalette,
    dark: DarkPalette
}

export const OmitPaletteDefaultMode:OmitPaletteModeTypes = 'light'