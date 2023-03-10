'use client'
import classNames from "classnames"

const InputForm = ({type, placeholder, className, value}) => {
  const classes = classNames("border px-5 py-3 focus:outline-none", className)

  return (
    <div className="input-type">
        <label>{placeholder}</label>
        <input type={type} className={classes} value={value}/>
    </div>
  )
}

export default InputForm