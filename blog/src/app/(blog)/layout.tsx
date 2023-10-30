import { Footer, Header } from '@/components'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="container max-w-[1216px] mx-auto mt-[113px] mb-[100px]">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
