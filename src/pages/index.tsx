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
        <title>AirClean Setec | Professionelle Küchenabluftreinigung nach VDI 2052</title>
        <meta
          name="description"
          content="AirClean Setec – Experten für die professionelle Reinigung von Küchenabluftanlagen in Industrie und Gastronomie. Zertifiziert nach VDI 2052. Jetzt Angebot einholen!"
        />
        <meta
          name="keywords"
          content="Küchenabluftreinigung, Abluftreinigung, VDI 2052, Gastronomie Reinigung, Lüftungsanlagen Reinigung, Küchenabluft, Brandschutz Küche, AirClean Setec, Frankfurt"
        />
        <link rel="canonical" href="https://www.airclean-setec.de/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.airclean-setec.de/" />
        <meta property="og:site_name" content="AirClean Setec" />
        <meta property="og:title" content="AirClean Setec | Professionelle Küchenabluftreinigung nach VDI 2052" />
        <meta
          property="og:description"
          content="AirClean Setec – Experten für die professionelle Reinigung von Küchenabluftanlagen in Industrie und Gastronomie. Zertifiziert nach VDI 2052. Jetzt Angebot einholen!"
        />
        <meta property="og:image" content="https://www.airclean-setec.de/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="de_DE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AirClean Setec | Professionelle Küchenabluftreinigung nach VDI 2052" />
        <meta
          name="twitter:description"
          content="Experten für die professionelle Reinigung von Küchenabluftanlagen in Industrie und Gastronomie. Zertifiziert nach VDI 2052."
        />
        <meta name="twitter:image" content="https://www.airclean-setec.de/og-image.jpg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "AirClean Setec",
              "description": "Experten für die professionelle Reinigung von Küchenabluftanlagen in Industrie und Gastronomie. Zertifiziert nach VDI 2052.",
              "url": "https://www.airclean-setec.de",
              "logo": "https://www.airclean-setec.de/favicon.png",
              "image": "https://www.airclean-setec.de/og-image.jpg",
              "telephone": "+4915122851195",
              "email": "info@airclean-setec.de",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Am Martinszehnten 3",
                "addressLocality": "Frankfurt am Main",
                "postalCode": "60437",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 50.1817,
                "longitude": 8.6116
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://linkedin.com/company/airclean-vs"
              ],
              "priceRange": "$$",
              "areaServed": {
                "@type": "Country",
                "name": "Deutschland"
              },
              "serviceType": [
                "Küchenabluftreinigung",
                "Lüftungsanlagenreinigung",
                "Brandschutzreinigung nach VDI 2052"
              ]
            })
          }}
        />
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
