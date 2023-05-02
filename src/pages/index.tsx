import Head from 'next/head'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Index() {

  return (
    <>
      <Head>
        <title>AK Services</title>
      </Head>

      <main>

        {/* Hero */}
        <HeroSection />

        {/* About */}
        <AboutSection />

        {/* Services */}
        <ServicesSection />

        {/* Contact */}
        <ContactSection />

        {/* Hero */}
        <Footer />

      </main>

    </>
  )
}