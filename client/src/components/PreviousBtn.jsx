import React from "react";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <props.icon style={{  color: "white",paddingLeft:"5px",backgroundColor:"#41BAFF",borderRadius:"50%", fontSize: "30px" }} />
    </div>
  );
};

export default PreviousBtn;
