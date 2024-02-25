import React from "react";

const SmallCards = () => {
  return (
    <div className="flex justify-start ml-[20px]">
      <div className="flex bg-slate-50 p-[15px] rounded-md mr-[30px]">
        <div>
          <p className="text-gray-500">Total Sales Volume</p>
          <h5 className="font-bold">$33,789,90</h5>
        </div>
        <div className="flex items-end ml-[20px]">
          <div className="bg-green-200 px-2 flex items-center text-green-700 py-0 rounded-full">
            All Time
          </div>
        </div>
      </div>
      <div className="flex bg-slate-50 p-[15px] rounded-md  mr-[30px]">
        <div>
          <p className="text-gray-500">Total Sales</p>
          <h5 className="font-bold">340,716</h5>
        </div>
        <div className="flex  items-end ml-[20px]">
          <div className="bg-green-200 px-2 flex items-center text-green-700 py-0 rounded-full">
            All Time
          </div>
        </div>
      </div>
      <div className="flex bg-slate-50 p-[15px] rounded-md mr-[30px]">
        <div>
          <p className="text-gray-500">Total Sale Volume</p>
          <h5 className="font-bold">$33,789,90</h5>
        </div>
        <div className="flex  items-end ml-[20px]">
          <div className="bg-red-200 px-2 text-red-700 py-0 rounded-full">
            24h Stats
          </div>
        </div>
      </div>
      <div className="flex bg-slate-50 p-[15px] rounded-md  mr-[30px]">
        <div>
          <p className="text-gray-500">Total Sales</p>
          <h5 className="font-bold">340,716</h5>
        </div>
        <div className="flex  items-end ml-[20px]">
          <div className="bg-red-200 px-2 flex items-center text-red-700 py-0 rounded-full">
            24h Stats
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCards;
