import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { AllImages, imgCollection, userCollects } from "@/Apis/homepage";
import ProgressiveImg from "@/components/ProgressiveImage";
import axios from "axios";
import { handleImageClick } from "@/utils/functions";
import { useRouter } from "next/router";
import { getAllUploads, getCollects } from "@/Apis/firebse-apis";

const HomePage = () => {
  //   const images = useRecoilValue(AllImages);
  const [images, setImages] = useState([]);
  const [imgData, setImgData] = useRecoilState(imgCollection);
  const [collects, setCollects] = useRecoilState(userCollects);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/?page=1&per_page=20&orientation=portrait&client_id=HsYF8p3ImJCStWz7AQwZiixIzGUqmhJhsABYXn5JSdQ"
        );

        const firebaseData = await getAllUploads();

        const mergedData = [...firebaseData, ...response.data];

        setImages(mergedData);
      } catch (error) {
        console.log("Error in data", error);
      }
    };

    fetchDataFromAPI();
  }, []);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const fetchCollects = await getCollects();
      console.log("fetchCollects", fetchCollects);
      setCollects(fetchCollects);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <p className="text-xl pl-4 font-bold ">Popular Today</p> */}
      <div className="columns-1 sm:columns-2 lg:columns-4 px-4 pt-[65px]">
        {images.map((image, index) => (
          <ProgressiveImg
            src={image?.urls?.regular}
            placeholderSrc={image?.urls?.thumb}
            key={index}
            onClick={() => {
              setImgData(image);
              handleImageClick({ router: router, data: image });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
