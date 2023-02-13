import Layout from '@/components/Layout'
import Head from 'next/head'
import { ReactElement } from 'react'

export default function Services() {
  return (
    <>

      <Head>
        <title>Landing Page - Services</title>
      </Head>

      <main>
        Services Page
      </main>

    </>
  )
}

Services.getLayout = function getLayout(page: ReactElement) {

  return <Layout>{page}</Layout>
}