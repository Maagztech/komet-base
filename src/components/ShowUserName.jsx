"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { DataContext } from "@/context/dataContext";
import Export from "./Export";
import { UserContext } from "@/context/userContext";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
const ConnectWallet = () => {
  const { showData } = useContext(DataContext);
  const { userData, logoutFromKomet } = useContext(UserContext);
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="w-full flex flex-col items-end justify-end bg-white relative">
        {!userData?.address ? (
          <button
            onClick={() => router.push("/")}
            className="gradientBackground flex items-center gap-2 justify-center h-[33px] text-[14px] leading-[16.71px] text-white font-bold my-3 p-[8px] rounded mr-[40px]"
          >
            Connect Wallet
          </button>
        ) : (
          <>
            <button
              className="gradientBackground flex items-baseline gap-2 justify-center h-[33px] text-[14px] leading-[16.71px] text-white font-bold my-3 p-[8px] rounded mr-[40px]"
              onClick={(e) => setShow(!show)}
            >
              <FaUser />
              <p>
                {userData.username || String(userData.email).substring(0, 12)}{" "}
              </p>
            </button>
          </>
        )}
      </div>
      {showData && (
        <div className="flex justify-between">
          <p
            className="mt-[40px] mb-[20px] ml-[30px] text-[20px] font-medium"
            style={{ letterSpacing: "-3%" }}
          >
            Dashboard | <span className="gradientText">Launch_</span>
          </p>
          <Export />
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
