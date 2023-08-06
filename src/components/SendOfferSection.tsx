import Image from "next/image"
import logoIcon from '@/assets/images/logo-icon.png'
import Link from "next/link"

const SendOfferSection: any = () => {

  return (
    <section className="bg-[url('/background1.png')] bg-cover bg-center" id="send-offer">
      <div className="px-6 py-20 bg-white/70">
        <div className="container text-center py-8 lg:py-16">

          <Image className="mx-auto my-6" src={logoIcon} width={100} alt="Air Clean" />

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">Convinced?</h2>
          <div className="mx-auto max-w-2xl">
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Get your individual offer from us.
            </p>
            <Link href="/send-offer" className="inline-flex py-3 px-5 mt-6 text-sm font-medium text-center text-white rounded-lg bg-indigo-700 sm:w-fit hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300">
              Angebot Einholen
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SendOfferSection