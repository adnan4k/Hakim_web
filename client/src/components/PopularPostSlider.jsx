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
        "We love useful stuff, and wefullovefulluality wrfullingfullthat's whfullweffulllendfullut an editorial email newslet .........................",
      image: "/images/image1.png",
    },
    {
      title: "Surguery in addis abeba",
      description:
        "We love useful stuff, and wefullovefulluality wrfullingfullthat's whfullweffulllendfullut an editorial email newslet .........................",
      image: "/images/image1.png",
    },
    {
      title: "Surguery in addis abeba",
      description:
        "We love useful stuff, and wefullovefulluality wrfullingfullthat's whfullweffulllendfullut an editorial email newslet .........................",
      image: "/images/image3.png",
    },
    {
      title: "Surguery in addis abeba",
      description:
        "We love useful stuff, and wefullovefulluality wrfullingfullthat's whfullweffulllendfullut an editorial email newslet .........................",
      image: "/images/image2.png",
    },
  ];
  const settings = {
    dots: true,
    fade: false,
    autoplay: true,
    infinite: true,
    speed: 700,
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
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[url('/images/post-center.png')] bg-left-top bg-no-repeat flex justify-center items-center mx-auto max-w-[97%] mb-20">
    <div className="bg-[url('/images/realpp.png')] rounded-3xl bg-center bg-no-repeat w-[100%] mt-3 my-3 h-screen max-h-[360px] flex flex-col justify-end items-center">
      <h2 className="text-3xl text-white font-bold align-bottom mb-4">
        Lives of Surgeons
      </h2>
    </div>
    <div className="flex flex-col">
      <div className="lastcont flex">
        <div className="bg-[url('/images/p3.png')] rounded-3xl bg-center bg-no-repeat w-[260px] h-[180px] m-3 flex flex-col justify-end items-center">
          <h2 className="text-3xl text-white font-bold align-bottom mb-4">
            Lives of Surgeons
          </h2>
        </div>
        <div className="bg-[url('/images/p1.png')] rounded-3xl bg-center bg-no-repeat w-[260px] h-[180px] m-3 flex flex-col justify-end items-center">
          <h2 className="text-3xl text-white font-bold align-bottom mb-4">
            Lives of Surgeons
          </h2>
        </div>
      </div>
      <div className="bg-[url('/images/pp3.png')] rounded-3xl bg-center bg-no-repeat w-[550px] h-[170px] ml-3 flex flex-col justify-end items-center">
        <h2 className="text-3xl text-white font-bold align-bottom mb-4">
          Lives of Surgeons
        </h2>
      </div>
    </div>
  </div>
  );
}
export default PopularPostSlider;
