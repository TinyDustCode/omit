import {FunctionComponent, useContext} from 'react'
import {Global} from '@emotion/react';
import {createBaseStyles} from "./style_service";
import {ThemeContext} from "../../context/theme-context";

export const OmitStyles: FunctionComponent = () => {
    const Theme = useContext(ThemeContext);
    return <Global styles={createBaseStyles(Theme)}/>
}