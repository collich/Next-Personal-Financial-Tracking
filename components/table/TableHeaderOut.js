const TableHeaderOut = ({ data }) => {
  const renderHeader = data.map( (datum, index) => {
    return (
      <th key={index} className="px-16 py-2" >
        <span className="text-gray-200">{datum.label}</span>
      </th>
    )
})

  return (
    <tr className="bg-gray-800">
      {renderHeader}
    </tr>
  )
}

export default TableHeaderOut