import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import useMediaQuery from "@/hooks/useMediaQuery"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import slide1 from '@/assets/images/slides/1.jpeg'
import slide2 from '@/assets/images/slides/2.jpeg'
import slide3 from '@/assets/images/slides/3.jpeg'
import slide4 from '@/assets/images/slides/4.jpeg'
import slide5 from '@/assets/images/slides/5.jpeg'
import slide6 from '@/assets/images/slides/6.jpg'
import slide7 from '@/assets/images/slides/7.jpg'
import slide8 from '@/assets/images/slides/8.jpg'
import slide9 from '@/assets/images/slides/9.jpg'
import slide10 from '@/assets/images/slides/10.jpg'

const SlidesSection: any = () => {

  const isMobile = useMediaQuery('(max-width: 768px)')

  const pictures = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
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