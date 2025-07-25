/* eslint-disable jsx-a11y/alt-text */

import "./slider.css";

import { useState } from "react";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import SliderCard from "./sliderCard";

//////////////////////////// copmponent
export let SliderItem = ({ data, title }) => {
  // STATE
  let [swiperRef, setSwiperRef] = useState(null);

  // MEDIA SWIPER
  let mediaSwiper = {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  };

  //  EVENT HANDLE //
  const handleNext = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  // ====  EVENT HANDLE ==== //

  return (
    <>
      {/* TITLE */}
      <h2 className="title"> {title}</h2>
      {/* ==== TITLE ==== */}

      {/* START SLIDER */}
      <div className="container">
        <div className="sliders">
          {/* Btn Prev */}
          <button
            onClick={handlePrev}
            className="bi bi-chevron-right chev-right"
          ></button>
          {/* ====  Btn Prev ====*/}

          <div className="cardsSlider">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={mediaSwiper}
              onSwiper={setSwiperRef}
            >
              {data.map((i, index) => (
                <SwiperSlide key={i.id}>
                  <SliderCard data={i} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Btn Next */}
          <button
            onClick={handleNext}
            className="bi bi-chevron-left chev-left"
          ></button>
          {/* ==== Btn Next ==== */}
        </div>
      </div>
      {/* ==== END SLIDER ==== */}
    </>
  );
};
