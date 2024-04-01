import { useRouter } from "next/router";
import React from "react";

const CategorySlide = ({ categories }) => {
  const router = useRouter();

  const handleCategorySelection = (category) => {
    router.push({
      pathname: "/photosearch",
      query: { id: category },
    });
  };
  return (
    <div className="category-scroll mt-2">
      <div className="flex gap-4 justify-start items-center overflow-auto ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center  rounded-lg"
            onClick={() => handleCategorySelection(category.name)}
          >
            <img
              src={category.img}
              alt={category.name}
              className="mb-2 min-w-[100px] h-[100px] rounded-lg"
            />
            <div className="text-center">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlide;
