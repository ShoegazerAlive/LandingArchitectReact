import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../tailwind.css";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import cardImg from '../assets/images/portrait-657116_1280.jpeg';
import cardImg2 from '../assets/images/portrait-322470_1920.jpeg';

SwiperCore.use([Pagination, Autoplay]);

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            "delay": 4000,
            "disableOnInteraction": false}}
        className="mySwiper"
      >
        <SwiperSlide className="w-full">
              <div className="w-full h-sc_tables rounded overflow-hidden shadow-lg flex flex-col items-center justify-center xl:pt-10 lg:pt-10 md:pt-10 sm:pt-5">
                      <div className="h-20 w-24 xl:block lg:block md:hidden sm:hidden">
                          <img className="rounded-md" src={cardImg} alt=""></img>
                      </div>
                      <div className="px-6 xl:py-4 lg:py-4 md:py-4 sm:py-0 sm:w-full">
                          <p className="text-gray-700 xl:text-lg lg:text-xs md:text-tiny sm:text-xs xl:leading-normal lg:leading-normal md:leading-4 sm:leading-4 text-justify">
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                          </p>
                          <div className="font-bold xl:text-2xl lg:text-base md:text-sm sm:text-2xl mb-1">Doctor Quinn</div>
                          <div className="xl:text-xl lg:text-base md:text-sm sm:text-2xl mb-2 pb-3">Enterprise CEO</div>
                      </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-sc_tables rounded overflow-hidden shadow-lg flex flex-col items-center justify-center pt-10">
                    <div className="h-20 w-24 xl:block lg:block md:hidden sm:hidden">
                        <img className="rounded-md" src={cardImg2} alt=""></img>
                    </div>
                    <div className="px-6 py-4">
                        <p className="text-gray-700 xl:text-lg lg:text-xs md:text-tiny sm:text-xs xl:leading-normal lg:leading-normal md:leading-4 sm:leading-4 text-justify">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        </p>
                        <div className="font-bold xl:text-2xl lg:text-base md:text-sm sm:text-2xl mb-1">Doctor Quinn</div>
                        <div className="xl:text-xl lg:text-base md:text-sm sm:text-2xl mb-2 pb-3">Enterprise CEO</div>
                    </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
