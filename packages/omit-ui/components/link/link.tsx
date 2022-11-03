import {FC, useMemo, useContext} from 'react'
import {linkBaseProps} from "./type";
import {ConfigContext} from "../../context/config-contenxt";
import { renderClassNames } from '../../utils/common';

export const Link: FC<linkBaseProps> = (props) => {
  const {prefixName} = useContext(ConfigContext)
  // init
  const {
    children,
    theme = 'default',
    size = 'medium',
    underline = true
  } = props;
  const PrefixCName = `${prefixName}_link`;
  const linkClass = useMemo(() => {
    const classNames = {
        [`${PrefixCName}_${theme}`]: true,
        [`${PrefixCName}_${size}`]: true,
        [`${PrefixCName}_underline`]: !!underline
    }
    return renderClassNames(PrefixCName, classNames)
  }, [])

  const renderLinkContent = useMemo(() => {
    return children
  }, [children])

  return (
    <a className={
      linkClass
    }>
      {renderLinkContent}
    </a>
  )
}
