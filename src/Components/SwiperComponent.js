import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../tailwind.css";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import img1 from "../assets/images/imagen_slider.jpeg";
import img2 from "../assets/images/imagen_slider2.jpeg";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" className="relative"></img>{" "}
          <h1 className="absolute text-white lg:text-6xl md:text-4xl sm:text-2xl">
            NEW <b>INNOVATION</b> IDEAS{" "}
            <p className="lg:text-md md:text-sm sm:text-tiny">
              Vitae congue mauris rhoncus aenean vel elit scelerisque. Consequat
              nisl vel pretium <br /> lectus quam id leo in vitae. Dictum sit
              amet justo donec enim diam vulputate. Sociis <br /> natoque
              penatibus et magnis dis parturient.
            </p>{" "}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="relative"></img>
          <h1 className="absolute text-white lg:text-6xl md:text-4xl sm:text-2xl">
            HOW TO BUILD <b>HOMES FOR THE FUTURE?</b>{" "}
            <p className="lg:text-md md:text-sm sm:text-tiny">
              Vitae congue mauris rhoncus aenean vel elit scelerisque. Consequat
              nisl vel pretium lectus <br /> quam id leo in vitae. Dictum sit
              amet justo donec enim diam vulputate. Sociis natoque <br />{" "}
              penatibus et magnis dis parturient.
            </p>{" "}
          </h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
