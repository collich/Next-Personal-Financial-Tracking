'use client'
import { useState } from "react"
import AddForm from "./AddForm"
import Form from "./Form"

const FormPage = () => {
  const [FormStatus, setFormStatus] = useState(false)
  const showForm = FormStatus && <Form/>
  const changeStatus = () => {
    setFormStatus(!FormStatus)
  }

  return (
    <div className="container mx-auto py-5">
        <AddForm onClick={changeStatus}/>
        <div className="py-5">
          {showForm}
        </div>
    </div>
  )
}

export default FormPage