import {
    OmitBaseSizeTypes, OmitBaseNodeTypes, OmitBaseStyleTypes
} from "../../types/common";
import {OmitClickEvent} from "../../types/events";

type OmitButtonVariant = 'base' | 'outline' | 'dashed' | 'text' | 'icon'

export interface ButtonBaseProps {
    className?: string;
    style?: OmitBaseStyleTypes
    type?: OmitButtonVariant;
    size?: OmitBaseSizeTypes;
    loading?: boolean;
    disabled?: boolean;
    icon?: OmitBaseNodeTypes;
    children?: OmitBaseNodeTypes;
    onClick?: (event: OmitClickEvent) => void
}