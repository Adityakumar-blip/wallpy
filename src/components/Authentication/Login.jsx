import React, { useContext, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "@/utils/firebase";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("email is required"),
    password: Yup.string().required("password is required"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("token", user.accessToken);
          localStorage.setItem("userId", user.uid);
          router.push("/homepage");
          console.log("User logged in:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error logging in:", errorCode, errorMessage);
        });
    } catch (error) {
      console.log("Error in login", error);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div className=" bg-black-100 flex flex-col justify-center items-center h-screen w-full ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" ">
          <h2 className="text-center text-[4rem] font-extrabold text-[#1D267D]">
            Wallpy
          </h2>
        </div>
      </div>

      <div className="mt-12 w-full px-4 sm:mx-auto sm:w-full sm:max-w-md m-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-6">
            <div>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="appearance-none h-[3rem] block w-full px-3 py-2 text-black border rounded-md shadow-sm placeholder-black-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>

            <div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="appearance-none h-[3rem] text-black block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="text-right">
                <p>Forgot Password?</p>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full mt-[5rem] h-[3rem] flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? <span className="loader"></span> : "Log in"}
              </button>
            </div>
          </div>
        </form>
        <div
          className="mt-4 text-center"
          onClick={() => router.push("/auth/signup")}
        >
          <p>Not registered? Create a free account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
