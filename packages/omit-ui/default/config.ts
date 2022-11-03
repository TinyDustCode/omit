import {OmitConfigTypes} from "../types/provider";
import {
    OmitDefaultMode,
    OmitDefaultPrefix,
    OmitFontSize,
    OmitIndex,
    OmitRadius,
    OmitSpacePoint,
} from "omit-injection";

export const OmitDefaultConfig: OmitConfigTypes = {
    prefixName: OmitDefaultPrefix,
    themeMode: OmitDefaultMode,
    index: OmitIndex,
    spacePoint: OmitSpacePoint,
    fontSize: OmitFontSize,
    radius: OmitRadius,
}