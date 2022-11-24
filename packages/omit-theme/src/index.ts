import { ThemeType } from "../types";
import { ThemeMode } from "./constants";
import { Palette } from "./palette";
import { Refer } from "./refer";

export const ThemeData: ThemeType = {
  themeMode: ThemeMode,
  ...Refer,
  palette: Palette,
};
