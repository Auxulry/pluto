import MainLayout from "@/components/layouts/MainLayout";
import React, { useState } from "react";
import { IoChevronDownSharp, IoEyeSharp } from "react-icons/io5";
import {boxScanner} from "@/mocks/scanner";
import {useRouter} from "next/router";

const ListCompletesDocumentContainer = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (item) => {
    setOpenAccordion(openAccordion === item ? null : item);
  };

  const router = useRouter();

  return (
    <MainLayout>

      <div className="container mx-auto ">
        <div className="w-full flex justify-between">
          <div>
            <h1 className="font-semibold text-xl">
              List Document
            </h1>
            <ul className="list-disc flex gap-6">
              <li className="list-none">{boxScanner.code}</li>
              <li>{boxScanner.name}</li>
              <li>{boxScanner.documentType}</li>
            </ul>
          </div>
          <button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 flex flex-row items-center gap-2 cursor-pointer"
          >
            <span>Submit</span>
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {boxScanner.docs.map((item, key) => (
            <div key={key} className={`flex gap-2 w-full justify-center  `}>
              <IoEyeSharp
                className="inline text-gray-400 mr-2 mt-4 cursor-pointer" size={24}
                onClick={() => router.push(`/completes-document/${boxScanner.id}/document/${item.id}`)}
              />
              <div className="flex flex-1 flex-col bg-white rounded-lg border-2 p-2">
                <div className="flex items-center">
                  <div className="flex-grow flex flex-col gap-2">
                    <h2 className="text-lg font-semibold">{item.name} - NPWP {item.taxIdNumber}</h2>
                  </div>
                  <div className="flex gap-3">
                    <button
                      className=" px-4 py-3 rounded"
                      onClick={() => toggleAccordion(item.id)}
                    >
                      <IoChevronDownSharp className={`transform transition-transform duration-300 ${openAccordion === item.id ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordion === item.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="flex justify-end space-x-4">
                    <button
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
                    >
                      Reject
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                    >
                      Approve
                    </button>
                  </div>
                  <ul className="pl-8 space-y-2">
                    {item.attachments.map((attachment, index) => (
                      <li key={index}>
                        <span>{attachment.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </MainLayout>
  )
};


export default ListCompletesDocumentContainer;
