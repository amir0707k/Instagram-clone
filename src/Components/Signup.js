import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import BottomList from "./BottomList";
import { FaFacebookSquare } from "react-icons/fa";

const Signup = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const {setToken} = useContext(UserContext);

  let { name, email, password, confirmPassword } = userInput;
  function updateInput(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  async function implementSubmit(e) {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all the fields");
      return;
    } else if (password !== confirmPassword) {
      alert("Password and Confirm Password should be same");
      return;
    } else {
      try {
        const response = await axios.post(
          "https://instagram-express-app.vercel.app/api/auth/signup",
          { name, email, password }
        );
        console.log(response.data);
        setToken(response.data.data.token);
        localStorage.setItem("token", response.data.data.token)
        setUserInput({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        alert("User Created Successfully");
        navigate("/dashboard")
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  }

  //instagram-express—app.vercel.app/api/auth/signup
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] justify-around items-center">
      <form
        onSubmit={implementSubmit}
        className="-mt-5 border-[1px] p-5 py-10 flex flex-col rounded-sm border-gray-300 items-center px-12 min-w-[350px] max-w-[350px]"
      >
        <h1 className="my-3">
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

        <div className="flex items-center flex-col">
          <p className="text-center text-gray-500 font-semibold">
            Sign up to see photos and videos from your friends.
          </p>

          <button className="bg-blue-400 w-full mt-4 rounded-md font-semibold text-slate-100 text-sm flex justify-center items-center py-2 hover:bg-blue-500">
            <FaFacebookSquare className="text-white text-2xl" />
            <p className="text-white text-sm font-semibold ml-2 cursor-pointer">
              Log in with Facebook
            </p>
          </button>
        </div>

        <div className="flex mt-5 bg-transparent items-center w-full mb-5">
          <hr className="w-2/4 h-[1.5px] bg-gray-300" />
          <p className="px-4">OR</p>
          <hr className="w-2/4 h-[1.5px] bg-gray-300" />
        </div>

        <input
          placeholder="Enter your name"
          type="text"
          onChange={updateInput}
          name="name"
          className="my-1 w-full border-[1px] rounded-sm border-gray-300 p-2 placeholder:text-gray-500 placeholder:text-xs focus:border-gray-400 focus:border-[1px] outline-none"
        ></input>
        <input
          placeholder="Enter your email"
          type="email"
          onChange={updateInput}
          name="email"
          className="my-1 w-full border-[1px] rounded-sm border-gray-300 p-2 placeholder:text-gray-500 placeholder:text-xs focus:border-gray-400 focus:border-[1px] outline-none"
        ></input>
        <input
          placeholder="Password"
          type="password"
          onChange={updateInput}
          name="password"
          className="my-1 w-full border-[1px] rounded-sm border-gray-300 p-2 placeholder:text-gray-500 placeholder:text-xs focus:border-gray-400 focus:border-[1px] outline-none"
        ></input>
        <input
          placeholder="Confirm Password"
          type="password"
          onChange={updateInput}
          name="confirmPassword"
          className="my- mb-2 w-full border-[1px] rounded-sm border-gray-300 p-2 placeholder:text-gray-500 placeholder:text-xs focus:border-gray-400 focus:border-[1px] outline-none"
        ></input>
        <p className="text-center text-xs text-gray-500">
          People who use our service may have uploaded your contact information
          to Instagram.{" "}
          <a href="#" className="text-blue-900">
            Learn More
          </a>
        </p>
        <p className="text-center text-xs text-gray-500">
          By signing up, you agree to our{" "}
          <a href="#" className="text-blue-900">
            Terms , Privacy Policy
          </a>{" "}
          and <a href="#" className="text-blue-900">Cookies Policy .</a>
        </p>
        <button className="bg-blue-400 w-full mt-4 rounded-md py-1 font-semibold text-slate-100 text-sm" onClick={
          () => {
            navigate("/dashboard")
          }
        }>
          Sign up
        </button>
      </form>
      <div className="p-6 border-[1px] -mt-14 border-gray-300 flex justify-center w-[350px] text-sm">
        <p>
          Have an account?
          <span
            className="text-sky-500 font-semibold text-sm cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </span>
        </p>
      </div>
      <div className="-mt-12">
        <p className="flex justify-center mb-4 text-sm">Get the app.</p>
        <div className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            className="h-10 mr-2 cursor-pointer"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Get_it_from_Microsoft_Badge.svg"
            className="h-10 cursor-pointer"
          />
        </div>
      </div>
      <BottomList />
    </div>
  );
};

export default Signup;
