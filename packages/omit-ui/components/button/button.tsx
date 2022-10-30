import {FC, useMemo} from 'react'
import {ButtonBaseProps} from "./type";


export const Button: FC<ButtonBaseProps> = (props) => {
    const {icon, onClick, children} = props;

    const renderButtonContent = useMemo(() => {
        return 'e3212'
    }, [icon, children])

    return (
        <button
            className='omit_button omit_large_button omit_primary_button'
        >
            {renderButtonContent}----
        </button>
    )
}
