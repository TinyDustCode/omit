import {
  OmitBaseSizeTypes,
  OmitBaseNodeTypes,
  OmitBaseStyleTypes,
} from "../../types/common";
import { OmitClickEvent } from "../../types/events";
import { ReactElement } from "react";
export type OmitButtonThemeTypes =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger";
export interface LinkProps {
  className?: string;
  style?: OmitBaseStyleTypes;
  theme?: OmitButtonThemeTypes;
  size?: OmitBaseSizeTypes;
  loading?: boolean;
  disabled?: boolean;
  hover?: "underline" | "color";
  underline?: boolean;
  children?: OmitBaseNodeTypes;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
  onClick?: (event: OmitClickEvent) => void;
}
