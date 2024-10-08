import {IoIosQrScanner, IoMdArrowDropdown, IoMdNotifications} from "react-icons/io";
import {MdOutlineArrowOutward, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";
import React, {useEffect, useRef, useState} from "react";
import {IoAddCircleOutline, IoEye, IoFilter, IoFilterOutline} from "react-icons/io5";
import {FaFilter, FaRegEnvelope, FaSearch} from "react-icons/fa";
import MainLayout from "@/components/layouts/MainLayout";
import OperatorDashboard from "@/components/organisms/operator/OperatorDashboard";
import ReviewerDashboard from "@/components/organisms/reviewer/ReviewerDashboard";
import Modal from "@/components/atoms/modal/Modal";
import TextField from "@/components/atoms/text-field/TextField";
import Alert from "@/components/atoms/alert/Alert";
import Paper from "@/components/atoms/paper/Paper";
import {getStorage, setStorages} from "@/commons/storage";
import {dataPluto} from "@/mocks/data";

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
            <th className="px-6 py-3 text-left text-gray-600">Nama 1</th>
            <th className="px-6 py-3 text-left text-gray-600">Nama 2</th>
            <th className="px-6 py-3 text-left text-gray-600">Nama 3</th>
            <th className="px-6 py-3 text-left text-gray-600">Nama 4</th>
            <th className="px-6 py-3 text-left text-gray-600">Status</th>
            <th className="px-6 py-3"></th>
          </tr>
          </thead>
          <tbody>
          {[1, 2, 3, 4, 5].map((row, index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4 text-gray-700">Nama 1</td>
              <td className="px-6 py-4 text-gray-700">Nama 2</td>
              <td className="px-6 py-4 text-gray-700">Nama 3</td>
              <td className="px-6 py-4 text-gray-700">Nama 4</td>
              <td className="px-6 py-4 flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 mr-2"></span>
                Status
              </td>
              <td className="px-6 py-4 text-right relative">
                {/* Ellipsis Button */}
                <button
                  onClick={() => handleToggle(index)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ⋮
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen === index && (
                  <div
                    ref={(el) => (dropdownRefs.current[index] = el)} // Set ref for each dropdown
                    className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10 text-start"
                  >
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hapus</li>
                    </ul>
                  </div>
                )}
              </td>
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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = () => {
    setIsOpen(false)
    setShowAlert(true)
  }

  useEffect(() => {
    if (window) {
      const data = getStorage('__pluto_storage')
      if (data === null) {
        setStorages([
          {
            name: '__pluto_storage',
            value: JSON.stringify(dataPluto)
          }
        ])
      }
    }
  }, []);

  return (
    <MainLayout>
      <div className='container mx-auto'>
        {showAlert && (
          <Alert
            type="success"
            title="Success!"
            message="Permintaan Box baru berhasil dikirim."
            onClose={() => setShowAlert(false)}
          />
        )}
        <div className='flex flex-row items-center justify-between my-4'>
          <div>
            <h2 className="text-lg font-bold">Dashboard</h2>
          </div>
          <button
            className="bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-600 flex flex-row items-center gap-2 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <IoAddCircleOutline />
            <span>Request New Box</span>
          </button>
        </div>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          width='w-1/3'
        >
          <h2 className="text-2xl font-bold mb-4">Request Box</h2>
          <div className="mb-4">
            <TextField
              type="number"
              label='Jumlah Box'
              placeholder='Input Jumlah Box'
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
        <div className='flex flex-row items-center justify-between my-8 gap-4'>
          <div
            className='flex flex-col bg-gray-100 rounded-lg p-4 gap-4 w-1/4'
          >
            <div>
              <h6 className='text-lg font-bold'>Operator</h6>
              <p className='text-sm'>Total keseluruhan operator</p>
            </div>
            <div className='flex flex-row items-center justify-between'>
              <h2 className='text-xl font-bold'>90</h2>
              <div className='bg-gray-600 rounded-lg p-2'>
                <MdOutlineArrowOutward className='text-xl text-white'/>
              </div>
            </div>
          </div>
          <div
            className='flex flex-col bg-gray-100 rounded-lg p-4 gap-4 w-1/4'
          >
            <div>
              <h6 className='text-lg font-bold'>Box di Gudang</h6>
              <p className='text-sm'>Total keseluruhan box yang ada pada gudang.</p>
            </div>
            <div className='flex flex-row items-center justify-between'>
              <h2 className='text-xl font-bold'>1.200</h2>
              <div className='bg-gray-600 rounded-lg p-2'>
                <MdOutlineArrowOutward className='text-xl text-white'/>
              </div>
            </div>
          </div>
          <div
            className='flex flex-col bg-gray-100 rounded-lg p-4 gap-4 w-1/4'
          >
            <div>
              <h6 className='text-lg font-bold'>Dokumen sedang discan</h6>
              <p className='text-sm'>Total dokumen yang sedang discan operator</p>
            </div>
            <div className='flex flex-row items-center justify-between'>
              <h2 className='text-xl font-bold'>650</h2>
              <div className='bg-gray-600 rounded-lg p-2'>
                <MdOutlineArrowOutward className='text-xl text-white'/>
              </div>
            </div>
          </div>
          <div
            className='flex flex-col bg-gray-100 rounded-lg p-4 gap-4 w-1/4'
          >
            <div>
              <h6 className='text-lg font-bold'>Dokumen Siap Scan</h6>
              <p className='text-sm'>Total dokument yang siap di scan operator</p>
            </div>
            <div className='flex flex-row items-center justify-between'>
              <h2 className='text-xl font-bold'>550</h2>
              <div className='bg-gray-600 rounded-lg p-2'>
                <MdOutlineArrowOutward className='text-xl text-white'/>
              </div>
            </div>
          </div>
        </div>
        {/*<OperatorDashboard />*/}
        {/*<ReviewerDashboard />*/}
        {/*<div className='flex flex-col gap-4 my-8'>*/}
        {/*  <div className='flex flex-row items-center justify-between w-full gap-8'>*/}
        {/*    <IoEye className='text-xl'/>*/}
        {/*    <div className='flex flex-col border-2 border-black rounded-lg px-4 py-2 w-full gap-4'>*/}
        {/*      <div className='flex flex-row items-center justify-between'>*/}
        {/*        <h6 className='text-lg font-bold'>BOX 1764</h6>*/}
        {/*        <MdOutlineKeyboardArrowUp className='text-2xl'/>*/}
        {/*      </div>*/}
        {/*      <hr className='border-1 border-black'/>*/}
        {/*      <ul>*/}
        {/*        <li>- Form 1770 S I - II</li>*/}
        {/*        <li>- Lampiran 1</li>*/}
        {/*        <li>- Lampiran 2</li>*/}
        {/*        <li>- Lampiran 3</li>*/}
        {/*        <li>- Laporan Keuangan</li>*/}
        {/*        <li>- Investasi</li>*/}
        {/*        <li>- Harta Piutang</li>*/}
        {/*      </ul>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*/!* Filter *!/*/}
        {/*<div className="flex items-center justify-between py-4">*/}
        {/*  /!* Search Input *!/*/}
        {/*  <div className="relative">*/}
        {/*    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>*/}
        {/*    <input*/}
        {/*      type="text"*/}
        {/*      placeholder="Search here..."*/}
        {/*      className="pl-10 pr-4 py-2 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"*/}
        {/*    />*/}
        {/*  </div>*/}

        {/*  <div className='flex flex-row items-center gap-4'>*/}
        {/*    /!* Status Button *!/*/}
        {/*    <button*/}
        {/*      className="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400">*/}
        {/*      <FaRegEnvelope/>*/}
        {/*      <span>Status</span>*/}
        {/*    </button>*/}

        {/*    /!* Filter Button *!/*/}
        {/*    <button*/}
        {/*      className="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400">*/}
        {/*      <IoFilter/>*/}
        {/*      <span>Filter</span>*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*/!* Table *!/*/}
        {/*<DataTable/>*/}

        {/*/!* Heading *!/*/}
        {/*<div className='flex flex-col items-center justify-center gap-2 py-4 border-2 border-gray-300 rounded-lg'>*/}
        {/*  <div className='flex flex-row items-center gap-4'>*/}
        {/*    <h6 className='text-md font-bold'>WP Moanalisa</h6>*/}
        {/*    <div>&#8226;</div>*/}
        {/*    <h6 className='text-md font-bold'>NPWP.XXX.XXX.XXX.3765</h6>*/}
        {/*  </div>*/}
        {/*  <h6 className='text-md'>Pembetulan SPT Tahunan</h6>*/}
        {/*  <h6 className='text-md'>No. 1264</h6>*/}
        {/*</div>*/}
        {/*<div*/}
        {/*  className='flex flex-row items-center gap-4'*/}
        {/*>*/}
        {/*  <Paper />*/}
        {/*</div>*/}
      </div>
    </MainLayout>
  );
}
