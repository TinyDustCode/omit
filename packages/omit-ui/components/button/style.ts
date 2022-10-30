import {css, SerializedStyles} from "@emotion/react";
import {OmitConfigThemeTypes} from "../../types/config";

const buttonSize = (prefixName: string) => ({
    [`.${prefixName}_small_button`]: {
        padding: '2px 8px'
    },
    [`.${prefixName}_medium_button`]: {
        padding: '5px 16px'
    },
    [`.${prefixName}_large_button`]: {
        padding: '8px 24px'
    }
})

const primaryButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme
    return {
        [`.${prefixName}_primary_button`]: {
            background: palette[mode].primary.p8,
            color:'white',
            borderColor:palette[mode].primary.p8,
        }
    }
}

const baseButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}} = configTheme
    return {
        [`.${prefixName}_button`]:{
            cursor:'pointer',
            borderWidth: '1px',
            borderStyle: 'solid',
        }
    }
}


export const ButtonStyle = (configTheme: OmitConfigThemeTypes): SerializedStyles => {
    const {config: {prefixName},theme:{palette,mode}} = configTheme
    return css({
        ...baseButton(configTheme),
        ...buttonSize(prefixName),
        ...primaryButton(configTheme)
    })
}