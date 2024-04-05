import React from "react";

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="">
        <h2 className="mt-5 max-w-[90%] text-[#00A3FF] text-center font-bold text-6xl">
          Welcome to MedConnect: Your Gateway to Expertise, Insights, and Care!
        </h2>
      </div>
      <div className="bg-[url('/images/hero-bg.jpg')] bg-cover h-screen bg-center">
        <img src="/images/hakim-hero.png" className="object-cover" alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
