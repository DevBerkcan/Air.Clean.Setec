import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/images/logo3.png' 

const Footer: any = () => {
  return (
    <footer className="px-6 bg-white">
      <div className="container border-t border-gray-200 py-10">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <ul className="text-gray-600">
              <li className="mb-4">
                <Link href="/#startseite" className="flex items-center">
                  <Image
                    src={logo}
                    className="w-[150px] h-auto mr-3"
                    alt="AirClean Setec – Küchenabluftreinigung"
                    width={150}
                    height={60}
                  />
                </Link>
              </li>

              <li>AirClean Setec</li>
              <li>Am Martinszehnten 3</li>
              <li>60437 Frankfurt am Main</li>

              <li>
                <a href="tel:+4915122851195" className="hover:underline">
                  +49 1512 2851195
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@airclean-setec.de"
                  className="hover:underline"
                >
                  info@airclean-setec.de
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Links</h2>
              <ul className="text-gray-600">
                <li className="mb-4">
                  <a href="#leistung" className="hover:underline">
                    Leistung
                  </a>
                </li>
                <li className="mb-4">
                  <Link href="/angebot-einholen" className="hover:underline">
                    Angebot einholen
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Folge uns auf</h2>
              <ul className="text-gray-600">
                <li className="mb-4">
                  <a
                    href="https://linkedin.com/company/airclean-vs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Rechtliches</h2>
              <ul className="text-gray-600">
                <li className="mb-4">
                  <Link href="/impressum" className="hover:underline">
                    Impressum
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/datenschutzerklaerung" className="hover:underline">
                    Datenschutzerklärung
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/agb" className="hover:underline">
                    AGB
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="grid gap-y-2 grid-cols-1 md:grid-cols-2">
          <span className="text-sm text-gray-500 text-center md:text-start">
            © 2026{' '}
            <Link href="/" className="hover:underline">
              AirClean Setec™
            </Link>
            . All Rights Reserved.
          </span>

          <div className="flex space-x-6 justify-center md:justify-end">
            <a
              href="https://linkedin.com/company/airclean-vs"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-900"
              aria-label="AirClean Setec auf LinkedIn"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 434 415"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M104.789 48.6001C104.789 55.3106 103.397 61.9481 100.7 68.0929C98.0037 74.2377 94.0613 79.7561 89.1225 84.2992C84.1837 88.8422 78.356 92.3111 72.0078 94.4864C65.6597 96.6617 58.9292 97.4961 52.2421 96.9369H51.6105C44.9971 97.2783 38.3839 96.2595 32.1799 93.9435C25.9759 91.6274 20.3129 88.0634 15.541 83.4718C10.7691 78.8802 6.98977 73.3586 4.43666 67.2483C1.88355 61.138 0.610939 54.569 0.697496 47.9473C0.784054 41.3257 2.22794 34.7922 4.9399 28.7507C7.65185 22.7093 11.5742 17.2883 16.4645 12.823C21.3548 8.35769 27.109 4.94294 33.3715 2.78988C39.6339 0.636824 46.2714 -0.208796 52.8737 0.30533C59.5136 -0.193956 66.1851 0.685248 72.4691 2.88772C78.753 5.09019 84.5136 8.56834 89.389 13.1037C94.2644 17.639 98.1492 23.1336 100.799 29.2421C103.45 35.3507 104.808 41.9414 104.789 48.6001ZM5.71576 135.126H98.6V414.579H5.71576V135.126ZM433.716 254.284V414.579H340.832V265.105C340.832 227.505 327.4 201.863 293.674 201.863C283.214 201.958 273.037 205.269 264.525 211.348C256.013 217.427 249.578 225.979 246.095 235.842C243.715 243.147 242.674 250.82 243.021 258.495V414.621H150.053C150.053 414.621 151.316 161.274 150.053 135.084H243.105V174.663L242.432 175.632H243.063V174.579C251.476 159.974 263.73 147.954 278.495 139.826C293.26 131.697 309.971 127.771 326.81 128.474C387.905 128.474 433.716 168.432 433.716 254.284Z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
