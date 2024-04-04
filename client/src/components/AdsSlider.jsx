
import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreviousBtn from "./PreviousBtn";
import NextBtn from "./NextBtn";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";

function AdsSlider() {
  // const [data,setData] = useState([]);
  // useEffect(() => {
  //   // Function to fetch data from the API
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://groom-health-care.onrender.com/AdsSlider/get-AdsSlider');
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
      title:"Surguery in addis abeba",
      description:"We love useful stuff, and we love quality writing, that's why we send out an editorial email newslet .........................",
      image:"/images/ads.png"

    },
    {
      title:"Surguery in addis abeba",
      description:"We love useful stuff, and we love quality writing, that's why we send out an editorial email newslet .........................",
      image:"/images/ads.png"

    },
    {
      title:"Surguery in addis abeba",
      description:"We love useful stuff, and we love quality writing, that's why we send out an editorial email newslet .........................",
      image:"/images/ads.png"

    },
    {
      title:"Surguery in addis abeba",
      description:"We love useful stuff, and we love quality writing, that's why we send out an editorial email newslet .........................",
      image:"/images/ads.png"

    },
  ]
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className="testimonial flex flex-row items-center justify-center  mb-[3%] ">
      <div className="w-full  py-10  ">
        <Slider {...settings}>{data.map((item) => (
          <div className="p-4 w grid grid-cols-1 sm:grid sm:grid-cols-3 mx-auto">
            <div className=" bg-white flex flex-col justify-center items-center  border border-[#AAAAAAAA] rounded-2xl shadow-lg">
            <div className="flex  flex-col w-full">
            <img src={item.image} alt={item.title} className=" w-full rounded-2xl " />
            <h2 className="p-3 text-xl font-semibold ">{item.title}</h2>
            </div>
            <p className=" p-2 my-5">{item.description}</p>
             <button className="px-20 py-1 bg-[#41BAFF] text-white text-[16px]  text-nowrap rounded-3xl">Read More</button>
            </div>
          </div>
      ))}</Slider>
      </div>
    </div>
  );
}
export default AdsSlider;
