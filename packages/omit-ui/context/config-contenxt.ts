import {createContext} from "react";
import {OmitConfigTypes} from "../types/provider";
import {OmitDefaultConfig} from "../default/config";

export const ConfigContext = createContext<OmitConfigTypes>(OmitDefaultConfig);