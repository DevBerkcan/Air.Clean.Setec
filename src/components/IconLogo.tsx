import Image from "next/image"
import logoIcon from '@/assets/images/logo-icon.png'

const IconLogo: any = () => {

  return (
    <Image className="mx-auto my-6" src={logoIcon} width={100} alt="AirClean VS" />
  )
}

export default IconLogo