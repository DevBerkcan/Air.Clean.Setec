import Image from "next/image"
import enterprise from '../assets/images/enterprise.jpg'
import { useState } from "react"
import { useFormik } from "formik"
import axios from "axios"

const ContactSection: any = () => {

  const [alertVisible, setAlertVisible] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState<'success' | 'error'>('success')

  function showAlert(message: string, type: 'success' | 'error', timeout = 3000) {
    setAlertVisible(true)
    setAlertMessage(message)
    setAlertType(type)

    if (!timeout) {
      return
    }
    
    setTimeout(() => {
      hideAlert()
    }, timeout)
  }

  function hideAlert() {
    setAlertVisible(false)
    setAlertMessage('')
  }

  const formik = useFormik({
    initialValues: {
      company: 'Deveo',
      phone: '0667 00 92 43',
      email: 'bilalbentoumi@gmail.com',
      postCode: '16000',
      type: 'Kitchen',
      area: '100m',
    },
    onSubmit: values => {
      axios.post('/api/contact', values).then(() => {
        showAlert('Your message sent successfully to us, we will respond you as soon as possible.', 'success')
      }).catch(() => {
        showAlert('Failed to send, please try again.', 'error')
      }).finally(() => {
        formik.setSubmitting(false)
      })
    },
  })

  return (
    <section id="contact">
      <div className="mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-stretch">

          <Image src={enterprise} alt="Enterprise" className="hidden md:block w-full h-[900px] object-cover" />

          <div className="p-6 md:p-20 flex flex-col justify-center shadow-inner">

            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
              Kontaktiere Sie uns
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
              Nehmen Sie gerne Kontakt zu uns auf. Schreiben Sie uns Ihr anliegen und wir werden uns so schnell wie möglich darum kümmern Ihnen eine Antwort zu geben.
            </p>

            <form className="space-y-4" action="/api/contact" method="POST" onSubmit={formik.handleSubmit}>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Unternehmen</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Max Mustermann UG"
                    onChange={formik.handleChange}
                    value={formik.values.company}
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
                    onChange={formik.handleChange}
                    value={formik.values.phone}
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
                    onChange={formik.handleChange}
                    value={formik.values.email}
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
                    onChange={formik.handleChange}
                    value={formik.values.postCode}
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
                  onChange={formik.handleChange}
                  value={formik.values.type}
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
                  onChange={formik.handleChange}
                  value={formik.values.area}
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
                className="inline-flex py-3 px-5 mt-8 text-sm font-medium text-center text-white rounded-lg bg-indigo-700 sm:w-fit hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 disabled:bg-indigo-400 disabled:cursor-not-allowe"
                disabled={formik.isSubmitting}>
                {formik.isSubmitting && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>}
                Senden
              </button>

              <div className={"transition-opacity duration-300 ease-in " + (alertVisible ? '' : 'opacity-0')}>
                <div className={"flex items-center p-4 my-4 rounded-lg " + (alertType == 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800')} role="alert">
                  <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div className="ml-3 text-sm font-medium">
                    {alertMessage}
                  </div>
                  <button type="button" onClick={hideAlert} className={"ml-auto -mx-1.5 -my-1.5 p-1.5 rounded-lg focus:ring-2 inline-flex items-center justify-center h-8 w-8 " + (alertType == 'success' ? 'bg-green-50 text-rgreened-500 focus:ring-green-400 hover:bg-green-200' : 'bg-red-50 text-red-500 focus:ring-red-400 p-1.5 hover:bg-red-200')} data-dismiss-target="#alert-2" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                  </button>
                </div>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ContactSection