'use client'
import classNames from "classnames"

const Button = ({ children, ...rest }) => {
    const classes = classNames('bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-100 hover:border-indigo-500 hover:text-gray-800 duration-300', rest.className)
  return (
    <button {...rest} className={classes}>{children}</button>
  )
}

export default Button