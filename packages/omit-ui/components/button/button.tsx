import React, {FC, ReactElement, useContext, useMemo} from 'react'
import {ButtonBaseProps} from "./type";
import {ConfigContext} from "../../context/config-contenxt";
import {renderClassNames} from "../../utils/common";


export const Button: FC<ButtonBaseProps> = (props) => {
    const {prefixName} = useContext(ConfigContext)
    const ButtonPrefix = `${prefixName}_button`;
    const {
        icon,
        theme = 'primary',
        size = 'medium',
        variant = 'base',
        shape = 'rectangle',
        onClick,
        children
    } = props;

    const renderIcon = (icon?: ReactElement) => {
        if (!icon) return null
        return React.cloneElement(icon, {
            className: `${ButtonPrefix}_icon`
        })
    }

    const renderButtonContent = useMemo(() => {
        return (
            <>
                {
                    icon && renderIcon(icon)
                }
                <span className={`${ButtonPrefix}_text`}>{children}</span>
            </>
        )
    }, [icon, children]);

    const renderClass = useMemo(() => {
        let classNames = {
            [`${ButtonPrefix}_${theme}`]: true,
            [`${ButtonPrefix}_${size}`]: true,
            [`${ButtonPrefix}_${shape}`]: true,
            [`${ButtonPrefix}_${variant}`]: true,
        }
        return renderClassNames(ButtonPrefix, classNames)
    }, [])

    return (
        <button className={renderClass}>
            {renderButtonContent}
        </button>
    )
}

Button.displayName = 'Button';