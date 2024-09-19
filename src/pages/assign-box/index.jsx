import {IoIosQrScanner, IoMdArrowDropdown, IoMdNotifications} from "react-icons/io";
import {MdOutlineArrowOutward, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";
import React, {useEffect, useRef, useState} from "react";
import {IoAddCircleOutline, IoEye, IoFilter, IoFilterOutline} from "react-icons/io5";
import {FaFilter, FaRegEnvelope, FaSearch} from "react-icons/fa";
import MainLayout from "@/components/layouts/MainLayout";
import OperatorDashboard from "@/components/organisms/operator/OperatorDashboard";
import ReviewerDashboard from "@/components/organisms/reviewer/ReviewerDashboard";
import TextField from "@/components/atoms/text-field/TextField";
import Modal from "@/components/atoms/modal/Modal";
import Alert from "@/components/atoms/alert/Alert";
import {operators} from "@/mocks/assign-box";

const DataTable = ({
  setOpen,
  setSelectedActor,
  items
}) => {
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

  const handleModalClicked = (name) => {
    setOpen(true);
    setSelectedActor(name);
  }

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 rounded-lg">
          <tr>
            <th className="px-6 py-3 text-left text-gray-600">No</th>
            <th className="px-6 py-3 text-left text-gray-600">Nama Operator</th>
            <th className="px-6 py-3 text-left text-gray-600">Jumlah Assign Box</th>
            <th className="px-6 py-3 text-left text-gray-600"></th>
          </tr>
          </thead>
          <tbody>
          {items.map((row, index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4 text-gray-700">{row.id}</td>
              <td className="px-6 py-4 text-gray-700">{row.name}</td>
              <td className="px-6 py-4 text-gray-700">{row.boxAssigned}</td>
              <td
                className="px-6 py-4 text-gray-700 underline cursor-pointer"
                onClick={() => handleModalClicked(row.name)}
              >
                Assign Box
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-600 text-sm">Menampilkan 10 dari 1 Kolom</span>
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
  const [isOpen, setIsOpen] = useState(false)
  const [selectedActor, setSelectedActor] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const [items, setItems] = useState(operators)

  const [box, setBox] = useState(0)

  const handleSubmit = () => {
    setItems((prevItems) =>
      prevItems.map((op) =>
        op.name === selectedActor
          ? { ...op, boxAssigned: parseInt(op.boxAssigned) + parseInt(box) } // Update the correct operator
          : op // Keep other operators unchanged
      )
    );
    setIsOpen(false)
    setSelectedActor('')
    setShowAlert(true)
  }



  return (
    <MainLayout>
      <div className='container mx-auto'>
        {showAlert && (
          <Alert
            type="success"
            title="Success!"
            message="Permintaan Assign Box berhasil dikirim."
            onClose={() => setShowAlert(false)}
          />
        )}
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
        <DataTable
          setOpen={setIsOpen}
          setSelectedActor={setSelectedActor}
          items={items}
        />

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          width='w-1/3'
        >
          <h2 className="text-2xl font-bold mb-4">Assign Box</h2>
          <div className="mb-4">
            <div className='flex flex-col gap-1.5 items-start my-4'>
              <h6 className='text-sm'>Nama Operator</h6>
              <h6 className='text-sm font-bold'>{selectedActor}</h6>
            </div>
            <TextField
              type="number"
              label='Jumlah Box'
              placeholder='Input Jumlah Box'
              value={box}
              onChange={e => setBox(e.target.value)}
            />
          </div>
          <div className='flex flex-row-reverse items-center gap-4'>
            <button
              className='px-4 py-2 rounded focus:outline-none font-medium bg-green-500 text-white hover:bg-green-600'
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className='px-4 py-2 rounded focus:outline-none font-medium text-black hover:text-gray-600'
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </div>
        </Modal>
      </div>
    </MainLayout>
  );
}
