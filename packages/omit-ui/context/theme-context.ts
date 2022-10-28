import {createContext} from "react";
import {OmitPalette, OmitPaletteDefaultMode} from 'omit-base'
import {OmitThemeTypes} from "../types/themes";

export const ThemeContext = createContext<OmitThemeTypes>({
    palette: OmitPalette,
    mode: OmitPaletteDefaultMode
});
