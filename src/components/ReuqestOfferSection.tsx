import Link from "next/link"
import IconLogo from "./IconLogo"

const ReuqestOfferSection: any = () => {

  return (
    <section className="bg-[url('/background1.png')] bg-cover bg-center" id="request-offer">
      <div className="px-6 py-20 bg-white/70">
        <div className="container text-center py-8 lg:py-16">

          <IconLogo />

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Haben wir Ihr Interesse geweckt?
          </h2>
          <div className="mx-auto max-w-2xl">
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Erhalten Sie Ihr individuelles Angebot von uns.
            </p>
            <Link href="/angebot-einholen" className="inline-flex py-3 px-5 mt-6 text-sm font-medium text-center text-white rounded-lg bg-[#006ff8] hover:bg-[#0060d9] sm:w-fit focus:ring-4 focus:outline-none focus:ring-[#006ff8]/50">
              Angebot einholen
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ReuqestOfferSection
