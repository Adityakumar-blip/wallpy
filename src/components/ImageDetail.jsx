import { useRouter } from "next/router";
import React from "react";

const ImageDetail = () => {
  const router = useRouter();

  const { url } = router.query;
  return (
    <div className="p-4">
      <img src={url} className="h-full object-cover rounded-lg" />
    </div>
  );
};

export default ImageDetail;
