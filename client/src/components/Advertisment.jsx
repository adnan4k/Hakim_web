import React from "react";
import AdsSlider from "./AdsSlider";

function Advertisment() {
  return (
    <div>
      <div class="bg-[#16ABFF] bg-cover bg-center h-s flex items-center justify-center">
        <h2 className="text-3xl text-white my-10 font-bold">Discover Latest advertisment</h2>
      </div>
      <div className="slider container">
        <AdsSlider />
      </div>
    </div>
  );
}

export default Advertisment;
