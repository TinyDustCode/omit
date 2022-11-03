import { css, SerializedStyles } from '@emotion/react'
import {OmitGlobalConfig} from '../../types/provider'
import { renderPaletteColor } from '../../utils/palette'
import { OmitFontPalette, OmitModePaletteTypes, OmitThemeModeTypes, OmitPaletteTypes } from "omit-injection";

// default
const defaultLink = (configTheme: OmitGlobalConfig) => {
    const { config: { prefixName } } = configTheme
    return css({
        [`.${prefixName}_link`]: {
            cursor: 'pointer',
            color: 'rgba(0, 0, 0, 0.9)',
            transition: 'all .2s linear',
        }
    })
}

// 渲染theme类型样式
const renderThemeColor = (type: OmitPaletteTypes, mode: OmitThemeModeTypes, palette: OmitModePaletteTypes) => {
    const { main, hover, active } = renderPaletteColor({type, mode, palette});
    return {
        color: main,
        '&:hover': {
            color: hover,
        },
        '&:active': {
            color: active,
        }
    }
}

// theme 
const themeLink = (globalConfig: OmitGlobalConfig) => {
    const {config: {prefixName, themeMode}, theme: {themePalette}} = globalConfig;
    const PrefixCName = `${prefixName}_link`;
    return {
        [`.${PrefixCName}_primary`]: renderThemeColor('primary', themeMode, themePalette),
        [`.${PrefixCName}_success`]: renderThemeColor('success', themeMode, themePalette),
        [`.${PrefixCName}_warning`]: renderThemeColor('warning', themeMode, themePalette),
        [`.${PrefixCName}_danger`]: renderThemeColor('danger', themeMode, themePalette),
    }
}


// 大小
const linkSize = (prefixName: string) => {
    const PrefixCName = `${prefixName}_link`;
    console.log('omit_link_medium', `${PrefixCName}_medium`);
    
    return {
        [`.${PrefixCName}_small`]: {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '20px',
        },
        [`.${PrefixCName}_medium`]: {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
        },
        [`.${PrefixCName}_large`]: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
        }
    }
}

export const LinkStyle = (configTheme: OmitGlobalConfig): SerializedStyles => {
    const { config: { prefixName } } = configTheme
    return css`
      ${defaultLink(configTheme)},
      ${themeLink(configTheme)},
      ${linkSize(prefixName)}
    `
}