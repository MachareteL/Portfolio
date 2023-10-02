import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import io from "../assets/controlIO.png"
import SwipperCard from "./SwipperCard"

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
        <SwipperCard imgsrc={io} />
      </SwiperSlide>
      <SwiperSlide className="ml-10 w-3/4 md:ml-36">
        <SwipperCard imgsrc={io} />
      </SwiperSlide>
      <SwiperSlide className="ml-10 w-3/4 md:ml-36">
        <SwipperCard imgsrc={io} />
      </SwiperSlide>
      <SwiperSlide className="ml-10 w-3/4 md:ml-36">
        <SwipperCard imgsrc={io} />
      </SwiperSlide>
      <SwiperSlide className="ml-10 w-3/4 md:ml-36">
        <SwipperCard imgsrc={io} />
      </SwiperSlide>
      <SwiperSlide className="ml-10 w-3/4 md:ml-36">
        <SwipperCard imgsrc={io} />
      </SwiperSlide>
    </Swiper>
  )
}
