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
            <th key={index}>{datum.label}</th>
        )
    })

  return (
    <tr>
        {renderHeader}
    </tr>
  )
}

export default TableHead