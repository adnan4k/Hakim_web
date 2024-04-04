import React from "react";
import MultipleItems from "./PostSlider";
function PopularPost() {
  return (
    <div>
      <div className="flex my-5">
        <div>
          <h3 className="font-extrabold text-4xl ml-10">Popular Post</h3>
        </div>
        <div className="flex-grow"></div>
        <div>
          <a href="/">
            <h2 className="text-[#17ABFF] font-bold text-2xl mr-10">View All</h2>
          </a>
        </div>
      </div>

      <div className="cards">
        <MultipleItems />
      </div>
    </div>
  );
}

export default PopularPost;
