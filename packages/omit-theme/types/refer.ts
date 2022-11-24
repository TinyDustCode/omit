import { ThemeModeType } from "./common";

export interface InteractionType {
  main: string;
  hover: string;
  active: string;
  disabled: string;
}

export interface HierarchyType {
  default: number;
  absolute: number;
  popover: number;
  tooltip: number;
  modal: number;
  toast: number;
}

export interface SpaceType {
  s1: string;
  s2: string;
  s3: string;
  s4: string;
  s5: string;
}

export interface FontType {
  f1: string;
  f2: string;
  f3: string;
  f4: string;
  f5: string;
}

export interface RadiusType {
  r1: string;
  r2: string;
  r3: string;
}

export interface HeightType {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  h7: string;
  h8: string;
  h9: string;
  h10: string;
}

export type ThemeInteractionType = Record<ThemeModeType, InteractionType>;

export interface ReferTableType {
  interaction: ThemeInteractionType;
  hierarchy: HierarchyType;
  space: SpaceType;
  radius: RadiusType;
  font: FontType;
  height: HeightType;
}
