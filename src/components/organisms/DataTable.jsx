import Table from "@/components/atoms/table/Table";
import TableHeader from "@/components/atoms/table/TableHeader";
import TableBody from "@/components/atoms/table/TableBody";
import TablePagination from "@/components/atoms/table/TablePagination";

export default function DataTable({ headers, children }) {
  return (
    <Table>
      <TableHeader items={headers} />
      <TableBody>
        {children}
      </TableBody>
      <TablePagination />
    </Table>
  )
}
