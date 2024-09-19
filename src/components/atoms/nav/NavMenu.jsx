import { useRouter } from 'next/router';

export default function NavMenu() {
  const router = useRouter();
  const { pathname } = router;

  // Helper function to determine if the route is active
  // const isActive = (path) => pathname.split('/') === path ? 'text-black' : 'text-gray-400';

  const isActive = (path) => {
    if (pathname !== "/" && pathname !== "/") {
      return pathname.includes(path) ? 'text-black' : 'text-gray-400';
    } else {
      return pathname === path ? 'text-black' : 'text-gray-400';
    }
  }

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
      <h6
        className={`text-md font-bold cursor-pointer ${isActive('/scanner')}`}
        onClick={() => router.push('/scanner')}
      >
        Pemindaian
      </h6>
      <h6
        className={`text-md font-bold cursor-pointer ${isActive('/completes-document')}`}
        onClick={() => router.push('/completes-document')}
      >
        Kelengkapan Dokumen
      </h6>
      <h6
        className={`text-md font-bold cursor-pointer ${isActive('/extraction')}`}
        onClick={() => router.push('/extraction')}
      >
        Extraction Data
      </h6>
      <h6
        className={`text-md font-bold cursor-pointer ${isActive('/tax-calculation')}`}
        onClick={() => router.push('/tax-calculation')}
      >
        Perhitungan Pajak
      </h6>
      <h6
        className={`text-md font-bold cursor-pointer ${isActive('/review-rejected')}`}
        onClick={() => router.push('/review-rejected')}
      >
        Review Rejected
      </h6>
    </div>
  );
}
