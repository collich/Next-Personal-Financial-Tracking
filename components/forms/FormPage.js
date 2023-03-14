'use client'
import { useState } from "react"
import AddForm from "./AddForm"
import Form from "./Form"

const FormPage = () => {
    const [FormStatus, setFormStatus] = useState(false)
    const changeStatus = () => {
        setFormStatus(!FormStatus)
    }
    const showForm = FormStatus && <Form status={changeStatus}/>


  return (
    <div className="container mx-auto py-5">
        <AddForm onClick={changeStatus}/>
        {showForm}
    </div>
  )
}

export default FormPage