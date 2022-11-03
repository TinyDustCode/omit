import {createContext} from "react";
import {OmitThemeTypes} from "../types/provider";
import {OmitDefaultTheme} from "../default/theme";

export const ThemeContext = createContext<OmitThemeTypes>(OmitDefaultTheme);
