import { createContext } from "react";
import { LanguagesType } from "../../../../local";

export interface ConfigContextType {
  languages?: LanguagesType;
}

type ContextType = ConfigContextType;

export const ConfigContext = createContext<ContextType>({});
