import Header from "./Header"

const HeroSection: any = () => {

  return (
    <section className="relative px-6 lg:px-8 pt-20 bg-[url('/hero-background.jpg')] bg-fixed bg-cover" id="home">

      <div className="bg-black bg-opacity-60 absolute top-0 left-0 w-full h-full z-10"></div>

      <Header />

      <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Professional cleaning services for your home
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            With Reliable, Friendly and Trustful being our company values,
            we are present ourselves with the most complete and up to date
            cleaning services.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#services"
              className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              See our services
            </a>
            <a href="#about" className="text-base font-semibold leading-7 text-white">
              About us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection