"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import Arrow from "@/assets/rightUpArrowGreen.svg";

const UserVisitsData = () => {
  const data = {
    labels: ["S", "M", "T", "W", "T", "F", "S"], // First letter of days of the week
    datasets: [
      {
        label: "Weekdays",
        data: [12, 19, 3, 5, 2, 3, 9], // Example values for each day
        backgroundColor: [
          "rgba(255, 99, 132, 1)", // Red
          "rgba(54, 162, 235, 1)", // Blue
          "rgba(255, 206, 86, 1)", // Yellow
          "rgba(75, 192, 192, 1)", // Green
          "rgba(153, 102, 255, 1)", // Purple
          "rgba(255, 159, 64, 1)", // Orange
          "rgba(199, 199, 199, 1)", // Grey
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(199, 199, 199, 1)",
        ],
        borderWidth: 1,
        barThickness: 12,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
        },
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of X-axis grid lines
        },
      },
      x: {
        title: {
          display: true,
          text: "Day of the Week",
        },
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of X-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-slate-50 ml-[20px] mb-[30px] p-[20px] rounded-md pb-[40px] w-1/3 flex flex-col justify-between">
      <div>
        <div className="flex justify-between">
          <p className="font-semibold">User Visits</p>
          <div className="flex gap-3 text-sm">
            <p>D</p>
            <p className="text-green-300">W</p>
            <p>M</p>
            <p>Y</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className=" text-black my-[10px] text-2xl">567</p>
          <div>
            <div className="flex gap-1 text-xs items-center p-1 justify-center rounded bg-green-100 text-green-800">
              28.5%
              <img src={Arrow.src} alt="" />
            </div>
          </div>
          <p className="text-xs text-gray-500"> from last period</p>
        </div>
      </div>
      <Bar data={data} options={options} height={300} />
    </div>
  );
};

export default UserVisitsData;
