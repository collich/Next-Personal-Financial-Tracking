'use client'

import InputForm from "./InputForm"
import Button from "./Button"

const Form = () => {
  return (
    <form className="grid w-4/6 gap-4">
        <div className="grid lg:grid-cols-2 gap-4">
            <InputForm className="w-full" type="number" placeholder="Salary"/>
            <InputForm className="w-full" type="number" placeholder="Expenses"/>
            <InputForm className="w-full" type="number" placeholder="Investments"/>
        </div>

        <InputForm type="date"/>

        <Button className="flex justify-center text-md w-2/6 bg-green-500 text-white hover:bg-gray-100 hover:border-green-500 hover:text-green-500">Test</Button>
    </form>
  )
}

export default Form