import { useRouter } from "next/router";
import React from "react";

const ImageDetail = () => {
  const router = useRouter();

  const { data } = router.query;

  const imgData = JSON.parse(data ?? "");
  return (
    <div className="p-4">
      <img
        src={imgData?.urls?.regular}
        className="h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default ImageDetail;
