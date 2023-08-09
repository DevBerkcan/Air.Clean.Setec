const HeroSection: any = () => {

  return (
    <section className="relative bg-[url('/pipes.png')] bg-cover bg-center" id="home">

      <div className="mx-auto bg-white/30">

        <div className="grid grid-cols-1 md:grid-cols-3">

          <div></div>

          <div className="relative py-[200px] px-6 lg:px-8 col-span-2 pt-[300px]">
            <div className="bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full z-10"></div>
            <div className="max-w-2xl mx-auto">
              <div className="relative text-center z-20">
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                  Experten für die professionelle Reinigung von raumlufttechnischen Anlagen in Industrie und Gastronomie-Küchen.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-200">
                  Küchenabluftreinigung – Wo Genuss auf Sauberkeit trifft und Innovation die Luft erfrischt.
                </p>
                <div className="mt-10 flex items-center justify-center flex-wrap gap-x-6 gap-y-4">
                  <a
                    href="#services"
                    className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Zur Küchenabluftreinigung
                  </a>
                  <a href="#about" className="text-base font-semibold leading-7 text-white">
                    Erfahre mehr über uns <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default HeroSection