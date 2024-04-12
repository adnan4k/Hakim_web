import React from "react";
import MultipleItems from "./PostSlider";
import { Link } from "react-router-dom";
function LatestPost() {
  return (
    <div>
      <div className="flex my-5 ">
        <div>
          <h3 className="font-extrabold text-4xl ml-10">Latest Post</h3>
        </div>
        <div className="flex-grow"></div>
        <div>
          <Link to='/view-all' >
            <h2 className="text-[#17ABFF] font-bold text-2xl mr-10">View All</h2>
          </Link>
        </div>
      </div>

      <div className="cards">
        <MultipleItems/>
      </div>
    </div>
  );
}

export default LatestPost;
