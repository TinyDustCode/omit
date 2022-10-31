import {OmitBaseSizeTypes, OmitBaseNodeTypes, OmitBaseStyleTypes} from "../../types/common";

import {OmitClickEvent} from "../../types/events";

export type OmitButtonVariantTypes = 'base' | 'outline' | 'dashed' | 'text' | 'icon';
export type OmitButtonThemeTypes = 'default' | 'primary' | 'success' | 'warning' | 'danger'

export interface ButtonBaseProps {
    className?: string;
    style?: OmitBaseStyleTypes;
    theme?: OmitButtonThemeTypes
    type?: OmitButtonVariantTypes;
    size?: OmitBaseSizeTypes;
    loading?: boolean;
    disabled?: boolean;
    icon?: OmitBaseNodeTypes;
    children?: OmitBaseNodeTypes;
    onClick?: (event: OmitClickEvent) => void
}