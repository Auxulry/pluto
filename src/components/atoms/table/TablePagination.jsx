export default function TablePagination() {
  return (
    <div className="flex items-center justify-between mt-4">
      <span className="text-gray-600 text-sm">Menampilkan 10 dari 1000 Kolom</span>
      <div className="flex space-x-1">
        <button className="px-3 py-1 border rounded-l bg-gray-200 text-gray-700">Sebelumnya</button>
        <button className="px-3 py-1 border bg-sky-500 text-white">1</button>
        <button className="px-3 py-1 border bg-gray-200 text-gray-700">2</button>
        <button className="px-3 py-1 border bg-gray-200 text-gray-700">...</button>
        <button className="px-3 py-1 border bg-gray-200 text-gray-700">10</button>
        <button className="px-3 py-1 border rounded-r bg-gray-200 text-gray-700">Selanjutnya</button>
      </div>
    </div>
  )
}
