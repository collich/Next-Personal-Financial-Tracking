import axios from "axios"

const getTableHeader = async () => {
    const res = await axios.get("http://localhost:3000/api/headers")
    const data = res.data

    return data.data
}

const TableHead = async () => {
    const data = await getTableHeader()
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

export default TableHead