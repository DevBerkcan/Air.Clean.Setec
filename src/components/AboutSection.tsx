import IconLogo from "./IconLogo"

const AboutSection: any = () => {

  return (
    <section className="bg-[url('/background2.jpg')] bg-cover bg-center" id="about">
      <div className="px-6 py-20 bg-white/20">
        <div className="container text-center py-8 lg:py-16">

          <IconLogo />

          <span className="inline-flex text-sm font-semibold bg-orange-100 text-orange-400 rounded-full px-3 py-1 mb-4">Über uns</span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">Küchenabluftanlagen in der Gastronomie</h2>

          <div className="mx-auto max-w-2xl">
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Sauberkeit und Effizienz stehen bei uns an erster Stelle! Airclean VS bietet erstklassige Reinigungsdienstleistungen für raumlufttechnische Anlagen in Industrie und Gastronomie- Küchen. Vertrauen Sie unserem erfahrenen Team, um die Luftqualität zu verbessern und Ihre Anlagen in Topform zu halten. Kontaktieren Sie uns jetzt für eine professionelle Beratung. Wir freuen uns darauf, Ihnen zu helfen!
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection