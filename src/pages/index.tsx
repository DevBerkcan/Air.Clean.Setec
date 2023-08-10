import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import SlidesSection from '@/components/SlidesSection'
import ReuqestOfferSection from '@/components/ReuqestOfferSection'

export default function Index() {

  return (
    <>

      <Head>
        <title>AirClean VS</title>
      </Head>

      <MainLayout scrollEffect={true}>

        {/* Hero */}
        <HeroSection />

        {/* About */}
        <AboutSection />

        {/* Services */}
        <ServicesSection />

        {/* Slides */}
        <SlidesSection />

        {/* Send Offer */}
        <ReuqestOfferSection />

      </MainLayout>

    </>
  )
}