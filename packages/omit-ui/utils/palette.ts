import {OmitModePaletteTypes, OmitModeTypes, OmitPaletteTypes} from 'omit-injection';
import {OmitPaletteModeRefer, OmitPaletteInteractionRefer} from 'omit-injection';

/**
 * @description 通过色板类型和mode去得到light/dark下的主色
 * @param type  色板类型
 * @param mode 模式
 * @param paletteData 色板数据
 * @return {*} string
 */
const renderPMCByMode = (type: OmitPaletteTypes, mode: OmitModeTypes, paletteData: OmitModePaletteTypes) => {
    const selectPaletteData: Record<string, string> = paletteData[mode][type];
    const selectColor: string = OmitPaletteModeRefer[type][mode]
    return selectPaletteData[selectColor]
}
/**
 * @description 通过色板类型和mode获取light/dark下的交互色彩
 * @param type  色板类型
 * @param mode 模式
 * @param paletteData 色板数据
 * @return {*} {hover:string;active:string;disabled:string}
 */
export const renderPICByMode = (type: OmitPaletteTypes, mode: OmitModeTypes, paletteData: OmitModePaletteTypes) => {
    const selectPaletteData: Record<string, string> = paletteData[mode][type];
    const {hover, active, disabled} = OmitPaletteInteractionRefer[type][mode];
    return {
        hover: selectPaletteData[hover],
        active: selectPaletteData[active],
        disabled: selectPaletteData[disabled],
    }
}

// 通过色板类型和mode获取light/dark下的主色与交互色彩
export const renderPaletteColor = (type: OmitPaletteTypes, mode: OmitModeTypes, paletteData: OmitModePaletteTypes) => {
    const main = renderPMCByMode(type, mode, paletteData);
    const {hover, active, disabled} = renderPICByMode(type, mode, paletteData);
    return {main, hover, active, disabled}
}