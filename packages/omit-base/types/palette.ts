import {OmitFontPalette} from "../src/palette";

type PrimaryColorTypes = {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7: string;
    p8: string;
    p9: string;
    p10: string;
}
type SuccessColorTypes = {
    g1: string;
    g2: string;
    g3: string;
    g4: string;
    g5: string;
    g6: string;
    g7: string;
    g8: string;
    g9: string;
    g10: string;
}
type WarningColorTypes = {
    o1: string;
    o2: string;
    o3: string;
    o4: string;
    o5: string;
    o6: string;
    o7: string;
    o8: string;
    o9: string;
    o10: string;
}
type DangerColorTypes = {
    r1: string;
    r2: string;
    r3: string;
    r4: string;
    r5: string;
    r6: string;
    r7: string;
    r8: string;
    r9: string;
    r10: string;
}

export type OmitPaletteColorTypes = {
    primary: PrimaryColorTypes,
    success: SuccessColorTypes,
    warning: WarningColorTypes,
    danger: DangerColorTypes,
}

export type OmitFontPaletteTypes = {
    d1: string;
    d2: string;
    d3: string;
    d4: string;
    d5: string;
    d6: string;
    d7: string;
    d8: string;
    d9: string;
    d10: string;
    d11: string;
    d12: string;
    d13: string;
    d14: string;
}

export type PaletteTypes = 'primary' | 'success' | 'warning' | 'danger';

export type PaletteModeReferTypes = Record<PaletteTypes, { light: string, dark: string }>

export type OmitPaletteModeTypes = 'light' | 'dark';

export type OmitPaletteTypes = {
    light: OmitPaletteColorTypes;
    dark: OmitPaletteColorTypes;
}