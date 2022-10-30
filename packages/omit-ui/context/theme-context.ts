import {createContext} from "react";
import {OmitPalette, OmitDefaultPaletteMode} from 'omit-base'
import {OmitThemeTypes} from "../types/config";

export const ThemeContext = createContext<OmitThemeTypes>({
    palette: OmitPalette,
    mode: OmitDefaultPaletteMode
});
