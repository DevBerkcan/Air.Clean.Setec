import Image from 'next/image'
import house from '../assets/images/house.svg'
import kitchen from '../assets/images/kitchen.svg'
import floor from '../assets/images/floor.svg'
import office from '../assets/images/office.svg'
import bathroom from '../assets/images/bathroom.svg'

const ServicesSection: any = () => {

  return (
    <section className="px-6 py-20" id="services">
      <div className="container text-center py-8 lg:py-16">

        <span className="text-sm font-semibold bg-orange-100 text-orange-400 rounded-full px-3 py-1">Leistungen</span>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unsere besten Reinigungsdienstleistungen</h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 duration-100">
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-green-400">
              <Image src={house} width={30} alt="house" />
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">Unterhaltsreinigung</h3>
            <p className="mt-2 text-lg leading-7 text-gray-600">
            Die Unterhaltsreinigung ist eine regelmäßige Reinigung, die dazu dient, Räumlichkeiten in einem guten und gepflegten Zustand zu halten. 
            Dazu gehört zum Beispiel das Reinigen von Böden, Oberflächen und sanitären Anlagen.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 duration-100">
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-blue-400">
              <Image src={kitchen} width={30} alt="house" />
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">Grundreinigung</h3>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Die Grundreinigung ist eine intensive Reinigung, die in größeren Abständen durchgeführt wird. 
            Dabei werden Verschmutzungen beseitigt, die bei der Unterhaltsreinigung nicht entfernt werden können. 
            Hierzu zählen zum Beispiel hartnäckige Flecken, Kalkablagerungen oder Fettflecken.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 duration-100">
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-orange-400">
              <Image src={floor} width={30} alt="house" />
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">Bauendreinigung</h3>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Die Bauendreinigung ist eine Reinigung, die nach Fertigstellung eines Bauvorhabens durchgeführt wird. 
            Dabei werden Baustaub, Bauschutt und weitere Verschmutzungen beseitigt und die Räumlichkeiten auf den Einzug vorbereitet.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 duration-100">
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-red-400">ç
              <Image src={bathroom} width={30} alt="house" />
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">Fensterreinigung</h3>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Die Fensterreinigung beinhaltet die Reinigung von Fenstern und Glasflächen innen und außen. Hierbei werden Schmutz, 
            Staub und Fingerabdrücke entfernt, um eine klare Sicht zu gewährleisten.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 duration-100">
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-indigo-400">
              <Image src={office} width={30} alt="house" />
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">Desinfektionsreinigung</h3>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Die Desinfektionsreinigung ist eine Reinigung, die speziell dazu dient, Keime, Bakterien und Viren abzutöten. 
            Diese Art der Reinigung wird in sensiblen Bereichen, wie Praxen, Kindergärten, Altersheimen oder Lebensmittelbetrieben durchgeführt.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 duration-100">
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-indigo-400">
              <Image src={office} width={30} alt="house" />
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">Sonderreinigung</h3>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Die Sonderreinigung bezieht sich auf Reinigungsarbeiten, die nicht unter die oben genannten Kategorien fallen. Beispiele für Sonderreinigungen können sein: 
            Teppichreinigung, Fassadenreinigung oder Reinigung von Maschinen und Anlagen.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServicesSection