import Layout from '@/components/Layout'
import Head from 'next/head'
import { ReactElement } from 'react'

export default function Contact() {
  return (
    <>

      <Head>
        <title>Landing Page - Contact</title>
      </Head>

      <main>
        Contact Page
      </main>

    </>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {

  return <Layout>{page}</Layout>
}