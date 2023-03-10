'use client'
import classNames from "classnames"

const InputForm = ({type, placeholder, className}) => {
  const classes = classNames("border px-5 py-3 focus:outline-none", className)

  return (
    <div className="input-type">
        <input type={type} className={classes} placeholder={placeholder}/>
    </div>
  )
}

export default InputForm