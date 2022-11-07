import React, { FC, useMemo, useContext, ReactElement } from 'react';
import { linkBaseProps } from './type';
import { ConfigContext } from '../../context/config-contenxt';
import { renderClassNames } from '../../utils/common';

export const Link: FC<linkBaseProps> = props => {
  const { prefixName } = useContext(ConfigContext);
  // init
  const {
    children,
    theme = 'default',
    size = 'medium',
    underline = false,
    hover = 'underline',
    disabled = false,
    prefixIcon,
    suffixIcon,
  } = props;
  const PrefixCName = `${prefixName}_link`;
  const renderIcon = (type: 'pre' | 'suf', icon?: ReactElement) => {
    if (icon) {
      return React.cloneElement(icon, {
        className: `${PrefixCName}_${size}_${type}Icon`,
      });
    }
    return null;
  };
  const linkClass = useMemo(() => {
    const classNames = {
      [`${PrefixCName}_${theme}`]: true,
      [`${PrefixCName}_${size}`]: true,
      [`${PrefixCName}_underline`]: !!underline,
      [`${PrefixCName}_disabled`]: !!disabled,
      [`${PrefixCName}_hover_${hover}`]: true,
      [`${PrefixCName}_prefixIcon`]: !!prefixIcon,
      [`${PrefixCName}_suffixIcon`]: !!suffixIcon,
    };
    return renderClassNames(PrefixCName, classNames);
  }, []);

  const renderLinkContent = useMemo(() => {
    return (
      <>
        {prefixIcon ? renderIcon('pre', prefixIcon) : null}
        {children}
        {suffixIcon ? renderIcon('suf', suffixIcon) : null}
      </>
    );
  }, [children]);

  return <a className={linkClass}>{renderLinkContent}</a>;
};
