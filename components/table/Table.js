import TableHead from "./TableHead"
import TableData from "./TableData"

const Table = () => {
  return (
    <table className="min-w-full table-auto">
        <thead>
          <TableHead/>
        </thead>

        <tbody className="bg-gray-200">
          <TableData/>
        </tbody>
    </table>
  )
}

export default Table