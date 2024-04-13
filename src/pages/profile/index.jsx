import { getUserById, getUserUploads } from "@/Apis/firebse-apis";
import app from "@/utils/firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const index = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const user = auth.currentUser;

  const [loggedUser, setLoggedUser] = useState({});

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserById(user?.uid);
      const userUploads = await getUserUploads();

      console.log("YU", userUploads);

      setLoggedUser(userData);
    };
    fetchData();
  }, []);

  const sharePWA = async () => {
    try {
      if (window.navigator.share) {
        await window.navigator.share({
          title: "Your PWA Title",
          text: "Check out this awesome PWA!",
          url: "https://wallpy-app.vercel.app/",
        });
      } else {
        const shareData = {
          title: "Your PWA Title",
          text: "Check out this awesome PWA!",
          url: "https://wallpy-app.vercel.app/",
        };

        if (window.navigator.share) {
          await window.navigator.share(shareData);
        } else {
          alert("Sharing is not supported on this browser.");
        }
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-row items-center justify-between">
        <div onClick={() => handleBack()}>
          <FaArrowLeft size={20} />
        </div>

        <p className="text-2xl font-semibold">My Profile</p>
        <div></div>
      </div>

      <div className="flex flex-col items-center gap-4 mt-4 bg-white rounded-lg p-4">
        <div className="rounded-full h-[100px] w-[100px]">
          <img
            src="https://images.unsplash.com/photo-1474447976065-67d23accb1e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            className="h-full w-full rounded-full shadow-lg object-cover"
          />
        </div>
        <div className="flex flex-col items-center text-black">
          <p className="text-xl font-bold">{loggedUser?.userName}</p>
          <p className="text-lg text-gray-500 font-semibold">
            {loggedUser?.email}
          </p>
          {/* <p className="text-md font-semibold mt-2 border p-2 rounded-lg border-indigo-500">
            Edit Profile
          </p> */}
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <p className="text-2xl text-gray-400 font-bold">Settings</p>
        <div className="flex flex-col gap-4">
          <div
            className="flex items-center justify-between border border-cyan-50 p-4 rounded-lg"
            onClick={() => router.push("/my-uploads")}
          >
            <p className="text-xl font-semibold">My Uploads</p>
            <div>
              <IoIosArrowForward size={20} />
            </div>
          </div>
          <div
            className="flex items-center justify-between border border-cyan-50 p-4 rounded-lg"
            onClick={() => router.push("/my-collects")}
          >
            <p className="text-xl font-semibold">Collects</p>
            <div>
              <IoIosArrowForward size={20} />
            </div>
          </div>
          <div
            className="flex items-center justify-between border border-cyan-50 p-4 rounded-lg"
            onClick={() => sharePWA()}
          >
            <p className="text-xl font-semibold">Invite Friends</p>
            <div>
              <IoIosArrowForward size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
