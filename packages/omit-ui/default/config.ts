import {
  OmitDefaultMode,
  OmitDefaultPrefix,
  OmitFontSize,
  OmitIndex,
  OmitRadius,
  OmitSpacePoint,
} from "omit-injection";
import { OmitConfigTypes } from "../types/provider";

export const OmitDefaultConfig: OmitConfigTypes = {
  prefixName: OmitDefaultPrefix,
  themeMode: OmitDefaultMode,
  index: OmitIndex,
  spacePoint: OmitSpacePoint,
  fontSize: OmitFontSize,
  radius: OmitRadius,
};
