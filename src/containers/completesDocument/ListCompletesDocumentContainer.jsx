import MainLayout from "@/components/layouts/MainLayout";
import { useState } from "react";
import { IoChevronDownSharp, IoEyeSharp } from "react-icons/io5";

const ListCompletesDocumentContainer = () => {
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
              Kelengkapan Dokumen
            </h1>
            <ul className="list-disc flex gap-6">
              <li className="list-none">Box 1234</li>
              <li>KPP Bandung Timur</li>
              <li>Dokumen Pajak</li>
            </ul>
          </div>
          <button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 flex flex-row items-center gap-2 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <span>Submit</span>
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className={`flex gap-2 w-full justify-center  `}>
              <IoEyeSharp className="inline text-gray-400 mr-2 mt-4" size={24} />
              <div className="flex flex-1 flex-col bg-white rounded-lg border-2 p-2">
                <div className="flex items-center">
                  <div className="flex-grow flex flex-col gap-2">
                    <h2 className="text-lg font-semibold">KPP {['Gedebage', 'Cibeunying', 'Bojonagara', 'Tegallega', 'Karees'][item - 1]}</h2>
                  </div>
                  <div className="flex gap-3">
                    <button
                      className=" px-4 py-3 rounded"
                      onClick={() => toggleAccordion(item)}
                    >
                      <IoChevronDownSharp className={`transform transition-transform duration-300 ${openAccordion === item ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordion === item ? 'max-h-96' : 'max-h-0'
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
            </div>
          ))}
        </div>
      </div>


    </MainLayout >
  )
};




export default ListCompletesDocumentContainer;