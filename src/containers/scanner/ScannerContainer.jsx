import MainLayout from "@/components/layouts/MainLayout";
import { IoChevronDownSharp, IoEyeSharp, IoScanSharp, IoTrashBinSharp } from "react-icons/io5";
import React, { useState } from "react";
import Alert from "@/components/atoms/alert/Alert";
import {boxScanner} from "@/mocks/scanner";
import {useRouter} from "next/router";

const ScannerContainer = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (item) => {
    setOpenAccordion(openAccordion === item ? null : item);
  };

  const [showAlert, setShowAlert] = useState(true)

  const router = useRouter();

  return (
    <MainLayout>
      <div className="container mx-auto ">
        {showAlert && (
          <Alert
            type="success"
            title="Success!"
            message="Box berhasil dipindai."
            onClose={() => setShowAlert(false)}
          />
        )}
        <div className="w-full flex justify-between">
          <div>
            <h1 className="font-semibold text-xl">
              Pemindaian
            </h1>
            <ul className="list-disc flex gap-6">
              <li className="list-none">{boxScanner.code}</li>
              <li>{boxScanner.name}</li>
              <li>{boxScanner.documentType}</li>
            </ul>
          </div>
          <button
            className="bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-600 flex flex-row items-center gap-2 cursor-pointer"
          >
            <IoScanSharp />
            <span>Scan Document</span>
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {boxScanner.docs.map((item) => (
            <div key={item} className="flex flex-col bg-white rounded-lg border-2 p-4">
              <div className="flex items-center">
                <div className="w-20 flex flex-col gap-8 items-center justify-between h-full mr-4 border-r">
                  <span>No</span>
                  <h1 className="text-xl font-bold">{item.id}</h1>
                </div>
                <div className="flex-grow flex flex-col gap-2">
                  <h2 className="text-gray-500">{item.code}</h2>
                  <ul className="list-disc flex gap-6 text-lg font-semibold">
                    <li className="list-none">{item.name}</li>
                    <li>NPWP {item.taxIdNumber}</li>
                  </ul>
                  <ul className="list-disc flex gap-6">
                    <li className="list-none">{item.attachments.length} Dokumen</li>
                  </ul>
                </div>
                <div className="flex gap-3">
                  <button
                    className="bg-gray-300 px-4 py-3 rounded"
                    onClick={() => router.push(`/scanner/${item.id}`)}
                  >
                    <IoEyeSharp />
                  </button>
                  <button
                    className="bg-gray-300 px-4 py-3 rounded"
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <IoChevronDownSharp
                      className={`transform transition-transform duration-300 ${openAccordion === item.id ? 'rotate-180' : ''}`}/>
                  </button>
                </div>
              </div>
              <div
                className={`mt-4 overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordion === item.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <ul className="pl-8 space-y-2">
                  {item.attachments.map((attachment, index) => (
                    <li key={index}>
                      <span>{attachment.label}</span>
                    </li>
                  ))}
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
