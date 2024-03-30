import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3 className="bg-green-500">1</h3>
        </div>
        <div>
          <h3 className="bg-green-500">2</h3>
        </div>
        <div>
          <h3 className="bg-green-500">3</h3>
        </div>
        <div>
          <h3 className="bg-green-500">4</h3>
        </div>
        <div>
          <h3 className="bg-green-500">5</h3>
        </div>
        <div>
          <h3 className="bg-green-500">6</h3>
        </div>
        <div>
          <h3 className="bg-green-500">7</h3>
        </div>
        <div>
          <h3 className="bg-green-500">8</h3>
        </div>
        <div>
          <h3 className="bg-green-500">9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
