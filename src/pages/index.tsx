import Head from 'next/head'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import Image from 'next/image'
import house from '../assets/images/house.svg'
import kitchen from '../assets/images/kitchen.svg'
import floor from '../assets/images/floor.svg'
import office from '../assets/images/office.svg'
import bathroom from '../assets/images/bathroom.svg'

export default function Index() {

  return (
    <>
      <Head>
        <title>Cleaning Services</title>
      </Head>

      <div className="isolate bg-white">

        {/* Background */}
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678">
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Header */}
        <Header />

        <main>

          {/* Hero */}
          <HeroSection />

          <section className="px-6 py-20" id="about">
            <div className="container text-center">

              <span className="text-sm bg-orange-100 text-orange-400 rounded-full px-3 py-1">About</span>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who we are</h2>

              <div className="mx-auto max-w-2xl">
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  With Reliable, Friendly and Trustful being our company values,
                  we are present ourselves with the most complete and up to date
                  cleaning services.
                </p>
              </div>

            </div>
          </section>

          <section className="px-6 py-20" id="services">
            <div className="container text-center">

              <span className="text-sm bg-orange-100 text-orange-400 rounded-full px-3 py-1">Services</span>
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
                <div className="flex flex-col justify-center items-center bg-black rounded-2xl shadow-lg hover:shadow-xl p-8 duration-100 cursor-pointer">

                  <p className="mt-2 text-xl text-white mx-20">
                    <span className="text-4xl font-bold mr-2">+12</span>
                    Services You can Explore
                  </p>
                  <span aria-hidden="true" className="text-4xl text-yellow-200">⟶</span>
                </div>

              </div>
            </div>
          </section>

          <Footer />

        </main>

      </div>

    </>
  )
}