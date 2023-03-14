'use client'
import { useState } from "react"
import AddForm from "./AddForm"
import Form from "./Form"

const FormPage = () => {
    const [FormStatus, setFormStatus] = useState(false)
  return (
    <div className="container mx-auto py-5">
        <AddForm/>
        <Form/>
    </div>
  )
}

export default FormPage