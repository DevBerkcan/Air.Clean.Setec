import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'
import { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

export default function ReuqestOffer() {

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
      company: '',
      name: '',
      email: '',
      phone: '',
      street: '',
      postCode: '',
      location: '',
      length: '',
      width: '',
      pictures: '',
      dehoga: '',
      message: '',
      referer: '',
    },
    onSubmit: (values: any) => {

      const formData: any = new FormData()

      for (const key in values) {
        formData.append(key, values[key])
      }
      for (const key in values.pictures) {
        formData.append('pictures[]', values.pictures[key])
      }

      axios.post('/api/request-offer', formData, {
        headers: { 'content-type': 'multipart/form-data' }
      }).then(() => {
        showAlert('Ihr Angebot wurde erfolgreich an uns gesendet, wir werden Ihnen so schnell wie möglich antworten.', 'success')
      }).catch((e) => {
        console.log(e)
        showAlert('Fehler beim Senden. Bitte versuchen Sie es erneut.', 'error')
      }).finally(() => {
        formik.setSubmitting(false)
      })
    },
  })

  return (
    <>
      <Head>
        <title>Angebot einholen - AirClean VS</title>
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

              <form action="/api/request-offer" method="POST" encType="multipart/form-data" onSubmit={formik.handleSubmit}>

                <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Ansprechpartner</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">
                        Firmenname
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                        placeholder="Der Name Ihres Unternehmens"
                        onChange={formik.handleChange}
                        value={formik.values.company} />
                    </div>
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                        Name Kontaktperson<span className="text-red-600 mx-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                        placeholder="Max Mustermann"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Mailadresse Kontaktperson<span className="text-red-600 mx-1">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                        placeholder="email@gentle-webdesign.de"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                        Telefonnummer<span className="text-red-600 mx-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                        placeholder="+00491234567890"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        required />
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Postanschrift</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900">
                      Straße & Hausnr.<span className="text-red-600 mx-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="street"
                      id="street"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Musterstraße 1a"
                      onChange={formik.handleChange}
                      value={formik.values.street}
                      required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="postCode" className="block mb-2 text-sm font-medium text-gray-900">
                        PLZ<span className="text-red-600 mx-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="postCode"
                        id="postCode"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                        placeholder="12"
                        onChange={formik.handleChange}
                        value={formik.values.postCode}
                        required />
                    </div>
                    <div>
                      <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900">
                        Ort<span className="text-red-600 mx-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                        placeholder="Der Name ihres Wohnortes"
                        onChange={formik.handleChange}
                        value={formik.values.location}
                        required />
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Angaben zur Küchenabluftanlage</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="length" className="block mb-2 text-sm font-medium text-gray-900">
                        Länge der Anlage in m<span className="text-red-600 mx-1">*</span>
                      </label>
                      <input
                        type="number"
                        name="length"
                        id="length"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                        placeholder="100"
                        onChange={formik.handleChange}
                        value={formik.values.length}
                        required />
                    </div>
                    <div>
                      <label htmlFor="width" className="block mb-2 text-sm font-medium text-gray-900">
                        Breite der Anlage in m<span className="text-red-600 mx-1">*</span>
                      </label>
                      <input
                        type="number"
                        name="width"
                        id="width"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                        placeholder="100"
                        onChange={formik.handleChange}
                        value={formik.values.width}
                        required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="pictures" className="block mb-2 text-sm font-medium text-gray-900">
                      Bilder der Anlage
                    </label>
                    <input
                      type="file"
                      name="pictures"
                      id="pictures"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Musterstraße 1a"
                      multiple={true}
                      onChange={(e: any) => {
                        formik.setFieldValue('pictures', e.currentTarget.files);
                      }} />
                  </div>
                  <div>
                    <label htmlFor="dehoga" className="block mb-2 text-sm font-medium text-gray-900">
                      Sind Sie DEHOGA-Mitglied?
                    </label>
                    <div className="flex gap-4">
                      <div className="flex items-center">
                        <input
                          id="dehoga-yes"
                          type="radio"
                          value="ja"
                          name="dehoga"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                          checked={formik.values.dehoga == 'ja'}
                          onChange={() => formik.setFieldValue('dehoga', 'ja')} />
                        <label htmlFor="dehoga-yes" className="ml-2 text-sm font-medium text-gray-900">ja</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="dehoga-no"
                          type="radio"
                          value="nein"
                          name="dehoga"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                          checked={formik.values.dehoga == 'nein'}
                          onChange={() => formik.setFieldValue('dehoga', 'nein')} />
                        <label htmlFor="dehoga-no" className="ml-2 text-sm font-medium text-gray-900">nein</label>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Sonstiges</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Ihre Nachricht an uns</label>
                    <textarea
                      name="message"
                      id="message"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Message"
                      onChange={formik.handleChange}
                      value={formik.values.message}></textarea>
                  </div>
                  <div>
                    <label htmlFor="referer" className="block mb-2 text-sm font-medium text-gray-900">Wie sind Sie auf uns aufmerksam geworden?</label>
                    <select
                      name="referer"
                      id="referer"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      onChange={formik.handleChange}
                      value={formik.values.referer}
                      required>
                      <option value="Empfehlung">Empfehlung</option>
                      <option value="Werbung">Werbung</option>
                      <option value="Internet">Internet</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>
                </div>

                <div className="flex mt-6">
                  <input
                    id="policyAgree"
                    type="checkbox"
                    value="Yes"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    required />
                  <label htmlFor="policyAgree" className="ml-2 text-sm font-medium text-gray-900">
                    Hiermit erkläre ich mich einverstanden, dass meine in das Kontaktformular eingegebenen Daten gemäß der Datenschutzerklärung elektronisch gespeichert und zum Zweck der Kontaktaufnahme verarbeitet und genutzt werden. Mir ist bekannt, dass ich meine Einwilligung jederzeit widerrufen kann. Die Daten werden nicht an Dritte weitergegeben.
                  </label>
                </div>

                <p className="mt-6 text-sm text-gray-600">Hinweis: Felder, die mit einem roten Stern (<span className="text-red-600 mx-1">*</span>) gekennzeichnet sind, sind erforderlich, um Maric Airclean über die Website kontaktieren zu können.</p>

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