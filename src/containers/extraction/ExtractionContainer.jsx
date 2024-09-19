import MainLayout from "@/components/layouts/MainLayout";
import {boxScanner} from "@/mocks/scanner";
import {IoChevronDownSharp, IoEyeSharp} from "react-icons/io5";
import React from "react";
import {useRouter} from "next/router";

const ExtractionContainer = () => {
  const router  = useRouter();
  return (
    <MainLayout>
      <div className="container mx-auto ">
        <h1 className="font-semibold text-xl">
          Extraction Data
        </h1>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center bg-white rounded-lg border-2 p-4">
            <div className="w-20 flex flex-col gap-8 items-center justify-between h-full mr-4 border-r">
              <span>No</span>
              <h1 className="text-xl font-bold">{boxScanner.id}</h1>
            </div>
            <div className="flex-grow flex flex-col gap-2">
              <h2 className="text-gray-500">{boxScanner.code}</h2>
              <h2
                className="text-lg font-semibold">{boxScanner.name}</h2>
              <ul className="list-disc flex gap-6">
                <li className="list-none">{boxScanner.docs.length} WP</li>
                <li>{boxScanner.documentType}</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                className="bg-gray-300 px-4 py-3 rounded"
                onClick={() => router.push(`/extraction/${boxScanner.id}`)}
              >
                <IoEyeSharp/>
              </button>
            </div>
          </div>
        </div>
      </div>


    </MainLayout>
  )
};


export default ExtractionContainer;
