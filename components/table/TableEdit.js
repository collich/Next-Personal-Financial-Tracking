import { GoCheck } from "react-icons/go"
import Button from "../Button"

const TableEdit = ({ data, onClick }) => {
    return (
        <tr className="bg-gray-50 text-center" key="69">
          <td className="px-16 py-2 items-center">
            {/* <span className="text-center ml-2 font-semibold">{new Date(datum.date).toDateString()}</span> */}
            <span className="text-center ml-2 font-semibold">{new Date().toDateString()}</span>
          </td>
  
          <td className="px-16 py-2 items-center">
            {/* <span className="text-center ml-2 font-semibold">${datum.salary}</span> */}
            <span className="text-center ml-2 font-semibold">$696969</span>
          </td>
  
          <td className="px-16 py-2 items-center">
            {/* <span className="text-center ml-2 font-semibold">${datum.salary >= 500 ? datum.salary * 20/100 : 0}</span> */}
            <span className="text-center ml-2 font-semibold">$0</span>
          </td>
  
          <td className="px-16 py-2 items-center">
            {/* <span className="text-center ml-2 font-semibold">${datum.expense}</span> */}
            <span className="text-center ml-2 font-semibold">$600</span>
          </td>
  
          <td className="px-16 py-2 items-center">
            {/* <span className="text-center ml-2 font-semibold">${datum.investments}</span> */}
            <span className="text-center ml-2 font-semibold">$900</span>
          </td>
  
          <td className="px-16 py-2 items-center">
            {/* <span className="text-center ml-2 font-semibold">${datum.salary - (datum.salary * 20/100) - datum.expense - datum.investments}</span> */}
            <span className="text-center ml-2 font-semibold">$42069</span>
          </td>
  
          <td className="px-16 py-2 items-center">
            <Button onClick={() => onClick(1)}><GoCheck/></Button>
          </td>
        </tr>
      )
}

export default TableEdit