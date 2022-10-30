import {FC} from "react";
import {OmitBaseNodeTypes} from '../../types/common';
import {OmitConfigTypes, OmitThemeTypes} from '../../types/config';
import {mergeObjectFnc} from "../../utils/common";
import {ThemeContext} from '../../context/theme-context';
import {ConfigContext} from "../../context/config-contenxt";
import {OmitDefaultConfig, OmitDefaultTheme} from "../../config/config-theme";

type PropTypes = {
    theme?: Partial<OmitThemeTypes>
    config?: Partial<OmitConfigTypes>
    children: OmitBaseNodeTypes;
}

const createThemeData = (customThemeData?: Partial<OmitThemeTypes>): OmitThemeTypes => {
    return mergeObjectFnc(OmitDefaultTheme, customThemeData)
}

const creatConfigData = (config?: Partial<OmitConfigTypes>): OmitConfigTypes => {
    return mergeObjectFnc(OmitDefaultConfig, config)
}


const ThemeRenderContent: FC<Omit<PropTypes, 'config'>> = (props) => {
    const {theme, children} = props
    const Theme = createThemeData(theme);
    return (
        <ThemeContext.Provider value={Theme}>
            {children}
        </ThemeContext.Provider>
    )
}

const ConfigRenderContent: FC<Omit<PropTypes, 'theme'>> = (props) => {
    const {config, children} = props
    const Config = creatConfigData(config)
    return (
        <ConfigContext.Provider value={Config}>
            {children}
        </ConfigContext.Provider>
    )
}


export const OmitProvider: FC<PropTypes> = (props) => {
    const {theme, config, children} = props;
    return (
        <ConfigRenderContent config={config}>
            <ThemeRenderContent theme={theme}>
                {children}
            </ThemeRenderContent>
        </ConfigRenderContent>
    )
}