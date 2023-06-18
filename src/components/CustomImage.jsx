import React from "react";

const CustomImage = ({ src, pt }) => {
  return (
    <div className="custom-image" style={{ paddingTop: pt }}>
      <img src={src} alt="" />
    </div>
  );
};

export default CustomImage;
