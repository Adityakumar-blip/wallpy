import ProgressiveImg from "@/components/ProgressiveImage";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      setLoading(true);
      try {
        // const deviceType = detectDeviceType();
        const response = await axios.get(
          `https://api.unsplash.com/collections?client_id=HsYF8p3ImJCStWz7AQwZiixIzGUqmhJhsABYXn5JSdQ`
        );
        console.log("collections", response);
        setImages(response.data);
      } catch (error) {
        console.log("Error in data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromAPI();
  }, []);
  return (
    <div className="flex items-center ">
      {/* <p className="text-2xl font-bold">Collections Coming Soon</p> */}
      <div className="columns-2 sm:columns-2 lg:columns-4 px-4 pt-[65px]">
        {images.map((image, index) => (
          <ProgressiveImg
            src={image?.cover_photo?.urls?.regular}
            placeholderSrc={image?.cover_photo?.urls?.thumb}
            key={index}
            onClick={() => {
              router.push({
                pathname: "/collection-detail",
                query: { id: image.id },
              });
            }}
            title={image?.title}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
