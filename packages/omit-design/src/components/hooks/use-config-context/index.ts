import { useContext } from "react";
import { ConfigContext, ConfigContextType } from "../../context";

export const useConfigContext = (): ConfigContextType => {
  const config = useContext(ConfigContext);
  return config;
};
