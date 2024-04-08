import ProgressiveImg from "@/components/ProgressiveImage";
import { handleImageClick } from "@/utils/functions";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const index = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${value}&page=1&orientation=portrait&per_page=20&client_id=HsYF8p3ImJCStWz7AQwZiixIzGUqmhJhsABYXn5JSdQ`
        );
        console.log("response", response);
        setImages(response.data);
      } catch (error) {
        console.log("Error in data", error);
      } finally {
        setLoading(false);
      }
    };

    const interval = setTimeout(() => {
      fetchDataFromAPI();
    }, 1000);

    return () => clearInterval(interval);
  }, [value]);
  return (
    <div className="p-4">
      <div>
        <div className="flex items-center gap-4">
          <div onClick={() => router.back()}>
            <FaArrowLeft size={20} />
          </div>
          <p className="text-2xl">Search</p>
        </div>
      </div>
      <div className="mt-4">
        <input
          value={value}
          placeholder="Search"
          className="w-full h-[3rem] rounded-md pl-4 text-black sticky top-0 focus:outline-none"
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="overflow-y-auto max-h-[100vh]">
          <div className="flex flex-wrap justify-center h-screen items-center">
            {loading ? (
              <span className="loader" />
            ) : (
              images?.results?.map((image, index) => (
                <div
                  className="flex flex-wrap justify-center"
                  onClick={() =>
                    handleImageClick({
                      router: router,
                      data: image?.urls?.regular,
                    })
                  }
                >
                  <ProgressiveImg
                    src={image?.urls?.regular}
                    placeholderSrc={image?.urls?.thumb}
                    key={index}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;