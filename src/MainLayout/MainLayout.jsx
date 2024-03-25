import { ReactNode } from "react";

import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import ApplyButton from "@/components/ApplyButton";
import LogoutButton from "@/components/Logout";

const MainLayout = ({ children }) => {
  const router = useRouter();
  const routerName = router.asPath;
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="relative top-0 z-50 px-20">
          <Navbar />
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col justify-between gap-y-10">
          <div
            style={
              routerName === "/"
                ? {}
                : {
                    // paddingLeft: "80px",
                    // paddingRight: "80px",
                    paddingTop: "75px",
                  }
            }
          >
            {children}
          </div>
          {routerName.includes("/image-detail") ? (
            <ApplyButton />
          ) : routerName === "/profile" ? (
            <LogoutButton />
          ) : (
            <BottomNav />
          )}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
