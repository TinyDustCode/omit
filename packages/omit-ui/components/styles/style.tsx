import {FunctionComponent, useContext} from 'react'
import {Global} from '@emotion/react';
import {createBaseStyles} from "./style_service";
import {ThemeContext} from "../../context/theme-context";
import {ConfigContext} from "../../context/config-contenxt";

export const OmitStyles: FunctionComponent = () => {
    const theme = useContext(ThemeContext);
    const config = useContext(ConfigContext);
    return <Global styles={createBaseStyles({theme,config})}/>
}