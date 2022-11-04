import { css, SerializedStyles } from '@emotion/react';
import { OmitConfigThemeTypes } from '../../types/config';
import { renderPaletteColor } from '../../utils/palette';

const defaultLink = (configTheme: OmitConfigThemeTypes) => {
  const {
    config: { prefixName },
  } = configTheme;
  return css({
    [`.${prefixName}_link`]: {
      cursor: 'pointer',
      color: '#333',
    },
  });
};

export const LinkStyle = (configTheme: OmitConfigThemeTypes): SerializedStyles => {
  const {
    config: { prefixName },
  } = configTheme;
  return css`
    ${defaultLink(configTheme)}
  `;
};
