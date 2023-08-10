import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DirectionBlock: FC = () => {
  const slidesPerView = 1;
  const spaceBetween = 100;
  const elements = [
    {
      name: "text1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, reiciendis?",
      img: "bg-carousel1",
    },
    {
      name: "text2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, reiciendis?",
      img: "bg-bg",
    },
    // { text: "text2", img: "" },
    // { text: "text3", img: "" },
  ];

  return (
    <div className="mb-20 flex items-center justify-center flex-col">
      <p className="font-bold text-2xl mb-10">НАПРАВЛЕНИЯ НАШИХ ПУТЕШЕСТВИЙ</p>
      <Swiper
        className="w-carousel gray-color"
        modules={[Navigation, Pagination]}
        centeredSlides={true}
        loop
        navigation
        pagination={{ clickable: true }}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {elements.map((el, index) => {
          return (
            <SwiperSlide key={index} className="">
              <div className="h-carousel flex justify-center">
                <div
                  className={
                    "z-0 flex w-carousel-el h-carousel-el bg-cover " + el.img
                  }
                >
                  <div className="pl-5 bg-gr text-white self-end w-carousel-text bg-black bg-opacity-60 pt-2 pb-3">
                    <p className="font-bold text-lg">{el.name}</p>
                    <p className="text-sm">{el.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default observer(DirectionBlock);
