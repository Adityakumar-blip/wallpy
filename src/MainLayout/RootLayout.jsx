// import { useSelector } from "react-redux";
// import AuthLayout from "./AuthLayout";
// import MainLayout from "./MainLayout";
import { useEffect, useState } from "react";
import MainLayout from "./MainLayout";
import AuthLayout from "./AuthLayout";
import { useRecoilState } from "recoil";
import { userCollects } from "@/Apis/homepage";
import { getCollects } from "@/Apis/firebse-apis";
// import { CircularProgress } from "@mui/material";

const RootLayout = ({ children, router }) => {
  const isError = router.pathname.includes("/_error");
  const path = router.asPath;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      if (!token) {
        if (!path.startsWith("/auth")) {
          setLoading(true);
          router.push("/auth/login");
        }
      } else if (path === "/") {
        setLoading(true);
        router.push("/homepage");
      } else {
        if (path.startsWith("/auth")) {
          setLoading(true);
          router.push("/homepage");
        }
      }
    }

    // Simulate loading completion after a short delay (replace with your actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup function
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [path, router]);

  // if (loading) {
  //   // Render loader or loading message
  //   return (
  //     <div className="loader-item">
  //       <CircularProgress size={50} thickness={4} />
  //     </div>
  //   );
  // }

  return (
    <>
      {/* {isError ? (
        { children }
      ) : router.pathname.startsWith("/auth") ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )} */}

      {router.pathname.startsWith("/auth") ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </>
  );
};

export default RootLayout;
