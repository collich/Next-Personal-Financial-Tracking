import axios from "axios"
import TableHeaderOut from "./TableHeaderOut"

const getTableHeader = async () => {
    const res = await axios.get("http://localhost:3000/api/headers")
    const data = res.data
    return data.data
}

const TableHead = async () => {
    const data = await getTableHeader()
  return (
    <TableHeaderOut data={data}/>
  )
}

export default TableHead