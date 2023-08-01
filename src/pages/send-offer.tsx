import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useFormik } from 'formik';
import axios from 'axios';

export default function SendOffer() {

  const formik = useFormik({
    initialValues: {
      company: 'Deveo',
      name: 'Bilal Bentoumi',
      email: 'bilalbentoumi@gmail.com',
      phone: '0667 00 92 43',

      street: 'Algiers',
      postCode: '16000',
      location: 'Algeria',

      message: 'Hello World!',
      referer: 'Google',
    },
    onSubmit: values => {
      axios.post('/api/send-offer', values).then(() => {
        alert('success')
      }).catch(() => {
        alert('error')
      }).finally(() => {
        formik.setSubmitting(false)
      })
    },
  })

  return (
    <>
      <Head>
        <title>Air Clean - Angebot einholen</title>
      </Head>

      <main>

        {/* Hero */}
        <Header scrollEffect={true} />

        <div className="py-40">

          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Angebot einholen</h1>
            </div>
          </div>

          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[40rem]">

              <form action="/api/send-offer" method="POST" onSubmit={formik.handleSubmit}>

                <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Contact Person</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Company</label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="Company Name"
                        onChange={formik.handleChange}
                        value={formik.values.company}
                        required />
                    </div>
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="John Doe"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="email@gentle-webdesign.de"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="+213 01 23 45 67"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        required />
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Mailing Address</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900">Street</label>
                    <input
                      type="text"
                      name="street"
                      id="street"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Street"
                      onChange={formik.handleChange}
                      value={formik.values.street}
                      required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="postCode" className="block mb-2 text-sm font-medium text-gray-900">Postal Code</label>
                      <input
                        type="text"
                        name="postCode"
                        id="postCode"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="00000"
                        onChange={formik.handleChange}
                        value={formik.values.postCode}
                        required />
                    </div>
                    <div>
                      <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900">Location</label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="Location"
                        onChange={formik.handleChange}
                        value={formik.values.location}
                        required />
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Miscellaneous</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message to us</label>
                    <textarea
                      name="message"
                      id="message"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      required></textarea>
                  </div>
                  <div>
                    <label htmlFor="referer" className="block mb-2 text-sm font-medium text-gray-900">How did you find out about us (optional)?</label>
                    <select
                      name="referer"
                      id="referer"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      onChange={formik.handleChange}
                      value={formik.values.referer}
                      required>
                      <option value="Google">Google</option>
                      <option value="Linkedin">Linkedin</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex py-3 px-5 mt-8 text-sm font-medium text-center text-white rounded-lg bg-indigo-700 sm:w-fit hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 disabled:bg-indigo-400 disabled:cursor-not-allowed"
                  disabled={formik.isSubmitting}>
                  {formik.isSubmitting && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>}
                  Senden
                </button>

              </form>

            </div>
          </div>

        </div>

        <Footer />

      </main>

    </>
  )
}