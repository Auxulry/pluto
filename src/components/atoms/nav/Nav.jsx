export default function Nav({children}) {
    return (
        <div className='border-b-2 border-gray-200 py-2'>
            <div className='container mx-auto min-h-12 flex flex-row items-center justify-between'>
                {children}
            </div>
        </div>
    )
}
