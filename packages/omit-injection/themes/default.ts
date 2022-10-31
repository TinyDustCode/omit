import {
    OmitPaletteModeTypes,
    PaletteModeReferTypes,
} from "../types/palette";

export const OmitDefaultPaletteMode: OmitPaletteModeTypes = 'light';

export const OmitDefaultPrefixName: string = 'omit';

export const PaletteModeRefer: PaletteModeReferTypes = {
    primary: {
        light: 'p8',
        dark: 'p6'
    },
    success: {
        light: 'g5',
        dark: 'g6'
    },
    warning: {
        light: 'o5',
        dark: 'o6'
    },
    danger: {
        light: 'r6',
        dark: 'r6'
    },
}