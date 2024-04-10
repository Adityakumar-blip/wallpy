import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import Card from "./Card";
import { uploadNewImage } from "@/Apis/firebse-apis";

const UploadDetail = () => {
  const router = useRouter();
  const { url, thumbnailUrl } = router.query;

  const formik = useFormik({
    initialValues: { title: "", description: "", isCopyrightHolder: false },
    onSubmit: (values) => {
      handleImageUpload(values);
    },
  });

  const handleImageUpload = (values) => {
    try {
      const imgData = {
        urls: {
          regular: url,
          thumb: thumbnailUrl,
        },
        alt_description: values.title,
        description: values.description,
        isCopyrightHolder: values.isCopyrightHolder,
        created_at: new Date(),
      };
      console.log("heree");
      uploadNewImage(imgData).then(() => {
        router.push("/homepage");
      });
    } catch (error) {
      console.log("upload error", error);
    }
  };

  return (
    <div className="m-4  rounded-lg ">
      <Card
        url={url}
        title={formik.values.title}
        description={formik.values.description}
      />
      <div className="mt-4 flex flex-col gap-4">
        <input
          id="title"
          name="title"
          type="title"
          placeholder="Enter your title"
          autoComplete="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="appearance-none h-[3rem] block w-full px-3 py-2 text-black border rounded-md shadow-sm placeholder-black-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <input
          id="description"
          name="description"
          type="description"
          placeholder="Enter your description"
          autoComplete="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="appearance-none h-[3rem] block w-full px-3 py-2 text-black border rounded-md shadow-sm placeholder-black-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <div class="flex items-center">
          <input
            id="isCopyrightHolder"
            type="checkbox"
            name="isCopyrightHolder"
            value={formik.values.isCopyrightHolder}
            onChange={formik.handleChange}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="isCopyrightHolder"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              class="text-blue-600 dark:text-blue-500 hover:underline"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>

        <div>
          <button
            type="button"
            class="text-center mt-4 bg-white w-full h-[4rem] rounded-lg text-black text-2xl font-bold"
            onClick={() => formik.handleSubmit()}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadDetail;
