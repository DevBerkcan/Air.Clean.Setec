import Image from "next/image"
import gloves from '../assets/images/gloves.jpg'

const ContactSection: any = () => {

  return (
    <section className="px-6 py-20" id="contact">
      <div className="container">

        <div className="py-8 lg:py-16 mx-auto">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Kontaktiere Sie uns
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          Nehmen Sie gerne Kontakt zu uns auf. Schreiben Sie uns Ihr anliegen und wir werden uns so schnell wie möglich darum kümmern Ihnen eine Antwort zu geben.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">

            <Image src={gloves} alt="Gloves" width={400} className="hidden md:block rounded-lg reveal reveal-right" />

            <form className="space-y-8 col-span-2 reveal reveal-left" action="https://getform.io/f/ade46548-134f-4cd4-8b43-31a274cd5cd1" method="POST">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="Unternehmen" className="block mb-2 text-sm font-medium text-gray-900">Unternehmen</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Max Mustermann UG"
                    required />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Ansprechpartner</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Max Mustermann"
                    required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="max@mustermann.com"
                    required />
                </div>
                <div>
                  <label htmlFor="postcode" className="block mb-2 text-sm font-medium text-gray-900">PLZ</label>
                  <input
                    type="text"
                    name="postcode"
                    id="postcode"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="00000"
                    required />
                </div>
              </div>

              <div>
                <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">Art der Reinigung</label>
                <input
                  type="text"
                  name="type"
                  id="type"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Flurreinigung"
                  required />
              </div>

              <div>
                <label htmlFor="area" className="block mb-2 text-sm font-medium text-gray-900">Reinigungbereich in m²</label>
                <input
                  type="text"
                  name="area"
                  id="area"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Bereich"
                  required />
              </div>

              <div>
                <label htmlFor="cycle" className="block mb-2 text-sm font-medium text-gray-900">Bilder </label>
                <input
                  type="file"
                  name="cycle"
                  id="cycle"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Cycle"
                  required />
              </div>

              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-700 sm:w-fit hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300">
               Senden
              </button>

            </form>

          </div>


        </div>

      </div>
    </section>
  )
}

export default ContactSection