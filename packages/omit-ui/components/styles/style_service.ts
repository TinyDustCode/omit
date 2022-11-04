import { css, SerializedStyles } from '@emotion/react';
import { OmitGlobalConfig } from '../../types/provider';
import { ButtonStyle } from '../button/style';
import { LinkStyle } from '../link/style';

import { creatBaseStyle } from './base-style';

export const createBaseStyles = (globalConfig: OmitGlobalConfig): SerializedStyles => {
  return css`
    ${creatBaseStyle(globalConfig)}
    ${ButtonStyle(globalConfig)}
  `;
};
