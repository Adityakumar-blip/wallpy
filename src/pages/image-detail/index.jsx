import { imgCollection } from "@/Apis/homepage";
import ImageDetail from "@/components/ImageDetail";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const Index = () => {
  const router = useRouter();
  const [imgData] = useRecoilState(imgCollection);

  console.log("Image detaail", imgData);

  return (
    <div className="flex items-center justify-center">
      {imgData ? (
        <ImageDetail imgData={imgData} />
      ) : (
        <p>No image data available</p>
      )}
    </div>
  );
};

export default Index;
