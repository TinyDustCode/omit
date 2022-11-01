import {OmitBaseSizeTypes, OmitBaseNodeTypes, OmitBaseStyleTypes} from "../../types/common";

import {OmitClickEvent} from "../../types/events";

export type OmitButtonVariantTypes = 'base' | 'outline' | 'dashed' | 'text';
export type OmitButtonThemeTypes = 'primary' | 'success' | 'warning' | 'danger';
export type OmitButtonShapeTypes = 'rectangle' | 'round' | 'circle'

export interface ButtonBaseProps {
    className?: string;
    style?: OmitBaseStyleTypes;
    theme?: OmitButtonThemeTypes
    type?: OmitButtonVariantTypes;
    size?: OmitBaseSizeTypes;
    shape?: OmitButtonShapeTypes;
    loading?: boolean;
    disabled?: boolean;
    icon?: OmitBaseNodeTypes;
    children?: OmitBaseNodeTypes;
    onClick?: (event: OmitClickEvent) => void
}