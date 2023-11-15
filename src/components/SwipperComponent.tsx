import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import io from "../assets/controlIO.png"
import ekballo from "../assets/ekballolp.png"
import relly from "../assets/relly.png"
import clear from "../assets/clear.png"
import etsland from "../assets/ETSLAND.png"
import SwipperCard from "./Card"

export default function SwipperComponent() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      modules={[Pagination]}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      loop={true}
      navigation={true}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 1,
        },
      }}
    >
      <SwiperSlide className="ml-10 w-3/4 md:ml-36">
        <SwipperCard imgsrc={io} />
      </SwiperSlide>
      <SwiperSlide className="ml-10 w-3/4 md:ml-36">
        <SwipperCard imgsrc={ekballo} />
      </SwiperSlide>
      <SwiperSlide className="ml-10 w-3/4 md:ml-36">
        <SwipperCard imgsrc={relly} />
      </SwiperSlide>
      <SwiperSlide className="ml-10 w-3/4 md:ml-36">
        <SwipperCard imgsrc={etsland} />
      </SwiperSlide>
      <SwiperSlide className="ml-10 w-3/4 md:ml-36">
        <SwipperCard imgsrc={clear} />
      </SwiperSlide>
    </Swiper>
  )
}
