import { useContext } from "react";
import { ThemeContext } from "../../context";
import { ThemeData, ThemeType } from "omit-theme";
/*
 * todo
 *  合并theme数据到omit-theme提供的data中，再返回
 * */
export const useThemeContext = (): ThemeType => {
  const x = useContext(ThemeContext);
  console.log(x);
  return {
    ...ThemeData,
  };
};
