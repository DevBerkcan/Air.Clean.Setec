import Layout from '@/components/Layout'
import Head from 'next/head'
import { ReactElement } from 'react'

export default function About() {
  return (
    <>

      <Head>
        <title>Landing Page - About</title>
      </Head>

      <main>
        About Page
      </main>

    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {

  return <Layout>{page}</Layout>
}