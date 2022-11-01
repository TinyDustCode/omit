import {FC, useContext, useMemo} from 'react'
import {ButtonBaseProps} from "./type";
import {ConfigContext} from "../../context/config-contenxt";
import {renderClassNames} from "../../utils/common";


export const Button: FC<ButtonBaseProps> = (props) => {
    const {prefixName} = useContext(ConfigContext)
    const PrefixCName = `${prefixName}_button`;
    const {
        icon,
        theme = 'primary',
        size = 'medium',
        type = 'base',
        shape = 'rectangle',
        onClick,
        children
    } = props;

    const renderButtonContent = useMemo(() => {
        return children
    }, [icon, children]);

    const renderClass = useMemo(() => {
        let classNames = {
            [`${PrefixCName}_${theme}`]: true,
            [`${PrefixCName}_${size}`]: true,
            [`${PrefixCName}_${shape}`]: true,
        }
        return renderClassNames(PrefixCName, classNames)
    }, [])

    return (
        <button
            className={renderClass}
        >
            <span>{renderButtonContent}</span>
        </button>
    )
}

Button.displayName = 'Button';