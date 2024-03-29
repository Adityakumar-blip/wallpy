import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { AllImages } from "@/Apis/homepage";
import ProgressiveImg from "@/components/ProgressiveImage";
import axios from "axios";
import { handleImageClick } from "@/utils/functions";
import { useRouter } from "next/router";

const HomePage = () => {
  //   const images = useRecoilValue(AllImages);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/?client_id=HsYF8p3ImJCStWz7AQwZiixIzGUqmhJhsABYXn5JSdQ"
        );
        setImages(response.data);
      } catch (error) {
        console.log("Error in data", error);
      }
    };

    fetchDataFromAPI();
  }, []);

  const router = useRouter();

  return (
    <div>
      <p className="text-xl pl-4 font-bold ">Popular Today</p>
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <div
            className="flex flex-wrap justify-center"
            onClick={() =>
              handleImageClick({ router: router, data: image?.urls?.regular })
            }
          >
            <ProgressiveImg
              src={image?.urls?.regular}
              placeholderSrc={image?.urls?.thumb}
              key={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
