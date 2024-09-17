export default function OperatorHeader({
  onClick = () => {},
}) {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div>
        <h2 className="text-lg font-bold">Record Document</h2>
        <p className='text-md'>Scan all documents in the Box. Make sure the contents of the document are in accordance with DPC1.</p>
      </div>
      <button
        className="bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-600"
        onClick={onClick}
      >
        Request New Box
      </button>
    </div>
  )
}
