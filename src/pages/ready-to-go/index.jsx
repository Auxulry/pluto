import MainLayout from "@/components/layouts/MainLayout";
import { IoChevronDownSharp, IoEyeSharp, IoTrashBinSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getStorage } from "@/commons/storage";
import TextField from "@/components/atoms/text-field/TextField";
import Modal from "@/components/atoms/modal/Modal";
import Alert from "@/components/atoms/alert/Alert";

const ReadyToGo = () => {
  const router = useRouter();

  const [box, setBox] = useState({});
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  useEffect(() => {
    if (window) {
      const data = getStorage('__pluto_storage');
      const serialize = JSON.parse(data);

      setBox(serialize.boxScanner);
    }
  }, []);

  // Handle checkbox toggle
  const handleCheckboxChange = (e, boxId) => {
    if (e.target.checked) {
      // Add boxId to selectedBoxes
      setSelectedBoxes((prevSelected) => [...prevSelected, boxId]);
    } else {
      // Remove boxId from selectedBoxes
      setSelectedBoxes((prevSelected) => prevSelected.filter(id => id !== boxId));
    }
  };

  const [isOpen, setIsOpen] = useState(false)
  const [showAlert, setShowAlert] = useState(false)


  const handleSubmit = () => {
    setIsOpen(false)
    setShowAlert(true)
  }

  return (
    <MainLayout>
      <div className="container mx-auto">
        {showAlert && (
          <Alert
            type="success"
            title="Success!"
            message="Box berhasil dikirim ke gudang akhir."
            onClose={() => setShowAlert(false)}
          />
        )}
        <h1 className="font-semibold text-xl">Ready To Go</h1>
        <div className="mt-8 flex flex-col gap-4 w-full">
          <div className='flex flex-row w-full items-center gap-4'>
            {/* Larger Checkbox */}
            <input
              type="checkbox"
              value={box?.id}  // Set value to the box ID
              onChange={(e) => handleCheckboxChange(e, box?.id)}  // Handle change event
              checked={selectedBoxes.includes(box?.id)}  // Check if the box is already selected
              className="w-6 h-6"  // Adjust size here (large checkbox)
            />
            <div className="flex items-center bg-white rounded-lg border-2 p-4 w-full">
              <div className="w-20 flex flex-col gap-8 items-center justify-between h-full mr-4 border-r">
                <span>No</span>
                <h1 className="text-xl font-bold">{box?.id}</h1>
              </div>
              <div className="flex-grow flex flex-col gap-2">
                <h2 className="text-gray-500">{box?.code}</h2>
                <h2 className="text-lg font-semibold">{box?.name}</h2>
                <ul className="list-disc flex gap-6">
                  <li className="list-none">{box?.docs?.filter((e) => e.rejectedReason?.option === "")?.length} WP</li>
                  <li>{box?.documentType}</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <button
                  className="bg-gray-300 px-4 py-3 rounded cursor-pointer"
                  onClick={() => router.push(`/ready-to-go/${box?.id}`)}
                >
                  <IoEyeSharp />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row-reverse my-4'>
          <button
            className='px-4 py-2 rounded focus:outline-none font-medium bg-green-500 text-white hover:bg-green-600'
            onClick={() => setIsOpen(true)}
          >
            Submit
          </button>
        </div>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          width='w-1/3'
        >
          <h2 className="text-2xl font-bold mb-4">Ready To Go</h2>
          <h6 className='text-md text-center'>Aapakah kamu yakin ingin mengirim box yang sudah dipilih ?</h6>
          <div className='flex flex-row-reverse items-center gap-4'>
            <button
              className='px-4 py-2 rounded focus:outline-none font-medium bg-green-500 text-white hover:bg-green-600'
              onClick={handleSubmit}
            >
              Send
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
};

export default ReadyToGo;
