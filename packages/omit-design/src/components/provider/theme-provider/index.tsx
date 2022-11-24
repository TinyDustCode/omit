import { FC, PropsWithChildren } from "react";
import { ThemeContext, ThemeContextType } from "../../context";
export const ThemeProvider: FC<PropsWithChildren<ThemeContextType>> = (
  props
) => {
  const { children, ...theme } = props;
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
