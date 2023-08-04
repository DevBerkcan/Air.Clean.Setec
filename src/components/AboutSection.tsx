import Image from "next/image"
import logoIcon from '@/assets/images/logo-icon.png'

const AboutSection: any = () => {

  return (
    <section className="px-6 py-20" id="about">
      <div className="container text-center py-8 lg:py-16">

        <span className="text-sm font-semibold bg-orange-100 text-orange-400 rounded-full px-3 py-1">About us</span>
        
        <Image className="mx-auto mt-6" src={logoIcon} width={100} alt="Air Clean" />
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
    </section>
  )
}

export default AboutSection