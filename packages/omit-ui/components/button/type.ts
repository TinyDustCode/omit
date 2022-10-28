import {
    OmitBaseSizeTypes, OmitBaseNodeTypes, OmitBaseStylePropsTypes, OmitBaseStatusTypes
} from "../../types/common";

type OmitButtonVariant = 'base' | 'outline' | 'dashed' | 'text' | 'icon'

export interface ButtonBaseProps extends OmitBaseStylePropsTypes, OmitBaseStatusTypes {
    type?: OmitButtonVariant;
    children?: OmitBaseNodeTypes;
    size?: OmitBaseSizeTypes;
}