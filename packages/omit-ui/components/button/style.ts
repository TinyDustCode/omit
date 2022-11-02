import {css, SerializedStyles} from "@emotion/react";
import {OmitConfigThemeTypes} from "../../types/config";
import {renderPaletteColor} from '../../utils/palette'
import {OmitFontPalette, OmitModePaletteTypes, OmitModeTypes, OmitPaletteTypes} from "omit-injection";

// 渲染variant类型样式
const renderVariantColor = (type: OmitPaletteTypes, mode: OmitModeTypes, palette: OmitModePaletteTypes) => {
    const {main, hover, active} = renderPaletteColor(type, mode, palette);
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
const renderVariantBase = (prefixName: string, mode: OmitModeTypes, palette: OmitModePaletteTypes) => {
    return {
        [`&.${prefixName}_button_primary`]: renderVariantColor('primary', mode, palette),
        [`&.${prefixName}_button_success`]: renderVariantColor('success', mode, palette),
        [`&.${prefixName}_button_warning`]: renderVariantColor('warning', mode, palette),
        [`&.${prefixName}_button_danger`]: renderVariantColor('danger', mode, palette),
    }
}
const renderTextColor = (type: OmitPaletteTypes, mode: OmitModeTypes, palette: OmitModePaletteTypes) => {
    const {main, hover, active} = renderPaletteColor(type, mode, palette);
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
const renderThemeColor = (type: OmitPaletteTypes, mode: OmitModeTypes, palette: OmitModePaletteTypes) => {
    const {main, hover, active} = renderPaletteColor(type, mode, palette);
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
const disabledColor = (prefixName: string,type: OmitPaletteTypes, mode: OmitModeTypes, palette: OmitModePaletteTypes) => {
    const {main,disabled} = renderPaletteColor(type, mode, palette);
    return {
        background:disabled,
        borderColor:disabled,
        [`& .${prefixName}_button_icon`]: {
            fill:'white',
        },
        [`&.${prefixName}_button_outline,&.${prefixName}_button_dashed,&.${prefixName}_button_text`]: {
            background:'transparent',
            color:main,
            [`& .${prefixName}_button_icon`]: {
                fill:main,
            },
        },
    }
}
// size
const buttonSize = (prefixName: string) => css({
    [`.${prefixName}_button_small`]: {
        padding: '0 7px',
        fontSize: '12px',
        height: '24px',
        lineHeight: '20px',
        [`& ${prefixName}_button_icon`]: {
            fontSize: 12
        }
    },
    [`.${prefixName}_button_medium`]: {
        padding: '0 15px',
        height: '32px',
        fontSize: '14px',
        lineHeight: '22px',
        [`& ${prefixName}_button_icon`]: {
            fontSize: 16
        }
    },
    [`.${prefixName}_button_large`]: {
        padding: '0 24px',
        fontSize: '16px',
        height: '40px',
        lineHeight: '24px',
        [`& ${prefixName}_button_icon`]: {
            fontSize: 20
        }
    }
})
// theme
const themeButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme;
    return {
        [`.${prefixName}_button_primary`]: renderThemeColor('primary', mode, palette),
        [`.${prefixName}_button_success`]: renderThemeColor('success', mode, palette),
        [`.${prefixName}_button_warning`]: renderThemeColor('warning', mode, palette),
        [`.${prefixName}_button_danger`]: renderThemeColor('danger', mode, palette),
    }
}
// shape
const shapeButton = (prefixName: string) => css({
    [`.${prefixName}_button_rectangle`]: {
        borderRadius: '3px',
    },
    [`.${prefixName}_button_round`]: {
        borderRadius: '999px',
    },
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
// icon
const iconButton = (prefixName: string) => css({
    [`.${prefixName}_button_icon+.${prefixName}_button_text:not(:empty)`]: {
        marginLeft: '8px'
    }
})
// variant
const variantButton = (configTheme: OmitConfigThemeTypes) => {
    const {theme: {palette, mode}, config: {prefixName}} = configTheme;
    return css({
        [`&.${prefixName}_button_outline`]: {
            ...renderVariantBase(prefixName, mode, palette)
        },
        [`&.${prefixName}_button_dashed`]: {
            borderStyle: 'dashed',
            ...renderVariantBase(prefixName, mode, palette)
        },
        [`&.${prefixName}_button_text`]: {
            borderStyle: 'none',
            [`&.${prefixName}_button_primary`]: renderTextColor('primary', mode, palette),
            [`&.${prefixName}_button_success`]: renderTextColor('success', mode, palette),
            [`&.${prefixName}_button_warning`]: renderTextColor('warning', mode, palette),
            [`&.${prefixName}_button_danger`]: renderTextColor('danger', mode, palette),
        },
    })
}
// disabled
const disabledButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}, theme: {palette, mode}} = configTheme;
    const {main} = renderPaletteColor('primary',mode,palette)
    return css({
        [`&.${prefixName}_button_disabled`]: {
            cursor: 'not-allowed',
            [`&.${prefixName}_button_primary`]: disabledColor(prefixName,'primary',mode,palette),
            [`&.${prefixName}_button_success`]: disabledColor(prefixName,'success',mode,palette),
            [`&.${prefixName}_button_warning`]: disabledColor(prefixName,'warning',mode,palette),
            [`&.${prefixName}_button_danger`]: disabledColor(prefixName,'danger',mode,palette),
        }
    })
}
// base
const baseButton = (configTheme: OmitConfigThemeTypes) => {
    const {config: {prefixName}} = configTheme
    return css({
        [`.${prefixName}_button`]: {
            border: '1px solid transparent',
            cursor: 'pointer',
            borderRadius: '3px',
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

export const ButtonStyle = (configTheme: OmitConfigThemeTypes): SerializedStyles => {
    const {config: {prefixName}} = configTheme
    return css`
      ${baseButton(configTheme)}
      ${buttonSize(prefixName)}
      ${themeButton(configTheme)}
      ${shapeButton(prefixName)}
      ${variantButton(configTheme)}
      ${iconButton(prefixName)}
      ${disabledButton(configTheme)}
    `
}