import { PaletteModeReferTypes, PaletteInteractionReferTypes } from '../types/refer';

/*
 * 色板模式对照
 * */
export const OmitPMRefer: PaletteModeReferTypes = {
  primary: {
    light: 'p8',
    dark: 'p6',
  },
  success: {
    light: 'g6',
    dark: 'g6',
  },
  warning: {
    light: 'o5',
    dark: 'o6',
  },
  danger: {
    light: 'r6',
    dark: 'r6',
  },
};

/*
 * 色板交互对照
 * */
export const OmitPIRefer: PaletteInteractionReferTypes = {
  primary: {
    light: {
      hover: 'p6',
      active: 'p9',
      disabled: 'p5',
    },
    dark: {
      hover: 'p4',
      active: 'p8',
      disabled: 'p1',
    },
  },
  success: {
    light: {
      hover: 'g5',
      active: 'g7',
      disabled: 'g4',
    },
    dark: {
      hover: 'g4',
      active: 'g7',
      disabled: 'g1',
    },
  },
  warning: {
    light: {
      hover: 'o5',
      active: 'o7',
      disabled: 'o4',
    },
    dark: {
      hover: 'o4',
      active: 'o7',
      disabled: 'o1',
    },
  },
  danger: {
    light: {
      hover: 'r5',
      active: 'r7',
      disabled: 'r4',
    },
    dark: {
      hover: 'r4',
      active: 'r8',
      disabled: 'r1',
    },
  },
};
