"use client";

import Bharatbox from "@/assets/Bharatbox.jpg";
import { DataContext } from "@/context/dataContext";
import { useContext } from "react";

const ConnectWallet = () => {
  const { showData } = useContext(DataContext);

  return (
    <div>
      {showData && (
        <div>
          <img
            src={Bharatbox.src}
            alt=""
            className="ml-[30px] my-2 h-[100px] w-[150px] object-cover object-center"
          />
          <p
            className="mt-[10px] mb-[10px] ml-[30px] text-[20px] leading-[24px] font-medium"
            style={{ letterSpacing: "-3%" }}
          >
            Dashboard
          </p>
          {/* <Export /> */}
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
