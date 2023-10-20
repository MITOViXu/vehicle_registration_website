import React from "react";
import Slider from "react-slick";

import "./SliderAnimate.css";

import ava01 from "../../assets/slider-img/slider-1.jpg";
import ava02 from "../../assets/slider-img/slider-2.jpg";
import ava03 from "../../assets/slider-img/slider-3.jpg";
import ava04 from "../../assets/slider-img/slider-4.jpg";

const SliderAnimate = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{marginLeft:"15%", marginRight:"15%"}}>
      <Slider {...settings}>
        <div className="testimonial py-4 px-3">
          <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            magni explicabo molestias recusandae repudiandae, dolor, sapiente
            placeat ab, animi eum minima nulla facere aliquam aut vitae quo
            pariatur voluptate odit?
          </p>

          <div className="mt-3 d-flex align-items-center gap-4">
            <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

            <div>
              <h6 className="mb-0 mt-3">Jhon Doe</h6>
              <p className="section__description">Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial py-4 px-3">
          <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            magni explicabo molestias recusandae repudiandae, dolor, sapiente
            placeat ab, animi eum minima nulla facere aliquam aut vitae quo
            pariatur voluptate odit?
          </p>

          <div className="mt-3 d-flex align-items-center gap-4">
            <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

            <div>
              <h6 className="mb-0 mt-3">Jhon Doe</h6>
              <p className="section__description">Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial py-4 px-3">
          <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            magni explicabo molestias recusandae repudiandae, dolor, sapiente
            placeat ab, animi eum minima nulla facere aliquam aut vitae quo
            pariatur voluptate odit?
          </p>

          <div className="mt-3 d-flex align-items-center gap-4">
            <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

            <div>
              <h6 className="mb-0 mt-3">Jhon Doe</h6>
              <p className="section__description">Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial py-4 px-3">
          <p className="section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            magni explicabo molestias recusandae repudiandae, dolor, sapiente
            placeat ab, animi eum minima nulla facere aliquam aut vitae quo
            pariatur voluptate odit?
          </p>

          <div className="mt-3 d-flex align-items-center gap-4">
            <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

            <div>
              <h6 className="mb-0 mt-3">Jhon Doe</h6>
              <p className="section__description">Customer</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderAnimate;
