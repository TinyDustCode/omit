import { createContext } from "react";
import { PaletteType, ThemeModeType } from "omit-theme";

export interface ThemeContextType {
  themeMode?: ThemeModeType;
  borderRadius?: string;
  palette?: Partial<PaletteType>;
}

type ContextType = ThemeContextType;

export const ThemeContext = createContext<ContextType>({});
