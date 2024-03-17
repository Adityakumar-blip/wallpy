"use client";
import React, { useEffect, useState } from "react";

const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);
  return (
    // <div className="mt-[70px]">
    <div className="rounded-lg overflow-hidden shadow-lg m-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 ">
      <img
        {...{ src: imgSrc, ...props }}
        alt={props.alt || ""}
        className={`image ${customClass}`}
      />
    </div>
    // </div>
  );
};
export default ProgressiveImg;
