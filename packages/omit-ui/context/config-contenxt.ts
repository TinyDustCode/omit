import {createContext} from "react";
import {OmitDefaultPrefixName} from "omit-base";
import {OmitConfigTypes} from "../types/config";

export const ConfigContext = createContext<OmitConfigTypes>({
    prefixName: OmitDefaultPrefixName
});