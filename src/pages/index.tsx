import Head from 'next/head'
import { useEffect } from 'react'
import useScroll from '@/hooks/useScroll'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Index() {

  const { scroll } = useScroll()

  useEffect(() => {
    let reveals = document.querySelectorAll('.reveal')
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight
      let elementTop = reveals[i].getBoundingClientRect().top
      let elementVisible = 150
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }, [scroll])

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