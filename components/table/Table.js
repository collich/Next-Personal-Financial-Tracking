import TableHead from "./TableHead"
import TableData from "./TableData"

const Table = async () => {
  return (
    <table className="min-w-full table-auto">
        <thead>
          <TableHead/>
        </thead>

        <tbody className="bg-indigo-200">
          <TableData/>
        </tbody>
    </table>
  )
}

export default Table