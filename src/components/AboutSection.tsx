import Image from "next/image"
import clean from '../assets/images/clean.jpeg'

const AboutSection: any = () => {

  return (
    <section className="px-6 py-20" id="about">
      <div className="container text-center py-8 lg:py-16">

        <span className="text-sm font-semibold bg-orange-100 text-orange-400 rounded-full px-3 py-1">About</span>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who we are</h2>

        <div className="mx-auto max-w-2xl">
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With Reliable, Friendly and Trustful being our company values,
            we are present ourselves with the most complete and up to date
            cleaning services.
          </p>
        </div>

        <Image src={clean} alt="Gloves" width={400} className="mx-auto mt-6" />

      </div>
    </section>
  )
}

export default AboutSection