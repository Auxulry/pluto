import {IoIosQrScanner} from "react-icons/io";

export default function RowItemScan({
    name
}) {
    return (
        <div className='flex flex-col gap-4 my-8'>
            <div className='flex flex-row items-center justify-between w-full gap-8'>
                <div className='border-2 border-black rounded-lg px-4 py-2 w-full'>
                    <h6 className='text-lg font-bold'>{name}</h6>
                </div>
                <button
                    className="bg-sky-500 text-white font-bold p-2 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400">
                    <IoIosQrScanner className='text-xl'/>
                </button>
            </div>
        </div>
    )
}
