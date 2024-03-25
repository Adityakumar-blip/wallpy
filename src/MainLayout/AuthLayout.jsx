import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className="main-content-sec">
        <div className="inner-content-sec">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
