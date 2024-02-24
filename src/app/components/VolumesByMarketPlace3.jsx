"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const VolumesByMarketPlace3 = () => {
  const data = {
    labels: [
      "Jan 7",
      "Jan 14",
      "Jan 21",
      "Jan 28",
      "Feb 4",
      "Feb 11",
      "Feb 18",
    ],
    datasets: [
      {
        label: "OpenSea",
        data: [20, 40, 60, 80, 60, 40, 20],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Light blue fill
        borderColor: "rgb(54, 162, 235)", // Blue line
        tension: 0.4,
      },
      {
        label: "Komet",
        data: [40, 60, 80, 60, 40, 60, 80],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Light red fill
        borderColor: "rgb(255, 99, 132)", // Red line
        tension: 0.4,
      },
      {
        label: "MagicEden",
        data: [60, 80, 40, 20, 80, 60, 40],
        fill: true,
        backgroundColor: "rgba(255, 206, 86, 0.2)", // Light yellow fill
        borderColor: "rgb(255, 206, 86)", // Yellow line
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Volume USD",
          color: "#000000",
          font: {
            size: 16,
          },
        },
        ticks: {
          callback: (value) => `${value}%`,
          beginAtZero: true,
          max: 100,
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="bg-slate-50 ml-[20px] mb-[30px] p-[20px] rounded-md pb-[40px] w-2/3">
      <p className="font-semibold">Volumes by Marketplace $</p>
      <p className="text-sm text-gray-400 mb-[10px]">
        <span className="text-green-700">+3,4% </span>Past Month
      </p>
      <Line data={data} options={options} />
    </div>
  );
};

export default VolumesByMarketPlace3;
