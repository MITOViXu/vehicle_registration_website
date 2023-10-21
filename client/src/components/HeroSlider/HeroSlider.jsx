import React from "react";
import Slider from "react-slick";
import { Image } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/slider-img/slider-1.jpg";
import slide2 from "../../assets/slider-img/slider-2.jpg";
import slide3 from "../../assets/slider-img/slider-3.jpg";
import "./HeroSlider.css";
import "./HeroSlider";
import { Container } from "reactstrap";


const images = [slide1, slide2, slide3];
const HeroSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,

    speed: 400,
    slidesToShow: 1,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="hero-slider item1"></div>
      <div className="hero-slider item2"></div>
      <div className="hero-slider item3"></div>
      <div className="hero-slider item4"></div>
      <div className="hero-slider item5"></div>
      <div className="hero-slider item6"></div>
      <div className="hero-slider item7"></div>
    </Slider>
  );
};

export default HeroSlider;
