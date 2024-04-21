import { imgCollection } from "@/Apis/homepage";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const BottomSheet = ({ isOpen, setIsopen, filter }) => {
  const router = useRouter();

  const [imgData] = useRecoilState(imgCollection);

  const download = () => {
    var element = document.createElement("a");
    var file = new Blob([imgData?.urls.regular], { type: "image/*" });
    element.href = URL.createObjectURL(file);
    element.download = `${imgData?.user?.profile_image?.medium}.jpg`;
    element.click();
  };

  return (
    <div>
      {isOpen && (
        <div
          id="drawer-bottom-example"
          className="fixed  bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none"
          tabIndex="-1"
          aria-labelledby="drawer-bottom-label"
          style={{ zIndex: 999 }}
        >
          {filter ? (
            <div>
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
          ) : (
            <div>
              <p className="text-center text-2xl mb-4 font-semibold">
                Customize
              </p>
              <div>
                <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">
                  Desired View
                </h3>
                <ul class="grid w-full gap-6 md:grid-cols-2">
                  <li>
                    <input
                      type="radio"
                      id="hosting-small"
                      name="hosting"
                      value="hosting-small"
                      class="hidden peer"
                      required
                    />
                    <label
                      for="hosting-small"
                      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div class="block">
                        <div class="w-full text-lg font-semibold">
                          One Column
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-big"
                      name="hosting"
                      value="hosting-big"
                      class="hidden peer"
                    />
                    <label
                      for="hosting-big"
                      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div class="block">
                        <div class="w-full text-lg font-semibold">
                          Two Column
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">
                  Filter By
                </h3>
                <ul class="grid w-full gap-6 md:grid-cols-2">
                  <li>
                    <input
                      type="radio"
                      id="hosting-1"
                      name="hosting"
                      value="hosting-1"
                      class="hidden peer"
                      required
                    />
                    <label
                      for="hosting-1"
                      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div class="block">
                        <div class="w-full text-lg font-semibold">Popular</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-2"
                      name="hosting"
                      value="hosting-2"
                      class="hidden peer"
                    />
                    <label
                      for="hosting-2"
                      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div class="block">
                        <div class="w-full text-lg font-semibold">Latest</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-3"
                      name="hosting"
                      value="hosting-3"
                      class="hidden peer"
                    />
                    <label
                      for="hosting-3"
                      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div class="block">
                        <div class="w-full text-lg font-semibold">Oldest</div>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[10rem] h-[3rem] "
                >
                  Back
                </button>
                <button
                  type="button"
                  class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full h-[3rem] text-2xl"
                >
                  Apply Changes
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BottomSheet;
