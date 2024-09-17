import {IoEye} from "react-icons/io5";
import {MdOutlineKeyboardArrowUp} from "react-icons/md";

export default function RowItemPreview({
  name,
  items
}) {
  return (
    <div className='flex flex-col gap-4 my-8'>
      <div className='flex flex-row items-center justify-between w-full gap-8'>
        <IoEye className='text-xl'/>
        <div className='flex flex-col border-2 border-black rounded-lg px-4 py-2 w-full gap-4'>
          <div className='flex flex-row items-center justify-between'>
            <h6 className='text-lg font-bold'>{name}</h6>
            <MdOutlineKeyboardArrowUp className='text-2xl'/>
          </div>
          <hr className='border-1 border-black'/>
          <ul>
            {items.length > 0 && items.map((item, key) => (
              <li key={key}>- {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
