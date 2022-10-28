import {css, SerializedStyles} from "@emotion/react";
import {OmitThemeTypes} from "../../types/themes";

export const ButtonStyle = (Theme: OmitThemeTypes): SerializedStyles => {
    const {mode, palette} = Theme;
    console.log(palette);
    return css({
        ['.omit_button']: {
            width: '100px',
            background: palette[mode].primary.p6,
            color: palette[mode].danger.r3
        }
    })
}