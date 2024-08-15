import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckValidData } from "../utils/CheckValidation";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate()
  const email = useRef(null);
  const password = useRef(null);

  const onClickHandler = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = CheckValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (!message) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/")

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className=" bg-zinc-900 bg-opacity-85 md:w-[32%] w-[90%] md:h-[90%] h-[70%] md:px-16 px-10 md:py-8 py-2 rounded-lg  flex flex-col text-white shadow-2xl">
      <div className=" font-bold text-2xl md:text-4xl text-white">Sign Up</div>
      <form className="w-full text-center" onSubmit={(e) => preventDefault()}>
        <input
          ref={email}
          className="bg-zinc-900 md:mt-8 mt-4 rounded-md  px-4 w-full py-2 md:py-4 font-semibold border-zinc-500  border-[1px]"
          placeholder="Email or phone number"
          type="text"
        />
        <input
          className="bg-zinc-900 md:mt-4 mt-2 rounded-md  px-4 w-full py-2 md:py-4 font-semibold border-zinc-500  border-[1px]"
          placeholder="Username"
          type="text"
        />
        <input
          ref={password}
          className="bg-zinc-900 md:mt-4 mt-2 rounded-md  px-4 py-2 md:py-4 w-full font-semibold border-zinc-500  border-[1px]"
          placeholder="password"
          type="password"
        />
        <div
          onClick={onClickHandler}
          className="bg-red-600 mt-4 rounded-md px-4 py-2 text-center text-white font-semibold cursor-pointer hover:bg-red-700 hover:duration-100"
        >
          Sign Up
        </div>
        {errorMessage ? (
          <p className=" text-red-600 font-bold text-lg mt-3 rounded-md  py-2 w-full  ">
            {errorMessage}
          </p>
        ) : null}
      </form>
      <div className="text-center md:mt-4 md:mb-4 font-semibold md:font-regular text-lg text-zinc-300">
        OR
      </div>
      <div className="bg-red-600 rounded-md px-4 py-2 text-center text-white font-semibold cursor-pointer hover:bg-red-700 hover:duration-100">
        Use a sign-Up code
      </div>
      <div className="text-center mt-4 mb-4 font-semibold text-lg hover:underline cursor-pointer">
        Forgot password?
      </div>
      <div className="font-regular text-zinc-300">
        Already a user?
        <Link to={"/"}>
          <span className="font-semibold hover:underline cursor-pointer text-white">
            {" "}
            Sign In now.
          </span>
        </Link>
      </div>
      <div className="text-sm md:mt-4 text-zinc-500">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <span className="text-blue-800 font-semibold hover:underline cursor-pointer">
          {" "}
          Learn more.
        </span>
      </div>
    </div>
  );
}

export default SignUp;
