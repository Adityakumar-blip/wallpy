import { useRouter } from "next/router";
import React, { useState } from "react";

const BottomSheet = ({ isOpen, setIsopen }) => {
  const router = useRouter();

  const { data } = router.query;

  const imgData = JSON.parse(data ?? "");

  const download = () => {
    var element = document.createElement("a");
    var file = new Blob([imgData?.urls.regular], { type: "image/*" });
    element.href = URL.createObjectURL(file);
    element.download = "image.jpg";
    element.click();
  };

  return (
    <div>
      {isOpen && (
        <div
          id="drawer-bottom-example"
          className="fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none"
          tabIndex="-1"
          aria-labelledby="drawer-bottom-label"
        >
          <h5
            id="drawer-bottom-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            <svg
              className="w-4 h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            Wallpaper info
          </h5>
          <button
            type="button"
            onClick={() => setIsopen(false)}
            aria-controls="drawer-bottom-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="flex items-center gap-4">
            <img
              src={imgData?.user?.profile_image?.medium}
              height={50}
              width={50}
              className="rounded-full"
            />
            <p className="font-semibold">{imgData?.user.name}</p>
          </div>
          <p className="max-w-lg mb-6 text-md mt-2 text-gray-500 dark:text-gray-400 font-semibold">
            {imgData?.alt_description}
          </p>
        </div>
      )}
    </div>
  );
};

export default BottomSheet;
