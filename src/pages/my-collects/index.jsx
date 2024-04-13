import { getCollects } from "@/Apis/firebse-apis";
import { imgCollection, userCollects } from "@/Apis/homepage";
import ProgressiveImg from "@/components/ProgressiveImage";
import { handleImageClick } from "@/utils/functions";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const index = () => {
  const [collects, setCollects] = useState([]);

  console.log("liked images", collects);

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
      <div className="columns-1 text-white sm:columns-2 lg:columns-4 px-4 pt-[65px]">
        {collects?.length > 0
          ? collects?.map((image, index) => (
              <div className="rounded-lg mb-4">
                <img src={image} className="rounded-lg" />
              </div>
            ))
          : "No collects founds"}
      </div>
    </div>
  );
};

export default index;
