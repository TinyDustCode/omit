import { useContext } from "react";
import { ThemeContext } from "../../context";
import { ThemeData, ThemeType } from "omit-theme";

export const useThemeContext = (): ThemeType => {
  const x = useContext(ThemeContext);
  console.log(x);
  return {
    ...ThemeData,
  };
};
