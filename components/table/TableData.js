'use client'
import { useState, useEffect } from "react"
import axios from "axios"
import TableDataOut from "./TableDataOut"
import TableEdit from "./TableEdit"

const getTableData = async () => {
  const res = await axios.get('http://localhost:3000/api/finances')
  const data = res.data.statement
  return data
}

const TableData = () => {
  const [dataList, setDataList] = useState([])
  const [TableEditStatus, setTableEditStatus] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const moneyList = await getTableData()
      setDataList(moneyList.statements)
    }
    fetchData()
    
    const interval = setInterval(() => {
      console.log("Refresh Data");
      fetchData()
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  let data = null

  const handleEdit = item => {
    console.log(item);
    setTableEditStatus(status => !status)
  }

  let renderData = <TableDataOut data={dataList} onClick={handleEdit}/>
  if (TableEditStatus) {
    renderData = <TableEdit data={data} onClick={handleEdit}/>
  }

  // const moneyList = await getTableData()
  // const dataList = moneyList.statements
  // console.log(dataList);
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
    // <TableDataOut data={dataList} onClick={handleEdit}/>
    renderData
  )
}

export default TableData