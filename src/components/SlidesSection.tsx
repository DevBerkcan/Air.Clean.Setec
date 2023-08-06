import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import useMediaQuery from "@/hooks/useMediaQuery"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import slide1 from '@/assets/images/pictures/1.jpeg'
import slide2 from '@/assets/images/pictures/2.jpeg'
import slide3 from '@/assets/images/pictures/3.jpeg'
import slide4 from '@/assets/images/pictures/4.jpeg'
import slide5 from '@/assets/images/pictures/5.jpeg'
import slide6 from '@/assets/images/pictures/6.jpeg'

const SlidesSection: any = () => {

  const isMobile = useMediaQuery('(max-width: 768px)')

  const pictures = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
  ]

  return (
    <section id="slides">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={isMobile ? 1 : 3}
        navigation={true}
        pagination={true}
        loop={true}>
        {pictures.map((picture, index) => (
          <SwiperSlide key={index}>
            <Image src={picture} width={0} height={0} sizes="100vw" alt="Slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default SlidesSection