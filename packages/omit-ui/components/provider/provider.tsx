import { FC } from 'react';
import { OmitConfigTypes, OmitThemeTypes } from '../../types/provider';
import { OmitBaseNodeTypes } from '../../types/common';

import { ConfigRenderContent } from './config';
import { ThemeRenderContent } from './theme';

export interface PropTypes {
  theme?: Partial<OmitThemeTypes>;
  config?: Partial<OmitConfigTypes>;
  children: OmitBaseNodeTypes;
}
export const OmitProvider: FC<PropTypes> = props => {
  const { theme, config, children } = props;
  return (
    <ConfigRenderContent config={config}>
      <ThemeRenderContent theme={theme}>{children}</ThemeRenderContent>
    </ConfigRenderContent>
  );
};
