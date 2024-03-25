import React from "react";

const LogoutButton = () => {
  return (
    <div>
      <div class="fixed z-50 w-[200px] h-16 max-w-sm -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 margin">
        <div class="flex items-center justify-center h-full">
          <p className="text-xl font-bold">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default LogoutButton;
