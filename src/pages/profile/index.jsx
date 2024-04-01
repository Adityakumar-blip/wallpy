import { getUserById } from "@/Apis/firebse-apis";
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

  console.log("User", user);

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserById(user?.uid);
      console.log("Logged in user", userData);
      setLoggedUser(userData);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-row items-center justify-between">
        <div onClick={() => handleBack()}>
          <FaArrowLeft size={20} />
        </div>

        <p className="text-2xl font-semibold">My Profile</p>
        <div></div>
      </div>

      <div className="flex gap-4 mt-4 bg-white rounded-lg p-4">
        <div className="rounded-full h-[100px] w-[100px]">
          <img
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            className="h-full w-full rounded-full shadow-lg"
          />
        </div>
        <div className="flex flex-col text-black">
          <p className="text-2xl font-bold">{loggedUser?.userName}</p>
          <p className="text-xl text-gray-500 font-semibold">
            {loggedUser?.email}
          </p>
          <p className="text-lg font-semibold mt-2 underline underline-offset-1">
            Edit Profile
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <p className="text-2xl text-gray-400 font-bold">Settings</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between border border-cyan-50 p-4 rounded-lg">
            <p className="text-xl font-semibold">My Uploads</p>
            <div>
              <IoIosArrowForward size={20} />
            </div>
          </div>
          <div className="flex items-center justify-between border border-cyan-50 p-4 rounded-lg">
            <p className="text-xl font-semibold">Collects</p>
            <div>
              <IoIosArrowForward size={20} />
            </div>
          </div>
          <div className="flex items-center justify-between border border-cyan-50 p-4 rounded-lg">
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
