import { css, SerializedStyles } from '@emotion/react'
import { OmitConfigThemeTypes } from '../../types/config'
import { renderPaletteColor } from '../../utils/palette'
import { OmitFontPalette, OmitModePaletteTypes, OmitModeTypes, OmitPaletteTypes } from "omit-injection";

// default
const defaultLink = (configTheme: OmitConfigThemeTypes) => {
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
const renderThemeColor = (type: OmitPaletteTypes, mode: OmitModeTypes, palette: OmitModePaletteTypes) => {
    const { main, hover, active } = renderPaletteColor(type, mode, palette);
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
const themeLink = (configTheme: OmitConfigThemeTypes) => {
    const { config: { prefixName }, theme: { palette, mode } } = configTheme;
    const PrefixCName = `${prefixName}_link`;
    return {
        [`.${PrefixCName}_primary`]: renderThemeColor('primary', mode, palette),
        [`.${PrefixCName}_success`]: renderThemeColor('success', mode, palette),
        [`.${PrefixCName}_warning`]: renderThemeColor('warning', mode, palette),
        [`.${PrefixCName}_danger`]: renderThemeColor('danger', mode, palette),
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

export const LinkStyle = (configTheme: OmitConfigThemeTypes): SerializedStyles => {
    const { config: { prefixName } } = configTheme
    return css`
      ${defaultLink(configTheme)},
      ${themeLink(configTheme)},
      ${linkSize(prefixName)}
    `
}