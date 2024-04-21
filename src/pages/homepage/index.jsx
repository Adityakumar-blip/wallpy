import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { AllImages, imgCollection, userCollects } from "@/Apis/homepage";
import ProgressiveImg from "@/components/ProgressiveImage";
import axios from "axios";
import { detectDeviceType, handleImageClick } from "@/utils/functions";
import { useRouter } from "next/router";
import { getAllUploads, getCollects } from "@/Apis/firebse-apis";
import filter from "../../assets/filter.png";
import BottomSheet from "@/components/BottomSheet";

const HomePage = () => {
  //   const images = useRecoilValue(AllImages);
  const [images, setImages] = useState([]);
  const [imgData, setImgData] = useRecoilState(imgCollection);
  const [collects, setCollects] = useRecoilState(userCollects);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const deviceType = detectDeviceType();
    console.log("deviceType", deviceType);
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/?page=1&order_by=popular&per_page=20&orientation=${
            deviceType === "Windows" || deviceType === "Mac"
              ? "landscape"
              : "portrait"
          }&client_id=HsYF8p3ImJCStWz7AQwZiixIzGUqmhJhsABYXn5JSdQ`
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
      <BottomSheet isOpen={open} setIsopen={setOpen} />

      <div className="flex items-center justify-between pr-4">
        <p className="text-xl pl-4 font-bold ">Popular Today</p>
        {/* <div className="flex items-center gap-2 border border-white-500 px-2">
          <div>1</div>
          <div>2</div>
        </div> */}
      </div>

      <div className="columns-2 sm:columns-2 lg:columns-4 px-4 pt-[65px]">
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
