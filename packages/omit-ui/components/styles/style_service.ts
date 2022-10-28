import {css, SerializedStyles} from '@emotion/react';
import {OmitThemeTypes} from "../../types/themes";
import {ButtonStyle} from "../button/style";

export const createBaseStyles = (Theme:OmitThemeTypes): SerializedStyles => {
    return css({
        ...ButtonStyle(Theme)
    })
}