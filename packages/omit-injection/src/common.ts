import { OmitFontSizeTypes, OmitIndexTypes, OmitRadiusTypes, OmitSpacePointTypes } from '../types/common';

export const OmitIndex: OmitIndexTypes = {
  default: 0,
  absolute: 1,
  popover: 30,
  tooltip: 40,
  modal: 1000,
  toast: 1100,
};

export const OmitSpacePoint: OmitSpacePointTypes = {
  tiny: '4px',
  small: '8px',
  mediumLower: '12px',
  medium: '16px',
  big: '24px',
  large: '32px',
};

export const OmitFontSize: OmitFontSizeTypes = {
  tiny: '12px',
  small: '14px',
  medium: '16px',
  big: '18px',
  large: '20px',
};

export const OmitRadius: OmitRadiusTypes = {
  medium: '4px',
  round: '999999px',
  circle: '50%',
};
