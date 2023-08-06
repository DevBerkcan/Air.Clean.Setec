import Image from "next/image"
import logoIcon from '@/assets/images/logo-icon.png'

const AboutSection: any = () => {

  return (
    <section className="bg-[url('/background2.jpg')] bg-cover bg-center" id="about">
      <div className="px-6 py-20 bg-white/20">
        <div className="container text-center py-8 lg:py-16">

          <Image className="mx-auto my-6" src={logoIcon} width={100} alt="Air Clean" />
          
          <span className="inline-flex text-sm font-semibold bg-orange-100 text-orange-400 rounded-full px-3 py-1 mb-4">About us</span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">Welcome to our Air Cleaning Solutions!</h2>
          <h4 className="text-lg sm:text-2xl font-bold tracking-tight text-sky-600">Abluftanlagen Reinigung aus Standort</h4>

          <div className="mx-auto max-w-2xl">
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Sauberkeit und Effizienz stehen bei uns an erster Stelle! Aircleanvs bietet erstklassige
              Reinigungsdienstleistungen für raumlufttechnische Anlagen in Industrie und GastronomieKüchen. Vertrauen Sie unserem erfahrenen Team, um die Luftqualität zu verbessern und Ihre
              Anlagen in Topform zu halten. Kontaktieren Sie uns jetzt für eine professionelle Beratung.
              Wir freuen uns darauf, Ihnen zu helfen!"
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection