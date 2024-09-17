import MainLayout from "@/components/layouts/MainLayout";
import { IoScanSharp } from "react-icons/io5";

const InputTaxCalculationContainer = () => {
  return (
    <MainLayout>

      <div className="container mx-auto mt-24">
        <div className="flex justify-center items-center ">
          <div className="rounded-lg shadow-md border p-8 min-h-[23rem] min-w-[25rem] flex flex-col justify-between">
            <div className="flex justify-center mb-4" >
              <div className=" border rounded-full p-2">
                <IoScanSharp className="h-8 w-8 text-gray-500" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-center">Masukkan Kode Box</h3>
              <input
                type="text"
                placeholder="Input kode box"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 text-center"
              />
            </div>
            <button className="w-full bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Scan Box
            </button>
          </div>
        </div>
      </div>


    </MainLayout>
  )
};




export default InputTaxCalculationContainer;