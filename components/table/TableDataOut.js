const TableDataOut = ({ data }) => {
  const renderData = data.map( (datum, index) => {
    return (
      <tr className="bg-gray-50 text-center" key={index}>
        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">{datum.date}</span>
        </td>

        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${datum.salary}</span>
        </td>

        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${datum.salary * 20/100}</span>
        </td>

        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${datum.expenses}</span>
        </td>

        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${datum.investment}</span>
        </td>

        <td className="px-16 py-2 items-center">
          <span className="text-center ml-2 font-semibold">${datum.salary - (datum.salary * 20/100) - datum.expenses - datum.investment}</span>
        </td>
      </tr>
    )
  })

  return renderData
}

export default TableDataOut