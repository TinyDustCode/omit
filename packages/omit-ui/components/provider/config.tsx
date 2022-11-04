import { FC } from 'react';
import { OmitConfigTypes } from '../../types/provider';
import { mergeObjectFnc } from '../../utils/common';
import { OmitDefaultConfig } from '../../default/config';
import { PropTypes } from './provider';
import { ConfigContext } from '../../context/config-contenxt';

const creatConfigData = (config?: Partial<OmitConfigTypes>): OmitConfigTypes => {
  return mergeObjectFnc(OmitDefaultConfig, config);
};

export const ConfigRenderContent: FC<Omit<PropTypes, 'theme'>> = props => {
  const { config, children } = props;
  const Config = creatConfigData(config);
  return <ConfigContext.Provider value={Config}>{children}</ConfigContext.Provider>;
};
