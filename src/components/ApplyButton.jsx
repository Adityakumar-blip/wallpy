import React, { useState } from "react";
import { useRouter } from "next/router";

import BottomSheet from "./BottomSheet";
import { useRecoilState } from "recoil";
import { imgCollection } from "@/Apis/homepage";

const ApplyButton = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const [imgData] = useRecoilState(imgCollection);

  const download = () => {
    if (!imgData || !imgData.urls || !imgData.urls.regular) {
      console.error("Image data is missing or incomplete.");
      return;
    }

    const imageUrl = imgData.urls.regular;

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${imgData?.alt_description}.jpg`;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };

  return (
    <>
      <BottomSheet isOpen={open} setIsopen={setOpen} />
      <div className="flex justify-center items-center h-screen">
        <div className="flex space-x-4">
          <div
            className="w-16 h-16 bg-white border border-gray-200 rounded-lg bg-black flex items-center justify-center"
            onClick={() => toggle()}
          >
            <p className="text-xl font-bold text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z" />
              </svg>
            </p>
          </div>
          <div
            className="w-16 h-16 bg-white border border-gray-200 rounded-lg bg-black flex items-center justify-center"
            onClick={() => download()}
          >
            <p className="text-xl font-bold text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-2-14h4v1h-4v-1zm0-1v-1h4v1h-4zm4 6h4l-6 6-6-6h4v-3h4v3z" />
              </svg>
            </p>
          </div>
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg bg-black flex items-center justify-center">
            <p className="text-xl font-bold text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M17.839 7.67c1.095-1.098 2.874-1.871 3.685-3.113.887-1.365.502-3.188-.863-4.082-1.363-.885-3.188-.499-4.086.865-.838 1.288-.791 3.324-1.424 4.781-.812 1.883-3.552 2.123-6.706.488-1.722 3.356-4.065 6.957-6.445 9.884l11.548 7.507c1.496-2.886 4.407-7.348 6.441-9.883-2.827-2.263-3.675-4.925-2.15-6.447zm1.752-5.545c.452.294.582.906.282 1.357-.294.461-.905.584-1.356.29-.458-.299-.585-.903-.287-1.356.292-.458.903-.589 1.361-.291zm-6.664 19.227l-8.25-5.362c.976-1.265 1.753-2.481 2.812-4.104.427-.656.933-.793 1.234-.598 1.104.717-1.507 3.625-.329 4.391 1.169.759 2.889-3.368 4.161-2.539.985.64-.79 2.698.209 3.346.465.303 1.133-.258 1.716-.631 1.006-.645 1.939.006.956 1.516-.981 1.501-1.516 2.315-2.509 3.981z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyButton;
