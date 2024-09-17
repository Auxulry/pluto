export default function TaxHeader({ item }) {
  return (
    <div className='flex flex-col items-center justify-center gap-2 py-4 border-2 border-gray-300 rounded-lg'>
      <div className='flex flex-row items-center gap-4'>
        <h6 className='text-md font-bold'>{item.tax.name}</h6>
        <div>&#8226;</div>
        <h6 className='text-md font-bold'>NPWP.{item.tax.taxIdNumber}</h6>
      </div>
      <h6 className='text-md'>{item.tax.about}</h6>
      <h6 className='text-md'>No. {item.number}</h6>
    </div>
  )
}
