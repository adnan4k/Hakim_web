
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

function Testimony() {
  const [data,setData] = useState([]);
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/post/latest-post');
        console.log(response.data[0].image);
        setData(response.data); // Assuming the response data is the array of testimonies
      } catch (error) {
        console.error("Error fetching testimonies:", error);
      }
    };

    fetchData();
  }, [])

  const datas = [
    {
      title:"Surguery in addis abeba",
      description:"We love useful stuff, and we love quality writing, that's why we send out an editorial email newslet .........................",
      image:"/images/image1.png"

    },
    {
      title:"Surguery in addis abeba",
      description:"We love useful stuff, and we love quality writing, that's why we send out an editorial email newslet .........................",
      image:"/images/image1.png"

    },
    {
      title:"Surguery in addis abeba",
      description:"We love useful stuff, and we love quality writing, that's why we send out an editorial email newslet .........................",
      image:"/images/image3.png"

    },
    {
      title:"Surguery in addis abeba",
      description:"We love useful stuff, and we love quality writing, that's why we send out an editorial email newslet .........................",
      image:"/images/image2.png"

    },
  ]
  const settings = {
    dots: true,
    fade: false,
    autoplay: true,
    infinite: true,
    speed: 800,
    autoplaySpeed: 6000,
    slidesToShow: 4,
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
          slidesToShow: 5,
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
<div className="testimonial bg-[url('/images/ef2.png')] bg-no-repeat bg-left-top">
      <div className="max-w-[75%] sm:max-w-[90%]  mx-auto items-center justify-center py-10  sm:mx-14  bg-[url('/images/post-center.png')] bg-no-repeat bg-center">
        <Slider {...settings}>{data.map((item) => (
          <div key={item.id} className="p-4 w grid grid-cols-1 sm:grid sm:grid-cols-3  ">
            <div key={item.id} className="max bg-white flex flex-col justify-center items-center p-5 border border-[#AAAAAAAA] rounded-lg shadow-lg">
            <div key={item.id} className="flex flex-col">
            <img src={`http://localhost:4000/images/${item.image}`} alt={item.title} className="mx-auto w-full rounded-2xl " />
            <h2 className="text-center text-xl font-semibold ">{item.title}</h2>
            </div>
            <p className="text-center my-5">{item.content}</p>
             <button className="px-10 py-2 bg-[#41BAFF] text-white text-[16px]  text-nowrap rounded-3xl">Read More</button>
            </div>
          </div>
      ))}</Slider>
      </div>
    </div>
  );
}
export default Testimony;
