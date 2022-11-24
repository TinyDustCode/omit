import { PaletteType } from "./palette";
import {
  FontType,
  HeightType,
  HierarchyType,
  RadiusType,
  SpaceType,
  ThemeInteractionType,
} from "./refer";
import { ThemeModeType } from "./common";

export * from "./common";
export * from "./palette";
export * from "./refer";

export interface ThemeType {
  themeMode: ThemeModeType;
  interaction: ThemeInteractionType;
  hierarchy: HierarchyType;
  space: SpaceType;
  radius: RadiusType;
  font: FontType;
  height: HeightType;
  palette: PaletteType;
}
