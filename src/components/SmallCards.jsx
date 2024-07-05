"use client";
import React, { useContext } from "react";
import { DataContext } from "@/context/dataContext";
const SmallCards = () => {
  const { totalUsers, givenDateUsers } = useContext(DataContext);

  return (
    <div className="flex justify-start ml-[30px] overflow-auto">
      <div className="flex bg-white p-[24px] rounded-md mr-[16px] min-w-[261.75px]">
        <div>
          <p
            className="whitespace-nowrap text-[#93A3AB] text-[13px] leading-[16px] font-medium mb-[8px]"
            style={{ letterSpacing: "-2%" }}
          >
            Wallets created
          </p>
          <h5 className="font-bold text-[16px] leading-[24px]">{totalUsers}</h5>
        </div>
        <div className="flex items-end ml-[30px]">
          <div style={{ letterSpacing: "-2%" }} className=" leading-[16px] font-medium whitespace-nowrap bg-[#E3F4E3] text-[11.58px] px-2 flex items-center text-[#65C565] py-0 rounded-full">
            All Time
          </div>
        </div>
      </div>
      <div className="flex bg-white p-[24px] rounded-md mr-[16px] min-w-[261.75px]">
        <div>
          <p
            className="whitespace-nowrap text-[#93A3AB] text-[13px] leading-[16px] font-medium mb-[8px]"
            style={{ letterSpacing: "-2%" }}
          >
            Transaction Volume
          </p>
          <h5 className="font-bold text-[16px] leading-[24px]">$340,716</h5>
        </div>
        <div className="flex items-end ml-[30px]">
          <div style={{ letterSpacing: "-2%" }} className=" leading-[16px] font-medium whitespace-nowrap bg-[#E3F4E3] text-[11.58px] px-2 flex items-center text-[#65C565] py-0 rounded-full">
            All Time
          </div>
        </div>
      </div>
      <div className="flex bg-white p-[24px] rounded-md mr-[16px] min-w-[261.75px]">
        <div>
          <p
            className="whitespace-nowrap text-[#93A3AB] text-[13px] leading-[16px] font-medium mb-[8px]"
            style={{ letterSpacing: "-2%" }}
          >
            Net Worth
          </p>
          <h5 className="font-bold text-[16px] leading-[24px]">$33,789,90</h5>
        </div>
      </div>
      <div className="flex bg-white p-[24px] rounded-md mr-[16px] min-w-[261.75px]">
        <div>
          <p
            className="whitespace-nowrap text-[#93A3AB] text-[13px] leading-[16px] font-medium mb-[8px]"
            style={{ letterSpacing: "-2%" }}
          >
            Active User
          </p>
          <h5 className="font-bold text-[16px] leading-[24px]">340,716</h5>
        </div>
      </div>

    </div>
  );
};

export default SmallCards;
