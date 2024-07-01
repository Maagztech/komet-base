"use client";

import React, { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { UserContext } from "@/context/userContext";
import GoogleLoginIcon from "@/assets/kometButton.svg";

const Onboarding = () => {
  const { getEmail, userData } = useContext(UserContext);

  return (
    <>
      {!userData?.address ? (
        <div className="bg-white w-screen h-screen flex justify-center items-center">
          <div className="relative h-[42px] w-[320px]">
            <div
              style={{ zIndex: 3 }}
              className="opacity-0 absolute top-0 right-0 cursor-pointer"
            >
              <GoogleLogin
                width="300px"
                onSuccess={(credentialResponse) => {
                  getEmail(credentialResponse);
                  localStorage.setItem(
                    "token",
                    credentialResponse.credential?.toString() || ""
                  );
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              style={{ zIndex: 1 }}
              className="opacity-100 rounded-[8px] flex flex-row justify-center items-center h-[42px] absolute top-[3px] left-[5px]"
            >
              <img src={GoogleLoginIcon.src} className="w-[100%] h-[100%]" />
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Onboarding;
