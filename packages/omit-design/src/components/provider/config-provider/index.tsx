import { FC, PropsWithChildren } from "react";
import { ConfigContext, ConfigContextType } from "../../context";

export const ConfigProvider: FC<PropsWithChildren<ConfigContextType>> = (
  props
) => {
  const { children, ...config } = props;
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};
