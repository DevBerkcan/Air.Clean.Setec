import Image from 'next/image'
import house from '../assets/images/house.svg'
import kitchen from '../assets/images/kitchen.svg'
import floor from '../assets/images/floor.svg'
import office from '../assets/images/office.svg'
import bathroom from '../assets/images/bathroom.svg'

const services = [
  {
    title: 'Unterhaltsreinigung',
    description: "Die Unterhaltsreinigung ist eine regelmäßige Reinigung, die dazu dient, Räumlichkeiten in einem guten und gepflegten Zustand zu halten. Dazu gehört zum Beispiel das Reinigen von Böden, Oberflächen und sanitären Anlagen.",
    icon: house,
    color: 'green'
  },
  {
    title: 'Grundreinigung',
    description: "Die Grundreinigung ist eine intensive Reinigung, die in größeren Abständen durchgeführt wird. Dabei werden Verschmutzungen beseitigt, die bei der Unterhaltsreinigung nicht entfernt werden können. Hierzu zählen zum Beispiel hartnäckige Flecken, Kalkablagerungen oder Fettflecken.",
    icon: kitchen,
    color: 'blue'
  },
  {
    title: 'Bauendreinigung',
    description: "Die Bauendreinigung ist eine Reinigung, die nach Fertigstellung eines Bauvorhabens durchgeführt wird. Dabei werden Baustaub, Bauschutt und weitere Verschmutzungen beseitigt und die Räumlichkeiten auf den Einzug vorbereitet.",
    icon: floor,
    color: 'orange'
  },
  {
    title: 'Fensterreinigung',
    description: "Die Fensterreinigung beinhaltet die Reinigung von Fenstern und Glasflächen innen und außen. Hierbei werden Schmutz, Staub und Fingerabdrücke entfernt, um eine klare Sicht zu gewährleisten.",
    icon: bathroom,
    color: 'red'
  },
  {
    title: 'Desinfektionsreinigung',
    description: "Die Desinfektionsreinigung ist eine Reinigung, die speziell dazu dient, Keime, Bakterien und Viren abzutöten. Diese Art der Reinigung wird in sensiblen Bereichen, wie Praxen, Kindergärten, Altersheimen oder Lebensmittelbetrieben durchgeführt.",
    icon: office,
    color: 'indigo'
  },
  {
    title: 'Sonderreinigung',
    description: "Die Sonderreinigung bezieht sich auf Reinigungsarbeiten, die nicht unter die oben genannten Kategorien fallen. Beispiele für Sonderreinigungen können sein: Teppichreinigung, Fassadenreinigung oder Reinigung von Maschinen und Anlagen.",
    icon: office,
    color: 'gray'
  },

]

const ServicesSection: any = () => {

  return (
    <section className="px-6 py-20" id="services">
      <div className="container text-center py-8 lg:py-16">

        <span className="text-sm font-semibold bg-orange-100 text-orange-400 rounded-full px-3 py-1">Leistungen</span>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unsere besten Reinigungsdienstleistungen</h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {services.map((item, index) => (
            <div key={index} className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 duration-100 reveal reveal-top">
              <div className={`w-20 h-20 flex justify-center items-center rounded-full bg-${item.color}-400`}>
                <Image src={item.icon} width={30} alt={item.title} />
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">{item.title}</h3>
              <p className="mt-2 text-md leading-[28px] text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default ServicesSection