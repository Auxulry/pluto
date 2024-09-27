import MainLayout from "@/components/layouts/MainLayout";
import { IoChevronDownSharp, IoEyeSharp, IoTrashBinSharp } from "react-icons/io5";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {boxScanner} from "@/mocks/scanner";
import {getStorage} from "@/commons/storage";

const TaxCalculationContainer = () => {
  const router  = useRouter();

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
        <h1 className="font-semibold text-xl">
          Perhitungan Pajak
        </h1>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center bg-white rounded-lg border-2 p-4">
            <div className="w-20 flex flex-col gap-8 items-center justify-between h-full mr-4 border-r">
              <span>No</span>
              <h1 className="text-xl font-bold">{box?.id}</h1>
            </div>
            <div className="flex-grow flex flex-col gap-2">
              <h2 className="text-gray-500">{box?.code}</h2>
              <h2
                className="text-lg font-semibold">{box?.name}</h2>
              <ul className="list-disc flex gap-6">
                <li className="list-none">{box?.docs?.length} WP</li>
                <li>{box?.documentType}</li>
              </ul>
              <h3 className='text-md text-red-500 italic'>Terdapat 1 WP dengan perhitungan pajak yang tidak benar.</h3>
            </div>

            <div className="flex gap-3">
              <button
                className="bg-gray-300 px-4 py-3 rounded"
                onClick={() => router.push(`/tax-calculation/${box?.id}`)}
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

export default TaxCalculationContainer;
