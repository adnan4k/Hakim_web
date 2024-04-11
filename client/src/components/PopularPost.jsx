import React from "react";
import MultipleItems from "./PopularPostSlider";

function PopularPost() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between my-5">
        <h3 className="font-extrabold text-4xl md:ml-10">Popular Post</h3>
        <div className="flex-grow"></div>
        <a href="/">
          <h2 className="text-[#17ABFF] font-bold text-2xl md:mr-10 mt-5 md:mt-0">
            View All
          </h2>
        </a>
      </div>

      <div className="cards">
        <MultipleItems />
      </div>
    </div>
  );
}

export default PopularPost;
