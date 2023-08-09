import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DirectionBlock: FC = () => {
  const slidesPerView = 1;
  const spaceBetween = 100;

  const elements = [
    { text: "text1", img: "/img/carousel1.jpg" },
    // { text: "text2", img: "" },
    // { text: "text3", img: "" },
  ];

  return (
    <div className="mb-20 flex items-center justify-center flex-col">
      <p className="font-bold text-2xl mb-10">НАПРАВЛЕНИЯ НАШИХ ПУТЕШЕСТВИЙ</p>
      <Swiper
        className="w-carousel"
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
          const imageUrl = `bg-[url(${el.img})]`;

          return (
            <SwiperSlide key={index} className="">
              <div className="h-carousel flex justify-center">
                <div className="w-carousel-el h-carousel-el">
                  <div className={" " + imageUrl}> </div>
                  dsfdsf{" "}
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
