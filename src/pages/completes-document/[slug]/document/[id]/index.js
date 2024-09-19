import MainLayout from "@/components/layouts/MainLayout";
import React, {useEffect, useState} from "react";
import {IoArrowBack} from "react-icons/io5";
import {useRouter} from "next/router";
import {boxScanner} from "@/mocks/scanner";
import Modal from "@/components/atoms/modal/Modal";

export default function ScannerPreview() {
  const router = useRouter();

  const [selectedReason, setSelectedReason] = useState("")

  const [isOpen, setIsOpen] = useState(false)

  const [attachments, setAttachments] = useState([])
  const [document, setDocument] = useState({})
  useEffect(() => {
    setDocument(boxScanner.docs.find((doc) => doc.id === parseInt(router.query.id)))
    setAttachments(boxScanner.docs.find((doc) => doc.id === parseInt(router.query.id))?.attachments || [])
  }, [router.query]);

  const handleSelectChange = (e) => {
    setSelectedReason(e.target.value)
  }

  return (
    <MainLayout>
      <div className="container mx-auto ">
        <div className='flex flex-row items-center justify-between my-4'>
          <IoArrowBack onClick={() => router.push(`/completes-document/${router.query?.slug}`)} className='cursor-pointer'/>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 py-4 border-2 border-gray-300 rounded-lg'>
          <div className='flex flex-row items-center gap-4'>
            <h6 className='text-md font-bold'>{document?.name}</h6>
            <div>&#8226;</div>
            <h6 className='text-md font-bold'>NPWP {document?.taxIdNumber}</h6>
          </div>
          <h6 className='text-md'>Pembetulan SPT Tahunan</h6>
          <h6 className='text-md'>{document?.code}</h6>
        </div>
        {attachments.map((attachment, key) => (
          <div key={key} className='flex flex-col gap-4 my-4'>
            <h6 className='text-lg font-bold text-center'>{attachment.label}</h6>
            <div className='flex flex-row gap-4'>
              <div className="relative w-full h-auto">
                <img
                  src={attachment.src}
                  alt={`image-${key}`}
                  className="w-full h-auto object-cover shadow-md"
                />

                <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
              </div>
              <div className="w-full h-auto">
                <img src={attachment.src} alt={`image-${key}`} className="w-full h-auto object-cover shadow-md"/>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
            onClick={() => setIsOpen(true)}
          >
            Reject
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Submit
          </button>
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
              <option value="0">Informasi tidak lengkap.</option>
              <option value="1">Terdapat kesalahan penulisan.</option>
              <option value="2">Terdapat kesalahan perhitungan.</option>
              <option value="3">Format dokumen tidak sesuai.</option>
              <option value="4">Tanda tangan tidak sah.</option>
              <option value="5">Other.</option>
            </select>
            <textarea
              placeholder="Enter your message..."
              className="w-full h-40 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none"
            />
          </div>
          <div className='flex flex-row-reverse items-center gap-4 mt-4'>
            <button
              className='px-4 py-2 rounded focus:outline-none font-medium bg-red-500 text-white hover:bg-red-600'

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
      </div>
    </MainLayout>
  )
}
