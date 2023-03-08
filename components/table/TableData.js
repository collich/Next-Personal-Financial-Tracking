const TableData = () => {
  const moneyList = [
    {salary: 4000,
      CPF() { return this.salary * 0.2 },
      expenses: 256,
      investment: 500,
      savings() {return this.salary - this.CPF() - this.expenses - this.investment}  
    }
  ]

  return (
    <tr className="bg-gray-50 text-center">
        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${moneyList[0].salary}</span>
        </td>

        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${moneyList[0].CPF()}</span>
        </td>

        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${moneyList[0].expenses}</span>
        </td>

        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${moneyList[0].investment}</span>
        </td>

        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${moneyList[0].savings()}</span>
        </td>
    </tr>
  )
}

export default TableData