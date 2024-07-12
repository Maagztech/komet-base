"use client";
import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const TotalMintData = () => {
  const chartRef = useRef(null);

  const cryptoTokens = ["BTC", "APT", "ETH", "XRP"]; // Example crypto token names

  const gradient = document.createElement("canvas").getContext("2d");
  const gradientFill = gradient.createLinearGradient(0, 0, 400, 0);
  gradientFill.addColorStop(0, "#F9654F");
  gradientFill.addColorStop(1, "#FF26E9");

  const data = {
    labels: cryptoTokens,
    datasets: [
      {
        label: "Mints",
        data: [12, 19, 3, 5], // Example values for each token
        backgroundColor: ["#00C2FF", gradientFill, "#FFD53D", "#FF8417"],
        borderColor: "rgba(0, 0, 0, 0)", // No border color
        borderWidth: 1,
        barThickness: 16,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        border: {
          display: false,
        },
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of Y-axis grid lines
        },
        ticks: {
          callback: function (value) {
            return "$ " + value + "k"; // Append 'k' to the y-axis values
          },
          padding: 10,
        },
      },
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of X-axis grid lines
        },
        border: {
          display: false,
        },
        ticks:{
          padding: 10,
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white ml-[30px] mb-[40px] p-[28px] rounded-[10px] pb-[60px] w-1/3 flex flex-col justify-between max-h-[450px]">
      <p className="font-semibold mb-[8px]">Net Worth by Token Type</p>
      <p className="text-[13px] text-[#93A3AB] leading-[16px] font-medium mb-[25px]">
        <span className="text-[#65C565] font-semibold">+3,4% </span>from Last
        Period
      </p>
      <Bar data={data} options={options} ref={chartRef} height={300} />
    </div>
  );
};

export default TotalMintData;
