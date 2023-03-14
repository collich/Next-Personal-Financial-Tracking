import Button from "../Button"

const AddForm = ({...rest}) => {
  return (
    <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
            <Button {...rest} icon className='flex bg-indigo-500 text-white hover:bg-gray-100 hover:border-indigo-500 hover:text-gray-800'>Add Statement</Button>
        </div>
    </div>
  )
}

export default AddForm