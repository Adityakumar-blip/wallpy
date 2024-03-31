import React, { useContext } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "@/utils/firebase";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { createUser } from "@/Apis/firebse-apis";

const Signup = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const auth = getAuth(app);
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const signup = (values) => {
    createUserWithEmailAndPassword(auth, values?.email, values?.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up:", user);
        localStorage.setItem("token", user?.accessToken);
        localStorage.setItem("userId", user?.uid);
        createUser({ ...values, id: user?.uid });
        router.push("/homepage");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error signing up:", errorCode, errorMessage);
      });
  };

  const formik = useFormik({
    initialValues: { userName: "", email: "", password: "" },
    onSubmit: (values) => {
      console.log("values", values);
      signup(values);
    },
  });

  return (
    <div className=" bg-black-100 flex flex-col justify-center items-center h-screen w-full ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* <div className="relative">
          <img src="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjaSUyMGZpfGVufDB8fDB8fHww" />
        </div> */}
        <div className=" ">
          <h2 className="text-center text-[4rem] font-extrabold text-[#1D267D]">
            Wallpy
          </h2>
        </div>
      </div>

      <div className="mt-12 w-full px-4 sm:mx-auto sm:w-full sm:max-w-md m-4">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div>
            <div className="mt-1">
              <input
                id="userName"
                name="userName"
                type="text"
                placeholder="Enter your username"
                required
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="appearance-none h-[3rem] block w-full px-3 py-2 text-black border rounded-md shadow-sm placeholder-black-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="appearance-none h-[3rem] block w-full px-3 py-2 text-black border rounded-md shadow-sm placeholder-black-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
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
                required
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="appearance-none h-[3rem] text-black block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full mt-[5rem] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Signup
            </button>
          </div>
        </form>
        <div
          className="mt-4 text-center"
          onClick={() => router.push("/auth/login")}
        >
          <p>Already registered?Login</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
