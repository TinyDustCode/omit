import {css, SerializedStyles} from '@emotion/react';
import {OmitConfigThemeTypes} from "../../types/config";
import {ButtonStyle} from "../button/style";
import {LinkStyle} from "../link/style";

import {creatBaseStyle} from "./base-style";

export const createBaseStyles = (ConfigTheme:OmitConfigThemeTypes): SerializedStyles => {
    return css`
      ${creatBaseStyle(ConfigTheme)}
      ${ButtonStyle(ConfigTheme)}
      ${LinkStyle(ConfigTheme)}
    `
}