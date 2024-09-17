import {IoIosQrScanner, IoMdArrowDropdown, IoMdNotifications} from "react-icons/io";
import {MdOutlineArrowOutward, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";
import {useEffect, useRef, useState} from "react";
import {IoAddCircleOutline, IoEye, IoFilter, IoFilterOutline} from "react-icons/io5";
import {FaFilter, FaRegEnvelope, FaSearch} from "react-icons/fa";
import MainLayout from "@/components/layouts/MainLayout";
import OperatorDashboard from "@/components/organisms/operator/OperatorDashboard";
import ReviewerDashboard from "@/components/organisms/reviewer/ReviewerDashboard";

const DataTable = () => {
  // State to toggle dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Ref to capture the element for dropdown
  const dropdownRefs = useRef([]);

  const handleToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownOpen !== null && // dropdown is open
        dropdownRefs.current[dropdownOpen] && // ref exists
        !dropdownRefs.current[dropdownOpen].contains(event.target) // clicked outside the dropdown
      ) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 rounded-lg">
          <tr>
            <th className="px-6 py-3 text-left text-gray-600">No</th>
            <th className="px-6 py-3 text-left text-gray-600">Nama Operator</th>
            <th className="px-6 py-3 text-left text-gray-600">Jumlah Assign Box</th>
          </tr>
          </thead>
          <tbody>
          {[1, 2].map((row, index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4 text-gray-700">{index+1}</td>
              <td className="px-6 py-4 text-gray-700">John Doe</td>
              <td className="px-6 py-4 text-gray-700">250</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
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
    </div>
  );
};

export default function AssignBox() {
  return (
    <MainLayout>
      <div className='container mx-auto'>
        <div className='flex flex-row items-center justify-between my-4'>
          <div>
            <h2 className="text-lg font-bold">Assign Box</h2>
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          {/* Search Input */}
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
            <input
              type="text"
              placeholder="Search here..."
              className="pl-10 pr-4 py-2 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 w-1/3"
            />
          </div>

          <div className='flex flex-row items-center gap-4'>
            {/* Status Button */}
            <button
              className="flex items-center space-x-2 bg-white-500 border-black border-2 text-black px-4 py-2 rounded-md hover:bg-white-600 focus:outline-none focus:ring-2 focus:ring-white-400">
              <FaRegEnvelope/>
              <span>Status</span>
            </button>

            {/* Filter Button */}
            <button
              className="flex items-center space-x-2 bg-white-500 border-black border-2 text-black px-4 py-2 rounded-md hover:bg-white-600 focus:outline-none focus:ring-2 focus:ring-white-400">
              <IoFilter/>
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/*/!* Table *!/*/}
        <DataTable/>
      </div>
    </MainLayout>
  );
}
