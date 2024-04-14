import { getUserUploads } from "@/Apis/firebse-apis";
import { imgCollection } from "@/Apis/homepage";
import ProgressiveImg from "@/components/ProgressiveImage";
import { handleImageClick } from "@/utils/functions";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import EmptyBox from "../../assets/empty-box.png";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
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
      {userUploads.length > 0 ? (
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
      ) : (
        <div className="flex items-center justify-center flex-col h-[65vh]">
          <img src={EmptyBox.src} height={100} width={100} />
          <p>No Uploads available</p>
          <div
            className="px-4 py-[12px] rounded-lg border border-indigo-500 mt-6"
            onClick={() => router.push("/upload")}
          >
            <p>Upload your creativity</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
