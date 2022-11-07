import { css, SerializedStyles } from '@emotion/react';
import { OmitGlobalConfig } from '../../types/provider';
import { renderPaletteColor } from '../../utils/palette';
import { OmitSpacePointTypes, OmitModePaletteTypes, OmitThemeModeTypes, OmitPaletteTypes } from 'omit-injection';

// default
const defaultLink = (globalConfig: OmitGlobalConfig) => {
  const {
    config: { prefixName },
  } = globalConfig;
  return css({
    [`.${prefixName}_link`]: {
      cursor: 'pointer',
      color: 'rgba(0, 0, 0, 0.9)',
      position: 'relative',
      textDecoration: 'none',
      '&:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        height: 0,
        bottom: 0,
        borderBottom: `1px solid rgba(0, 0, 0, 0.9)`,
        transition: 'all .2s linear',
        opacity: 0,
      },
    },
  });
};

// 渲染theme类型样式
const renderThemeColor = (type: OmitPaletteTypes, mode: OmitThemeModeTypes, palette: OmitModePaletteTypes) => {
  const { main, hover, active } = renderPaletteColor({ type, mode, palette });
  return {
    color: main,
    '&:after': {
      borderColor: main,
    },
  };
};

// theme
const themeLink = (globalConfig: OmitGlobalConfig) => {
  const {
    config: { prefixName, themeMode },
    theme: { themePalette },
  } = globalConfig;
  const PrefixCName = `${prefixName}_link`;
  return {
    [`.${PrefixCName}_primary`]: renderThemeColor('primary', themeMode, themePalette),
    [`.${PrefixCName}_success`]: renderThemeColor('success', themeMode, themePalette),
    [`.${PrefixCName}_warning`]: renderThemeColor('warning', themeMode, themePalette),
    [`.${PrefixCName}_danger`]: renderThemeColor('danger', themeMode, themePalette),
  };
};

// 大小
const linkSize = (prefixName: string) => {
  const PrefixCName = `${prefixName}_link`;
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
    },
  };
};

// underline
const renderUnderline = (prefixName: string) => {
  const PrefixCName = `${prefixName}_link`;
  return css({
    [`.${PrefixCName}_underline:after`]: {
      opacity: 1,
    },
  });
};

// hover
const renderHover = (prefixName: string) => {
  const PrefixCName = `${prefixName}_link_hover`;
  return css({
    [`.${PrefixCName}_underline:hover`]: {
      '&:after': {
        opacity: 1,
      },
    },
    [`.${PrefixCName}_color:hover`]: {
      '&:after': {
        opacity: 0,
      },
    },
  });
};

// disabledColor
const disabledColor = (type: OmitPaletteTypes, mode: OmitThemeModeTypes, palette: OmitModePaletteTypes) => {
  const { disabled } = renderPaletteColor({ type, mode, palette });
  return {
    color: disabled,
    '&:after': {
      borderColor: disabled,
      opacity: 0,
    },
  };
};

// disabled
const renderDisabled = (globalConfig: OmitGlobalConfig) => {
  const {
    config: { prefixName, themeMode },
    theme: { themePalette },
  } = globalConfig;
  const PrefixCName = `${prefixName}_link`;
  console.log(globalConfig, 'globalConfig');

  return css({
    [`.${PrefixCName}_disabled`]: {
      cursor: 'not-allowed',
      [`&.${PrefixCName}_primary`]: disabledColor('primary', themeMode, themePalette),
      [`&.${PrefixCName}_success`]: disabledColor('success', themeMode, themePalette),
      [`&.${PrefixCName}_warning`]: disabledColor('warning', themeMode, themePalette),
      [`&.${PrefixCName}_danger`]: disabledColor('danger', themeMode, themePalette),
    },
  });
};

const iconColor = (
  size: 'tiny' | 'small' | 'mediumLower' | 'medium' | 'big' | 'large',
  type: 'marginRight' | 'marginLeft',
  globalConfig: OmitGlobalConfig,
) => {
  const {
    config: { spacePoint },
  } = globalConfig;
  return {
    [type]: spacePoint[`${size}`],
  };
};

const renderPrefixIcon = (globalConfig: OmitGlobalConfig) => {
  const {
    config: { prefixName },
  } = globalConfig;
  const PrefixCName = `${prefixName}_link`;
  return css({
    [`.${PrefixCName}_small_preIcon`]: iconColor('tiny', 'marginRight', globalConfig),
    [`.${PrefixCName}_medium_preIcon`]: iconColor('small', 'marginRight', globalConfig),
    [`.${PrefixCName}_large_preIcon`]: iconColor('mediumLower', 'marginRight', globalConfig),
  });
};

const renderSuffixIcon = (globalConfig: OmitGlobalConfig) => {
  const {
    config: { prefixName },
  } = globalConfig;
  const PrefixCName = `${prefixName}_link`;
  return css({
    [`.${PrefixCName}_small_sufIcon`]: iconColor('tiny', 'marginLeft', globalConfig),
    [`.${PrefixCName}_medium_sufIcon`]: iconColor('small', 'marginLeft', globalConfig),
    [`.${PrefixCName}_large_sufIcon`]: iconColor('mediumLower', 'marginLeft', globalConfig),
  });
};

export const LinkStyle = (configTheme: OmitGlobalConfig): SerializedStyles => {
  const {
    config: { prefixName },
  } = configTheme;
  return css`
    ${defaultLink(configTheme)},
    ${themeLink(configTheme)},
      ${linkSize(prefixName)},
      ${renderHover(prefixName)},
      ${renderUnderline(prefixName)},
      ${renderPrefixIcon(configTheme)},
      ${renderSuffixIcon(configTheme)},
      ${renderDisabled(configTheme)},
  `;
};
