import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import SlidesSection from '@/components/SlidesSection'
import SendOfferSection from '@/components/SendOfferSection'

export default function Index() {

  return (
    <>

      <Head>
        <title>Air Clean</title>
      </Head>

      <MainLayout scrollEffect={false}>

        {/* Hero */}
        <HeroSection />

        {/* About */}
        <AboutSection />

        {/* Services */}
        <ServicesSection />

        {/* Slides */}
        <SlidesSection />

        {/* Send Offer */}
        <SendOfferSection />

      </MainLayout>

    </>
  )
}