import { useRouter } from 'next/router';

export default function NavMenu() {
  const router = useRouter();
  const { pathname } = router;

  // Helper function to determine if the route is active
  const isActive = (path) => pathname === path ? 'text-black' : 'text-gray-400';

  return (
    <div className='flex flex-row items-center gap-4'>
      <h3 className='text-2xl font-bold'>Logo</h3>
      <h6
        className={`text-md font-bold cursor-pointer ${isActive('/')}`}
        onClick={() => router.push('/')}
      >
        Dashboard
      </h6>
      <h6
        className={`text-md font-bold cursor-pointer ${isActive('/assign-box')}`}
        onClick={() => router.push('/assign-box')}
      >
        Assign Box
      </h6>
      <h6 className={`text-md font-bold ${isActive('/pemindaian')}`}>Pemindaian</h6>
      <h6 className={`text-md font-bold ${isActive('/kelengkapan-dokumen')}`}>Kelengkapan Dokumen</h6>
      <h6 className={`text-md font-bold ${isActive('/extraction-data')}`}>Extraction Data</h6>
      <h6 className={`text-md font-bold ${isActive('/perhitungan-pajak')}`}>Perhitungan Pajak</h6>
      <h6 className={`text-md font-bold ${isActive('/review-rejected')}`}>Review Rejected</h6>
    </div>
  );
}
