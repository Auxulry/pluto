import MainLayout from "@/components/layouts/MainLayout";
import React, {useEffect, useState} from "react";
import {IoArrowBack, IoChevronDownSharp} from "react-icons/io5";
import {useRouter} from "next/router";
import {boxScanner} from "@/mocks/scanner";
import Modal from "@/components/atoms/modal/Modal";
import {rejectOptions} from "@/mocks/reason";
import {getStorage, setStorages} from "@/commons/storage";
import Paper from "@/components/atoms/paper/Paper";
import PaperV2 from "@/components/atoms/paper/PaperV2";

export default function ScannerPreview() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (item) => {
    setOpenAccordion(openAccordion === item ? null : item);
  };
  const router = useRouter();

  const [selectedReason, setSelectedReason] = useState("")

  const [isOpen, setIsOpen] = useState(false)

  const [attachments, setAttachments] = useState([])
  const [document, setDocument] = useState({})

  const [text, setText] = useState('')

  const [selectedAttachment, setSelectedAttachment] = useState([])

  const handleSelectAttachment = (item) => {
    if (selectedAttachment.includes(item)) {
      setSelectedAttachment(selectedAttachment.filter((e) => e !== item))
    } else {
      setSelectedAttachment([
        ...selectedAttachment,
        item
      ])
    }
  }

  useEffect(() => {
    if (window) {
      const data = getStorage('__pluto_storage')
      const serialize = JSON.parse(data)

      setDocument(serialize.boxScanner.docs.find((doc) => doc.id === parseInt(router.query.id)))
      setAttachments(serialize.boxScanner.docs.find((doc) => doc.id === parseInt(router.query.id))?.attachments || [])
    }
  }, [router.query]);

  const handleSelectChange = (e) => {
    setSelectedReason(e.target.value)
  }

  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  const handleReject = () => {
    const data = getStorage('__pluto_storage')
    const serialize = JSON.parse(data)
    const docs = serialize.boxScanner.docs.find((doc) => doc.id === parseInt(router.query.id))
    docs.rejectedReason = {
      option: selectedReason,
      text: selectedReason !== '5' ? rejectOptions.find((e) => e.value === selectedReason).label : text,
      state: 'Extraction Data'
    }

    serialize.boxScanner.docs = [
      ...serialize.boxScanner.docs.filter((doc) => doc.id !== parseInt(router.query.id)),
      docs
    ]

    setStorages([
      {
        name: "__pluto_storage",
        value: JSON.stringify(serialize),
      }
    ])

    setIsOpen(false)
    router.push(`/extraction/${router.query?.slug}`)
  }

  const handleChangeStorage = (id, item) => {
    console.log(id);
    console.log(item);

    const data = getStorage('__pluto_storage');
    const serialize = JSON.parse(data);

    // Find the current document being edited
    const docs = serialize.boxScanner.docs.find((doc) => doc.id === parseInt(router.query.id));

    // Find the attachment and update its raw field
    const updatedAttachments = docs.attachments.map((attachment) => {
      if (attachment.id === id) {
        return {
          ...attachment,
          raw: item,  // Update the raw data
        };
      }
      return attachment;
    });

    // Update docs with the modified attachments
    const updatedDocs = {
      ...docs,
      attachments: updatedAttachments,
    };

    // Replace the doc in boxScanner docs array
    serialize.boxScanner.docs = serialize.boxScanner.docs.map((doc) => {
      if (doc.id === parseInt(router.query.id)) {
        return updatedDocs;
      }
      return doc;
    });

    // Update state and storage
    setAttachments(updatedDocs.attachments);

    setStorages([
      {
        name: "__pluto_storage",
        value: JSON.stringify(serialize),
      },
    ]);
  };


  const isAttachmentActive = (label) => {
    return selectedAttachment.includes(label)
  }

  return (
    <MainLayout>
      <div className="container mx-auto ">
        <div className='flex flex-row items-center justify-between my-4'>
          <IoArrowBack onClick={() => router.push(`/extraction/${router.query?.slug}`)} className='cursor-pointer'/>
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
        <div className="flex flex-col gap-4 my-4">
          {attachments.filter((e) => e.src !== "").map((attachment, key) => (
            <div key={key} className="flex flex-col bg-white rounded-lg border-2 p-4">
              <div className="flex items-center w-full">
                {document.id === 2 && attachment?.label === 'Form 1770 S' && (
                  <div
                    className='flex flex-row gap-4 items-center w-full justify-start'
                  >
                    <div className='font-bold text-xl'>{attachment?.label}</div>
                    <h3 className='text-md text-red-500 italic'>Ada potensi data tidak valid pada form ini.</h3>
                  </div>
                )}
                {(document.id !== 2 || attachment?.label !== 'Form 1770 S') && (
                  <div className='font-bold text-xl w-full'>{attachment?.label}</div>
                )}
                <div className="flex gap-3">
                  <button
                    className="bg-gray-300 px-4 py-3 rounded"
                    onClick={() => toggleAccordion(attachment?.label)}
                  >
                    <IoChevronDownSharp
                      className={`transform transition-transform duration-300 ${openAccordion === attachment?.label ? 'rotate-180' : ''}`}/>
                  </button>
                </div>
              </div>
              <div
                className={`mt-4 overflow-hidden transition-max-height duration-300 ease-in-out overflow-x-auto ${openAccordion === attachment?.label ? 'max-h-200' : 'max-h-0'}`}
              >
                <div className='flex flex-row gap-2 items-start w-full'>
                  <div className='flex flex-col w-[30%]'>
                    <h6 className='text-md'>Hasil Pindai</h6>
                    <div className="relative w-full h-auto">
                      <img
                        src={attachment.src}
                        alt={`image-${key}`}
                        className="w-full h-auto object-cover shadow-md"
                      />
                      <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
                    </div>
                  </div>
                  <div className='flex flex-col w-full overflow-x-auto'>
                    <h6 className='text-md'>Hasil Baca</h6>
                    <div className="w-full h-auto">
                      {attachment?.label === 'Form 1770 S' && (
                        <Paper
                          raw={attachment?.raw}
                          isValidator={false}
                          changeStorage={handleChangeStorage}
                          paperId={attachment?.id}
                          scan={attachment?.scan}
                        />
                      )}
                      {attachment?.label !== 'Form 1770 S' && (
                        <img src={attachment.src} alt={`image-${key}`}
                             className="w-full h-auto object-cover shadow-md"/>
                      )}
                    </div>
                  </div>
                  {isAttachmentActive(attachment?.label) && (
                    <div className='border-slim w-[20px] h-[20px] cursor-pointer text-center'
                         onClick={() => handleSelectAttachment(attachment?.label)}>X</div>
                  )}
                  {!isAttachmentActive(attachment?.label) && (
                    <div className='border-slim w-[20px] h-[20px] cursor-pointer'
                         onClick={() => handleSelectAttachment(attachment?.label)}></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
            onClick={() => setIsOpen(true)}
          >
            Reject
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
            onClick={() => router.push(`/extraction/${router.query?.slug}`)}
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
      </div>
    </MainLayout>
  )
}
