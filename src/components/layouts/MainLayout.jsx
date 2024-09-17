import NavBar from "@/components/organisms/NavBar";

export default function MainLayout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />

      <main className='flex-grow py-4'>
        {children}
      </main>
    </div>

  )
}
