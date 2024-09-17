export default function NavMenu() {
    return (
        <div className='flex flex-row items-center gap-4'>
            <h3 className='text-2xl font-bold'>Logo</h3>
            <h6 className='text-md font-bold'>Dashboard</h6>
            <h6 className='text-md font-bold text-gray-400'>Rejected</h6>
            <h6 className='text-md font-bold text-gray-400'>Others</h6>
            <h6 className='text-md font-bold text-gray-400'>Setting</h6>
        </div>
    )
}
