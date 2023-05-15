import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {

  return (
    <>
      <Head>
        <title>AK Services - Privacy Policy</title>
      </Head>

      <main>

        {/* Hero */}
        <Header scrollEffect={true} />

        <div className="py-40">

          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Privacy policy</h1>
              <p className="mt-4 text-base leading-7 text-slate-600">Last updated on May 3, 2023</p>
            </div>
          </div>

          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[40rem] text-sm text-slate-600 leading-6">

              <p className="my-4">This privacy policy ("Policy") describes how Tailwind Labs Inc. ("Tailwind", "we", "us" or "our") collects, protects and uses the personally identifiable information ("Personal Information") you ("User", "you" or "your") may provide through the Tailwind UI website (tailwindui.com) or in the course of purchasing any Tailwind UI products (collectively, "Website"). The Policy also describes the choices available to you regarding our use of your Personal Information and how you can access and update this information. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Collection of personal information</h2>
              <p className="my-4">We receive and store any information you knowingly provide to us when you make a purchase through the Website. Currently this is limited to your email address, which is required for you to be able to login to the Website and access any purchased Tailwind UI products.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Collection of non-personal information</h2>
              <p className="my-4">When you visit the Website our servers automatically record information that your browser sends. This data may include information such as your device's IP address, browser type and version, operating system type and version, language preferences or the webpage you were visiting before you came to our Website, pages of our Website that you visit, the time spent on those pages, information you search for on our Website, access times and dates, and other statistics.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Purchases</h2>
              <p className="my-4">All purchases made through the Website are processed by a third party payment processor, Paddle (paddle.com). Paddle may ask you for personal and/or non-personal information, such as your name, address, email address, credit card information, or other Personal Information. Paddle has a privacy policy (paddle.com/legal-buyers/) that describes their collection and use of personal information. Tailwind does not control Paddle or its collection or use of information. Any questions or concerns about Paddle's practices should be directed to Paddle.</p>
              <p className="my-4">Paddle provides us with certain non-personal information relating to purchases made by visitors to the Website. The non-personal information may include details of the purchase such as the date, amount paid, and product purchased. The non-personal purchase information may be linked to the Personal Information you provide to us (typically limited to your email address, as stated above). Paddle does not supply us with any of your other Personal Information such as your name, street address, or credit card information.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Managing personal information</h2>
              <p className="my-4">You are able to update your Personal Information in your "Account Settings" on the Website. Currently this is limited to just your email address, as described above. You may also request that we delete your email address, but this will prevent you from accessing the products you have purchased from Tailwind.</p>
              <p className="my-4">When you update information, we may maintain a copy of the unrevised information in our records. Some information may remain in our private records after deletion of such information from your account for a retention period. Once the retention period expires, Personal Information shall be deleted. Therefore, the right to access, the right to erasure, your rights to access, add to, and update your information cannot be enforced after the expiration of the retention period.</p>
              <p className="my-4">We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. We may use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally.</p>

            </div>
          </div>

        </div>

        <Footer />

      </main>

    </>
  )
}