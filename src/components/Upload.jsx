import React, { useState } from "react";
import { BsImage } from "react-icons/bs";
import firebase from "firebase/app";
import "firebase/storage";
import { uploadFileToStorage } from "@/Apis/firebse-apis";
import { useRouter } from "next/router";
import { roundOff } from "@/utils/functions";

const Upload = () => {
  const router = useRouter();
  const [uploadPercents, setUploadPercent] = useState();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      // Read the file as a data URL
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (event) {
        const img = new Image();
        img.src = event.target.result;

        img.onload = function () {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const maxWidth = 200;
          const maxHeight = 200;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          ctx.drawImage(img, 0, 0, width, height);

          const thumbnailDataURL = canvas.toDataURL("image/jpeg");

          const blob = dataURLtoBlob(thumbnailDataURL);

          uploadFileToStorage(file, (progress) => {
            setUploadPercent(progress);
          })
            .then((downloadURL) => {
              uploadFileToStorage(blob, (progress) => {}).then(
                (thumbnailDownloadURL) => {
                  router.push({
                    pathname: "/upload-detail",
                    query: {
                      url: downloadURL,
                      thumbnailUrl: thumbnailDownloadURL,
                    },
                  });
                }
              );
            })
            .catch((error) => {
              console.log("Upload error:", error);
            });
        };
      };
    }
  };

  function dataURLtoBlob(dataURL) {
    const parts = dataURL.split(";base64,");
    const contentType = parts[0].split(":")[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

  return (
    <div className="h-[200px] w-[200px] border-4 rounded-full">
      <label
        htmlFor="drop-file"
        className="flex flex-col items-center justify-center w-full h-full font-semibold capitalize cursor-pointer gap-y-4"
      >
        {uploadPercents ? (
          <div>
            <p className="font-bold text-2xl">{roundOff(uploadPercents)}%</p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <BsImage className="text-2xl" />
            <h4>add images</h4>
            <input
              type="file"
              name="gallery-img"
              id="drop-file"
              hidden
              onChange={handleImageUpload}
            />
          </div>
        )}
      </label>
    </div>
  );
};

export default Upload;
