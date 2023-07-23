import Image from 'next/image'
import house from '../assets/images/house.svg'
import kitchen from '../assets/images/kitchen.svg'
import floor from '../assets/images/floor.svg'
import office from '../assets/images/office.svg'
import window from '../assets/images/window.svg'

const services = [
  {
    title: 'Service 1',
    description: "Service 1 Description",
    icon: house,
    color: 'green'
  },
  {
    title: 'Service 2',
    description: "Service 2 Description",
    icon: kitchen,
    color: 'blue'
  },
  {
    title: 'Service 3',
    description: "Service 3 Description",
    icon: floor,
    color: 'orange'
  },
  {
    title: 'Service 4',
    description: "Service 4 Description",
    icon: window,
    color: 'red'
  },
  {
    title: 'Service 5',
    description: "Service 5 Description",
    icon: office,
    color: 'indigo'
  },
  {
    title: 'Service 6',
    description: "Service 6 Description",
    icon: office,
    color: 'gray'
  },

]

const ServicesSection: any = () => {

  return (
    <section className="px-6 py-20" id="services">
      <div className="container text-center py-8 lg:py-16">

        <span className="text-sm font-semibold bg-orange-100 text-orange-400 rounded-full px-3 py-1">Services</span>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Checkout our services</h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {services.map((item, index) => (
            <div key={index} className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 duration-100">
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