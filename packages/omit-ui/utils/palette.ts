import {
  OmitModePaletteTypes,
  OmitPaletteColorTypes,
  OmitPaletteTypes,
  OmitThemeModeTypes,
} from "omit-injection";
import { OmitPMRefer, OmitPIRefer } from "omit-injection";

interface FunctionProps {
  type: OmitPaletteTypes;
  mode: OmitThemeModeTypes;
  palette: OmitModePaletteTypes;
}

/**
 * @description 通过色板类型和mode去得到light/dark下的主色
 * @return {*} string
 * @param payload
 */
const renderPMCByMode = (payload: FunctionProps) => {
  const { type, mode, palette } = payload;
  const selectPaletteData: OmitPaletteColorTypes[typeof type] =
    palette[mode][type];
  const selectColor = OmitPMRefer[type][
    mode
  ] as keyof OmitPaletteColorTypes[typeof type];
  return selectPaletteData[selectColor];
};
/**
 * @description 通过色板类型和mode获取light/dark下的交互色彩
 * @return {*} {hover:string;active:string;disabled:string}
 * @param payload
 */
export const renderPICByMode = (payload: FunctionProps) => {
  const { type, mode, palette } = payload;
  const selectPaletteData: OmitPaletteColorTypes[typeof type] =
    palette[mode][type];
  const { hover, active, disabled } = OmitPIRefer[type][mode] as Record<
    "hover" | "active" | "disabled",
    keyof OmitPaletteColorTypes[typeof type]
  >;
  return {
    hover: selectPaletteData[hover],
    active: selectPaletteData[active],
    disabled: selectPaletteData[disabled],
  };
};

// 通过色板类型和mode获取light/dark下的主色与交互色彩
export const renderPaletteColor = (payload: FunctionProps) => {
  const { type, mode, palette } = payload;
  const main = renderPMCByMode({ type, mode, palette });
  const { hover, active, disabled } = renderPICByMode({ type, mode, palette });
  return { main, hover, active, disabled };
};
