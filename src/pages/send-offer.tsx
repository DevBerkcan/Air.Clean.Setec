import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'
import { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

export default function SendOffer() {

  const [alertVisible, setAlertVisible] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState<'success' | 'error'>('success')

  function showAlert(message: string, type: 'success' | 'error') {
    setAlertVisible(true)
    setAlertMessage(message)
    setAlertType(type)
  }

  function hideAlert() {
    setAlertVisible(false)
    setAlertMessage('')
  }

  const formik = useFormik({
    initialValues: {
      company: 'Deveo',
      name: 'Bilal Bentoumi',
      email: 'bilalbentoumi@gmail.com',
      phone: '0667 00 92 43',

      street: 'Algiers',
      postCode: '16000',
      location: 'Algeria',

      ventilation: 'Yes',
      canalTexture: 'Plastic',
      canalFormat: 'Around',

      message: 'Hello World!',
      referer: 'Google',
    },
    onSubmit: values => {
      axios.post('/api/send-offer', values).then(() => {
        showAlert('Your offer sent successfully to us, we will respond you as soon as possible.', 'success')
      }).catch(() => {
        showAlert('Failed to send, please try again.', 'error')
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

      <MainLayout>
        <div className="py-[90px]">

          <div className="px-6 lg:px-8">
            <div className="relative mx-auto max-w-[37.5rem] text-center pt-10 lg:pt-20 pb-2 lg:pb-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Angebot einholen</h1>
            </div>
          </div>

          <div className="relative px-6 lg:px-8">
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

                <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Information about the facility</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Is there a ventilation concept?</label>
                    <div className="flex gap-4">
                      <div className="flex items-center">
                        <input
                          id="ventilation-yes"
                          type="radio"
                          value="Yes"
                          name="ventilation"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                          checked={formik.values.ventilation == 'Yes'}
                          onChange={() => formik.setFieldValue('ventilation', 'Yes')} />
                        <label htmlFor="ventilation-yes" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="ventilation-no"
                          type="radio"
                          value="No"
                          name="ventilation"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                          checked={formik.values.ventilation == 'No'}
                          onChange={() => formik.setFieldValue('ventilation', 'No')} />
                        <label htmlFor="ventilation-no" className="ml-2 text-sm font-medium text-gray-900">No</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Texture of the canal</label>
                    <div className="flex gap-4">
                      <div className="flex items-center">
                        <input
                          id="canalTexture-plastic"
                          type="radio"
                          value="Plastic"
                          name="canalTexture"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                          checked={formik.values.canalTexture == 'Plastic'}
                          onChange={() => formik.setFieldValue('canalTexture', 'Plastic')} />
                        <label htmlFor="canalTexture-plastic" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Plastic</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="canalTexture-metal"
                          type="radio"
                          value="Metal"
                          name="canalTexture"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                          checked={formik.values.canalTexture == 'Metal'}
                          onChange={() => formik.setFieldValue('canalTexture', 'Metal')} />
                        <label htmlFor="canalTexture-metal" className="ml-2 text-sm font-medium text-gray-900">Metal</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="canalTexture-miscellaneous"
                          type="radio"
                          value="Miscellaneous"
                          name="canalTexture"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                          checked={formik.values.canalTexture == 'Miscellaneous'}
                          onChange={() => formik.setFieldValue('canalTexture', 'Miscellaneous')} />
                        <label htmlFor="canalTexture-miscellaneous" className="ml-2 text-sm font-medium text-gray-900">Miscellaneous</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Format of the channel</label>
                    <div className="flex gap-4">
                      <div className="flex items-center">
                        <input
                          id="canalFormat-around"
                          type="radio"
                          value="Around"
                          name="canalFormat"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                          checked={formik.values.canalFormat == 'Around'}
                          onChange={() => formik.setFieldValue('canalFormat', 'Around')} />
                        <label htmlFor="canalFormat-around" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Around</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="canalFormat-square"
                          type="radio"
                          value="Square"
                          name="canalFormat"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                          checked={formik.values.canalFormat == 'Square'}
                          onChange={() => formik.setFieldValue('canalFormat', 'Square')} />
                        <label htmlFor="canalFormat-square" className="ml-2 text-sm font-medium text-gray-900">Square</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="canalFormat-oval"
                          type="radio"
                          value="Oval"
                          name="canalFormat"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                          checked={formik.values.canalFormat == 'Oval'}
                          onChange={() => formik.setFieldValue('canalFormat', 'Oval')} />
                        <label htmlFor="canalFormat-oval" className="ml-2 text-sm font-medium text-gray-900">Oval</label>
                      </div>
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
      </MainLayout>
    </>
  )
}