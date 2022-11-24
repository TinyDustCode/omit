import { FC } from "react";
import { ButtonPropsType } from "./type";
import { useThemeContext } from "../hooks";
import { StyledButton } from "./style";

export const Button: FC<ButtonPropsType> = (props) => {
  const { children } = props;
  const theme = useThemeContext();
  return <StyledButton themeData={theme}>{children}</StyledButton>;
};
Button.displayName = "Button";
