import {OmitPaletteModeTypes, OmitPaletteTypes, PaletteTypes} from "../types/palette";
import {PaletteModeRefer} from "../themes/default";
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