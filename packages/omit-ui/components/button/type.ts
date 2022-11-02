import {OmitBaseSizeTypes, OmitBaseNodeTypes, OmitBaseStyleTypes} from "../../types/common";

import {OmitClickEvent} from "../../types/events";
import {ReactElement} from "react";

export type OmitButtonVariantTypes = 'outline' | 'dashed' | 'text';
export type OmitButtonThemeTypes = 'primary' | 'success' | 'warning' | 'danger';
export type OmitButtonShapeTypes = 'rectangle' | 'round' | 'circle'

export interface ButtonBaseProps {
    className?: string;
    style?: OmitBaseStyleTypes;
    theme?: OmitButtonThemeTypes
    variant?: OmitButtonVariantTypes;
    size?: OmitBaseSizeTypes;
    shape?: OmitButtonShapeTypes;
    loading?: boolean;
    disabled?: boolean;
    icon?: ReactElement;
    children?: OmitBaseNodeTypes;
    onClick?: (event: OmitClickEvent) => void
}