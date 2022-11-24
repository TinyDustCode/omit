import { CSSProperties, ReactNode } from "react";
import { ThemeType } from "omit-theme";

export type OmitBaseNodeTypes<T = undefined> = T extends undefined
  ? ReactNode
  : (props: T) => ReactNode;

export type OmitBaseStyleTypes = CSSProperties;

export type SizeType = "large" | "medium" | "small";

export interface OmitBaseOptionBaseTypes {
  label: string;
  value: string;
}

export type StylePropsType<T> = { themeData: ThemeType } & T;
