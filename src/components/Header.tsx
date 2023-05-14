import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import logo from '../assets/images/logo.png'
import logoWhite from '../assets/images/logo-white.png'
import Image from 'next/image'
import useScroll from '@/hooks/useScroll'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Über uns', href: '#about' },
  { name: 'Leistungen', href: '#services' },
  { name: 'Kontakt', href: '#contact' },
]

const Header: any = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scroll } = useScroll()

  return (
    <header className={"fixed w-full left-0 top-0 px-6 py-6 lg:px-8 z-30 duration-100 " + (scroll > 40 ? 'bg-white/95 backdrop-blur-md shadow-xl shadow-black/[5%] py-4' : '')}>
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="container flex items-center">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AK</span>
              <Image src={scroll > 40 ? logo : logoWhite} className={"mr-3 duration-100 " + (scroll > 40 ? 'w-6' : 'w-8')} alt="AK Services" />
            </a>
          </div>
          <div className="flex-grow lg:hidden"></div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 " + (scroll > 40 ? 'text-gray-700' : 'text-white')}
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Öffne Menü</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className={"text-sm font-semibold leading-6 " + (scroll > 40 ? 'text-gray-900' : 'text-white')}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className={"text-sm font-semibold leading-6 " + (scroll > 40 ? 'text-gray-900' : 'text-white')}>
            +49 1577 4777988 <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </nav>

      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className={"fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden " + (scroll > 40 ? 'py-4' : '')}>
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AK-Gebäudereinigung</span>
              <Image src={logo} className={"duration-100 " + (scroll > 40 ? 'w-6' : 'w-8')} alt="AK Gebäudereinigung" />
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
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">
                  +123 123456789
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