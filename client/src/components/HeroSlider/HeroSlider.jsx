import React from "react";
import Slider from 'react-slick';
import { Image } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from "../../assets/slider-img/slider-1.jpg";
import slide2 from "../../assets/slider-img/slider-2.jpg";
import slide3 from "../../assets/slider-img/slider-3.jpg";

import "./HeroSlider";
const images = [slide1, slide2, slide3];
const HeroSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map((image, i) => {
        return <Image className="image_slide"  src={image} alt="" />
      })}
    </Slider>
  );
};

export default HeroSlider;
