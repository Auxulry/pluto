import MainLayout from "@/components/layouts/MainLayout";
import { IoChevronDownSharp, IoEyeSharp, IoTrashBinSharp } from "react-icons/io5";

const TaxCalculationContainer = () => {
  return (
    <MainLayout>

      <div className="container mx-auto ">
        <h1 className="font-semibold text-xl">
          Perhitungan Pajak
        </h1>
        <ul className="list-disc flex gap-6">
          <li className="list-none">Box 1234</li>
          <li>KPP Bandung Timur</li>
          <li>Dokumen Pajak</li>
        </ul>
        <div className="mt-8 flex flex-col gap-4">

          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center bg-white rounded-lg border-2 p-4">
              <div className="w-20 flex flex-col gap-8 items-center justify-between h-full mr-4 border-r">
                <span>No</span>
                <h1 className="text-xl font-bold">{item}</h1>
              </div>
              <div className="flex-grow flex flex-col gap-2">
                <h2 className="text-gray-500">Kode {1000 + item}</h2>
                <ul className="list-disc flex gap-6 text-lg font-semibold">
                  <li className="list-none">WP {['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Eva Wilson'][item - 1]}</li>
                  <li>NPWP {['xxxx.xxxx.23423', 'xxxx.xxxx.23423', 'xxxx.xxxx.23423', 'xxxx.xxxx.23423', 'xxxx.xxxx.23423'][item - 1]}</li>
                </ul>
                <ul className="list-disc flex gap-6">
                  <li className="list-none">{50 + item * 5} Dokumen</li>
                </ul>
              </div>
              <div className="flex gap-3">
                <button className="bg-gray-300  px-4 py-3 rounded">
                  <IoEyeSharp />
                </button>
                <button className="bg-gray-300  px-4 py-3 rounded">
                  <IoTrashBinSharp />
                </button>
                <button className="bg-gray-300  px-4 py-3 rounded">
                  <IoChevronDownSharp />
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>


    </MainLayout>
  )
};




export default TaxCalculationContainer;