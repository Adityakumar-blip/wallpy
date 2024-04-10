import { useRouter } from "next/router";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div className="">
      <nav class="bg-black fixed w-full border-gray-200 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Wallpy
            </span>
          </a>
          {pathname !== "/upload-detail" && (
            <button onClick={() => router.push("/search")}>
              <FaSearch size={20} />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
