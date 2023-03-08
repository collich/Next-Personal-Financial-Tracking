'use client'
import classNames from "classnames"

const Banner = ({children, className}) => {
    const classes = classNames('text-xl md:text-5xl text-center font-bold py-10', className)
  return (
    <h1 className={classes}>{children}</h1>
  )
}

export default Banner