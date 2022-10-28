import {FC} from "react";
import {OmitPalette, OmitPaletteDefaultMode, OmitPaletteModeTypes, OmitPaletteTypes} from 'omit-base';
import {OmitBaseNodeTypes} from '../../types/common';
import {OmitThemeTypes} from '../../types/themes';
import {mergeObjectFnc} from "../../utils/common";
import {ThemeContext} from '../../context/theme-context';

type PropTypes = {
    palette?: OmitPaletteTypes;
    mode?: OmitPaletteModeTypes
    children: OmitBaseNodeTypes;
}

const createThemeData = (customThemeData: Omit<PropTypes, 'children'>): OmitThemeTypes => {
    const {palette, mode = OmitPaletteDefaultMode} = customThemeData
    return {
        palette: mergeObjectFnc(OmitPalette, palette),
        mode
    }
}

export const ThemeProvider: FC<PropTypes> = (props) => {
    const {children, ...themeData} = props;
    const Theme = createThemeData(themeData);
    return (
        <ThemeContext.Provider value={Theme}>
            {children}
        </ThemeContext.Provider>
    )
}