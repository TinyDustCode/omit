import {OmitPalette, OmitDefaultPaletteMode,OmitDefaultPrefixName} from "../../omit-injection";
import {OmitConfigTypes, OmitThemeTypes} from "../types/config";

export const OmitDefaultTheme: OmitThemeTypes = {
    palette: OmitPalette,
    mode: OmitDefaultPaletteMode
}

export const OmitDefaultConfig:OmitConfigTypes = {
    prefixName:OmitDefaultPrefixName
}