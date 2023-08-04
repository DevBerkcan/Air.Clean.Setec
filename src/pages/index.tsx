import Head from 'next/head'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import LegalSituationSection from '@/components/LegalSituationSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainLayout from '@/layouts/MainLayout'

export default function Index() {

  return (
    <>

      <Head>
        <title>Air Clean</title>
      </Head>

      <MainLayout scrollEffect={true}>

        {/* Hero */}
        <HeroSection />

        {/* About */}
        <AboutSection />

        {/* Services */}
        <ServicesSection />
        <HowItWorksSection />
        <LegalSituationSection />

        {/* Contact */}
        <ContactSection />

      </MainLayout>

    </>
  )
}