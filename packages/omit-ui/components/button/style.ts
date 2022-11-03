import {css, SerializedStyles} from "@emotion/react";
import {OmitGlobalConfig} from "../../types/provider";
import {renderPaletteColor} from '../../utils/palette'
import {OmitFontPalette, OmitModePaletteTypes, OmitThemeModeTypes, OmitPaletteTypes} from "omit-injection";

// 渲染variant类型样式
const renderVariantColor = (type: OmitPaletteTypes, mode: OmitThemeModeTypes, palette: OmitModePaletteTypes) => {
    const {main, hover, active} = renderPaletteColor({type, mode, palette});
    return {
        background: 'transparent',
        color: main,
        borderColor: main,
        '&:hover': {
            borderColor: hover,
            color: hover,
            background: 'transparent',
        },
        '&:active': {
            borderColor: active,
            color: active,
            background: 'transparent',
        }
    }
};
const renderVariantBase = (prefixName: string, mode: OmitThemeModeTypes, palette: OmitModePaletteTypes) => {
    return {
        [`&.${prefixName}_button_primary`]: renderVariantColor('primary', mode, palette),
        [`&.${prefixName}_button_success`]: renderVariantColor('success', mode, palette),
        [`&.${prefixName}_button_warning`]: renderVariantColor('warning', mode, palette),
        [`&.${prefixName}_button_danger`]: renderVariantColor('danger', mode, palette),
    }
}
const renderTextColor = (type: OmitPaletteTypes, mode: OmitThemeModeTypes, palette: OmitModePaletteTypes) => {
    const {main, hover, active} = renderPaletteColor({type, mode, palette});
    return {
        background: 'transparent',
        color: main,
        '&:hover': {
            background: OmitFontPalette.d2,
            color: hover,
        },
        '&:active': {
            background: OmitFontPalette.d4,
            color: active,
        }
    }
}
// 渲染theme类型样式
const renderThemeColor = (type: OmitPaletteTypes, mode: OmitThemeModeTypes, palette: OmitModePaletteTypes) => {
    const {main, hover, active} = renderPaletteColor({type, mode, palette});
    return {
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
}
// 渲染disabled
const disabledColor = (prefixName: string, type: OmitPaletteTypes, mode: OmitThemeModeTypes, palette: OmitModePaletteTypes) => {
    const {main, disabled} = renderPaletteColor({type, mode, palette});
    return {
        background: disabled,
        borderColor: disabled,
        [`& .${prefixName}_button_icon`]: {
            fill: 'white',
        },
        [`&.${prefixName}_button_outline,&.${prefixName}_button_dashed,&.${prefixName}_button_text`]: {
            background: 'transparent',
            color: main,
            [`& .${prefixName}_button_icon`]: {
                fill: main,
            },
        },
    }
}
// size
const buttonSize = (globalConfig: OmitGlobalConfig) => {
    const {config: {prefixName, spacePoint, fontSize}} = globalConfig
    return css({
        [`.${prefixName}_button_small`]: {
            padding: `0 ${spacePoint.small}`,
            fontSize: fontSize.tiny,
            height: '24px',
            lineHeight: '20px',
            [`& ${prefixName}_button_icon`]: {
                fontSize: fontSize.small,
            }
        },
        [`.${prefixName}_button_medium`]: {
            padding: `0 ${spacePoint.medium}`,
            fontSize: fontSize.small,
            height: '32px',
            lineHeight: '22px',
            [`& ${prefixName}_button_icon`]: {
                fontSize: fontSize.medium,
            }
        },
        [`.${prefixName}_button_large`]: {
            padding: `0 ${spacePoint.big}`,
            fontSize: fontSize.medium,
            height: '40px',
            lineHeight: '24px',
            [`& ${prefixName}_button_icon`]: {
                fontSize: fontSize.large,
            }
        }
    })
}
// theme
const themeButton = (globalConfig: OmitGlobalConfig) => {
    const {config: {prefixName, themeMode}, theme: {themePalette}} = globalConfig;
    return {
        [`.${prefixName}_button_primary`]: renderThemeColor('primary', themeMode, themePalette),
        [`.${prefixName}_button_success`]: renderThemeColor('success', themeMode, themePalette),
        [`.${prefixName}_button_warning`]: renderThemeColor('warning', themeMode, themePalette),
        [`.${prefixName}_button_danger`]: renderThemeColor('danger', themeMode, themePalette),
    }
}
// shape
const shapeButton = (globalConfig: OmitGlobalConfig) => {
    const {config: {prefixName, radius}} = globalConfig;
    return css({
        [`.${prefixName}_button_rectangle`]: {
            borderRadius: radius.medium,
        },
        [`.${prefixName}_button_round`]: {
            borderRadius: radius.round,
        },
        [`.${prefixName}_button_circle`]: {
            borderRadius: radius.circle,
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
}
// icon
const iconButton = (globalConfig: OmitGlobalConfig) => {
    const {config: {prefixName, spacePoint}} = globalConfig;
    return css({
        [`.${prefixName}_button_icon+.${prefixName}_button_text:not(:empty)`]: {
            marginLeft: spacePoint.small
        }
    })
}
// variant
const variantButton = (globalConfig: OmitGlobalConfig) => {
    const {theme: {themePalette}, config: {prefixName, themeMode}} = globalConfig;
    return css({
        [`&.${prefixName}_button_outline`]: {
            ...renderVariantBase(prefixName, themeMode, themePalette)
        },
        [`&.${prefixName}_button_dashed`]: {
            borderStyle: 'dashed',
            ...renderVariantBase(prefixName, themeMode, themePalette)
        },
        [`&.${prefixName}_button_text`]: {
            borderStyle: 'none',
            [`&.${prefixName}_button_primary`]: renderTextColor('primary', themeMode, themePalette),
            [`&.${prefixName}_button_success`]: renderTextColor('success', themeMode, themePalette),
            [`&.${prefixName}_button_warning`]: renderTextColor('warning', themeMode, themePalette),
            [`&.${prefixName}_button_danger`]: renderTextColor('danger', themeMode, themePalette),
        },
    })
}
// disabled
const disabledButton = (globalConfig: OmitGlobalConfig) => {
    const {theme: {themePalette}, config: {prefixName, themeMode}} = globalConfig;
    return css({
        [`&.${prefixName}_button_disabled`]: {
            cursor: 'not-allowed',
            [`&.${prefixName}_button_primary`]: disabledColor(prefixName, 'primary', themeMode, themePalette),
            [`&.${prefixName}_button_success`]: disabledColor(prefixName, 'success', themeMode, themePalette),
            [`&.${prefixName}_button_warning`]: disabledColor(prefixName, 'warning', themeMode, themePalette),
            [`&.${prefixName}_button_danger`]: disabledColor(prefixName, 'danger', themeMode, themePalette),
        }
    })
}
// base
const baseButton = (globalConfig: OmitGlobalConfig) => {
    const {config: {prefixName, radius}} = globalConfig
    return css({
        [`.${prefixName}_button`]: {
            border: '1px solid transparent',
            cursor: 'pointer',
            borderRadius: radius.medium,
            color: 'white',
            transition: 'all .3s linear',
            outline: 'none',
            padding: 0,
            margin: 0,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}

export const ButtonStyle = (globalConfig: OmitGlobalConfig): SerializedStyles => {
    return css`
      ${baseButton(globalConfig)}
      ${buttonSize(globalConfig)}
      ${themeButton(globalConfig)}
      ${shapeButton(globalConfig)}
      ${variantButton(globalConfig)}
      ${iconButton(globalConfig)}
      ${disabledButton(globalConfig)}
    `
}