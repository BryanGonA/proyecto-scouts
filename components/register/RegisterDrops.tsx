import React, { Children } from "react"
import {RegisterDropProps} from './RegisterDropdown'

interface Props {
    dropDowns?: Map<string, any>,
    setDropDowns?: any,
    handleDropClick?: any,
    children?: React.ReactElement<RegisterDropProps> | React.ReactElement<RegisterDropProps>[],
}

export default function RegisterDrops({dropDowns, setDropDowns, handleDropClick, children}: Props) {
    const updatedChildren = Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {handleDropClick: handleDropClick, dropDowns: dropDowns, setDropDowns: setDropDowns})
        }
        return child
    })
    return (
        <div className="accordion">
            {updatedChildren}
        </div>
    )
}