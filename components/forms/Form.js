'use client'
import { useReducer } from "react"
import InputForm from "./InputForm"
import Button from "../Button"

const reducer = (state, action) => {
    switch(action.type){
        case 'Salary':
            return {
                ...state,
                salary: action.payload
            }
        case 'Expense':
            return {
                ...state,
                expense: action.payload
            }
        case 'Investments':
            return {
                ...state,
                investments: action.payload
            }
        case 'Date':
            return {
                ...state,
                date: action.payload
            }
        case 'Reset':
            return {
                ...state,
                salary: 0,
                expense: 0,
                investments: 0,
                date: "mm/dd/yyy"
            }
    }
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
        if (state.date === "mm/dd/yyy") {
            return alert('Please add date')
        }
        if (!Object.values(state).slice(0, -1).some(val => val > 0)){
            return alert('At least 1 field needs to be')
        }

        console.log(state);
        dispatch({
            type: "Reset"
        })
    }

    const handleSalary = e => {
        const value = parseFloat(e.target.value) || 0
        dispatch({
            type: "Salary",
            payload: value
        })
    }

    const handleExpense = e => {
        const value = parseFloat(e.target.value) || 0
        dispatch({
            type: "Expense",
            payload: value
        })
    }

    const handleInvestment = e => {
        const value = parseFloat(e.target.value) || 0
        dispatch({
            type: "Investments",
            payload: value
        })
    }

    const handleDate = e => {
        // const date = (new Date(e.target.value)).toDateString()
        const date = e.target.value
        dispatch({
            type: "Date",
            payload: date
        })
    }

  return (
    <form className="grid w-4/6 gap-4" onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-4">
            <InputForm className="w-full" type="number" placeholder="Salary" value={state.salary || ''} onChange={handleSalary}/>
            <InputForm className="w-full" type="number" placeholder="Expenses" value={state.expense || ''} onChange={handleExpense}/>
            <InputForm className="w-full" type="number" placeholder="Investments" value={state.investments || ''} onChange={handleInvestment}/>
        </div>

        <InputForm type="date" placeholder="Date" className="flex" value={state.date} onChange={handleDate}/>

        <Button className="flex justify-center text-md w-1/6 bg-green-500 text-white hover:bg-gray-100 hover:border-green-500 hover:text-green-500">Submit</Button>
    </form>
  )
}

export default Form