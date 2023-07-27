import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import logo from '../assets/images/logo.png'
import logoWhite from '../assets/images/logo-white.png'
import Image from 'next/image'
import useScroll from '@/hooks/useScroll'
import Link from 'next/link'

const navigation = [
  { name: 'Angebot einholen', href: '/#home' },
  { name: 'Home', href: '/#home' },
  { name: 'Über uns', href: '/#about' },
  { name: 'Leistungen', href: '/#services' },
  { name: 'Kontakt', href: '/#contact' },
]

const Header: any = ({ scrollEffect }: any) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scroll } = useScroll()

  return (
    <header className={"fixed w-full left-0 top-0 px-6 py-6 lg:px-8 z-30 duration-100 " + (scrollEffect || scroll > 40 ? 'bg-white/95 backdrop-blur-md shadow-xl shadow-black/[5%] py-4' : '')}>
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="container flex items-center">
          <div className="flex lg:flex-1">
            <Link href="/#home" className="-m-1.5 p-1.5">
              <span className="sr-only">AK</span>
              <Image src={scrollEffect || scroll > 40 ? logo : logoWhite} className={"mr-3 duration-100 w-[180px]"} alt="Air Clean" />
            </Link>
          </div>
          <div className="flex-grow lg:hidden"></div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 " + (scrollEffect || scroll > 40 ? 'text-gray-700' : 'text-white')}
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Öffne Menü</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={"text-sm font-semibold leading-6 " + (scrollEffect || scroll > 40 ? 'text-gray-900' : 'text-white')}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className={"inline-flex items-center text-sm font-semibold leading-6 " + (scrollEffect || scroll > 40 ? 'text-gray-900 stroke-black' : 'text-white stroke-white')}>
            069 - 34 86 88 61
              <svg stroke="inherit" className="inline ml-2" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="inherit">
                  <path id="Vector" d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z" stroke="inherit" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className={"fixed inset-0 z-30 overflow-y-auto bg-white px-6 py-6 lg:hidden " + (scrollEffect || scroll > 40 ? 'py-4' : '')}>
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AK</span>
              <Image src={logo} className={"duration-100 w-[180px]"} alt="Air Clean" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 inline-flex gap-2 rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10 stroke-black">
                  <svg stroke="inherit" className="inline ml-2" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="inherit">
                      <path id="Vector" d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z" stroke="inherit" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                  069 - 34 86 88 61
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header