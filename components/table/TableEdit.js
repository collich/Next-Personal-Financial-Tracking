'use client'
import { GoCheck } from "react-icons/go"
import Button from "../Button"
import { useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_DATE':
        return { ...state, date: action.payload }
      case 'UPDATE_SALARY':
        return { ...state, salary: action.payload }
      case 'UPDATE_EXPENSE':
        return { ...state, expense: action.payload }
      case 'UPDATE_INVESTMENTS':
        return { ...state, investments: action.payload }
      default:
        return state
    }
  }

const TableEdit = ({ data, onClick }) => {
    const [state, dispatch] = useReducer(reducer, {
      date: data.date,
      expense: data.expense,
      id: data.id,
      investments: data.investments,
      salary: data.salary,
    })
  
    const handleSubmit = e => {
      e.preventDefault()
      console.log(state)
      onClick(state)
    }
  
    return (
        <tr className="bg-gray-50 text-center" key={state.id}>
          <td className="px-16 py-2 items-center">
            <input
              type="date"
              value={state.date}
              onChange={e => dispatch({ type: 'UPDATE_DATE', payload: e.target.value })}
              />
          </td>
  
          <td className="px-16 py-2 items-center">
            <input
              type="number"
              value={state.salary}
              onChange={e => dispatch({ type: 'UPDATE_SALARY', payload: e.target.value })}
              className="max-w-[120px]"
              />
          </td>
  
          <td className="px-16 py-2 items-center max-w-[120px]">
            <span className="text-center ml-2 font-semibold max-w-[120px]">${(state.salary >= 500 ? state.salary * 20 / 100 : 0).toFixed(2)}</span>
          </td>
  
          <td className="px-16 py-2 items-center">
            <input
              type="number"
              value={state.expense}
              onChange={e => dispatch({ type: 'UPDATE_EXPENSE', payload: e.target.value })}
              className="max-w-[120px]"
              />
          </td>
  
          <td className="px-16 py-2 items-center">
            <input
              type="number"
              value={state.investments}
              onChange={e => dispatch({ type: 'UPDATE_INVESTMENTS', payload: e.target.value })}
              className="max-w-[120px]"
            />
          </td>
          <td className="px-16 py-2 items-center max-w-[120px]">
             <span className="text-center ml-2 font-semibold">${(state.salary - (state.salary * 20/100) - state.expense - state.investments).toFixed(2)}</span>
          </td>
  
          <td className="px-16 py-2 items-center">
            <Button type="submit" className="bg-green-600 hover:bg-green-700" onClick={handleSubmit}>
              <GoCheck className="h-6 w-6 text-white" />
            </Button>
          </td>
        </tr>
    )
  }
  

export default TableEdit