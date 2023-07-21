import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '@mui/material';

const SliderComponent = ({children}) => {
  const sliderRef = useRef(null);
  const [sliderHeight, setSliderHeight] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

 
  const goToNext = () => {
    sliderRef.current.slickNext();
    setCurrentSlide(currentSlide + 1);
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
    setCurrentSlide(currentSlide - 1);
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    draggable: false,
    swipe: false,
    initialSlide: currentSlide,
    slidesToScroll: 1,
    onReInit: () => {
      const tallestChildHeight = Math.max(
        ...Array.from(
          sliderRef.current.innerSlider.list.querySelectorAll('.slick-slide')
        ).map((slide) => slide.offsetHeight)
      );
      setSliderHeight(tallestChildHeight);
    },
  };

  const sliderContainerStyles = {
    backgroundColor: '#fffff',
    height: sliderHeight,
    // Add other styles as needed
  };


  const renderChildrenWithProps = () => {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {goToNext})
    })
  }
  

  return (
    <>
      <Slider {...settings} ref={sliderRef}  style={sliderContainerStyles}>
        {renderChildrenWithProps()}
      </Slider>
      <Button variant="contained" onClick={goToPrev}>
        Previous
      </Button>
    </>
  );
};

export default SliderComponent;
