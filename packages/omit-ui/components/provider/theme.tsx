import {OmitThemeTypes} from "../../types/provider";
import {mergeObjectFnc} from "../../utils/common";
import {OmitDefaultTheme} from "../../default/theme";
import {FC} from "react";
import {ThemeContext} from "../../context/theme-context";
import {PropTypes} from "./provider";

const createThemeData = (theme?: Partial<OmitThemeTypes>): OmitThemeTypes => {
    return mergeObjectFnc(OmitDefaultTheme, theme)
}


export const ThemeRenderContent: FC<Omit<PropTypes, 'config'>> = (props) => {
    const {theme, children} = props
    const Theme = createThemeData(theme);
    return (
        <ThemeContext.Provider value={Theme}>
            {children}
        </ThemeContext.Provider>
    )
}