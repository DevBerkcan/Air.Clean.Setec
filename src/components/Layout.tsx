import Header from './Header'

const Layout = ({ children }: any) => {

  return (
    <>

      {/* Header */}
      <Header />

      <main className="container mx-auto py-4">
        {children}
      </main>

    </>
  )
}

export default Layout