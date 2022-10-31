import {
    OmitPaletteColorTypes,
    OmitPaletteModeTypes,
    OmitPaletteTypes,
    PaletteModeReferTypes,
    PaletteTypes
} from "../types/palette";
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
 * @param paletteType  色板类型
 * @param mode 模式
 * @param paletteData 色板数据
 * @return {*} string
 */
export const OmitRenderPMC = (paletteType: PaletteTypes, mode: OmitPaletteModeTypes, paletteData: OmitPaletteTypes) => {
    const selectPaletteData: Record<string, string> = paletteData[mode][paletteType];
    const selectColor: string = PaletteModeRefer[paletteType][mode]
    return selectPaletteData[selectColor]
}