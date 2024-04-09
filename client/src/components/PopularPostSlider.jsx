import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreviousBtn from "./PreviousBtn";
import NextBtn from "./NextBtn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";

function PopularPostSlider() {
  // const [data,setData] = useState([]);
  // useEffect(() => {
  //   // Function to fetch data from the API
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://groom-health-care.onrender.com/testimony/get-testimony');
  //       console.log(response.data[0].image);
  //       setData(response.data); // Assuming the response data is the array of testimonies
  //     } catch (error) {
  //       console.error("Error fetching testimonies:", error);
  //     }
  //   };

  //   fetchData();
  // }, [])

  const data = [
    {
      title: "Surguery in addis abeba",
      description:
        "We love useful stuff, and we love quality writing, that's why we send out an editorial email newslet .........................",
      image: "/images/image1.png",
    },
    {
      title: "Surguery in addis abeba",
      description:
        "We love useful stuff, and we love quality writing, that's why we send out an editorial email newslet .........................",
      image: "/images/image1.png",
    },
    {
      title: "Surguery in addis abeba",
      description:
        "We love useful stuff, and we love quality writing, that's why we send out an editorial email newslet .........................",
      image: "/images/image3.png",
    },
    {
      title: "Surguery in addis abeba",
      description:
        "We love useful stuff, and we love quality writing, that's why we send out an editorial email newslet .........................",
      image: "/images/image2.png",
    },
  ];
  const settings = {
    dots: true,
    fade: false,
    autoplay: true,
    infinite: true,
    speed: 800,
    autoplaySpeed: 6000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn icon={ArrowForwardIosIcon} />,
    prevArrow: <PreviousBtn icon={ArrowBackIos} />,
    endDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
    <div className="grid grid-cols-3 grid-rows-2 gap-2 grid-flow-dense h-full w-[80%] mx-auto">
      
  </div>
</Slider>
  );
}
export default PopularPostSlider;
