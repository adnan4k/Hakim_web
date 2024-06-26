import React from "react";
import AdsSlider from "./AdsSlider";

function Advertisment() {
  return (
    <div>
      <div className="bg-[#16ABFF] h-64">
        <div className="h-32 mt- flex items-center justify-center bg-[url('/images/ac2.png')] bg-no-repeat bg-left-top">
          <div>
            <div className="bg-[url('/images/ac.png')] bg-no-repeat bg-right">
              <h2 className="text-3xl text-white my-10 font-bold">Discover Latest advertisment</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="slider">
        <AdsSlider />
      </div>
    </div>
  );
}

export default Advertisment;