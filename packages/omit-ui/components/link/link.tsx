import React, { FC, useMemo, useContext, ReactElement, LegacyRef } from "react";
import { LinkProps } from "./type";
import { ConfigContext } from "../../context/config-contenxt";
import classnames from "classnames";
export const Link: FC<LinkProps> = React.forwardRef(
  (props, ref: LegacyRef<HTMLAnchorElement>) => {
    const { prefixName } = useContext(ConfigContext);
    // init
    const {
      children,
      theme = "default",
      size = "medium",
      underline = false,
      hover = "underline",
      disabled = false,
      prefixIcon,
      suffixIcon,
      className = "",
      href = "",
      target = "_blank",
      onClick,
    } = props;
    const PrefixCName = `${prefixName}_link`;
    const renderIcon = (type: "pre" | "suf", icon?: ReactElement) => {
      if (icon) {
        return React.cloneElement(icon, {
          className: `${PrefixCName}_${size}_${type}Icon`,
        });
      }
      return null;
    };
    const linkClass = useMemo(() => {
      return classnames(
        [PrefixCName],
        [`${PrefixCName}_${theme}`],
        [`${PrefixCName}_${size}`],
        [`${PrefixCName}_hover_${hover}`],
        {
          [`${PrefixCName}_underline`]: !!underline,
          [`${PrefixCName}_disabled`]: !!disabled,
          [`${PrefixCName}_prefixIcon`]: !!prefixIcon,
          [`${PrefixCName}_suffixIcon`]: !!suffixIcon,
        }
      );
    }, [className]);

    const renderLinkContent = useMemo(() => {
      return (
        <>
          {prefixIcon ? renderIcon("pre", prefixIcon) : null}
          {children}
          {suffixIcon ? renderIcon("suf", suffixIcon) : null}
        </>
      );
    }, [children]);

    const linkEvent = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (disabled) return;
      onClick?.(e);
    };

    return (
      <a
        ref={ref}
        className={linkClass}
        href={disabled || href ? href : undefined}
        target={target}
        onClick={linkEvent}
      >
        {renderLinkContent}
      </a>
    );
  }
);
