import {
  InteractionType,
  ThemeInteractionType,
  FontType,
  HeightType,
  HierarchyType,
  RadiusType,
  SpaceType,
  ReferTableType,
} from "../types";

const LightInteraction: InteractionType = {
  main: "color6",
  hover: "color5",
  active: "color8",
  disabled: "color3",
};
const DarkInteraction: InteractionType = {
  main: "color6",
  hover: "color7",
  active: "color2",
  disabled: "color8",
};

const interaction: ThemeInteractionType = {
  light: LightInteraction,
  dark: DarkInteraction,
};

const hierarchy: HierarchyType = {
  default: 0,
  absolute: 1,
  popover: 30,
  tooltip: 40,
  modal: 1000,
  toast: 1100,
};

const space: SpaceType = {
  s1: "4px",
  s2: "8px",
  s3: "16px",
  s4: "24px",
  s5: "32px",
};

const font: FontType = {
  f1: "12px",
  f2: "14px",
  f3: "16px",
  f4: "18px",
  f5: "20px",
};

const radius: RadiusType = {
  r1: "4px",
  r2: "999999px",
  r3: "50%",
};

const height: HeightType = {
  h1: "12px",
  h2: "16px",
  h3: "20px",
  h4: "24px",
  h5: "28px",
  h6: "32px",
  h7: "36px",
  h8: "40px",
  h9: "44px",
  h10: "48px",
};
export const Refer: ReferTableType = {
  hierarchy,
  space,
  font,
  radius,
  height,
  interaction,
};
