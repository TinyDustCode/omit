import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import { ConfigProvider } from "./config-provider";
import { ThemeContextType, ConfigContextType } from "../context";

export interface GlobalProviderType {
  theme?: ThemeContextType;
  config?: ConfigContextType;
}

export const GlobalProvider: FC<PropsWithChildren<GlobalProviderType>> = (
  props
) => {
  const { config, theme, children } = props;
  return (
    <ConfigProvider {...config}>
      <ThemeProvider {...theme}>{children}</ThemeProvider>
    </ConfigProvider>
  );
};
