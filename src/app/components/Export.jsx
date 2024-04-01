import React, { useContext, useEffect } from "react";
import { DataContext } from "@/context/data";
import axios from "axios";
const Export = () => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    setUsers,
    users,
    setTotalUsers,
    FindDateSpecificUsersCount,
  } = useContext(DataContext);
  useEffect(() => {
    FindDateSpecificUsersCount();
  }, [startDate, endDate]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://prod-api.komet.me/user/fetch/user/wallet/sdk/v1"
      );

      setUsers(response.data?.["Bharatbox"]);
      setTotalUsers(response.data?.["Bharatbox"].length);
    };
    fetchData().catch(console.error);
  }, []);

  // const filterDataByDate = (data, start, end) => {
  //   return data.filter((item) => {
  //     const createdAt = new Date(item.createdAt);
  //     const startDate = new Date(start);
  //     const endDate = new Date(end);
  //     return createdAt >= startDate && createdAt <= endDate;
  //   });
  // };

  // const convertToCSV = (data) => {
  //   const headers = Object.keys(data[0]).join(",");
  //   const rows = data.map((obj) =>
  //     Object.values(obj)
  //       .map((value) =>
  //         Array.isArray(value) ? `"${value.join(";")}"` : `"${value}"`
  //       )
  //       .join(",")
  //   );
  //   return [headers, ...rows].join("\n");
  // };

  // const downloadCSV = () => {
  //   const filteredData = filterDataByDate(users, startDate, endDate);
  //   const csvData = convertToCSV(filteredData);
  //   const blob = new Blob([csvData], { type: "text/csv" });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "data.csv";
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // };

  return (
    <div className="mt-[40px] mb-[20px] flex gap-2 items-center justify-center">
      {/* <div>
        {" "}
        <div className="text-xs items-center p-1 justify-center rounded bg-red-300 text-red-800">
          Last 28 days
        </div>
      </div> */}

      <div className="py-2 px-1 rounded bg-white">
        <input
          type="date"
          name="start"
          id="startdate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="py-2 px-1 rounded bg-white">
        <input
          type="date"
          name="end"
          id="enddate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div
        // onClick={downloadCSV}
        className="flex gap-1 items-center py-2 px-2 rounded bg-black text-white cursor-pointer"
      >
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
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.10156 6.71973L5.19247 10.8106L9.28338 6.71973"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Export;
