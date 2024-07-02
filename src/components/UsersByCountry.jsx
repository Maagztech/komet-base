"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ExportArrow from "@/assets/downarrow.svg";
import Arrow from "@/assets/rightUpArrowGreen.svg";

const CountryPercentageChart = () => {
  const data = {
    labels: ["India", "United Kingdom", "Canada", "Australia", "Spain"],
    datasets: [
      {
        label: "Percentage",
        data: [70, 55, 80, 60, 50], // Example percentages for each country
        backgroundColor: ["red", "blue", "green", "orange", "purple"], // Fill color for each country's percentage
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        barThickness: 3,
      },
      {
        label: "Remaining",
        data: [30, 45, 20, 40, 50], // Calculate the remaining percentage to reach 100%
        backgroundColor: "black", // Black color for the unfilled portion
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        barThickness: 3,
      },
    ],
  };

  const options = {
    indexAxis: "y", // Use a horizontal bar chart
    scales: {
      x: {
        stacked: true,
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of x-axis grid lines
        },
        ticks: {
          callback: (value) => `${value}%`, // Display percentages on the X-axis
          beginAtZero: true,
          max: 100, // Ensure the scale goes from 0 to 100
        },
      },
      y: {
        stacked: true,
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of Y-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Optionally hide the legend
      },
    },
  };

  return (
    <div className="bg-slate-50 ml-[20px] mb-[30px] p-[20px] rounded-md pb-[40px] w-1/3">
      <p className="font-semibold">Users By Country</p>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <p className=" text-black my-[10px] text-2xl">12.4K</p>
          <div>
            <div className="flex gap-1 text-xs items-center p-1 justify-center rounded bg-green-100 text-green-800">
              28.5%
              <img src={Arrow.src} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-1 items-center py-2 px-2 rounded bg-black text-white">
            Export
            <img src={ExportArrow.src} alt="" />
          </div>
        </div>
      </div>
      <Bar data={data} options={options} height={300} />
    </div>
  );
};

export default CountryPercentageChart;
