import TableDataOut from "./TableDataOut"

const TableData = () => {
  const moneyList = [
    {
      date: `${(new Date(Date.now())).toLocaleString()}`,
      // date: `${Date.getDate() > 10 ? Date.getDate(): `0${Date.getDate()}-${Date.getMonth() > 10 ? Date.getMonth(): `0${Date.getMonth() + 1}`}-${Date.getFullYear()}`}`,
      salary: 4000,
      CPF: 20,
      expenses: 256,
      investment: 500,
      savings: 0,  
    }
  ]

  return (
    <tr className="bg-gray-50 text-center">
        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">{moneyList[0].date}</span>
        </td>

        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${moneyList[0].salary}</span>
        </td>

        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${moneyList[0].salary * 20/100}</span>
        </td>

        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${moneyList[0].expenses}</span>
        </td>

        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${moneyList[0].investment}</span>
        </td>

        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${moneyList[0].salary - (moneyList[0].salary * 20/100) - moneyList[0].expenses - moneyList[0].investment}</span>
        </td>
        {/* <TableDataOut data={moneyList}/> */}
    </tr>
  )
}

export default TableData