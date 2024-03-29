import React from "react";

const Export = () => {
  return (
    <div className="mt-[40px] mb-[20px] flex gap-2 items-center justify-center">
      <div>
        {" "}
        <div className="text-xs items-center p-1 justify-center rounded bg-red-300 text-red-800">
          Last 28 days
        </div>
      </div>

      <div className="py-2 px-1 rounded bg-white">
        <input type="date" name="start" id="startdate" />
      </div>
      <div className="py-2 px-1 rounded bg-white">
        <input type="date" name="end" id="enddate" />
      </div>
      <div className="flex gap-1 items-center py-2 px-2 rounded bg-black text-white">
        Export
        <svg
          width="11"
          height="12"
          viewBox="0 0 11 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.19531 0.811523V10.8115"
            stroke="white"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.10156 6.71973L5.19247 10.8106L9.28338 6.71973"
            stroke="white"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Export;
