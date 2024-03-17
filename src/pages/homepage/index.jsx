import React from "react";
import { useRecoilValue } from "recoil";
import { AllImages } from "@/Apis/homepage";
import ProgressiveImg from "@/components/ProgressiveImage";

const HomePage = () => {
  const images = useRecoilValue(AllImages);

  return (
    <div>
      <p className="text-xl pl-4 font-bold ">Popular Today</p>
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <ProgressiveImg
            src={image?.urls?.regular}
            placeholderSrc={image?.urls?.thumb}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
