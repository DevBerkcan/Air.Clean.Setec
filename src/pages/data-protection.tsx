import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {

  return (
    <>
      <Head>
        <title>AK Services - Data Protection</title>
      </Head>

      <main>

        {/* Hero */}
        <Header scrollEffect={true} />

        <div className="py-40">

          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Data Protection</h1>
            </div>
          </div>

          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[40rem] text-sm text-slate-600 leading-6">
              
            </div>
          </div>

        </div>

        <Footer />

      </main>

    </>
  )
}