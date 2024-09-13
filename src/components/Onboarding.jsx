"use client";

import Komet from "@/assets/kometBaseLogo.svg";
import GoogleLoginIcon from "@/assets/kometButton.svg";
import Power from "@/assets/poweredKomet.svg";
import Bg from "@/assets/signInBg.svg";
import { UserContext } from "@/context/userContext";
import { GoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
const Onboarding = () => {
  const { getEmail, userData } = useContext(UserContext);

  return (
    <div className="fixed w-screen h-screen inset-0 bg-[#00000066] bg-opacity-40 flex justify-center items-center z-[2000]">
      {!userData?.address ? (
        <div className="bg-white  flex justify-center items-center w-[918px] h-[585px] rounded-[10px]">
          <div className="relative border border-[#C9C5EB80] rounded-[12px] pt-[40px] pb-[32px] flex flex-col items-center">
            <img src={Komet.src} alt="" className="w-[182px]" />
            <img src={Bg.src} alt="" className="absolute top-[132px]" />
            <div className="relative h-[42px] w-[311px] mt-[126.1px] mb-[70px] mx-[44.5px]">
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
                className="opacity-100 rounded-[8px] flex flex-row justify-center items-center h-[42px] absolute top-[3px]"
              >
                <img src={GoogleLoginIcon.src} className="w-[100%] h-[100%]" />
              </button>
            </div>
            <img src={Power.src} alt="" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Onboarding;
