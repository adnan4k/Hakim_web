import React from "react";

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="z-10">
        <h2 className="mt-10 max-w-[90%] text-[#00A3FF] text-center font-bold text-3xl sm:text-6xl">
          Welcome to MedConnect: Your Gateway to Expertise, Insights, and Care!
        </h2>
      </div>
      <div>
        <div className="">
          <div className="sm:bg-[url('/images/hero-bg.jpg')] -mt-8 sm:-mt-24 z-0 sm:bg-cover sm:h-screen bg-center">
            <img
              src="/images/hakim-hero.png"
              className="object-cover"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;