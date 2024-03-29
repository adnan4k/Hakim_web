import React from "react";

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="">
        <h2 className="mt-5 text-[#00A3FF] text-center font-bold text-6xl">
          Welcome to MedConnect: Your Gateway to Expertise, Insights, and Care!
        </h2>
      </div>
      <div>
        <img src="/images/hakim-hero.png" className="object-fit" alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
