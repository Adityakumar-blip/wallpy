import { useRouter } from "next/router";
import React from "react";

const ImageDetail = ({ imgData }) => {
  return (
    <div className="p-4 flex items-center jusitfy-center">
      <img
        src={imgData && imgData?.urls ? imgData?.urls?.regular : imgData}
        className="h-[70vh] object-cover rounded-lg"
      />
    </div>
  );
};

export default ImageDetail;
