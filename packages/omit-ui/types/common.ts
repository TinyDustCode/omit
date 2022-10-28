import {ReactNode, CSSProperties} from "react";

export type OmitBaseNodeTypes<T = undefined> = T extends undefined ? ReactNode : (props: T) => ReactNode;

export type OmitBaseStyleTypes = CSSProperties;

export type OmitBaseSizeTypes = 'large' | 'medium' | 'small';

export interface OmitBaseStylePropsTypes {
    className?: string;
    style?: OmitBaseStyleTypes
}

export interface OmitBaseOptionBaseTypes {
    label: string;
    value: string
}

export interface OmitBaseStatusTypes {
    loading?: boolean;
    disabled?: boolean;
}