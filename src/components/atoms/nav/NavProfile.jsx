import {IoMdNotifications} from "react-icons/io";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

export default function NavProfile() {
    return (
        <div className='flex flex-row items-center gap-3'>
            <div className='w-[36px] h-[36px] flex items-center justify-center'>
                <IoMdNotifications className='text-2xl'/>
            </div>
            <div className='flex flex-row items-center gap-3'>
                <div
                    className='w-[36px] h-[36px] flex items-center justify-center bg-gray-500 rounded-full'></div>
                <div className='flex flex-col items-start'>
                    <h6 className='text-md font-bold'>John Doe</h6>
                    <h6 className='text-md font-bold text-gray-400'>Role</h6>
                </div>
            </div>
            <div className='w-[36px] h-[36px] flex items-center justify-center'>
                <MdOutlineKeyboardArrowDown className='text-2xl'/>
            </div>
        </div>
    )
}
