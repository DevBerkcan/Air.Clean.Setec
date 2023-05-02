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

        <span className="text-sm font-semibold bg-orange-100 text-orange-400 rounded-full px-3 py-1">Services</span>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our best cleaning services</h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 duration-100">
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-green-400">
              <Image src={house} width={30} alt="house" />
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">HOUSE CLEANING</h3>
            <p className="mt-2 text-lg leading-7 text-gray-600">
              We clean and care for variety of hard
              surface flooring at many places of
              business.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 duration-100">
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-blue-400">
              <Image src={kitchen} width={30} alt="house" />
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">KITCHEN CLEANING</h3>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              We clean and care for variety of hard
              surface flooring at many places of
              business.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 duration-100">
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-orange-400">
              <Image src={floor} width={30} alt="house" />
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">FLOOR CLEANING</h3>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              We clean and care for variety of hard
              surface flooring at many places of
              business.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 duration-100">
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-red-400">
              <Image src={bathroom} width={30} alt="house" />
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">BATHROOM CLEANING</h3>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              We clean and care for variety of hard
              surface flooring at many places of
              business.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 duration-100">
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-indigo-400">
              <Image src={office} width={30} alt="house" />
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">OFFICE CLEANING</h3>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              We clean and care for variety of hard
              surface flooring at many places of
              business.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServicesSection