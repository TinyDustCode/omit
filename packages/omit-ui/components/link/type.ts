import { OmitBaseSizeTypes, OmitBaseNodeTypes, OmitBaseStyleTypes } from '../../types/common';
import { OmitClickEvent } from '../../types/events';
import { ReactElement } from 'react';
export type OmitButtonThemeTypes = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export interface linkBaseProps {
  className?: string;
  style?: OmitBaseStyleTypes;
  theme?: OmitButtonThemeTypes;
  size?: OmitBaseSizeTypes;
  loading?: boolean;
  disabled?: boolean;
  hover?: 'underline' | 'color';
  underline?: boolean;
  children?: OmitBaseNodeTypes;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  onClick?: (event: OmitClickEvent) => void;
}
