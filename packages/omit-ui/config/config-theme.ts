import {OmitPalette, OmitDefaultPaletteMode,OmitDefaultPrefixName} from "omit-base";
import {OmitConfigTypes, OmitThemeTypes} from "../types/config";

export const OmitDefaultTheme: OmitThemeTypes = {
    palette: OmitPalette,
    mode: OmitDefaultPaletteMode
}

export const OmitDefaultConfig:OmitConfigTypes = {
    prefixName:OmitDefaultPrefixName
}