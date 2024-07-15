"use client";
import React, { useContext } from "react";
import { DataContext } from "@/context/dataContext";
const SmallCards = () => {
  const { totalUsers, givenDateUsers, h24User } = useContext(DataContext);

  return (
    <div className="flex justify-start ml-[30px] overflow-auto mb-[24px]">
      <div className="bg-white p-[24px] rounded-md mr-[16px] min-w-[261.75px]">
        <p
          className=" text-[#93A3AB] text-[13px] leading-[16px] font-medium mb-[8px]"
          style={{ letterSpacing: "-2%" }}
        >
          Wallets Created
        </p>
        <div className="flex items-center justify-between">
          <h5 className="font-bold text-[16px] leading-[24px]">
            {totalUsers.toLocaleString()}
          </h5>
          <div
            style={{ letterSpacing: "-2%" }}
            className="leading-[16px] font-medium bg-[#E3F4E3] text-[11.58px] px-[5px] text-[#65C565] py-[4px] rounded-full"
          >
            All Time
          </div>
        </div>
      </div>
      <div className="bg-white p-[24px] rounded-md mr-[16px] min-w-[261.75px]">
        <p
          className=" text-[#93A3AB] text-[13px] leading-[16px] font-medium mb-[8px]"
          style={{ letterSpacing: "-2%" }}
        >
          Transaction Volume
        </p>
        <div className="flex items-center justify-between">
          <h5 className="font-bold text-[16px] leading-[24px]">$340,716</h5>
          <div
            style={{ letterSpacing: "-2%" }}
            className="leading-[16px] font-medium bg-[#E3F4E3] text-[11.58px] px-[5px] text-[#65C565] py-[4px] rounded-full"
          >
            All Time
          </div>
        </div>
      </div>
      <div className="bg-white p-[24px] rounded-md mr-[16px] min-w-[261.75px]">
        <p
          className=" text-[#93A3AB] text-[13px] leading-[16px] font-medium mb-[8px]"
          style={{ letterSpacing: "-2%" }}
        >
          Net Worth
        </p>
        <div className="flex items-center justify-between">
          <h5 className="font-bold text-[16px] leading-[24px]">$340,716</h5>
          <div
            style={{ letterSpacing: "-2%" }}
            className="leading-[16px] font-medium bg-[#E3F4E3] text-[11.58px] px-[5px] text-[#65C565] py-[4px] rounded-full"
          >
            All Time
          </div>
        </div>
      </div>
      <div className="bg-white p-[24px] rounded-md mr-[16px] min-w-[261.75px]">
        <p
          className=" text-[#93A3AB] text-[13px] leading-[16px] font-medium mb-[8px]"
          style={{ letterSpacing: "-2%" }}
        >
          Last 24 hour users
        </p>
        <div className="flex items-center justify-between">
          <h5 className="font-bold text-[16px] leading-[24px]">
            {h24User.toLocaleString()}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SmallCards;
