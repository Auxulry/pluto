import MainLayout from "@/components/layouts/MainLayout";
import React, {useEffect, useState} from "react";
import { IoChevronDownSharp, IoEyeSharp } from "react-icons/io5";
import {useRouter} from "next/router";
import {getStorage, setStorages} from "@/commons/storage";
import {rejectOptions} from "@/mocks/reason";
import Modal from "@/components/atoms/modal/Modal";

const ListCompletesDocumentContainer = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (item) => {
    setOpenAccordion(openAccordion === item ? null : item);
  };

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false)

  const [box, setBox] = useState({})

  const [rejection, setRejection] = useState('')

  const [selectedReason, setSelectedReason] = useState("")
  const [text, setText] = useState('')


  useEffect(() => {
    if (window) {
      const data = getStorage('__pluto_storage')
      const serialize = JSON.parse(data)

      setBox(serialize.boxScanner)
    }
  }, []);

  const handleSelectChange = (e) => {
    setSelectedReason(e.target.value)
  }

  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  const handleReject = () => {
    const data = getStorage('__pluto_storage')
    const serialize = JSON.parse(data)
    const docs = serialize.boxScanner.docs.find((doc) => doc.id === parseInt(rejection))
    docs.rejectedReason = {
      option: selectedReason,
      text: selectedReason !== '5' ? rejectOptions.find((e) => e.value === selectedReason).value : text
    }

    serialize.boxScanner.docs = [
      ...serialize.boxScanner.docs.filter((doc) => doc.id !== parseInt(rejection)),
      docs
    ]


    setStorages([
      {
        name: "__pluto_storage",
        value: JSON.stringify(serialize),
      }
    ])

    setIsOpen(false)
  }

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
          <button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 flex flex-row items-center gap-2 cursor-pointer"
          >
            <span>Submit</span>
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {box?.docs?.length > 0 && box?.docs?.map((item) => (
            <div key={item.id} className="flex flex-col bg-white rounded-lg border-2 p-4">
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
                    onClick={() => router.push(`/completes-document/${box?.id}/document/${item.id}`)}
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
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        width='w-1/3'
      >
        <h2 className="text-2xl font-bold mb-4">Reject Document</h2>
        <div className='flex flex-col gap-4'>
          <select
            value={selectedReason}
            onChange={handleSelectChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          >
            <option value="">Select Reason</option>
            {rejectOptions.map((option) => (
              <option key={option.label} value={option.value}>{option.label}</option>
            ))}
          </select>
          {selectedReason === "5" && (
            <textarea
              placeholder="Enter your message..."
              className="w-full h-40 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none"
              value={text}
              onChange={handleChangeText}
            />
          )}
        </div>
        <div className='flex flex-row-reverse items-center gap-4 mt-4'>
          <button
            className='px-4 py-2 rounded focus:outline-none font-medium bg-red-500 text-white hover:bg-red-600'
            onClick={handleReject}
          >
            Reject
          </button>
          <button
            className='px-4 py-2 rounded focus:outline-none font-medium text-black hover:text-gray-600'
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>

    </MainLayout>
  )
};


export default ListCompletesDocumentContainer;
