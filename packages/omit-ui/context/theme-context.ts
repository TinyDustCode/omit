import {createContext} from "react";
import {OmitPalette, OmitDefaultPaletteMode} from 'omit-injection'
import {OmitThemeTypes} from "../types/config";

export const ThemeContext = createContext<OmitThemeTypes>({
    palette: OmitPalette,
    mode: OmitDefaultPaletteMode
});
