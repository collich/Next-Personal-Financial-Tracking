import classNames from "classnames"

const InputForm = ({placeholder, ...rest}) => {
  const classes = classNames("border px-5 py-3 focus:outline-none", rest.className)

  return (
    <div className="input-type">
        <label>{placeholder}</label>
        <input {...rest} className={classes}/>
    </div>
  )
}

export default InputForm