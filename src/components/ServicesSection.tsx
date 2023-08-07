import Image from 'next/image'
import IconLogo from './IconLogo'
import { ImgComparisonSlider } from '@img-comparison-slider/react'
import before1 from '@/assets/images/pictures/before.jpeg'
import before2 from '@/assets/images/pictures/before2.jpeg'
import after1 from '@/assets/images/pictures/after.jpeg'
import after2 from '@/assets/images/pictures/after2.jpeg'

const ServicesSection: any = () => {

  return (
    <section className="px-6 py-20" id="services">

      <IconLogo />
      <div className="flex">
        <span className="mx-auto mb-4 text-sm font-semibold bg-orange-100 text-orange-400 rounded-full px-3 py-1">Services</span>
      </div>

      <div className="container py-8 lg:py-16 space-y-8 lg:space-y-20">

        {/* Services */}
        <div className="grid items-start gap-y-6 lg:grid-cols-2">
          <div className="flex max-w-[500px] rounded-lg mx-auto lg:-rotate-[2deg] overflow-hidden">
            <ImgComparisonSlider>
              <Image slot="first" src={before1} alt="Before" />
              <Image slot="second" src={after1} alt="After" />
            </ImgComparisonSlider>
          </div>
          <div>
            <h2 className="mb-2 lg:mb-4 text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">Our Services</h2>
            <p className="mb-6 text-md leading-[28px] text-gray-600">
              Unregelmäßig gereinigte Küchenabluftanlagen können nicht nur zu einer schlechten
              Luftzirkulation in Küchen und gastronomischen Einrichtungen führen, sondern auch ein
              erhöhtes Sicherheitsrisiko darstellen. Fett und Schmutz, die sich an den Innenseiten der
              Lüftungsanlagen ansammeln, setzen Ihr Unternehmen einem erhöhten Feuerrisiko aus.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="grid items-start gap-y-6 lg:grid-cols-2">
          <div className="flex max-w-[500px] rounded-lg mx-auto lg:order-2 lg:rotate-[2deg] overflow-hidden">
            <ImgComparisonSlider>
              <Image slot="first" src={before2} alt="Before" />
              <Image slot="second" src={after2} alt="After" />
            </ImgComparisonSlider>
          </div>
          <div className="lg:order-1">
            <h2 className="mb-2 lg:mb-4 text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">How does a cleaning work?</h2>
            <p className="mb-6 text-md leading-[28px] text-gray-600">
              Unsere Küchenabluftreinigung erfolgt während des Betriebsstillstands oder nachts. Sie
              müssen nicht permanent vor Ort sein, sondern nur zu Beginn und am Ende für die Abnahme.
              Wir überprüfen Ihre Geräte und Kanäle, reinigen mit speziellen Wellen und verwenden einen
              Unterdrucksauger, um Schmutz, Schimmel und Staub effizient zu entfernen. Unsere
              Mitarbeiter berücksichtigen jederzeit die Herstelleranforderungen und tauschen alle Arten
              von Filtern aus.
            </p>
            <p className="mb-6 text-md leading-[28px] text-gray-600">
              Reinigung gemäß VDI 2052
              Gemäß VDI 2052 fordert der Verband deutscher Ingenieure regelmäßige Kontrollen und bei
              Bedarf Reinigungen von Küchenabluftanlagen, um die Brandgefahr durch Fettbelastungen zu
              minimieren. Unsere brandschutztechnische Reinigung nach VDI 2052 mit Schaum- und
              Intertionsdampfverfahren stellt sicher, dass Ihre Anlagen in einwandfreiem Zustand bleiben.
              Mit dieser Maßnahme erfüllen Sie Ihre Fürsorgepflicht als Anlagenbetreiber und erhalten
              einen entsprechenden Nachweis. Wir empfehlen zudem regelmäßige endoskopische
              Sichtprüfungen und gegebenenfalls weitere Reinigungen, um die Sicherheit und Effizienz
              Ihrer Anlagen zu gewährleisten.
            </p>
          </div>
        </div>

        {/* Legal Situation */}
        <div className="grid items-start gap-y-6 lg:grid-cols-2">
          <div className="flex max-w-[500px] rounded-lg mx-auto lg:-rotate-[2deg] overflow-hidden">
            <ImgComparisonSlider>
              <Image slot="first" src={before1} alt="Before" />
              <Image slot="second" src={after1} alt="After" />
            </ImgComparisonSlider>
          </div>
          <div>
            <h2 className="mb-2 lg:mb-4 text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">Rechtslage zur Küchenabluftreinigung</h2>
            <p className="mb-6 text-md leading-[28px] text-gray-600">
              Die rechtlichen Vorgaben zur Reinigung von gewerblichen Küchenabluftanlagen sind durch die VDI Richtlinie 2052 in Verbindung mit der BGR 111 und dem Arbeitsschutzgesetz (ArbSchG) festgelegt. Gemäß diesen Vorschriften sind regelmäßige Inspektionen und eine fachgerechte Reinigung der Anlagen erforderlich. Wenn diese Vorgaben nicht oder unzureichend beachtet werden, kann es im Falle von Schäden oder Beanstandungen zu einem sogenannten Organisationsverschulden kommen. In solchen Fällen haften sowohl die Unternehmensführung als auch der verantwortliche Mitarbeiter.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesSection