import Image from 'next/image'
import kitchenExhaust from '@/assets/images/kitchen-exhaust-2.svg'

const ServicesSection: any = () => {

  return (
    <section className="px-6 pt-20 pb-0" id="services">
      <div className="container text-center py-8 lg:py-16">

        <span className="text-sm font-semibold bg-orange-100 text-orange-400 rounded-full px-3 py-1">Services</span>

        <Image className="mx-auto my-4" src={kitchenExhaust} width={180} alt={"Kitchen Exhaust"} />

        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">REINIGUNG KÜCHENABLUFTANLAGE</h3>
        <p className="mt-2 text-md leading-[28px] text-gray-600">
          Unregelmäßig gereinigte Küchenabluftanlagen können nicht nur zu einer schlechten
          Luftzirkulation in Küchen und gastronomischen Einrichtungen führen, sondern auch ein
          erhöhtes Sicherheitsrisiko darstellen. Fett und Schmutz, die sich an den Innenseiten der
          Lüftungsanlagen ansammeln, setzen Ihr Unternehmen einem erhöhten Feuerrisiko aus.
        </p>
        <p className="mt-2 text-md leading-[28px] text-gray-600">
          Bei Airclean-VS setzen wir uns für eine effiziente, brandschutztechnisch zertifizierte und
          hygienische Reinigung von Lüftungsanlagen in der Gastronomie nach VDI 2052 ein. Unsere
          Expertise konzentriert sich dabei besonders auf die Küchenabluftanlagen in gastronomischen
          und lebensmittelverarbeitenden Betrieben, die den Kern unseres Leistungsportfolios bilden.
        </p>
        <p className="mt-2 text-md leading-[28px] text-gray-600">
          Durch unsere professionelle Reinigung tragen wir dazu bei, dass Ihre Lüftungsanlagen
          optimal funktionieren und die Luftqualität in Ihren Küchen verbessert wird. Unsere
          zertifizierten Techniker sorgen nicht nur für eine gründliche Entfernung von Fett und
          Schmutz, sondern beachten auch strengste Brandschutzstandards und hygienische
          Richtlinien.
        </p>
        <p className="mt-2 text-md leading-[28px] text-gray-600">
          Sie können sich darauf verlassen, dass wir Ihre Anlagen sorgfältig inspizieren und fachgerecht
          reinigen, um die Sicherheit und Effizienz Ihrer Lüftungsanlagen zu gewährleisten. Mit
          unserem ganzheitlichen Ansatz bieten wir Ihnen maßgeschneiderte Lösungen, die Ihren
          spezifischen Anforderungen gerecht werden.
        </p>
        <p className="mt-2 text-md leading-[28px] text-gray-600">
          Vertrauen Sie auf Airclean-VS, um Ihre Küchenabluftanlagen in erstklassigem Zustand zu
          halten und Ihr Unternehmen vor potenziellen Gefahren zu schützen. Kontaktieren Sie uns
          noch heute für eine Beratung und ein individuelles Angebot.
        </p>

      </div>
    </section>
  )
}

export default ServicesSection