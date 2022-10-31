import {OmitPaletteModeTypes, PaletteModeReferTypes, PaletteTypes} from "../types/palette";
import {OmitPalette} from "./palette";

export const OmitDefaultPaletteMode: OmitPaletteModeTypes = 'light';

export const OmitDefaultPrefixName: string = 'omit';

const PaletteModeRefer: PaletteModeReferTypes = {
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

/**
 * @description 通过色板类型和mode去得到light/dark下的主色
 * @param palette 色板类型
 * @param mode 模式
 * @return {*} string
 */
export const OmitRenderPMC = (palette: PaletteTypes, mode: OmitPaletteModeTypes) => {
    const paletteData: Record<string, string> = OmitPalette[mode][palette];
    const selectColor: string = PaletteModeRefer[palette][mode]
    return paletteData[selectColor]
}