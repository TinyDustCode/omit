import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { StyledType } from "./type";
import { StylePropsType } from "../../../types/common";

type ButtonStyledType = StylePropsType<StyledType>;

const BaseStyles = ({ themeData: { radius } }: ButtonStyledType) => {
  return css({
    border: "1px solid transparent",
    cursor: "pointer",
    borderRadius: radius.r1,
    color: "red",
    transition: "all .3s linear",
    outline: "none",
    padding: 0,
    margin: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  });
};

export const StyledButton = styled("button")<ButtonStyledType>(BaseStyles);
