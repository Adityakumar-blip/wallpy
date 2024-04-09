"use client";
import { addCollects } from "@/Apis/firebse-apis";
import app from "@/utils/firebase";
import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";

const ProgressiveImg = ({ placeholderSrc, liked, src, ...props }) => {
  const auth = getAuth(app);
  const user = auth.currentUser;
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [showMenu, setShowMenu] = useState(false);
  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  const handleLongPress = (event) => {
    event.preventDefault();
    setShowMenu(true);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className="rounded-lg overflow-hidden shadow-lg mb-4 relative">
      <img
        {...{ src: imgSrc, ...props }}
        alt={props.alt || ""}
        className={`image ${customClass}`}
        onClick={props.onClick}
      />
      {showMenu && (
        <div
          className="absolute top-0 right-0 p-2 bg-white border border-gray-200 rounded shadow"
          onContextMenu={handleLongPress}
        >
          <button onClick={hideMenu}>Close Menu</button>
          <button>Option 1</button>
          <button>Option 2</button>
          <button>Option 3</button>
        </div>
      )}
      <div className="absolute top-0 right-0 p-2">
        {liked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="red"
            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600"
          >
            <path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" />
          </svg>
        ) : (
          <div onClick={() => addCollects(user.uid, src)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#9CA3AF"
            >
              <path d="M17.867 3.493l4.133 3.444v5.127l-10 8.333-10-8.334v-5.126l4.133-3.444 5.867 3.911 5.867-3.911zm.133-2.493l-6 4-6-4-6 5v7l12 10 12-10v-7l-6-5z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProgressiveImg;
