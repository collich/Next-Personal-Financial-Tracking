import axios from "axios"
import TableDataOut from "./TableDataOut"

const getTableData = async () => {
  const res = await axios.get('http://localhost:3000/api/finances')
  const data = res.data.statement
  return data
}

const TableData = async () => {
  const moneyList = await getTableData()
  const dataList = moneyList.statements
  // const moneyList = [
  //   {
  //     date: `${(new Date(Date.now())).toDateString()} - ${(new Date(Date.now())).toLocaleTimeString()}`,
  //     // date: `${Date.getDate() > 10 ? Date.getDate(): `0${Date.getDate()}-${Date.getMonth() > 10 ? Date.getMonth(): `0${Date.getMonth() + 1}`}-${Date.getFullYear()}`}`,
  //     salary: 4000,
  //     CPF: 20,
  //     expenses: 256,
  //     investment: 500,
  //     savings: 0,  
  //   },
  //   {
  //     date: `${(new Date(Date.now())).toDateString()} - ${(new Date(Date.now())).toLocaleTimeString()}`,
  //     // date: `${Date.getDate() > 10 ? Date.getDate(): `0${Date.getDate()}-${Date.getMonth() > 10 ? Date.getMonth(): `0${Date.getMonth() + 1}`}-${Date.getFullYear()}`}`,
  //     salary: 5000,
  //     CPF: 20,
  //     expenses: 300,
  //     investment: 700,
  //     savings: 0,  
  //   },
  // ]
  // console.log(data);

  return (
    <TableDataOut data={dataList}/>
  )
}

export default TableData