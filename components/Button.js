'use client'
import {GoPlusSmall} from "react-icons/go"
import classNames from "classnames"

const Button = ({ children, icon, ...rest }) => {
    const classes = classNames('px-4 py-2 border rounded-md duration-300', rest.className)
    const plusIcon = <span className="text-center m-auto"><GoPlusSmall size={23}/></span>

  return (
    <button {...rest} className={classes}>{children} {icon && plusIcon}</button>
  )
}

export default Button