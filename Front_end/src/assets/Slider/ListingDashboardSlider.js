import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ListingDashboardSlider = ({ children }) => {
  const sliderRef = useRef(null);
  const [isSliderMounted, setIsSliderMounted] = useState(false);
  let intervalId = null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    draggable: true,
    swipe: true,
    slidesToScroll: 1,
  };

  const startContinuousSliding = () => {
      sliderRef.current.slickNext();
      intervalId = setInterval(() => {
        if (sliderRef?.current) {
        sliderRef.current.slickNext()}
      }, 2000);
      
  };

  const stopContinuousSliding = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    setIsSliderMounted(true);
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <>
      {isSliderMounted && (
        <div onClick={stopContinuousSliding} onMouseEnter={startContinuousSliding} onMouseLeave={stopContinuousSliding}>
          <Slider {...settings} ref={sliderRef}>
            {children}
          </Slider>
        </div>
      )}
    </>
  );
};

export default ListingDashboardSlider;
