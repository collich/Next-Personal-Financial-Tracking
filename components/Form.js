'use client'

import Button from "./Button"

const Form = () => {
  return (
    <form className="grid w-5/6 gap-4">
        <div className="grid lg:grid-cols-2 gap-4">
            <div className="input-type">
                <input type="number" className="border w-full px-5 py-3 focus:outline-none" placeholder="Salary"/>
            </div>

            <div className="input-type">
                <input type="number" className="border w-full px-5 py-3 focus:outline-none" placeholder="Expenses"/>
            </div>

            <div className="input-type">
                <input type="number" className="border w-full px-5 py-3 focus:outline-none" placeholder="Investments"/>
            </div>
        </div>

        <div className="input-type">
            <input type="date" className="border px-5 py-3 focus:outline-none" placeholder="Investments"/>
        </div>

        <Button className="flex justify-center text-md w-2/6 bg-green-500 text-white hover:bg-gray-100 hover:border-green-500 hover:text-green-500">Test</Button>
    </form>
  )
}

export default Form