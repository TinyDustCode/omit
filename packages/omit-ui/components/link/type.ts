import { OmitBaseSizeTypes, OmitBaseNodeTypes, OmitBaseStyleTypes } from '../../types/common';

import { OmitClickEvent } from '../../types/events';

export type OmitButtonThemeTypes = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export interface LinkProps {
  className?: string;
  style?: OmitBaseStyleTypes;
  theme?: OmitButtonThemeTypes;
  size?: OmitBaseSizeTypes;
  loading?: boolean;
  disabled?: boolean;
  underline?: boolean;
  // icon?: OmitBaseNodeTypes;
  children?: OmitBaseNodeTypes;
  onClick?: (event: OmitClickEvent) => void;
}
