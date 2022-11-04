import { OmitBaseSizeTypes, OmitBaseNodeTypes, OmitBaseStyleTypes } from '../../types/common';

import { OmitClickEvent } from '../../types/events';

export type OmitButtonThemeTypes = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export interface linkBaseProps {
  className?: string;
  style?: OmitBaseStyleTypes;
  theme?: OmitButtonThemeTypes;
  size?: OmitBaseSizeTypes;
  loading?: boolean;
  disabled?: boolean;
  // icon?: OmitBaseNodeTypes;
  children?: OmitBaseNodeTypes;
  onClick?: (event: OmitClickEvent) => void;
}
