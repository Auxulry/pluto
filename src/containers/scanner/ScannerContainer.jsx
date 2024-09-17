import MainLayout from "@/components/layouts/MainLayout";
import { IoChevronDownSharp, IoEyeSharp, IoScanSharp, IoTrashBinSharp } from "react-icons/io5";
import { useState } from "react";

const ScannerContainer = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (item) => {
    setOpenAccordion(openAccordion === item ? null : item);
  };

  return (
    <MainLayout>
      <div className="container mx-auto ">
        <div className="w-full flex justify-between">
          <div>
            <h1 className="font-semibold text-xl">
              Pemindaian
            </h1>
            <ul className="list-disc flex gap-6">
              <li className="list-none">Box 1234</li>
              <li>KPP Bandung Timur</li>
              <li>Dokumen Pajak</li>
            </ul>
          </div>
          <button
            className="bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-600 flex flex-row items-center gap-2 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <IoScanSharp />
            <span>Scan Document</span>
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex flex-col bg-white rounded-lg border-2 p-4">
              <div className="flex items-center">
                <div className="w-20 flex flex-col gap-8 items-center justify-between h-full mr-4 border-r">
                  <span>No</span>
                  <h1 className="text-xl font-bold">{item}</h1>
                </div>
                <div className="flex-grow flex flex-col gap-2">
                  <h2 className="text-gray-500">Kode {1000 + item}</h2>
                  <ul className="list-disc flex gap-6 text-lg font-semibold">
                    <li className="list-none">WP {['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Eva Wilson'][item - 1]}</li>
                    <li>NPWP {['xxxx.xxxx.23423', 'xxxx.xxxx.23423', 'xxxx.xxxx.23423', 'xxxx.xxxx.23423', 'xxxx.xxxx.23423'][item - 1]}</li>
                  </ul>
                  <ul className="list-disc flex gap-6">
                    <li className="list-none">{50 + item * 5} Dokumen</li>
                  </ul>
                </div>
                <div className="flex gap-3">

                  <button
                    className="bg-gray-300 px-4 py-3 rounded"
                    onClick={() => toggleAccordion(item)}
                  >
                    <IoChevronDownSharp className={`transform transition-transform duration-300 ${openAccordion === item ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
              <div
                className={`mt-4 overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordion === item ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <ul className="pl-8 space-y-2">
                  <li>
                    <IoEyeSharp className="inline text-gray-400 mr-2" /> <span>1770 S I-III</span>
                  </li>
                  <li>
                    <IoEyeSharp className="inline text-gray-400 mr-2" /> <span>Lampiran 1</span>
                  </li>
                  <li>
                    <IoEyeSharp className="inline text-gray-400 mr-2" /> <span>Lampiran 2</span>
                  </li>
                  <li>
                    <IoEyeSharp className="inline text-gray-400 mr-2" /> <span>Lampiran 3</span>
                  </li>
                  <li>
                    <IoEyeSharp className="inline text-gray-400 mr-2" /> <span>Laporan Keuangan</span>
                  </li>
                  <li>
                    <IoEyeSharp className="inline text-gray-400 mr-2" /> <span>Investasi</span>
                  </li>
                  <li>
                    <IoEyeSharp className="inline text-gray-400 mr-2" /> <span>Harta</span>
                  </li>
                  <li>
                    <IoEyeSharp className="inline text-gray-400 mr-2" /> <span>Piutang</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
};

export default ScannerContainer;