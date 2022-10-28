import {FC} from 'react'
import {ButtonBaseProps} from "./type";

export const Button:FC<ButtonBaseProps> = (props) => {
    const {children} = props
    return (
        <button className='omit_button'>
            {children}00
        </button>
    )
}
