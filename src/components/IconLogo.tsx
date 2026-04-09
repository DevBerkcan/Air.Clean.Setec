import Image from "next/image"
import logoIcon from '@/assets/images/icon.png'

const IconLogo: any = () => {

  return (
    <Image className="relative mx-auto my-6 left-2" src={logoIcon} width={100} alt="AirClean Setec Logo" />
  )
}

export default IconLogo
