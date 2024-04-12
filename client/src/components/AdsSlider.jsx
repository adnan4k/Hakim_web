
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
import { Link } from "react-router-dom";

function AdsSlider() {
  const [data,setData] = useState([]);
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/ads/latest-ads');
        console.log(response.data[0].image);
        setData(response.data); // Assuming the response data is the array of testimonies
      } catch (error) {
        console.error("Error fetching testimonies:", error);
      }
    };

    fetchData();
  }, [])

 
  const settings = {
    dots: true,
    fade: false,
    autoplay: false,
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

  const truncateText = (text, maxLength = 100) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '.........' : text;
  };
  return (
    <div className="slider max-w-[75%] sm:max-w-[95%] z-20 -mt-32 py-10 mx-auto flex-row items-center justify-center">
    <Slider {...settings}>
      {data.map((item,index) => (
        <div key={index} className="p-4 w grid grid-cols-1 sm:grid sm:grid-cols-3 mx-auto ">
          <div className="bg-white  flex flex-col justify-center items-center  rounded-3xl shadow-lg">
            <div className="f w-full">
              <img src={`http://localhost:4000/images/${item.image}`} alt={item.title} className="w-full rounded-2xl" />
              <h2 className="px-10 pt-3 text-xl font-semibold">{item.title}</h2>
            </div>
            <p className="px-5 my-5">{truncateText(item.content)}</p>
           <Link to='/post-detail' state={{content:item.content,image:item.image,title:item.title}} >
            <button className="px-20 py-1 mb-5 bg-[#41BAFF] text-white text-[16px] text-nowrap rounded-3xl">
              Read More
            </button>
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  </div>
    
  );
}
export default AdsSlider;
