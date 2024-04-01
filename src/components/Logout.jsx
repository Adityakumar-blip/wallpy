import { logout } from "@/Apis/firebse-apis";
import { useRouter } from "next/router";
import React from "react";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };
  return (
    <div>
      <div
        onClick={handleLogout}
        className="fixed z-50 w-[200px] h-16 max-w-sm -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 margin hover:cursor-pointer"
      >
        <div class="flex items-center justify-center h-full">
          <p className="text-xl font-bold">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default LogoutButton;
