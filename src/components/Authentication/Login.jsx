import React from "react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your login logic
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset email and password fields after submission
    setEmail("");
    setPassword("");
  };

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
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
                value={email}
                onChange={handleEmailChange}
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
                value={password}
                onChange={handlePasswordChange}
                className="appearance-none h-[3rem] text-black block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="text-right">
              <p>Forgot Password?</p>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full mt-[5rem] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p>Not registered? Create a free account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
