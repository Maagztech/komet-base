import React, { useContext, useEffect } from "react";
import { DataContext } from "@/context/dataContext";
import Downarrow from "@/assets/downarrow.svg";
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
    walletAddress,
    groupName,
  } = useContext(DataContext);

  FindDateSpecificUsersCount();
  useEffect(() => {
    FindDateSpecificUsersCount();
  }, [startDate, endDate]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://prod-api.komet.me/user/fetch/user/wallet/sdk/v1"
      );
      setUsers(response.data?.[groupName]);
      setTotalUsers(response.data?.[groupName].length);
    };
    fetchData().catch(console.error);
  }, [groupName, walletAddress]);

  const filterDataByDate = (data, start, end) => {
    return data.filter((item) => {
      const createdAt = new Date(item.createdAt);
      const startDate = new Date(start);
      const endDate = new Date(end);
      return createdAt >= startDate && createdAt <= endDate;
    });
  };

  const convertToCSV = (data) => {
    if (data.length === 0) {
      return "";
    }
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map((obj) =>
      Object.values(obj)
        .map((value) =>
          Array.isArray(value) ? `"${value.join(";")}"` : `"${value}"`
        )
        .join(",")
    );
    return [headers, ...rows].join("\n");
  };

  const downloadCSV = () => {
    const filteredData = filterDataByDate(users, startDate, endDate);
    const csvData = convertToCSV(filteredData);
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="mt-[40px] mb-[20px] flex gap-2 items-center justify-center">
      {/* <div>
        {" "}
        <div className="text-xs items-center p-1 justify-center rounded bg-red-300 text-red-800">
          Last 28 days
        </div>
      </div> */}

      <div className="py-2 px-1 flex items-center relative">
        <p className="font-bold text-[12px] absolute top-0 left-[10px]">
          Start Date :
        </p>
        <input
          className="bg-white rounded py-2 px-1"
          type="date"
          name="start"
          id="startdate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="py-2 px-1 flex relative">
        <p className="font-bold text-[12px] absolute top-0 left-[10px]">
          End Date :
        </p>
        <input
          className="bg-white rounded py-2 px-1"
          type="date"
          name="end"
          id="enddate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div
        onClick={downloadCSV}
        className="flex gap-1 items-center py-2 px-2 rounded bg-black text-white cursor-pointer"
      >
        Export
        <img src={Downarrow.src} alt="" />
      </div>
    </div>
  );
};

export default Export;
