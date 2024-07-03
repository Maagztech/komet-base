"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const VolumesByMarketPlace4 = () => {
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
        label: "Komet",
        data: [20, 30, 40, 50, 60, 70, 80],
        backgroundColor: "red",
        barThickness: 3,
      },
      {
        label: "MagicEden",
        data: [50, 60, 70, 80, 90, 100, 110],
        backgroundColor: "blue",
        barThickness: 3,
      },
      {
        label: "OpenSea",
        data: [30, 40, 50, 60, 70, 80, 90],
        backgroundColor: "cyan",
        barThickness: 3,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of Y-axis grid lines
        },
      },
      y: {
        stacked: true,
        ticks: {
          callback: (value) => `${value}K`,
          beginAtZero: true,
        },
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of Y-axis grid lines
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
    <div className="bg-slate-50 ml-[20px] mb-[30px] p-[20px] rounded-md pb-[40px] w-1/3">
      <p className="font-semibold">Volumes by Marketplace $</p>
      <p className="text-sm text-gray-400 mb-[10px]">
        <span className="text-green-700">+3,4% </span>Past Month
      </p>
      <Bar data={data} options={options} height={300} />
    </div>
  );
};

export default VolumesByMarketPlace4;
