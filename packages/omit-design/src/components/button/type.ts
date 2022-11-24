import {
  CSSProperties,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";
import { OmitClickEvent } from "../../../types/events";
import { SizeType } from "../../../types/common";

export type ButtonVariantType = "outline" | "dashed" | "text";
export type ButtonThemeType = "primary" | "success" | "warning" | "danger";
export type ButtonShapeType = "rectangle" | "round" | "circle";

export interface StyledType {
  theme?: ButtonThemeType;
  variant?: ButtonVariantType;
  size?: SizeType;
  shape?: ButtonShapeType;
  loading?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}

export interface ComponentTypes extends StyledType {
  className?: string;
  style?: CSSProperties;
  icon?: ReactElement;
  onClick?: (event: OmitClickEvent) => void;
}

export type ButtonPropsType = PropsWithChildren<ComponentTypes>;
