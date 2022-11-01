import {css, SerializedStyles} from "@emotion/react";
import {OmitConfigThemeTypes} from "../../types/config";
import {renderPaletteColor} from '../../utils/palette'

const buttonSize = (prefixName: string) => css({
    [`.${prefixName}_button_small`]: {
        padding: '2px 8px'
    },
    [`.${prefixName}_button_medium`]: {
        padding: '5px 16px'
    },
    [`.${prefixName}_button_large`]: {
        padding: '8px 24px'
    }
})

const primaryButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme;
    const {main, hover} = renderPaletteColor('primary', mode, palette);
    return css({
        [`.${prefixName}_button_primary`]: {
            background: main,
            borderColor: main,
            '&:hover': {
                background: hover,
                borderColor: hover,
            }
        }
    })
}

const successButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme;
    const {main, hover} = renderPaletteColor('success', mode, palette);
    return css({
        [`.${prefixName}_button_success`]: {
            background: main,
            borderColor: main,
            '&:hover': {
                background: hover,
                borderColor: hover,
            }
        }
    })
}

const warningButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme;
    const {main, hover} = renderPaletteColor('warning', mode, palette);
    return css({
        [`.${prefixName}_button_warning`]: {
            background: main,
            borderColor: main,
            '&:hover': {
                background: hover,
                borderColor: hover,
            }
        }
    })
}

const dangerButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme
    const {main, hover} = renderPaletteColor('danger', mode, palette);
    return css({
        [`.${prefixName}_button_danger`]: {
            background: main,
            borderColor: main,
            '&:hover': {
                background: hover,
                borderColor: hover,
            }
        }
    })
}


const baseButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}} = configTheme
    return css({
        [`.${prefixName}_button`]: {
            cursor: 'pointer',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '3px',
            color: 'white',
        }
    })
}

export const ButtonStyle = (configTheme: OmitConfigThemeTypes): SerializedStyles => {
    const {config: {prefixName}} = configTheme
    return css`
      ${baseButton(configTheme)}
      ${buttonSize(prefixName)}
      ${primaryButton(configTheme)}
      ${successButton(configTheme)}
      ${warningButton(configTheme)}
      ${dangerButton(configTheme)}
    `
}