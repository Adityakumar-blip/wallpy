import ProgressiveImg from "@/components/ProgressiveImage";
import { handleImageClick } from "@/utils/functions";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const router = useRouter();
  const [images, setImages] = useState([]);

  const { id } = router.query;

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?page=1&orientation=portrait&per_page=20&query=${id.toLocaleLowerCase()}&client_id=HsYF8p3ImJCStWz7AQwZiixIzGUqmhJhsABYXn5JSdQ`
        );
        console.log("response", response);
        setImages(response.data);
      } catch (error) {
        console.log("Error in data", error);
      }
    };

    fetchDataFromAPI();
  }, [id]);

  console.log("images", images);
  return (
    <div>
      <div>
        <div className="flex flex-wrap justify-center">
          {images?.results?.map((image, index) => (
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
    </div>
  );
};

export default index;
