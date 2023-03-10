'use client'
import { useReducer } from "react"
import InputForm from "./InputForm"
import Button from "../Button"

const reducer = (state, action) => {

}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, {
        salary: 0,
        expense: 0,
        investments: 0,
        date: "mm/dd/yyy"
    })

    const handleSubmit = e => {
        e.preventDefault()
    }

  return (
    <form className="grid w-4/6 gap-4" onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-4">
            <InputForm className="w-full" type="number" placeholder="Salary" value={state.salary}/>
            <InputForm className="w-full" type="number" placeholder="Expenses" value={state.expense}/>
            <InputForm className="w-full" type="number" placeholder="Investments" value={state.investments}/>
        </div>

        <InputForm type="date" placeholder="Date" className="flex" value={state.date}/>

        <Button className="flex justify-center text-md w-2/6 bg-green-500 text-white hover:bg-gray-100 hover:border-green-500 hover:text-green-500">Submit</Button>
    </form>
  )
}

export default Form