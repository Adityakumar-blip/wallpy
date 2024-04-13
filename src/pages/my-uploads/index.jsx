import { getUserUploads } from "@/Apis/firebse-apis";
import { imgCollection } from "@/Apis/homepage";
import ProgressiveImg from "@/components/ProgressiveImage";
import { handleImageClick } from "@/utils/functions";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const index = () => {
  const [userUploads, setUserUploads] = useState([]);
  const [imgData, setImgData] = useRecoilState(imgCollection);

  useEffect(() => {
    const fetchData = async () => {
      const userUploads = await getUserUploads();

      console.log("YU", userUploads);

      setUserUploads(userUploads);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="columns-1 sm:columns-2 lg:columns-4 px-4 pt-[65px]">
        {userUploads.map((image, index) => (
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

export default index;
