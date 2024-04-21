import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      setLoading(true);
      try {
        // const deviceType = detectDeviceType();
        const response = await axios.get(
          `https://api.unsplash.com/collections/${id}/photos?client_id=HsYF8p3ImJCStWz7AQwZiixIzGUqmhJhsABYXn5JSdQ`
        );
        console.log("collections by id", response);
        setImages(response.data);
      } catch (error) {
        console.log("Error in data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromAPI();
  }, [id]);
  return <div>{id}</div>;
};

export default index;
