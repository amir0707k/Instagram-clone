import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import BottomList from "./BottomList";

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const {setToken} = useContext(UserContext);

  let { email, password } = userInput;
  function updateInput(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }
  const navigate = useNavigate();
  async function implementSubmit(e) {
    e.preventDefault();


    
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    } else {
      try {
        const response = await axios.post(
          "https://instagram-express-app.vercel.app/api/auth/login",
          { email, password }
        );
        setToken(response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
        console.log(response.data);
        setUserInput({
          email: "",
          password: "",
        });
        navigate("/dashboard");
        alert("User Signed in Successfully");
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  }

  //instagram-express—app.vercel.app/api/auth/signup
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] m-4 justify-around items-center">
      <div>
        <form
          onSubmit={implementSubmit}
          className="border-[1px] p-5 flex flex-col rounded-sm border-gray-300 items-center px-12 min-w-[350px] max-w-[350px]"
        >
          <h1 className="my-12">
            <i
              data-visualcompletion="css-img"
              aria-label="Instagram"
              role="img"
              style={{
                backgroundImage:
                  'url("https://static.cdninstagram.com/rsrc.php/v3/ya/r/dAoPDEPVlH5.png")',
                backgroundPosition: "0px -52px",
                backgroundSize: "auto",
                width: "175px",
                height: "51px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
          </h1>
          <input
            placeholder="Enter your email"
            type="email"
            onChange={updateInput}
            name="email"
            className="w-full border-[1px] rounded-sm border-gray-300 p-2 placeholder:text-gray-500 placeholder:text-sm focus:border-gray-400 focus:border-[1px] outline-none"
          ></input>
          <input
            placeholder="Password"
            type="password"
            onChange={updateInput}
            name="password"
            className="w-full border-[1px] mt-2 rounded-sm  border-gray-300 p-2 placeholder:text-gray-500  placeholder:text-sm outline-none focus:border-gray-400"
          ></input>
          <button className="bg-blue-400 w-full mt-4 rounded-md py-1 font-semibold text-slate-100 text-sm">
            Log in
          </button>
          <div className="flex mt-5 bg-transparent items-center w-full">
            <hr className="w-2/4 h-[1.5px] bg-gray-300" />
            <p className="px-4">OR</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-300" />
          </div>

          <div className="flex items-center mt-5">
            <FaFacebookSquare className="text-blue-900 text-2xl" />
            <p className="text-blue-900 text-sm font-semibold ml-2 cursor-pointer">
              Log in with Facebook
            </p>
          </div>
          <p className="text-xs mt-4 text-slate-600  cursor-pointer">
            Forgot password?
          </p>
        </form>
        <div className="p-4 border-[1px] border-gray-300 mt-3 flex justify-center">
          <p>
            Don't have an account?
            <span
              className="text-sky-500 font-semibold text-sm cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              Sign up
            </span>
          </p>
        </div>
        <div className="mt-4">
          <p className="flex justify-center mb-4">Get the app.</p>
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="h-10 mr-2"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Get_it_from_Microsoft_Badge.svg"
              className="h-10"
            />
          </div>
        </div>
      </div>
      <BottomList />
    </div>
  );
};

export default Login;
