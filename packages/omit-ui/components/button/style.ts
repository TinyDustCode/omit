import {css, SerializedStyles} from "@emotion/react";
import {OmitConfigThemeTypes} from "../../types/config";
import {renderPaletteColor} from '../../utils/palette'

const buttonSize = (prefixName: string) => css({
    [`.${prefixName}_button_small`]: {
        padding: '0 7px',
        fontSize: '12px',
        height: '24px',
        lineHeight:'20px',
    },
    [`.${prefixName}_button_medium`]: {
        padding: '0 15px',
        height: '32px',
        fontSize: '14px',
        lineHeight:'22px',
    },
    [`.${prefixName}_button_large`]: {
        padding: '0 24px',
        fontSize: '16px',
        height: '40px',
        lineHeight:'24px',
    }
})

/*
* theme
* */
const primaryButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme;
    const {main, hover, active} = renderPaletteColor('primary', mode, palette);
    return css({
        [`.${prefixName}_button_primary`]: {
            background: main,
            borderColor: main,
            '&:hover': {
                background: hover,
                borderColor: hover,
            },
            '&:active': {
                background: active,
                borderColor: active,
            }
        }
    })
}
const successButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme;
    const {main, hover, active} = renderPaletteColor('success', mode, palette);
    return css({
        [`.${prefixName}_button_success`]: {
            background: main,
            borderColor: main,
            '&:hover': {
                background: hover,
                borderColor: hover,
            },
            '&:active': {
                background: active,
                borderColor: active,
            }
        }
    })
}
const warningButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme;
    const {main, hover, active} = renderPaletteColor('warning', mode, palette);
    return css({
        [`.${prefixName}_button_warning`]: {
            background: main,
            borderColor: main,
            '&:hover': {
                background: hover,
                borderColor: hover,
            },
            '&:active': {
                background: active,
                borderColor: active,
            }
        }
    })
}
const dangerButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme
    const {main, hover, active} = renderPaletteColor('danger', mode, palette);
    return css({
        [`.${prefixName}_button_danger`]: {
            background: main,
            borderColor: main,
            '&:hover': {
                background: hover,
                borderColor: hover,
            },
            '&:active': {
                background: active,
                borderColor: active,
            }
        }
    })
}

/*
* shape
* */
const rectangleShape = (prefixName: string) => css({
    [`.${prefixName}_button_rectangle`]: {
        borderRadius: '3px',
    }
})
const roundShape = (prefixName: string) => css({
    [`.${prefixName}_button_round`]: {
        borderRadius: '999px',
    }
})
const circleShape = (prefixName: string) => css({
    [`.${prefixName}_button_circle`]: {
        borderRadius: '50%',
        [`&.${prefixName}_button_small`]: {
            width: 24,
            padding: 0
        },
        [`&.${prefixName}_button_medium`]: {
            width: 32,
            padding: 0
        },
        [`&.${prefixName}_button_large`]: {
            width: 40,
            padding: 0
        }
    }
})

const baseButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}} = configTheme
    return css({
        [`.${prefixName}_button`]: {
            border: '1px solid transparent',
            cursor: 'pointer',
            borderRadius: '3px',
            color: 'white',
            transition: 'all .2s linear',
            outline: 'none',
            padding: 0,
            margin: 0,
            display: 'inline-flex',
            alignItems:'center',
            justifyContent:'center'
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
      ${rectangleShape(prefixName)}
      ${roundShape(prefixName)}
      ${circleShape(prefixName)}
    `
}