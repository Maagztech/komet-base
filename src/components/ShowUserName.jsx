"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { DataContext } from "@/context/dataContext";
import Export from "./Export";
import { UserContext } from "@/context/userContext";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { IoLogOut } from "react-icons/io5";

const ConnectWallet = () => {
  const { showData } = useContext(DataContext);
  const { userData, logoutFromKomet } = useContext(UserContext);
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="w-full flex flex-col items-end justify-end bg-slate-50 relative">
        {!userData?.address ? (
          <button
            onClick={() => router.push("/")}
            className="bg-red-500 hover:bg-red-700 text-white font-bold my-3 py-2 px-4 rounded mr-[15px]"
          >
            Sign In
          </button>
        ) : (
          <>
            <button
              className="bg-red-500 flex items-center gap-2 justify-center hover:bg-red-700 text-white font-bold my-3 py-2 px-4 rounded mr-[15px]"
              onClick={(e) => setShow(!show)}
            >
              {userData.username || String(userData.email).substring(0, 12)}{" "}
              {!show ? (
                <SlArrowDown size={15} className="font-bold" />
              ) : (
                <SlArrowUp size={15} className="font-bold" />
              )}
            </button>
            {show && (
              <button
                onClick={(e) => {
                  logoutFromKomet();
                  setShow(!show);
                }}
                className="absolute top-[80%] right-[15px] bg-red-500 flex items-center gap-2 justify-center hover:bg-red-700 text-white font-bold my-3 py-2 px-4 rounded"
              >
                Logout <IoLogOut size={15} className="font-bold" />
              </button>
            )}
          </>
        )}
      </div>
      {showData && (
        <div className="flex justify-between">
          <p className="mt-[40px] mb-[20px] ml-[20px]">
            Dashboard | <span className="text-red-700">Launch_</span>
          </p>
          <Export />
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
