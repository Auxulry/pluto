import {FaRegEnvelope, FaSearch} from "react-icons/fa";
import {IoFilter} from "react-icons/io5";

export default function ReviewerFilter() {
  return (
    <div className="flex items-center justify-between py-4">
      {/* Search Input */}
      <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
        <input
          type="text"
          placeholder="Search here..."
          className="pl-10 pr-4 py-2 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className='flex flex-row items-center gap-4'>
        {/* Status Button */}
        <button
          className="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400">
          <FaRegEnvelope/>
          <span>Status</span>
        </button>

        {/* Filter Button */}
        <button
          className="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400">
          <IoFilter/>
          <span>Filter</span>
        </button>
      </div>
    </div>
  )
}
