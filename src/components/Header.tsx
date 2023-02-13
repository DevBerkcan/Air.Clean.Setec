import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/images/logo.svg'

const Header: any = () => {

  return (
    <header className="relative bg-white shadow shadow-gray-200">

      <div className="container p-6 flex justify-between items-center gap-10">

        <Link href="/">
          <Image src={logo} alt="Landing Page" height={40} />
        </Link>

        <ul className="gap-10 hidden sm:flex items-center">
          <li>
            <Link href="/">
              <span className="block text-gray-400 hover:text-gray-500 text-md font-semibold duration-75">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="block text-gray-400 hover:text-gray-500 text-md font-semibold duration-75">About</span>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <span className="block text-green-400 hover:text-green-500 text-md font-semibold duration-75">Services</span>
            </Link>
          </li>
          <Link href="/contact">
            <span className="block px-6 py-2 bg-blue-400 hover:bg-blue-500 text-white text-md font-semibold rounded-md duration-75">Contact</span>
          </Link>
        </ul>

      </div>

    </header>
  )
}

export default Header