import ListCompletesDocumentContainer from "@/containers/completesDocument/ListCompletesDocumentContainer";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import MainLayout from "@/components/layouts/MainLayout";
import {boxScanner} from "@/mocks/scanner";
import {IoChevronDownSharp, IoEyeSharp} from "react-icons/io5";
import {getStorage} from "@/commons/storage";
import {rejectOptions} from "@/mocks/reason";

function ListExtractionDocument() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (item) => {
    setOpenAccordion(openAccordion === item ? null : item);
  };

  const router = useRouter();

  const [box, setBox] = useState({})

  useEffect(() => {
    if (window) {
      const data = getStorage('__pluto_storage')
      const serialize = JSON.parse(data)
      setBox(serialize.boxScanner)
    }
  }, []);

  return (
    <MainLayout>

      <div className="container mx-auto ">
        <div className="w-full flex justify-between">
          <div>
            <h1 className="font-semibold text-xl">
              List Document
            </h1>
            <ul className="list-disc flex gap-6">
              <li className="list-none">{box?.code}</li>
              <li>{box?.name}</li>
              <li>{box?.documentType}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {box?.docs?.length > 0 && box?.docs?.map((item) => (
            <div key={item.id}
                 className={`flex flex-col rounded-lg border-2 p-4 ${item.rejectedReason.option !== "" ? "bg-gray-200" : "bg-white"}`}>
              <div className="flex items-center">
                <div className="w-20 flex flex-col gap-8 items-center justify-between h-full mr-4 border-r">
                  <span>No</span>
                  <h1 className="text-xl font-bold">{item.id}</h1>
                </div>
                <div className="flex-grow flex flex-col gap-2">
                  <h2 className="text-gray-500">{item.code}</h2>
                  <ul className="list-disc flex gap-6 text-lg font-semibold">
                    <li className="list-none">{item.name}</li>
                    {item.rejectedReason.option !== "" && (
                      <li>
                        <div className='flex flex-row items-center justify-between w-full gap-8'>
                          <h6 className='font-semibold'>NPWP {item.taxIdNumber}</h6>
                          <h6 className='text-red-500 text-sm italic'>Ditolak pada {item.rejectedReason.state} dengan
                            alasan : {item.rejectedReason.text}</h6>
                        </div>
                      </li>
                    )}
                    {item.rejectedReason.option === "" && (
                      <li>NPWP {item.taxIdNumber}</li>
                    )}
                  </ul>
                  <ul className="list-disc flex gap-6">
                    <li className="list-none">{item.attachments.filter((e) => e.src !== "").length} Dokumen</li>
                  </ul>
                  {item.attachments.filter((e) => e.src === "").length > 0 && (
                    <ul className="list-disc flex gap-6">
                      <li className="list-none text-red-500 italic">Ada potensi data tidak valid pada form ini.</li>
                    </ul>
                  )}
                </div>
                <div className="flex gap-3">
                  <button
                    className={`bg-gray-300 px-4 py-3 rounded ${item.rejectedReason.option !== "" ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    {...(item.rejectedReason.option === "" && ({onClick: () => router.push(`/extraction/${box?.id}/document/${item.id}`)}))}
                  >
                    <IoEyeSharp/>
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
                  {item.attachments.filter((e) => e.src !== "").map((attachment, index) => (
                    <li key={index}>
                      <span>{attachment.label}</span>
                    </li>
                  ))}
                </ul>
                {item.attachments.filter((e) => e.src === "").length > 0 && (
                  <>
                    <h3 className='pl-8 space-y-2 text-red-500 italic my-4'>Dokumen tidak lengkap :</h3>
                    <ul className="pl-8 space-y-2">
                      {item.attachments.filter((e) => e.src === "").map((attachment, index) => (
                        <li key={index}>
                          <span className='text-red-500 italic'>{attachment.label}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default ListExtractionDocument;
